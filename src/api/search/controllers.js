const Exa = require("exa-js").default;
const elasticSearch = require("../../services/es");

module.exports.searchExaSearch = async (req, res) => {
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
        const result = await exa.searchAndContents( query, {
            category,
            type,
            useAutoprompt: use_autoprompt,
            numResults: num_results,
            summary: {
                query: "In the context of Cyber Threat Intelligence and Cyber Threat News and Research, summarize the content."
            },
            //   excludeDomains: ["en.wikipedia.org"],
            startPublishedDate: start_published_date,
            endPublishedDate: end_published_date,
            livecrawl: "always",
            text: true,
            // includeText: ["cyber","attack"]
        });

        return res.status(200).json(result);
    } catch (error) {
        throw error;
    }
}


module.exports.searchElasticSearch = async (req, res) => {
    const { search_query, skip, size } = req.body;
    
    try {
        const result = await elasticSearch.search({
            index: "cyber_threat_intel",
            query: {
                query_string: {
                    query: search_query,  // Your search input
                    default_field: "*"    // This will search across all fields
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
        
        let data = result.hits.hits.map((item) => {
            return item._source;
        });

        // Return search results to frontend
        return res.json({
            total_hits: result.hits.total.value,
            data: data
        });
    } catch (error) {
        throw error;
    }
}