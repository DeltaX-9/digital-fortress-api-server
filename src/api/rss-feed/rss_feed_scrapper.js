const axios = require('axios');
const xml2js = require('xml2js');
const cheerio = require('cheerio');

// Function to clean HTML tags from a string
const cleanHtml = (text) => {
    const $ = cheerio.load(text);
    return $.text();
};

// Function to clean the RSS feed and return JSON
const santizeRssFeed = async (xmlData) => {
    // Convert XML to JSON
    const parser = new xml2js.Parser({ explicitArray: false });
    const jsonData = await parser.parseStringPromise(xmlData);

    // Traverse and clean any HTML tags from the JSON
    const cleanedData = JSON.parse(JSON.stringify(jsonData), (key, value) => {
        // Check if the value is a string and contains HTML
        if (typeof value === 'string') {
            return cleanHtml(value); // Remove HTML tags
        }
        return value; // Return other values as-is
    });

    return cleanedData['rss']['channel']['item'];
};

module.exports.getHackerNewsFeed = async (event) => {
    try {
        // Fetch the XML feed
        const { data: xmlData } = await axios.get("https://feeds.feedburner.com/TheHackersNews?format=xml");
        return await santizeRssFeed(xmlData);

    } catch (error) {
        console.error("Error fetching or processing the feed:", error);
        throw error;
    }
};


module.exports.getGrahamCluley = async (event) => {
    try {
        // Fetch the XML feed and force Axios to treat it as text
        const { data: xmlData } = await axios.get("https://grahamcluley.com/feed/").then((response) => {
            return response.data;
        }).catch((error) => {
            console.error("Error fetching the feed:", error.message);
            throw error;
        });



        // Sanitize and return the cleaned JSON
        const sanitizedData = await santizeRssFeed(xmlData);
        return sanitizedData;

    } catch (error) {
        console.error("Error fetching or processing the feed:", error);
        throw error;
    }
};