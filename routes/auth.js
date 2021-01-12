/*
    path: api/login
*/
const {Router} = require('express');
const { check } = require('express-validator');

const { crearUsuario, login, renewJWT} = require('../controllers/auth');
const {validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

router.post('/new', [
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('email','El mail es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
], crearUsuario);
 

//post: / 
// validar email, paaswword
router.post('/', [
    check('email','El mail es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    // validarCampos
], login);
 
router.get('/renew',  validarJWT, renewJWT);

module.exports =  router;