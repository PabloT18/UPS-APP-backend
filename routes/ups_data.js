/**
 * path: /api/ups
 */

const {Router} = require('express');
const { check } = require('express-validator');

const {sedes, noticias, eventos} = require('../controllers/ups_data');
const {validarCampos} = require('../middlewares/validar-campos');


const router = Router();

router.get('/sedes', [
], sedes);


router.get('/news',  noticias);

router.get('/events',  eventos);



module.exports = router;