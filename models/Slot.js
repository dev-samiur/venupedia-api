const mongoose = require('mongoose');

const slotSchema = new mongoose.Schema({
  venue_id: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Slot', slotSchema, 'slots');
