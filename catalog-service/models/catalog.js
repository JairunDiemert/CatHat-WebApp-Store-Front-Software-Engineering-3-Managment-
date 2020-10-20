const mongoose = require("mongoose");

const CatalogSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
    img: { type: String, required: true }
})

const Catalog = mongoose.model('Catalog', CatalogSchema)

module.exports = Catalog;