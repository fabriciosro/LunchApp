const Poll = require('../model/Poll');

const User = require('../model/User');

module.exports = {
    async store(req, res){
        const reqPoll = req.body;

        const loggedUser = await User.findOne({ _id: reqPoll.idUser });

        const pollExists =  await Poll.findOne({
            $and: [
                { nameUser: loggedUser.name  },
                { idRestaurant: reqPoll.idRestaurant }
            ]
        });
        
        if(pollExists){
            console.log("Voto ja existente!");
            return res.json(pollExists);            
        };

        const poll = await Poll.create({ 
            nameUser: loggedUser.name,
            idRestaurant: reqPoll.idRestaurant
        });

        return res.json(poll);
    }
};
