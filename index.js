const express = require('express');
const path = require('path');
require('dotenv').config();



//DdataBase config

// require('./database/config').dbConection();


// App de Express
const app = express();

//Configurar de lectutra y parseo del Body (JSON)
app.use(express.json());


// Node Server
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/socket');


// Path público
const publicPath = path.resolve( __dirname, 'public' );
app.use( express.static( publicPath ) );



//Mis rutas
app.use( '/api/ups', require('./routes/ups_data' ));
app.use( '/api/loginups', require('./routes/login' ));
app.use( '/api/est/', require('./routes/user_ups' ));


app.use( '/api/login', require('./routes/auth' ));
app.use( '/api/usuarios', require('./routes/usuarios' ));
app.use( '/api/mensajes', require('./routes/mensajes' ));



server.listen( process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log('Servidor corriendo en puerto', process.env.PORT );

});


