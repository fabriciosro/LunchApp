const Restaurant = require('../model/Restaurant');

module.exports = {
    async store(req, res){
        const reqRestaurant = req.body;

        console.log(reqRestaurant);

        const restExists = await Restaurant.findOne({ name: reqRestaurant.name });

        if(restExists){
            console.log("Restaurante existente!");
            return res.json(restExists);            
        };

        console.log(restExists);

        const restaurant = await Restaurant.create({ 
            name: reqRestaurant.name,
            site: reqRestaurant.site,            
            alreadyChosen: reqRestaurant.alreadyChosen
        });

        console.log(restaurant);

        return res.json(restaurant);
    }
};