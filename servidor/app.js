const express = require('express');
const mysql = require('mysql');
const myconn= require('express-myconnection');
const app = express();
const routes= require('./routes');
const cors = require('cors');

const dbOptions={
    host:'localhost',
    user:'root@',
    password:'',
    database:'bdweb'
}

app.set('port', process.env.PORT || 3001);


app.use(cors());
app.use(myconn(mysql,dbOptions,'single'));
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Servidor Activo")
})
app.use('/api',routes)



app.listen(app.get('port'),()=>{
    console.log('server corriendo en http://localhost:'+app.get('port'));
});