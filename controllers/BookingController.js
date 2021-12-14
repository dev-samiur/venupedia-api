const Booking= require('../models/Booking')

exports.getAll= async (req, res) => {
	try{
			let bookings= await Booking.find()
			res.json({success: bookings});
	} catch(err){
			res.json({error: err.message});
	}
}

exports.getById= async (req, res) => {
	try{
			let booking= await Booking.findById(req.params.id)
			res.json({success: booking});
	} catch(err){
			res.json({error: err.message});
	}
}

exports.create= async (req, res) => {
	const booking= new Booking({
		venue_id: req.body.venueId,
		user_id: req.body.userId,
		date: req.body.date
	});

	try{
			await booking.save();
			res.json({success: booking._id})
	}catch(err){
			res.json({error: err.message});
	}
}