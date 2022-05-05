var express = require('express');
var router = express.Router();
var menuController = require('../controllers/menuController')

/* GET home page. */
router.get('/', function(req, res, next) {
  let menu = menuController.listarPlatos()
  res.render('index' , {menu:menu});
});

module.exports = router;
