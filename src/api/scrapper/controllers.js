const apifyService = require('./apify_service');


module.exports.getScreenShot = async(req,res) => {
    try {
        const { url } = req.query;
        const { defaultDatasetId } = await apifyService.actor('apify/screenshot-url').call({
            "delay": 5,
            "proxy": {
              "useApifyProxy": true
            },
            "scrollToBottom": false,
            "urls": [
              {
                "url": url
              }
            ],
            "waitUntil": "networkidle0",
            "waitUntilNetworkIdleAfterScroll": false,
            "format": "png",
            "viewportWidth": 1280,
            "delayAfterScrolling": 2500,
            "waitUntilNetworkIdleAfterScrollTimeout": 30000,
            "selectorsToHide": ""
          });

          // Lists items from the Actor's dataset.
        const { items } = await apifyService.dataset("kOTtw0G5dt97WspP5").listItems();
        console.log(items);
        return res.send(items);

    } catch (error) {
        throw error;
    }
}