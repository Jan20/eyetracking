var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	id: Number,
	name: String,
	image: String,
	url: String
});

var Product = mongoose.model(Product, productSchema);

module.export = Product;