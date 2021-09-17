const mensajes = ["Oscar","Ana","Nicolay","Yesica","Diego","Laura","Carolina","Paulina"];

const randomMsg = () => {
    const mensaje = mensajes[Math.floor(Math.random() * mensajes.length)];
    console.log(mensaje);
}

module.exports = { randomMsg };