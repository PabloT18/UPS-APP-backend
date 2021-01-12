///Configuracion de conexion a la base de datos

const mongoose =  require('mongoose');

const dbConection= async() => {

    try {

        await mongoose.connect(process.env.DB_CNN_UPS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log("DB UPS online ")
    } catch (error) {
        console.log(error);
        throw new Error("Error en la base de datos");
    }

}  

module.exports = {
    dbConection
}