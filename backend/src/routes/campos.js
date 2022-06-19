const { Router } = require('express');
const router = Router();

const { getUsers, createCampos,updateCampo, deleteCampos } = require('../controllers/campos.controller');

router.route('/')
    .get(getUsers)
    .post(createCampos);

router.route('/:id')
    .put(updateCampo)
    .delete(deleteCampos);
   

module.exports = router;


