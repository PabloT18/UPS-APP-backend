const { response } = require("express");

const { Horario1 } = require('../models/horarios');

const { Calificaciones } = require('../models/calificaciones');

// const { Calificaciones } = require("../models/calificaciones");
const { Solicitudes } = require("../models/solicitudes");
const { RecordAcademico } = require("../models/recordAcademico");
const { Clases } = require("../models/clases");
const { Pagos } = require("../models/pagos");
const { Deudas } = require("../models/deudas");


const schedule = async (req, res = response) => {


    const  email  = req.query.email;


    try {
        console.log(email);
        if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                Horarios:Horario1
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: "Hable con el administrador",
            });
        }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

const calificaciones = async (req, res = response) => {
    const  email  = req.query.email;
    try {
        console.log(email);
        if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                calificaciones: true,
                Calificaciones
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: "Hable con el administrador",
            });
        }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

const solicitudes = async (req, res = response) => {
    const  email  = req.query.email;
    try {
        console.log(email);
        if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                Solicitudes
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: "Hable con el administrador",
            });
        }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

const recordAcademico = async (req, res = response) => {
    const  email  = req.query.email;
    try {
        console.log(email);
        if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                RecordAcademico
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: "Hable con el administrador",
            });
        }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

const clases = async (req, res = response) => {
    const  email  = req.query.email;
    try {
        console.log(email);
        if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                Clases
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: "Hable con el administrador",
            });
        }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

// const detalleSolicitud = async (req, res = response) => {
//     try {
//         res.json({
//             ok: true,
//             DetalleSolicitud
//         });
//     } catch (error) {
//         res.status(400).json({
//             ok: false,
//             msg: "Hable con el administrador",
//         });
//     }
// }

const pagos = async (req, res = response) => {
    const  email  = req.query.email;
    try {
        console.log(email);
        if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                Pagos
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: "Hable con el administrador",
            });
        }

    } catch (error) {
        res.status(400).json({
            ok: false,
            msg: "Hable con el administrador",
        });
    }
}

// const pagosDetalle = async (req, res = response) => {
//     try {
//         res.json({
//             ok: true,
//             PagosDetalle
//         });
//     } catch (error) {
//         res.status(400).json({
//             ok: false,
//             msg: "Hable con el administrador",
//         });
//     }
// }

const deudas = async (req, res = response) => {
    const  email  = req.query.email;
    try {
        console.log(email);
        if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                Deudas
            });
        } else {
            res.status(400).json({
                ok: false,
                msg: "Hable con el administrador",
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
    schedule,
    calificaciones,
    solicitudes,
    recordAcademico,
    clases,
    pagos,
    deudas
}
// module.exports = {schedule}