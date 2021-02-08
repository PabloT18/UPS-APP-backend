/*
    path: api/est

*/
const {Router} = require('express');
const { check } = require('express-validator');


const { schedule,calificaciones,solicitudes,recordAcademico,clases,pagos,deudas } = require('../controllers/user_ups_controller');

const {validarCampos} = require('../middlewares/validar-campos');

const router = Router();

router.get("/calificaciones",[check('email','El mail es obligatorio').isEmail(),validarCampos],calificaciones);

router.get("/solicitudes",[check('email','El mail es obligatorio').isEmail(),validarCampos],solicitudes);
router.get("/record",[check('email','El mail es obligatorio').isEmail(),validarCampos],recordAcademico);
router.get("/clases",[check('email','El mail es obligatorio').isEmail(),validarCampos],clases);
router.get("/pagos",[check('email','El mail es obligatorio').isEmail(),validarCampos],pagos);
router.get("/deudas",[check('email','El mail es obligatorio').isEmail(),validarCampos],deudas);

router.get('/schedule',[check('email','El mail es obligatorio').isEmail(),validarCampos], schedule);


module.exports =  router;