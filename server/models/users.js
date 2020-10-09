const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
	email: String,
	password: String,
	name: {type: String, default: "Jane Doe"},
	address: {type: String, default: "1234 Lane"},
	username: {type: String, default: "janedoe"},
	total: {type: String, default: "You have no total"},
	apiToken: {type: String}
})

const User = mongoose.model('People', UserSchema)

module.exports = User