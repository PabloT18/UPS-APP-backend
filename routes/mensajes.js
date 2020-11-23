/*

    Path: /api/mesnajes

*/

const {Router} = require('express');
const { getChats } = require('../controllers/mensajes');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();

 
router.get('/:de',  validarJWT, getChats);

module.exports =  router;

