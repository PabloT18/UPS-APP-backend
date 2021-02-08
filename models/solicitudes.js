const Solicitudes = [
    {
        numSolicitud: 568,
        fechaRegistro: '01/01/2020',
        destinatarioInicial: 'Vladimir Robles',
        tipoSolicitud: 'Aprobacion de tesis',
        estado: 'Reasignada',
        detalles : [
            {
                fecha: '01/01/2020',
                asignado: 'Secretaria carrera',
                estado: 'Reasignada',
                observaciones: 'Reasignada vicerector'
            },
            {
                fecha: '01/01/2020',
                asignado: 'Vicerector',
                estado: 'Aprobada',
                observaciones: 'Solicitud aprobada'
            }
        ]
    },
    {
        numSolicitud: 569,
        fechaRegistro: '01/02/2020',
        destinatarioInicial: 'Vladimir Robles',
        tipoSolicitud: 'No deudas',
        estado: 'Reasignada',
        detalles : [
            {
                fecha: '02/02/2020',
                asignado: 'Secretaria carrera',
                estado: 'Reasignada',
                observaciones: 'Reasignada vicerector'
            },
            {
                fecha: '03/02/2020',
                asignado: 'Vicerector',
                estado: 'Aprobada',
                observaciones: 'Solicitud aprobada'
            }
        ]
    }  
]

module.exports ={Solicitudes}