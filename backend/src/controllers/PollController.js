const restaurant = require('../model/Restaurant');

const user = require('../model/User');

module.exports = {
    store(req, res) {

        console.log(req.params.restaurantId);

        return res.json({ ok: true});
    }
};