const Restaurant = require('../model/Restaurant');
const User = require('../model/User');

module.exports = {

    async index(req, res){
        const user = req.headers;
    
        const restaurants = await Restaurant.find({
            $and: [
                { alreadyChosen : false }
            ],
        })

        return res.json(restaurants);
    },

    async store(req, res){
        const reqRestaurant = req.body;

        const restExists = await Restaurant.findOne({ name: reqRestaurant.name });

        if(restExists){
            // await Restaurant.updateOne({_id: restExists._id}, {$set: {chosenDay: false}})
            console.log("Restaurante existente!");
            return res.json(restExists);            
        };

        const restaurant = await Restaurant.create({ 
            name: reqRestaurant.name,
            site: reqRestaurant.site,            
            alreadyChosen: reqRestaurant.alreadyChosen,
            chosenDay: reqRestaurant.chosenDay
        });

        return res.json(restaurant);
    }
};