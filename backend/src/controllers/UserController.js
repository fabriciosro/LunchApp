const axios = require('axios');

const User = require('../model/User');

module.exports = {
    async index(req, res){
        const _user = req.headers;    

        const user =  await User.findOne({ username: _user.user });

        return res.json(user);
    },

    async store(req, res){

        const reqUser = req.body;
        const userExists = await User.findOne({ username: reqUser.username });

        if(userExists){
            //await User.updateOne({_id: userExists._id}, {$set: {voted: false}})
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
            admin: reqUser.admin,
            voted: reqUser.voted
        });
        //console.log(response.data);
        
        return res.json(user);
    }
};