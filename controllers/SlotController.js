const Slot = require('../models/Slot');

exports.getById = async (req, res) => {
  try {
    let slots = await Slot.findById(req.params.id);
    res.json({ success: slots });
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
