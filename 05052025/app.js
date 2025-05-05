const express = require('express');

//creamos una instancia
const app=express();

//puerto
const port=3089;



//menejador de la solicitudes
app.get("/",(req,res)=>{
    //res.send("Hola mundo");
    res.sendFile("c:/Users/aaron/Escritorio/clases2025/web207/05052025/index.html");

});
//Salida del servidor
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});