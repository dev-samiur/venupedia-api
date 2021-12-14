const Transaction= require('../models/Transaction')

exports.getAll= async (req, res) => {
	try{
			let transactions= await Transaction.find()
			res.json({success: transactions});
	} catch(err){
			res.json({error: err.message});
	}
}

exports.getById= async (req, res) => {
	try{
			let transaction= await Transaction.findById(req.params.id)
			res.json({success: transaction});
	} catch(err){
			res.json({error: err.message});
	}
}

exports.create= async (req, res) => {
	const transaction= new Transaction({
		venue_id: req.body.venueId,
		user_id: req.body.userId,
		method: req.body.method,
		date: req.body.date
	});

	try{
			await transaction.save();
			res.json({success: transaction._id})
	}catch(err){
			res.json({error: err.message});
	}
}