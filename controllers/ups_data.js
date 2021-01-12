const { response } = require("express");
// const bcrypt = require('bcryptjs');

// const Usuario = require('../models/useer');
// const { generatJWT } = require("../helpers/jwr");
const { Sedes } = require("../models/sede");
const { Noticias } = require("../models/noticias");
const { Eventos } = require("../models/eventos");


const sedes = async (req, res = response) => {
    try {
        res.json({
            ok: true,
            Sedes
        });

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

const noticias = async (req, res = response) => {

    
    try {
        const page = req.header('page');
        let News = [];
        

        indice = page * 10 - 10;

        if(indice< Noticias.length){
            
            console.log(Noticias.length);
        for (let index = 0; index < 10 && indice < Noticias.length; index++) {
            console.log(indice);
            News[index] = Noticias[indice];
            indice++;
        }


        res.json({
            ok: true,
            data: News,
        });
    } else {
        res.json({
            ok: true,
            
        });
    }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}
const eventos = async (req, res = response) => {

    
   
    try {
        const page = req.header('page');
        let Events = [];
        

        indice = page * 10 - 10;

        if(indice< Eventos.length){
            
            // console.log(Eventos.length);
        for (let index = 0; index < 10 && indice < Noticias.length; index++) {
            // console.log(indice);
            Events[index] = Eventos[indice];
            indice++;
        }


        res.json({
            ok: true,
            data: Events,
        });
    } else {
        res.json({
            ok: true,
            
        });
    }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

module.exports = {
    sedes,
    noticias,
    eventos
}