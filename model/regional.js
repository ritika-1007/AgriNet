const mongoose = require('mongoose')

const RegionalheadSchema = new mongoose.Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true }
	},
	{ collection: 'Regionalheads' }
)

const model = mongoose.model('RegionalheadSchema', RegionalheadSchema)

module.exports = model
