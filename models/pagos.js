const Pagos =[
    {
      fecha: '02/02/2021',
      numFac: '001-002-6659556',
      descripcion: 'Pago de libros',
      total: 58,
      detalles : [
        {
          codigoDet: '008',
          descripcionDet: 'libro programacion',
          cantidad: 1,
          precioUnitario: 78,
          descuento1: 0,
          descuento2: 0,
          total: 78
        },
        {
          codigoDet: '009',
          descripcionDet: 'libro ingles',
          cantidad: 1,
          precioUnitario: 78,
          descuento1: 0,
          descuento2: 0,
          total: 78
        }
      ] 
    },
    {
      fecha: '03/02/2021',
      numFac: '001-002-6659557',
      descripcion: 'Pago de solicitudes',
      total: 58,
      detalles : [
        {
          codigoDet: '0010',
          descripcionDet: 'Solicitud cambio de grupo',
          cantidad: 1,
          precioUnitario: 78,
          descuento1: 0,
          descuento2: 0,
          total: 78
        },
        {
          codigoDet: '0011',
          descripcionDet: 'Solicitud tercera matricula',
          cantidad: 1,
          precioUnitario: 78,
          descuento1: 0,
          descuento2: 0,
          total: 78
        }
      ] 
    }
  ]

  module.exports = {Pagos}