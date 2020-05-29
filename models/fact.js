const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Use reference
const factSchema = Schema({
    title: {
        type: String,
        required: true
    },
    
    content: {
        type: String,
        required: true
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
    // votes is foreign key
    votes: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, {
    timestamps: true
});

module.exports = mongoose.model('Fact', factSchema);