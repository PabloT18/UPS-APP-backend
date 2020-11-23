const { comprarJWT } = require('../helpers/jwr');
const { io } = require('../index');
const { usuarioConectado , usuarioDesconectado, grabarMensaje} = require('../controllers/socket');


// Mensajes de Sockets
io.on('connection', client => {
    console.log('Cliente conectado');


    // console.log(client.handshake.headers['x-token']);
    const [valido, uid] = comprarJWT(client.handshake.headers['x-token']);

    //Verificar autenticacion
    if (!valido) { return client.disconnect(); }

    //cliente autenticado
    usuarioConectado(uid);
    console.log("Cliente auntenticado", uid);


    //Ingresar al usuario a una sala en particular
    client.join(uid);

    //escucahr el mensaje personal 
    client.on('mensaje-personal', async (payload) => {
        // console.log(payload);

        await grabarMensaje(payload);

        io.to(payload.para).emit('mensaje-personal', payload);
    });



    // client.to(uid).emit;

    client.on('disconnect', () => {
        console.log('Cliente desconectado');
        usuarioDesconectado(uid);
    });

    client.on('mensaje', (payload) => {
        console.log('Mensaje', payload);

        io.emit('mensaje', { admin: 'Nuevo mensaje' });

    });


});
