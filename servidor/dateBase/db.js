const mysql= require('mysql');
const conexion= mysql.createConnection({
    host:'localhost',
    user:'root@',
    password:'',
    database:'bdweb'
});
conexion.connect((erro)=>{
    if(erro){
        console.log("[mysql error]",erro);u
        return
    }
    console.log("Conectado!");
});
module.exports = conexion;