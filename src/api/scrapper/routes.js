const express = require('express');
const router = express.Router();

const scrapperController = require('./controllers');

router.get('/screenshot', scrapperController.getScreenShot);

module.exports = router;