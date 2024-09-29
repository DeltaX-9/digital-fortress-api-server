const express = require('express');
const router = express.Router();
const controllers  = require('./controllers');


router.post("/ai", controllers.searchExaSearch);

router.get("/health", (req,res) => {
    res.send("Search API is working");
});

router.post("/index", controllers.searchElasticSearch);



module.exports = router;
