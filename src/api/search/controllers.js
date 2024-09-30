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


const escapeElasticQuery = (query) => {
    return query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
};

module.exports.searchElasticSearch = async (req, res) => {
    const { search_query, skip, size, type } = req.body;
    let data = [];
    let hits = 0;
    try {
       
        if (!type || type === "scan" || type===""){
            const result = await elasticSearch.search({
                index: "cyber_threat_intel",
                query: {
                    query_string: {
                        query: escapeElasticQuery(search_query) ? search_query != "*" : search_query,  // Escaped search input
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
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};
