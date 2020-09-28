const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.post('/api/register', (req, res) => {
	const {username, password} = req.body

	// store this data on database
})

app.listen(1234, () => console.log('Server listening at 1234'))
