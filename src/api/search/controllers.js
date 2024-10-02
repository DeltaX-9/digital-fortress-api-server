const Exa = require("exa-js").default;
const elasticSearch = require("../../services/es");
const logger = require("../../services/logger");

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
       
        if (!type || type === "scan" || type===""){
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
        }else if(type === "index"){
            console.log("Hello2")

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
