const { response } = require("express");

const { Horario1, Horario2, Horario3, Horario4, Horario5, Horario6, Horario7 } = require('../models/horarios');

const { Calificaciones } = require('../models/calificaciones');

// const { Calificaciones } = require("../models/calificaciones");
const { Solicitudes } = require("../models/solicitudes");
const { RecordAcademico } = require("../models/recordAcademico");
const { Clases } = require("../models/clases");
const { Pagos } = require("../models/pagos");
const { Deudas } = require("../models/deudas");


const schedule = async (req, res = response) => {

    // console.log(req);
    const  {email,periodo}  = req.query;
// periodo
    // const  email  = req.query.email;

    let Horarios = [Horario1, Horario2, Horario3, Horario4, Horario5, Horario6, Horario7];

  var numuser = 0;



    try {
        console.log(email);
        console.log(periodo);

    if(email == 'ptorresp1@est.ups.edu.ec' ){
        numuser = 0;
      } else if(email == 'ptorresp2@est.ups.edu.ec' ){
        numuser =1;
  
      }else if(email == 'ptorresp3@est.ups.edu.ec' ){
        numuser = 2;
  
      }else if(email == 'ptorresp4@est.ups.edu.ec' ){
        numuser = 3;
  
      }else if(email == 'aandrade5@ups.edu.ec' ){
        numuser = 4;
      }else if(email == 'aandrade6@ups.edu.ec' ){
        numuser = 5;
      }else if(email == 'aandrade7@ups.edu.ec' ){
        numuser = 6;
      }else {
  
            return res.status(404).json({
                ok: false,
                msg: "Credenciales incorrectas "
            });
  
      }

      console.log(Horarios[numuser]);

        // if (email == 'ptorresp1@est.ups.edu.ec') {
            res.json({
                ok: true,
                Horarios:Horarios[numuser]
            });
        // } else {
            // res.status(400).json({
            //     ok: false,
            //     msg: "Hable con el administrador",
            // });
        // }

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
        // if (email == 'ptorresp1@est.ups.edu.ec') {
        //     res.json({
        //         ok: true,
        //         Clases
        //     });
        // } else {
        //     res.status(400).json({
        //         ok: false,
        //         msg: "Hable con el administrador",
        //     });
        // }

        res.json({
                    ok: true,
                    Clases
                });

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