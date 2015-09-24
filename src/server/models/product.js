var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	productId: Number,
	name: String,
	image: String,
	url: String
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;