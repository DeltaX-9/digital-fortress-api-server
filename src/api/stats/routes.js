const express = require('express');
const router = express.Router();

const statsController = require('./controllers');

router.get('/:id', statsController.getStats);

module.exports = router;