
const mongoose = require('mongoose')

const FarmerSchema = new mongoose.Schema(
	{
		reghead : {
			type : mongoose.Schema.Types.ObjectId ,
            ref:'Regionalheads'
		} ,
		Name: { type: String, required: true },
		aadharid: { type: Number, required: true },
		region: { type: String, required: true },
		crops_produced : { type: Number, required: true },
		no_of_seedlings : { type: Number, required: true },
		income : { type: Number, required: true },
		latitude : { type: Number, required: true },
		longitude : { type: Number, required: true },
	},
	{ collection: 'FarmerDetails' }
)

const model = mongoose.model('FarmerSchema', FarmerSchema)

module.exports = model
