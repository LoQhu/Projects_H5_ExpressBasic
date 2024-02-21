const { text } = require('body-parser');
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    factionName: {
        type : String,
        required: [true, 'Faction name is required'],
        minLenght: 5,
        maxLenght: 50,
        trim:true,
        validator: {
            validate (value){
                const pattern = /^[a-zA-Z\s\-\_\']*$/;
                return pattern.test(value);
            },message : 'Faction name must only contain letters, spaces, dashes, underscores and apostrophes.'
        }
    },
    factionLeader: {
        type: String,
        required: [true, 'Faction leader is required'],
        minLenght: 5,
        maxLenght: 25,
        trim:true
    },
    factionPower: {
        type: Number,
        required: true,
        min: 1
    },
    factionDescription: {
        type: String,
        required: [true, 'Faction description is required'],
        minLenght: 0,
        maxLenght: 255,
        trim:true
    }
});
module.exports = mongoose.model('Faction', schema);