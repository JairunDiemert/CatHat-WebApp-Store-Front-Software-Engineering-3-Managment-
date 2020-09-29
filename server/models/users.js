const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	total: {type: String, default: "You have not total"}
})

const User = mongoose.model('User', UserSchema)

module.exports = User