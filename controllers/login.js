const { response } = require("express");

const Usuario = require('../models/user');
const { generatJWT } = require("../helpers/jwr");


const login =  async (req, res = response) => {


    const {email, password} = req.body;

  try {

    // const usuarioDB = await Usuario.findOne({email});
    console.log(email);
    console.log(password);

    if(email != 'ptorresp1@est.ups.edu.ec' ){

        return res.status(404).json({
            ok: false,
            msg: "email no encontrado "
        });
    }

    

    //validar pasword

    // const validarPsw = bcrypt.compareSync(password, usuarioDB.password);
    // if(!validarPsw){
    //     return res.status(400).json({
    //         ok: false,
    //         msg: "Contrasena no es valida "
    //     });
    // }
      

    //generar el JWT
    const token = await generatJWT(email);


    res.json({
        ok: true,
         
        data: Usuario,
        token: token
    });



  } catch (error) {
    console.log(error);
    res.status(500).json({
        ok: false,
        msg: "hanle con el administrador"
    });
  } 
}


module.exports = {login}