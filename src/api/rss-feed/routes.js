const express = require('express');
const router = express.Router();
const rssFeedController = require('./controllers');

router.get('/', rssFeedController.getRssFeed);

module.exports = router;