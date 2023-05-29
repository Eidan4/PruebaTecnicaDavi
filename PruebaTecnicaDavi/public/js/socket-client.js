const socket = io();

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar = document.querySelector('#btnEnviar');


socket.on('connect', ()=>{
    console.log('Cliente Conectado', socket.id);
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';
});

socket.on('disconnect', ()=>{
    console.log('Cliente Conectado', socket.id);
    lblOnline.style.display = '';
    lblOffline.style.display = 'none';
});

socket.on('enviar-mensaje', (payload)=>{
    console.log(payload)
})

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value
    const payload = {
        mensaje
    }
    socket.emit('enviar-mensaje',payload) 
})