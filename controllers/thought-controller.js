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

getThoughtsById({params}, res); {
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
}

createThought({body}, res); {
    Thought.create(body)
    .then(dbThoughtData => {
        User.findOneAndUpdate(
            {_id: body.userId},
            { $push: { thoughts: dbThoughtData._id} },
            { new: true }
        )
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id' });
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => res.json(err));
    })
    .catch(err => res.status(400).json(err));
}

updateThought({ params, body}, res); {
    Thought.findOneAndUpdate (
        {_id:params.id },
        body,
        { new: true }
    )
    .then(dbThoughtData =>  {
        if(!dbThoughtData) {
            res.status(404).json({message: 'No thought associated with this id!'});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err => res.status(400).json(err));
}

deleteThought({ params }, res); {
    
    Thought.findOneAndDelete({ _id: params.id })
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({ message: 'No thought found with this id'});
            return;
        }
       
        User.findOneAndUpdate(
            { username: dbThoughtData.username },
            { $pull: { thoughts: params.id } }
        )
        .then(() => {
            res.json({message: 'Thought Deleted'});
        })
        .catch(err => res.status(500).json(err));
    })
    .catch(err => res.status(500).json(err));
}

addReaction({ params, body}, res); {
    Thought.findOneAndUpdate (
        {_id: params.thoughtId}, 
        {$addToSet: {reactions:body}},
        {new: true, runValidators: true}
    )
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({message: 'No thought associated wih this id'});
            return;
        }
        res.json(dbThoughtData);
    })
    .catch(err => res.status(500).json)(err);
}

deleteReaction({params, body}, res); {
    Thought.findOneAndUpdate(
        {_id: params.thoughtId},
        {$pull: {reactions:{ reactionId: body.reactionId}}},
        {new: true, runValidators: true}
    )
    .then(dbThoughtData => {
        if (!dbThoughtData) {
            res.status(404).json({message: "No Thought associated with this id!"})
            return;
        }
        res.json({message: "Reaction Deleted!"})
    })
    .catch(err => res.status(500).json(err));
}

module.exports = thoughtController;