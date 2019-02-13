const {io} = require('../server');

io.on('connection',(client)=>{
    console.log("Usuario conectado");
    client.on('disconnect',function(){
        console.log("Usuario desconectado");
    });

    client.emit('enviarMensaje',{
        usuario:'admin',
        mensaje: 'Bienvenido a esta aplicación'
    })

    client.on('enviarMensaje',(data,callback)=>{
            console.log("Data",data);
            client.broadcast.emit('enviarMensaje',data);
        /*if(msj.usuario){
            callback({
                resp:'Respuesta Exitosa'
            })
        }else{
            callback({
                resp:'Error en envio de mensaje'
            })
        }*/
    });
});

module.exports = io;