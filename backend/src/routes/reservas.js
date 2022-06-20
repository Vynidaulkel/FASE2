const { Router } = require('express');
const router = Router();

const { getReservas, createReserva, deleteReserva } = require('../controllers/reservas.controller');

router.route('/')
    .get(getReservas)
    .post(createReserva);

router.route('/:id')
    .delete(deleteReserva);
   
module.exports = router;


