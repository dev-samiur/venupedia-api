const Slot = require('../models/Slot');
const Booking = require('../models/Booking');

exports.getById = async (req, res) => {
  try {
    const slots = await Slot.find({ venue_id: req.params.id });
    const bookings = await Booking.find();
    const bookedDates = bookings.map((booking) => booking.date);
    const available = [];
    slots.forEach((slot) => {
      const exist = bookedDates.includes(slot.date);
      if (!exist) available.push(slot);
    });
    res.json({ success: available });
  } catch (err) {
    res.json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  const slot = new Slot({
    venue_id: req.body.venueId,
    date: req.body.date,
  });

  try {
    await slot.save();
    res.json({ success: slot._id });
  } catch (err) {
    res.json({ error: err.message });
  }
};
