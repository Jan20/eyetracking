var router = require('express').Router();
var data = require('./data');

router.get('/products', getProducts);

module.exports = router;

//////////

function getProducts(req, res, next){
	res.status(200).send(data.products);
};