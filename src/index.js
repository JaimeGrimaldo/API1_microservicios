const express = require('express');
const res = require('express/lib/response');
const app = express();
const morgan = require("morgan");

// Configuraciones
app.set("port",3000 || process.env.PORT);
app.set("json spaces",2);

//Midlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended:false})); //Sirve para especificar lo que contendra el Json
app.use(express.json());

// Rutas
//app.use(require("./rutas/index"));
app.use(require("./rutas/alumnos"));


// Arrancando servidor
app.listen(app.get("port"), () => {
    console.log("Server funcionando en puerto",app.get("port"))
});