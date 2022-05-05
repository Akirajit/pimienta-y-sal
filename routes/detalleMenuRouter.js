var express = require('express');
var router = express.Router();
var menuController = require('../controllers/menuController')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let platos = menuController.listarPlatos();
  let plato = platos.find(plato => plato.id == req.params.id)
  res.render('detalleMenu', {plato:plato , defaultMessage:"Plato Típico"} );
});

module.exports = router;
