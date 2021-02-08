const Clases = [
    {
        class : {
          asignatura : {
            id : 25,
            code : '4546',
            name : 'Programacion',
            type : "Académica"
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
            rol: "Profesor"
          }
        ],
        studentes: [
          {
            id : '2885',
            names : 'Andres',
            lastNames : 'Ochoa',
            image: {
              imagePath: 'string',
              imageDescription: 'Principal'
            },
            sede: "Cuenca",
            campus: "El vecino",
            career: "Sistemas",
            department: "Sistemas",
            emailInstitucional: "pandrade@ups.edu.ec",
            rol: "Estudiante"
          },
          {
            id : '2886',
            names : 'Estafanny',
            lastNames : 'Castillo',
            image: {
              imagePath: 'string',
              imageDescription: 'Principal'
            },
            sede: "Cuenca",
            campus: "El vecino",
            career: "Sistemas",
            department: "Sistemas",
            emailInstitucional: "ecastillo@ups.edu.ec",
            rol: "Estudiante"
          }
        ]
      }
]




module.exports = {Clases}