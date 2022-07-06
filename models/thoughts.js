const {Schema, model} = require("mongoose");
const reactionSchema = require('./reaction');
const moment = require('moment');

const thoughtSchema = new Schema ({
    thoughtText: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 500,
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal => moment(createdAtVal).format('MM, DD, YYYY [at] hh:mm '))
    },

    username: {
        type: String,
        required: true
    },
    reactions: [ reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

thoughtSchema.virtual("reactionCount").get(function() {
    return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

model.exports = thoughts;