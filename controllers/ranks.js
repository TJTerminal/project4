var Rank = require("../models/rank");

async function create(req, res) {
  console.log(req.user);
  try {
    await Score.create(req.body);
    // Use the highScores action to return the list
    highScores(req, res);
  } catch (err) {
    res.json({ err });
  }
}

async function highRanks(req, res) {
  const ranks = await Rank.find({})
    .sort({ numGuesses: 1, seconds: 1 })
    // Default to a limit of 20 high ranks
    // if not specified in a query string
    .limit(req.query.limit || 20);
  res.json(ranks);
}

module.exports = {
  create,
  highRanks,
};