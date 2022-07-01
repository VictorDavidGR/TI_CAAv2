//importaciones del sistema
const express=require('express');
const path=require('path');
const session=require('express-session');

//importacion nuestras rutas
const admin=require('./rutas/adminRuta');
const usuarios=require('./rutas/usuariosRutas');

const app=express();

app.set('view engine','ejs');

app.use('/',express.static(path.join(__dirname,'webPages'))); //SITIO ESTÁTICO (SIN CONEXION A LA BD)

app.use(express.urlencoded({extended:true}));//RECIBIR DATOS DEL FORMULARIO TRUE PARA ARCHIVOS, FALSE SOLO TEXTO

app.use(session({
    secret:"cualquier texto",
    resave:true,
    saveUninitialized:true
}));

//rutas raiz
app.use('/',usuarios);
app.use('/admin',admin);

// conexion de puerto
const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log("Servidor en el puerto "+port);
});