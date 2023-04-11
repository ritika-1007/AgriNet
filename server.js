const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const User = require('./model/user')
const Regionalhead = require('./model/regional')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Farmer = require('./model/Farmer')
const FarmerActivity = require('./model/FarnerActivity')
const fetchuser = require('./fetchuser')

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'

mongoose.connect('mongodb://localhost:27017/login-app-db', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true
})

const app = express()
app.use(express.static(path.join(__dirname, 'static/ex')));
app.use('/' , express.static(path.join(__dirname, 'static' , "/ex/index.html")) )
app.use('/admin' , express.static(path.join(__dirname, 'static' , "/ex/admin.html")) )
app.use('/form' , express.static(path.join(__dirname, 'static' , "/ex/form.html")) )
app.use('/farmerdetails' , express.static(path.join(__dirname, 'static' , "/ex/farmerdetail.html")) )
app.use('/allfarmers' , express.static(path.join(__dirname, 'static' , "/ex/viewdetails.html")) )
app.use('/adminLogin' , express.static(path.join(__dirname, 'static' , "/ex/adminlogin.html")) )
app.use('/farmerview' , express.static(path.join(__dirname, 'static' , "/ex/AssetsFarmer.html")) )
app.use('/logistics' , express.static(path.join(__dirname, 'static' , "/ex/logistics.html")) )
app.use('/standalonefarmer' , express.static(path.join(__dirname, 'static' , "/ex/farmerindex.html")) )
app.use('/AssetsFarmer' , express.static(path.join(__dirname, 'static' , "/ex/AssetsFarmer.html")) )
app.use(bodyParser.json())

app.post('/api/change-password', async (req, res) => {
	const { token, newpassword: plainTextPassword } = req.body

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	try {
		const user = jwt.verify(token, JWT_SECRET)

		const _id = user.id

		const password = await bcrypt.hash(plainTextPassword, 10)

		await User.updateOne(
			{ _id },
			{
				$set: { password }
			}
		)
		res.json({ status: 'ok' })
	} catch (error) {
		console.log(error)
		res.json({ status: 'error', error: ';))' })
	}
})

app.post('/api/adminlogin', async (req, res) => {
	const { email, password } = req.body
	const user = await User.findOne({ email }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid email/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const authtoken = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: authtoken })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/headlogin', async (req, res) => {
	const { email, password } = req.body
	const user = await Regionalhead.findOne({ email }).lean()

	if (!user) {
		return res.json({ status: 'error', error: 'Invalid email/password' })
	}

	if (await bcrypt.compare(password, user.password)) {
		// the username, password combination is successful

		const authtoken = jwt.sign(
			{
				id: user._id,
				email: user.email
			},
			JWT_SECRET
		)

		return res.json({ status: 'ok', data: authtoken })
	}

	res.json({ status: 'error', error: 'Invalid username/password' })
})

app.post('/api/headregister', async (req, res) => {
	const { username, email , password: plainTextPassword } = req.body

	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await Regionalhead.create({
			username,
			email ,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

app.post('/api/adminregister', async (req, res) => {
	const { username, email , password: plainTextPassword } = req.body

	if (!username || typeof username !== 'string') {
		return res.json({ status: 'error', error: 'Invalid username' })
	}

	if (!plainTextPassword || typeof plainTextPassword !== 'string') {
		return res.json({ status: 'error', error: 'Invalid password' })
	}

	if (plainTextPassword.length < 5) {
		return res.json({
			status: 'error',
			error: 'Password too small. Should be atleast 6 characters'
		})
	}

	const password = await bcrypt.hash(plainTextPassword, 10)

	try {
		const response = await User.create({
			username,
			email ,
			password
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		if (error.code === 11000) {
			// duplicate key
			return res.json({ status: 'error', error: 'Username already in use' })
		}
		throw error
	}

	res.json({ status: 'ok' })
})

app.post('/api/farmercreate' , fetchuser , async(req ,res) => {
	const {name ,aadharid,region,crops_produced,no_of_seedlings,income,latitude,longitude } = req.body ;
	const id = req.user ;
	try {
		const response = await Farmer.create({
			reghead:id ,
			Name:name ,
			aadharid,
			region,
			crops_produced,
			no_of_seedlings,
			income,
			latitude,
			longitude
		})
		console.log('User created successfully: ', response)
	} catch (error) {
		return res.json({ error , message:error.message })
	}
}) 

app.post('/api/farmeractivitycreate' , fetchuser , async(req ,res) => {
	const {name ,aadharid,region,crops_produced,no_of_seedlings,income,latitude,longitude } = req.body ;
	const id = req.user ;
	try {
		const response = await FarmerActivity.create({
			actname ,
						startDate,
						endDate,
						actproof,
						labourName,
						workduration,
						wages,
						assetID,
						driver,
                        application,
                        wagesAssets,
						type,
						units,
						cost,
						typeprod,
                        unitsprod,
						location

		})
		console.log('User created successfully: ', response)
	} catch (error) {
		return res.json({ error , message:error.message })
	}
}) 


app.get('/api/fetchfarmerdetails' , fetchuser , async(req ,res) => {
	const id = req.user ;
	try {
		const response = await Farmer.find({reghead : id}) ;
		console.log('Users Fetched: ', response)
	} catch (error) {
		return res.json({ error , message:error.message })
	}
}) 

app.listen(9999, () => {
	console.log('Server up at 9999')
})


