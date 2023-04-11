
const mongoose = require('mongoose')

const FarmerActivity = new mongoose.Schema(
	{
		user : {
			type : mongoose.Schema.Types.ObjectId ,
            ref:'users'
		} ,
		reghead : {
			type : mongoose.Schema.Types.ObjectId ,
            ref:'Regionalheads'
		} ,
		actname : { type: String, required: true },
		startDate : { type: String, required: true },
	  endDate : { type: String, required: true },
		actproof : { type: String, required: true },
		labourName : { type: String, required: true },
		workduration : { type: Number, required: true },
		wages : { type: Number, required: true },
		assetID : { type: String, required: true },
		driver : { type: String, required: true },
		application : { type: Number, required: true },
		wagesAssets : { type: Number, required: true },
		type : { type: String, required: true },
		units : { type: Number, required: true },
		cost : { type: Number, required: true },

		typeprod : { type: String, required: true },
	  unitsprod : { type: String, required: true },
	  location : { type: String, required: true },





	},
	{ collection: 'FarmerActivity' }
)

const model = mongoose.model('FarmerActivity', FarmerActivity)

module.exports = model