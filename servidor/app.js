const express = require('express');
const app = express();
const conexion = require("./dateBase/db");

app.get('/',(req,res)=>{
    conexion.query('SELECT * FROM agendar_cita',(error,results)=>{
        if(error){
            throw error;
        }else{
            res.send(results);
        }
    });
});
/*app.get("/",(req,res)=>{
    const sqlInsert="INSERT INTO agendar_cita(IDCita, Nombre, Correo, Telefono, Celular, Genero, Fecha, Hora, Tratamiento) VALUES ('','gabriela','gagonzales1@espe.edu.ec','023066495','0979736067','masculion','2022-02-19','11:11','Tratamientos cosméticos faciales')";
    conexion.query(sqlInsert,(err,result)=>{
        res.send("Hola mundo");
    })
});*/
app.listen(3001,()=>{
    console.log('server corriendo en http://localhoster:3001');
});