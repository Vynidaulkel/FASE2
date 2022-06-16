const { Router } = require('express');
const router = Router();

const { getNotes, createNote, getNote, deletParqueo} = require('../controllers/parqueos.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);

router.route('/:id')
    .get(getNote)
    .delete(deletParqueo);


module.exports = router;
