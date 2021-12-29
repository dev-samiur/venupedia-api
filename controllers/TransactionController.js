const Transaction = require('../models/Transaction');
const Venue = require('../models/Venue');

exports.getAll = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json({ success: transactions });
  } catch (err) {
    res.json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const venues = await Venue.find({ owner: req.params.id });
    const transactions = await Transaction.find();
    const filteredVenues = venues.map((venue) => venue._id.toString());
    filteredTransactions = [];
    transactions.forEach((transaction) => {
      const exist = filteredVenues.includes(transaction.venue_id);
      if (exist) filteredTransactions.push(transaction);
    });
    res.json({ success: filteredTransactions });
  } catch (err) {
    res.json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const transaction = new Transaction({
    venue_id: req.body.venueId,
    user_id: req.body.userId,
    method: req.body.method,
    date: req.body.date,
  });

  try {
    await transaction.save();
    res.json({ success: transaction._id });
  } catch (err) {
    res.json({ error: err.message });
  }
};
