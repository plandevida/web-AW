var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Web AW' });
});

router.get('/leoshop', function(req, res, next) {
	res.render('leoshop-web/index');
});

router.get('/blog/`name`', function(req, res, next) {
	res.render('blog');
});

module.exports = router;
