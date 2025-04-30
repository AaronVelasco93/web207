//importar un modulo
const serverHTTP = require('http');

//definir un puerto
const port=3029;


//crear el servidor
const server = serverHTTP.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text-plain'});
    res.end('Hola desde un server en Node con el modulo http de node bandera 1');
});
/*
server.listen(port,()=>{
    console.log(`Servidor funcional por la URL: http://127.0.0.1:${port}`)
});
*/

server.listen(5048);