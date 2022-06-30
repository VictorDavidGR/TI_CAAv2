const express=require('express');

const ruta=express.Router();

// cada constante es un nombre de tabla
const {Admin}=require('../conexion');
const {Usuario}=require('../conexion');

// recupera con get la peticion y todos los usuarios
ruta.get('/',(req,res)=>{
    Usuario.findAll()
            .then((usu)=>{       
                res.render('mostrarDatos',{usuarios:usu});
            })
 });

ruta.get('/insertarAdmin',(req,res)=>{
    res.render('insertarAdmin');
});

ruta.post('/guardarAdmin',(req, res)=>{
    Admin.create(req.body)
    .then(()=>{
        res.redirect('/');
    })
    .catch((err)=>{
        res.status(400).send("Error al crear el producto "+err);
    });
});

module.exports=ruta;