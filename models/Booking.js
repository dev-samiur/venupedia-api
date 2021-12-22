const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  venue_id: {
		type: String,
		required: true
	},
	user_id: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Booking', bookingSchema, 'bookings');
