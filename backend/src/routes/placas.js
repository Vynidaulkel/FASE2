const { Router } = require('express');
const router = Router();

const { getPlacas,createPlacas,deletePlaca } = require('../controllers/placa.controller');

router.route('/')
    .get(getPlacas)
    .post(createPlacas);

router.route('/:id')
    
    .delete(deletePlaca)

module.exports = router;

