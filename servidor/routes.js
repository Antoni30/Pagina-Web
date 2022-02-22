const express = require('express');
const routes = express.Router();



routes.get('/',(req,res)=>{
   req.getConnection((err,conn)=>{
    if(err) return res.send(err);
        conn.query('SELECT * FROM agendar_cita',(err,rows)=>{
            if(err) return res.send(err);
            res.json(rows);
           })
   })
})

routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
     if(err) return res.send(err);
        const sqlInsert="INSERT INTO agendar_cita set ? ";
        conn.query(sqlInsert,[req.body],(err,rows)=>{
             if(err) return res.send(err);
             res.send("Cita ingresada");
            })
    })
 })
 
 routes.delete('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
     if(err) return res.send(err);
        const sqlInsert="DELETE FROM agendar_cita WHERE id = ?";
        conn.query(sqlInsert,[req.params.id],(err,rows)=>{
             if(err) return res.send(err);
             res.send("Cita eliminada");
            })
    })
 })

 routes.put('/:id',(req,res)=>{
    req.getConnection((err,conn)=>{
     if(err) return res.send(err);
        const sqlInsert="UPDATE agendar_cita SET ? WHERE id = ?";
        conn.query(sqlInsert,[req.body, req.params.id],(err,rows)=>{
             if(err) return res.send(err);
             res.send("Cita Actualizada");
            })
    })
 })
module.exports=routes