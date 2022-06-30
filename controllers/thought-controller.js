const {User, Thought, Reaction } = require("../models");

const thoughtController = {
    getAllThoughts(req, res) {
        Thought.find({})
        .populate({ path: 'reactions', select: '-__v'})
        .select('-__v')
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    }
}

getThoughtsById({params}, res) {
    Thought.findOne({_id: params.id})
    .populate({path: 'reactions', select: '__V'})
    .select('-__v')
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({message: "There is no thought found by this id"});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err=> {
        console.log(err);
        res.status(400).json(err)
    })
},


