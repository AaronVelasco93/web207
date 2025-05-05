const  express = require('express');
const path = require('path');

const router = express.Router();

//Ruta principal

router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/index.html"));
});

router.get("/registros",(req,res)=>{
    res.sendFile(path.join(__dirname,"../views/registros.html"));
});
module.exports=router;