const { response } = require("express");
const bcrypt = require('bcryptjs');

const Usuario = require('../models/useer');
const { generatJWT } = require("../helpers/jwr");
// const { route } = require("../routes/auth");

const crearUsuario = async (req, res = response) => {


    const { email, password } = req.body;

    try {

        const existeEmail = await Usuario.findOne({email});
        if(existeEmail){
            return res.status(400).json({
                msg: " El correo ya esta registrado"
            });
        }


        const usuario = new Usuario(req.body);


        //Emcriptar contrasena
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);


        await usuario.save();


        //Generar mi JWToken 
        const token = await generatJWT(usuario.id);


        res.json({
            ok: true,
            usuario,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "hanle con el administrador"
        });
    }
}



const login =  async (req, res = response) => {


    const {email, password} = req.body;

  try {

    const usuarioDB = await Usuario.findOne({email});

    if(!usuarioDB ){

        return res.status(404).json({
            ok: false,
            msg: "email no encontrado "
        });
    }


    //validar pasword

    const validarPsw = bcrypt.compareSync(password, usuarioDB.password);
    if(!validarPsw){
        return res.status(400).json({
            ok: false,
            msg: "Contrasena no es valida "
        });
    }
      

    //generar el JWT
    const token = await generatJWT(usuarioDB.id);


    res.json({
        ok: true,
        usuario: usuarioDB,
        token
    });



  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: "hanle con el administrador"
    });
  } 
}

const renewJWT = async(req, res = response) =>{

    const uid = req.uid;

    //generar el JWT
    const token = await generatJWT(uid);

    const usuarioDB = await Usuario.findById(uid);

    res.json({
        ok: true,
        usuario: usuarioDB,
        token
    });
}

module.exports = {
    crearUsuario,
    login,
    renewJWT

}