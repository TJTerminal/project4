const Fact = require('../models/fact');

async function index(req, res) {
    console.log('Hitting index route in fact controller!!!')
    try {
        const facts = await Fact.find({});
        res.status(200).json(facts);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function create(req, res) {
    console.log('hitting controllers create!!')
    console.log('user: ', req.user)
    try {
        console.log(req.body)
        req.body.owner = req.user._id;
        req.body.ownerName = req.user.name;
        const fact = await Fact.create(req.body);
        res.status(200).json(fact);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function show(req, res) {
    try {
        const facts = await Fact.findById(req.params.id);
        res.status(200).json(facts)
    } catch(err) {
        res.status(500).json(err)
    }
}

async function update(req, res) {
    try {
        const updateFact = await Fact.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateFact);
    } catch(err) {
        res.status(500).json(err);
    }
}

async function deleteOne(req, res) {
    console.log('Hitting Delete Controllers!!')
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
    show,
    update,
    deleteOne
}