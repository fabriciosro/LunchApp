const { Schema, model } = require('mongoose');

const RestaurantSchema = new Schema({
    name: {
       type: String,
       required: true, 
    },
    site: String,
    alreadyChosen: Boolean,
    chosenDay: Boolean,
    polls:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
}, {
    timestamps: true,
});

module.exports = model('Restaurant', RestaurantSchema);