/*
*   path: api/loginups
*/

const {Router} = require('express');
const { check } = require('express-validator');

const {login} = require('../controllers/login');
const {validarCampos} = require('../middlewares/validar-campos');



const router = Router();

router.post('/', [
    check('email','El mail es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
], login);


module.exports = router;