const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use refernce
const votesSchema = ({
    // foreign key
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },

    // foreign key
    facts: {
        type: Schema.Types.ObjectId,
        required: true
    }
});

module.exports = mongoose.model('Votes', votesSchema);