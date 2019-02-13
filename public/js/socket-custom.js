var socket = io();

socket.on('connect', function () {
    console.log("Conectado al servidor");
});

socket.on('disconnect', function () {
    console.log("Se perdio conexion con el servidor");
})

socket.emit('enviarMensaje', {
    usuario: 'Javier',
    mensaje: 'Hola'
}, function (msj) {
    console.log("Respuesta servidor:", msj);
});

socket.on('enviarMensaje', function (mensaje) {
    console.log("Mensaje recibido", mensaje);
});