const { Schema, model, Types } = require("mongoose");
const moment = require('moment');


const reactionSchema = new Schema ({
    reactionId: {
        type: Types.ObjectId,
        defailt: new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        require: true,
        maxLength: 500
    },
    username: {
        type: String,
        require: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment (createdAtVal).format('MM, DD, YYYY [at: hh:mm')
    }
},
{
    toJSON: {
        getters: true,
    },
    id: false
});


module.exports = reactionSchema;