const Restaurant = require('../model/Restaurant');

const User = require('../model/User');

module.exports = {
    async store(req, res) {

        const { user } = req.headers;

        const loggedUser = await User.findById(user);

        if(!loggedUser){
            return res.status(400).json({ error: 'User not exists'});
        };

        if(!loggedUser.admin){
            return res.status(400).json({ error: 'User not administrator'});
        };

        // Aqui deve limpar os votos
        //await Restaurant.updateMany({}, {$set: {polls: []}})

        return res.json({ Restaurant});
    }
};