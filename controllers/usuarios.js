
const {response} = require('express');
const Usuario = require('../models/useer');

const getUsuarios = async (req, res = response) => {
    const uid = req.uid;

    const desde = Number(req.query.desde) || 0;
    

    const usuarios = await Usuario
        .find({_id: {$ne: uid}})
        .sort('-online')
        .skip(desde)
        .limit(20);

    res.json({
        ok: true,
        usuarios,
        desde
    });

}

module.exports = {
    getUsuarios
}
