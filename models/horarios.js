const { Usuario5, Usuario6, Usuario7 } = require('../models/user');

const Clase1 = {
  id: 1,
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
};

const Clase1Days = [
  {
    day: "Lunes",
    startTime: "09:00:00",
    endTime: "11:00:00"
  },
  {
    day: "Miercoles",
    startTime: "09:00:00",
    endTime: "11:00:00"
  },
  {
    day: "Viernes",
    startTime: "09:00:00",
    endTime: "11:00:00"
  }
];

const Clase2 = {
  id: 2,
  asignatura: {
    id: 2,
    code: "4547",
    name: "Programacion II",
    type: "Académica"
  },
  credits: 6,
  hours: 6,
  group: 2,
  level: 2,
  aula: "AC 07",
  sede: "Cuenca"
};


const Clase2Days = [
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
];
const Clase3 = {
  id: 3,
  asignatura: {
    id: 3,
    code: "4548",
    name: "Telematica",
    type: "Académica"
  },
  credits: 4,
  hours: 4,
  group: 1,
  level: 1,
  aula: "AC 03",
  sede: "Cuenca"
};

const Clase3Days = [
  {
    day: "Lunes",
    startTime: "17:00:00",
    endTime: "19:00:00"
  },
  {
    day: "Martes",
    startTime: "17:00:00",
    endTime: "18:00:00"
  },
  {
    day: "Miercoles",
    startTime: "17:00:00",
    endTime: "18:00:00"
  },
];

const Programacion = {
  class: Clase1,
  teachers: [
    Usuario5.user
  ],
  classday: Clase1Days
};

const Programacion2 = {
  class: Clase2,
  teachers: [
    Usuario6.user
  ],
  classday: Clase2Days
};

const Telematica = {
  class: Clase3,
  teachers: [
    Usuario6.user,
    Usuario7.user
  ],
  classday: Clase3Days
};

const Horario1 = [
  Programacion,
  Programacion2,
  Telematica,
];

const Horario2 = [
  Programacion,
  Programacion2,
  Telematica,
];

const Horario3 = [
  Programacion2,
  Telematica,
];


const Horario4 = [
  Telematica,
];

const Horario5 = [
  Programacion
];

const Horario6 = [
  Programacion2,
  Telematica,
];

const Horario7 = [
  Telematica,
];

const HorarioDef = [
  Programacion2,
  Telematica,
];


module.exports = {
  Horario1,
  Horario2,
  Horario3,
  Horario4,
  Horario5,
  Horario6,
  Horario7,
  HorarioDef
}


// const Horarios = [
//   {
//     class: Clase1,
//     // class2: {
//     //   id:1,
//     //    asignatura: {
//     //     id: 1,
//     //     code: "4546",
//     //     name: "Programacion",
//     //     type: "Académica"
//     //   },
//     //   credits: 6,
//     //   hours: 6,
//     //   group: 1,
//     //   level: 1,
//     //   aula: "AC 05",
//     //   sede: "Cuenca"
//     // },
//     teachers: [
//       {
//         id: "889",
//         names: "Paul Adrian",
//         lastNames: "Andrade Perez",
//         image: {
//           imagePath: "https://www.cristianmonroy.com/wp-content/uploads/2017/11/avatars-avataaars.png",
//           imageDescription: "Avatar"
//         },
//         sede: "Cuenca",
//         campus: "El vecino",
//         career: "Sistemas",
//         department: "Sistemas",
//         emailInstitucional: "pandrade@ups.edu.ec",
//         rol: "Colaborador"
//       }
//     ],
//     classday: [
//       {
//         day: "Lunes",
//         startTime: "09:00:00",
//         endTime: "10:00:00"
//       },
//       {
//         day: "Miercoles",
//         startTime: "09:00:00",
//         endTime: "10:00:00"
//       },
//       {
//         day: "Viernes",
//         startTime: "09:00:00",
//         endTime: "10:00:00"
//       }
//     ]
//   },
//   {
//       class : {
//         id:2,
//       asignatura: {
//       id: 1,
//       code: "4547",
//       name: "Programacion II",
//       type: "Académica"
//      },
//      credits: 6,
//      hours: 6,
//      group: 2,
//      level: 2,
//      aula: "AC 07",
//      sede: "Cuenca"
//    },
//    teachers: [
//      {
//        id: "890",
//        names: "Bolivar Andres",
//        lastNames: "Andrade Solorzano",
//        image: {
//          imagePath: "https://www.cristianmonroy.com/wp-content/uploads/2017/11/avatars-avataaars.png",
//          imageDescription: "Avatar"
//        },
//        sede: "Cuenca",
//        campus: "El vecino",
//        career: "Sistemas",
//        department: "Sistemas",
//        emailInstitucional: "andrade@ups.edu.ec",
//        rol: "Colaborador"
//      }
//    ],
//    classday: [
//      {
//        day: "Martes",
//        startTime: "11:00:00",
//        endTime: "13:00:00"
//      },
//      {
//       day: "Miercoles",
//       startTime: "11:00:00",
//       endTime: "13:00:00"
//     },
//     {
//       day: "Sabado",
//       startTime: "11:00:00",
//       endTime: "13:00:00"
//     }
//    ]
//  },
//  {
//   class : {
//     id:3,
//   asignatura: {
//   id: 1,
//   code: "4548",
//   name: "Telematica",
//   type: "Académica"
//  },
//  credits: 6,
//  hours: 6,
//  group: 1,
//  level: 1,
//  aula: "AC 03",
//  sede: "Cuenca"
// },
// teachers: [
//  {
//    id: "891",
//    names: "Paul Adrian",
//    lastNames: "Esteves Perez",
//    image: {
//      imagePath: "https://www.cristianmonroy.com/wp-content/uploads/2017/11/avatars-avataaars.png",
//      imageDescription: "Avatar"
//    },
//    sede: "Cuenca",
//    campus: "El vecino",
//    career: "Sistemas",
//    department: "Sistemas",
//    emailInstitucional: "pesteves@ups.edu.ec",
//    rol: "Colaborador"
//  }
// ],
// classday: [
//  {
//    day: "Lunes",
//    startTime: "17:00:00",
//    endTime: "19:00:00"
//  }
// ]
// }
// ]