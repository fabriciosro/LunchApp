const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    //id: Int16Array,
    username: String,
    name: {
       type: String,
       required: true, 
    },
    email: {
        type: String,
        //required: true, 
     }, 
     //bio: String,
     //avatar: String,
     password: String, 
    admin: Boolean,
}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);