import express from 'express'
import rutas  from './rutas/rutas.js'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

//crear objeto express
const app = express()

//configuracion de conexion a mongo
mongoose.connect('mongodb://localhost/Peliculas', 
                  {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                  } 
)

//configuracion de bodyparser: para json exlusivamente
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(cors({origin: true, credentials: true}));  


//utilizar el archivo de rutas
rutas(app)

//crear y ejecutar servidor:
app.listen( 5010 , function(){
    console.log("servidor inicializado en puerto 5010")
} )