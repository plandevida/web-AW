var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Web AW' });
});

router.get('/shop/*', function(req, res, next) {
	var dic = { category: req['params']['0'] };
	res.render('index', dic);
});

router.get('/product/*', function(req, res, next) {
	var dic = { product: req['params']['0'] };
	res.render('product', dic);
});

module.exports = router;
