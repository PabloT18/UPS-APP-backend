
const Mensaje = require('../models/mensaje');

const getChats = async (req, res) => {

    const miID = req.uid;

    const mensajesDe = req.params.de;

    const last30 =  await Mensaje.find({
        $or: [{ de: miID, para: mensajesDe}, { de: mensajesDe, para: miID} ]
    })
    .sort({createdAt: 'desc'})
    .limit(30);

    
    res.json({
        ok:true,
        // miID,
        // mensajesDe,
        mensajes: last30
    });

}


module.exports = {
    getChats
}