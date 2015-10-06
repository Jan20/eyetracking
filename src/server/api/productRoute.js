var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Product = require('.././models/product');
var multer = require('multer');


mongoose.createConnection('mongodb://Jan20:0staticVoid0@ds041992.mongolab.com:41992/leaf');

var productRoute = express.Router();

productRoute
	.route('/products')
		.get(getProducts)
		.post(postProduct);

productRoute
	.route('/product/:productId')
		.get(getProduct)
		.put(putProduct)
		.delete(deleteProduct);


/**
*
*	Datenupload
*
*
*
*/
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/Users/Jan/Code/eyetracking/src/server/public/images/products');
  },
  filename: function (req, file, cb) {
    cb(null, 'product' + req.params.productId + '.jpg');
  }
});

var upload = multer({ storage: storage });


productRoute
	.post('/product/:productId', upload.single('image'), function postImage(req, res, next){
		
	console.log(req.file.originalname);
	console.log(req.body);
	console.log(req.file);
	console.log(req.file.filename);
	res.status(204).end();
});




/**
*
*	Die folgende Funktion stellt ausgehend von dem Produkt Model die GET ALL Funktionalität,
*	zum Abruf aller Datensätzer innerhalb der oben definierten Datenbank bereit. Hierzu 
*	wird die find-Funktion des express-Frameworks aufgerufen. Diese wird mit einem leeren 
*	Parameter versehen, sodass die Abfrage auf alle Datensätze zutrifft.
*
*/
function getProducts(req, res){
	Product.find({}, function(err, products){
		if(err)
			res.send('Bei der Abfrage aller Produkte ist ein Fehler aufgetreten: ' + err);
		res.json(products);
	});
}

/**
*
*	
*
*
*/
function getProduct(req, res){
	Product.find({productId: req.params.productId}, function(err, product){
		if(err)
			res.send('Bei der Abfrage eines einzelnen Produkts ist ein Fehler aufgetreten: ' + err);
		res.json(product);
	});
}

/**
*
*	
*
*
*
*/
function postProduct(req, res){
	var product = new Product({
		productId: req.body.productId,
		name: req.body.name,
		image: req.body.image,
		url: req.body.url,
	});

	product.save(function(err){
		if(err)
			res.send('Bei dem Anlegen eines neuen Produkts ist ein Fehler aufgetreten: ' + err);
		res.json(product);
	});
}

/**
*
*	Die folgende Funktion stellt die UPDATE-Funktionalität der Route bereit. Hierzu 
*	wrid die 
*
*
*
*/
function putProduct(req, res){
	Product.findOne({productId: req.params.productId}, function(err, product){
		console.log(req.body);
		product.productId = req.body.productId;
		product.name = req.body.name;
		product.image = req.body.image;
		product.url = req.body.url;
		product.save(function(err){
			if(err){
				return res.send('Bei dem Update von ' + product.name + 'ist es zu einem Fehler gekommen: ' + err);
			}
			res.json({message: product.name + ' erfolgreich geänder.'});
		});
	});
}

function deleteProduct(req, res, err) {
    Product.remove({ productId: req.body.productId}, function(err, product){
        if (err) res.send('A database error occured.' + err);
        res.json({ message: 'Successfully deleted.'});    	
    });

}


module.exports = productRoute;