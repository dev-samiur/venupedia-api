const Venue= require('../models/Venue')

exports.getAll= async (req, res) => {
	try{
			let venues= await Venue.find()
			res.json({success: venues});
	} catch(err){
			res.json({error: err.message});
	}
}

exports.getById= async (req, res) => {
	try{
			let venue= await Venue.findById(req.params.id)
			res.json({success: venue});
	} catch(err){
			res.json({error: err.message});
	}
}

exports.create= async (req, res) => {

	console.log(req.files)

	const venue= new Venue({
			title: req.body.title,
			description: req.body.description,
			address: req.body.address,
			price: req.body.price,
			capacity: req.body.capacity,
			thumbnail: req.files[0].filename,
			gallery_1: req.files[1].filename,
			gallery_2: req.files[2].filename
	});

	try{
			await venue.save();
			res.json({success: venue._id})
	}catch(err){
			res.json({error: err.message});
	}
}