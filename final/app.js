const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//Manejo de peticion de http por medio de req
app.use(bodyParser.urlencoded({extended:false}));

//Configuracion de plantillas
app.set('view engine','ejs');

//conexion a la DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: '123456',
    database: 'node_crud',
    port: 3308
});


//validacion
db.connect(err => {
    if(err){
        console.error('Error en la conexion de la DB',err);
    }else{
        console.log('Conexion realizada de forma correcta :3');

    }
});

//inicio de server
const port = 3008;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});

