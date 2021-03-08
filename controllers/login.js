const { response } = require("express");

const {Usuario, Usuario2, Usuario3, Usuario4, Usuario5, Usuario6, Usuario7} = require('../models/user');
const { generatJWT } = require("../helpers/jwr");


const login =  async (req, res = response) => {


    const {email, password} = req.body;

  let usuarios = [Usuario, Usuario2, Usuario3, Usuario4, Usuario5, Usuario6, Usuario7];

  var numuser = 0;

  try {

    // const usuarioDB = await Usuario.findOne({email});
    console.log(email);
    console.log(password);

    if(email == 'ptorresp1@est.ups.edu.ec' ){
      numuser = 0;
    } else if(email == 'ptorresp2@est.ups.edu.ec' ){
      numuser =1;

    }else if(email == 'ptorresp3@est.ups.edu.ec' ){
      numuser = 2;

    }else if(email == 'ptorresp4@est.ups.edu.ec' ){
      numuser = 3;

    }else if(email == 'aandrade5@est.ups.edu.ec' ){
      numuser = 4;
    }else if(email == 'aandrade6@est.ups.edu.ec' ){
      numuser = 5;
    }else if(email == 'aandrade7@est.ups.edu.ec' ){
      numuser = 6;
    }else {

          return res.status(404).json({
              ok: false,
              msg: "email no encontrado "
          });

    }

    // if(ewwwwwwwmail != 'ptorresp1@est.ups.edu.ec' ){

    // }

    console.log(usuarios[numuser]);

    //generar el JWT
    const token = await generatJWT(email);


    res.json({
        ok: true,
         
        data: usuarios[numuser],
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