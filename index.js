// importar modulos requeridos
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const app=express();
app.use(bodyparser.urlencoded({ extended: true }))
// Parse requests of content-type - "application/json"
app.use(bodyparser.json())

const dbconfig=require('./config/database.config.js');
const mongoose=require('mongoose');
mongoose.Promise=global.Promise
require('./app/routes/product.routes.js')(app);

mongoose.connect(dbconfig.url).then(()=>{
    console.log("conexion exitosa");
}).catch(err=>{
    console.log("conexion fallida");
    process.exit();
});



//midleware
app.use(express.json());
//Listen server port
var port = process.env.PORT || 3000;



app.get('/',(req,res)=>{
    res.json({
        "Message":"HOLA JSON"
    })
});

app.listen(port,()=>{
    console.log("Servidor en el puerto " + port);
});