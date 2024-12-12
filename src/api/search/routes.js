const express = require('express');
const router = express.Router();
const controllers  = require('./controllers');


router.post("/ai", controllers.searchExaSearch);

router.get("/health", (req,res) => {
    res.send("Search API is working");
});

router.post("/index/v2", controllers.searchElasticSearchV2);

router.post("/index/v3", controllers.searchElasticSearchV3);

router.post("/index", controllers.searchElasticSearch);



module.exports = router;
