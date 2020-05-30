const Fact = require('../models/fact');

async function index(req, res) {
    try {
        const facts = await Fact.find({});
        res.status(200).json(facts);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function create(req, res) {
    console.log('hitting controllers create!!')
    try {
        console.log(req.body)
        const fact = await Fact.create(req.body);
        res.status(200).json(fact);
    } catch(err) {
        res.status(500).json(err);
    }
}

// async function show(req, res) {
//     try {
//         const facts = await Fact.findById(req.params.id).populate('votes');
//         res.status(200).json(facts)
//     } catch(err) {
//         res.status(500).json(err)
//     }
// }

async function update(req, res) {
    try {
        const updateFact = await Fact.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateFact);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    try {
        const deletedFact = await Fact.findByIdAndDelete(req.params.id);
        res.status(500).json(deletedFact);
    } catch(err) {
        res.status(500).json(err);
    }
}

module.exports = {
    index,
    create,
    // show,
    update,
    deleteOne
}