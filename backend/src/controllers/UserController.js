const axios = require('axios');

const User = require('../model/User');

module.exports = {
    async store(req, res){
        console.log(req.body);

        //const { username } = req.body;

        const reqUser = req.body;

        console.log(reqUser);

        const userExists = await User.findOne({ username: reqUser.username });

        console.log(userExists);

        if(userExists){
            console.log("usuario existente!");
            return res.json(userExists);            
        };
        //const response =  await axios.get(`https://api.github.com/users/${username}`);

        //const { name, bio, avatar_url: avatar } = response.data;

        const user = await User.create({ 
            name: reqUser.name,
            username: reqUser.username,            
            password: reqUser.password,
            email: reqUser.email,
            admin: reqUser.admin
        });
        //console.log(response.data);
        
        //return res.json({ ok: true });
        return res.json(user);
    }
};