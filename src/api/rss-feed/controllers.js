const logger = require("../../services/logger");
const rssFeedService = require('./rss_feed_scrapper');



module.exports.getRssFeed = async (req, res) => {
  try {
    let { source } = req.query;
    source = source.split(',');
    let feed = [];
    // Fetch the RSS feed for each source
    for (const src of source) {
        if (src === 'hacker-news' || src === '') {
            feed.push(...await rssFeedService.getHackerNewsFeed());
        }
        if (src === 'graham-cluley') {
            feed.push(...await rssFeedService.getGrahamCluley());
        }
    }

    return res.status(200).json(feed);
  } catch (error) {
    throw error;
  }
}