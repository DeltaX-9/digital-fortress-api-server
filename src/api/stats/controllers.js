const mongoose = require('mongoose');
const Model = mongoose.model('stats', {}, 'stats');


module.exports.getStats = async(req,res, next) => {
    try {
        const stats_id = req.params.id;
        const data = await Model.findById(stats_id);
        if (!data) {
            return res.status(404).send('Not Found');
        }
        return res.status(200).send(data);
    } catch (error) {
        next(error);
    }
}