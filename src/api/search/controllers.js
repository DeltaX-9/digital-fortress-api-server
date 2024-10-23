const Exa = require("exa-js").default;
const elasticSearch = require("../../services/es");
const logger = require("../../services/logger");
const moment = require("moment");

module.exports.searchExaSearch = async (req, res, next) => {
    try {
        const {
            query,
            start_published_date,
            end_published_date,
            type,
            use_autoprompt,
            category,
            num_results
        } = req.body;

        const exa = new Exa(process.env.EXA_API.split(",")[Math.floor(Math.random() * process.env.EXA_API.split(",").length)]);
        const result = await exa.searchAndContents(query, {
            category,
            type: "neural",
            useAutoprompt: use_autoprompt,
            numResults: num_results,
            summary: {
                query: "In the context of Cyber Threat Intelligence and Cyber Threat News and Research, summarize the content."
            },
            startPublishedDate: start_published_date,
            endPublishedDate: end_published_date,
            livecrawl: "always",
            text: true,
        });

        return res.status(200).json(result);
    } catch (error) {
        next(error);
    }
}


const escapeElasticQuery = (query) => {
    return query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

module.exports.searchElasticSearch = async (req, res, next) => {
    const { search_query, skip, size, type } = req.body;
    let data = [];
    let hits = 0;
    try {
        if (!type || type === "scan" || type === "") {
            const result = await elasticSearch.search({
                index: "cyber_threat_intel",
                query: {
                    query_string: {
                        query: search_query,  // Escaped search input
                        default_field: "*"    // Search across all fields
                    }
                },
                sort: [{
                    "created_at": {
                        "order": "desc"
                    }
                }],
                size: size,
                from: skip,
            });

            data = result.hits.hits.map((item) => item._source);
            hits = result.hits.total.value;
        } else if (type === "index") {
            const result = await elasticSearch.search({
                index: "cyber_threat_intel",
                query: {
                    match: {
                        "id": search_query
                    }
                },
                sort: [{
                    "created_at": {
                        "order": "desc"
                    }
                }],
                size: size,
                from: skip,
            });

            data = result.hits.hits.map((item) => item._source);
            hits = result.hits.total.value;
        }
        // Return search results to frontend
        return res.json({
            total_hits: hits,
            data: data
        });
    } catch (error) {
        // throw error;
        next(error);
    }
};



module.exports.searchElasticSearchV2 = async (req, res, next) => {
    const { search_query, skip, size, type } = req.body;
    const currentMonth = moment().format('YYYY-MM');
    let data = [];
    let hits = 0;
    let remainingSize = size;
    let currentSkip = skip;
    let elasticSearchIndices = null;
    try {
        const searchAcrossIndices = async (indices, query, sort, size, from, highlight) => {
            const result = await elasticSearch.search({
                index: indices,
                query: query,
                sort: sort,
                size: size,
                from: from,
                highlight: highlight
            });
            return result;
        };

        const processResults = (result) => {
            data = [...data, ...result.hits.hits.map((item) => item._source)];
            hits += result.hits.total.value;
            remainingSize -= result.hits.hits.length;
            currentSkip = Math.max(0, currentSkip - result.hits.total.value);
        };

        let query;
        let sort = [{ "created_at": { "order": "desc" } }];
        let highlight;
        if (type === "index") {
            query = { match: { "id": search_query } };
            elasticSearchIndices = req.body.index
        } else if (type === "scan" || type === "") {
            query = { query_string: { query: search_query, default_field: "*" } };
        } else if (type === "query") {
            query = req.body.query;
            sort = req.body.sort;
            highlight = req.body.highlight;
            remainingSize = req.body.size;
            currentSkip = req.body.from;


        } else {
            // Add more conditions here if needed
            query = { query_string: { query: search_query, default_field: "*" } }; // Default case
        }


        // Search in current month's index
        let currentIndex = `scraped-threats-data-${currentMonth}`;
        let result = await searchAcrossIndices(elasticSearchIndices ? elasticSearchIndices : currentIndex, query, sort, remainingSize, currentSkip);
        processResults(result);

        // If we need more results, search in previous months
        let previousMonth = moment(currentMonth).subtract(1, 'months');
        while (remainingSize > 0 && previousMonth.isSameOrAfter('2024-04', 'month')) {
            currentIndex = `scraped-threats-data-${previousMonth.format('YYYY-MM')}`;
            result = await searchAcrossIndices(currentIndex, query, sort, remainingSize, currentSkip);
            processResults(result);
            previousMonth.subtract(1, 'months');
        }

        // Return search results to frontend
        return res.json({
            total_hits: hits,
            data: data
        });
    } catch (error) {
        next(error);
    }
};

module.exports.searchElasticSearchV3 = async (req, res, next) => {
    try {
        const { search_query, skip, size, type } = req.body;

    } catch (error) {
        next(error);
    }
}