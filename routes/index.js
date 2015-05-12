var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Web AW' });
});

router.get('/leoshop', function(req, res, next) {
	res.render('leoshop-web/index');
});

router.get('/product/*', function(req, res, next) {
	var producto = req['params']['0'];
	var dic = { product: producto };
	res.render('product', dic);
});

module.exports = router;
