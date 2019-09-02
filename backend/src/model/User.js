const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: String,
    name: {
       type: String,
       required: true, 
    },
    email: {
        type: String,
        //required: true, 
     }, 
     password: String, 
    admin: Boolean,
    voted: Boolean,
}, {
    timestamps: true,
});

module.exports = model('User', UserSchema);