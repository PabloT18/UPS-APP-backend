const Horarios = [
    {
      class : {
        id:1,
         asignatura: {
          id: 1,
          code: "4546",
          name: "Programacion",
          type: "Académica"
        },
        credits: 6,
        hours: 6,
        group: 1,
        level: 1,
        aula: "AC 05",
        sede: "Cuenca"
      },
      teachers: [
        {
          id: "889",
          names: "Paul Adrian",
          lastNames: "Andrade Perez",
          image: {
            imagePath: "https://www.cristianmonroy.com/wp-content/uploads/2017/11/avatars-avataaars.png",
            imageDescription: "Avatar"
          },
          sede: "Cuenca",
          campus: "El vecino",
          career: "Sistemas",
          department: "Sistemas",
          emailInstitucional: "pandrade@ups.edu.ec",
          rol: "Colaborador"
        }
      ],
      classday: [
        {
          day: "Lunes",
          startTime: "09:00:00",
          endTime: "10:00:00"
        },
        {
          day: "Miercoles",
          startTime: "09:00:00",
          endTime: "10:00:00"
        },
        {
          day: "Viernes",
          startTime: "09:00:00",
          endTime: "10:00:00"
        }
      ]
    },
    {
        class : {
          id:2,
        asignatura: {
        id: 1,
        code: "4547",
        name: "Programacion 2",
        type: "Académica"
       },
       credits: 6,
       hours: 6,
       group: 2,
       level: 2,
       aula: "AC 07",
       sede: "Cuenca"
     },
     teachers: [
       {
         id: "890",
         names: "Bolivar Andres",
         lastNames: "Andrade Solorzano",
         image: {
           imagePath: "https://www.cristianmonroy.com/wp-content/uploads/2017/11/avatars-avataaars.png",
           imageDescription: "Avatar"
         },
         sede: "Cuenca",
         campus: "El vecino",
         career: "Sistemas",
         department: "Sistemas",
         emailInstitucional: "andrade@ups.edu.ec",
         rol: "Colaborador"
       }
     ],
     classday: [
       {
         day: "Martes",
         startTime: "11:00:00",
         endTime: "13:00:00"
       },
       {
        day: "Miercoles",
        startTime: "11:00:00",
        endTime: "13:00:00"
      },
      {
        day: "Sabado",
        startTime: "11:00:00",
        endTime: "13:00:00"
      }
     ]
   },
   {
    class : {
      id:3,
    asignatura: {
    id: 1,
    code: "4548",
    name: "Telematica",
    type: "Académica"
   },
   credits: 6,
   hours: 6,
   group: 1,
   level: 1,
   aula: "AC 03",
   sede: "Cuenca"
 },
 teachers: [
   {
     id: "891",
     names: "Paul Adrian",
     lastNames: "Esteves Perez",
     image: {
       imagePath: "https://www.cristianmonroy.com/wp-content/uploads/2017/11/avatars-avataaars.png",
       imageDescription: "Avatar"
     },
     sede: "Cuenca",
     campus: "El vecino",
     career: "Sistemas",
     department: "Sistemas",
     emailInstitucional: "pesteves@ups.edu.ec",
     rol: "Colaborador"
   }
 ],
 classday: [
   {
     day: "Lunes",
     startTime: "17:00:00",
     endTime: "19:00:00"
   }
 ]
}
]
module.exports = {Horarios}