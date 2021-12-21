const Booking = require('../models/Booking');
const Venue = require('../models/Venue');
const User = require('../models/User');

exports.getAll = async (req, res) => {
  try {
    const bookings = await Booking.find();
    const schedule = await getSchedule(bookings);
    res.json({ success: schedule });
  } catch (err) {
    console.log(err);
    res.json({ error: err.message });
  }
};

const getSchedule = async (bookings) => {
  const schedule = await Promise.all(
    bookings.map(async (booking) => {
      const user = await User.findById(booking.user_id);
      const venue = await Venue.findById(booking.venue_id);
      return {
        venue: venue.title,
        user: user.email,
        date: booking.date,
      };
    })
  );
  return schedule;
};

exports.getById = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    res.json({ success: booking });
  } catch (err) {
    res.json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const booking = new Booking({
    venue_id: req.body.venueId,
    user_id: req.body.userId,
    date: req.body.date,
  });

  try {
    await booking.save();
    res.json({ success: booking._id });
  } catch (err) {
    res.json({ error: err.message });
  }
};
