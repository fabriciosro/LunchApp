const { Schema, model } = require('mongoose');

const PollSchema = new Schema({
    nameUser: String,
    idRestaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant',
    },
    pollDate: { type: Date, default: Date.now }
}, {
    timestamps: true,
});

module.exports = model('Poll', PollSchema);