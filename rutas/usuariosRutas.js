// Agregamos las variables necesita la pagina para arrancar las rutas
const express=require('express');

const ruta=express.Router();

// constantes para recuperar informacion de cada tabla
const {Usuario}=require('../conexion');

// Ruta login manda a renderizar la vista de inicio de sesion
ruta.get('/login',(req,res)=>{
    res.render('login',{nombre:'anónimo'});
});

// una vez que se reciben los datos y se comparan con la base de datos
ruta.post('/login',(req,res)=>{
    Usuario.findAll({
        where:{
            // fase de comparacion
            userName:req.body.usuarioLogin,
            numEmpleado:req.body.passwordLogin
        }
    })
    // se crea una division con condicionales if para detectar si se inicia como administrador o como usuario
    .then((usu)=>{
        if(usu==""){
            res.redirect('/logout');
        }
        else{
            if(usu[0].tipo=="usuario"){
             req.session.usuario=usu[0].nombre;
             res.redirect('/inicioUsuario');
             console.log("usuario")   
            }
            else if(usu[0].tipo=="admin"){
                console.log("admin")
                req.session.usuario=usu[0].nombre;
             res.redirect('/admin');
            }
        }
       res.end();
    })
    .catch(()=>{
        res.status(400).send("Error al recuperar datos");
    });
});

ruta.get('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/');
});

// Se crea la ruta y se renderiza la vista de inico
ruta.get('/',(req,res)=>{
    res.render('homeWeb');
});

ruta.get('/inicioUsuario',(req,res)=>{
    res.render('inicioUsuario');
});

// Ruta de insertar que renderisa el formulario de crear cuenta
ruta.get('/insertar',(req,res)=>{ // como quieres que se llame la extension
    res.render('insertarDatos');  // la vista que va a renderizar
});

ruta.post('/guardarUsuario',(req,res)=>{  // la se guardan los datos
    Usuario.create(req.body)
    .then(()=>{
        res.redirect('/');         // muestra los datos enla ruta mostrar
    })
    .catch((err)=>{
        res.status(400).send("Error al insertar el usuario "+err);
    })
});

// Recupera informacion de la base de datos y muestra solo lo que se recibio del formulario anterior
ruta.get('/mostrar',(req, res)=>{
    Usuario.findAll()   //Lee los datos del modelo usuario en la bd
    .then((usu)=>{
        res.render('mostrarDatos',{usuarios:usu});
    })
    .catch((err)=>{
        console.log("Error al recuperar la información "+err);
    })
    .catch((err)=>{
        console.log("Error al recuperar la información "+err);
    });
});

ruta.get('/buscarId/:id',(req, res)=>{
    Usuario.findAll({
        where:{
            idUser:req.params.id
        }
    })
    .then((usu)=>{
        console.log(usu);
        res.render('modificarUsuario',{usuario:usu, numEmpleado:req.session.usuario});
    })
    .catch((err)=>{
        console.log("Error al buscar el usuario "+err);
    });
});

// Ruta para modifcar datos de un usario 
ruta.post('/modificarUsuario',(req, res)=>{
// Se compara los datos en bd con los que se reciben en formulario 
    var idUserM=req.body.idUserM;
    const obj={
        numEmpleado:req.body.numEmpleadoM,
        userName:req.body.userNameM,
        nameUser:req.body.nameUserM,
        birthdayUser:req.body.birthdayUserM,
        textMail:req.body.textMailM,
        idDept:req.body.idDeptM,
        idArea:req.body.idAreaM,
        tipo:req.body.tipoM
    }
    //Actualiza los datos conel uso de un update
    Usuario.update(obj,{where:{idUser:idUserM}})
    .then(()=>{
        res.redirect('/admin');
    })
    .catch((err)=>{
        console.log("Error al modificar el usuario "+err);
    });
});

ruta.get('/borradoLogico/:id',(req,res)=>{
    var obj={
        status:false
    }
    Usuario.update(obj,{where:{idUser:req.params.id}})
    .then(()=>{
        res.redirect('/admin');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
});

ruta.get('/borradoFisico/:id',(req, res)=>{
    Usuario.destroy({where:{idUser:req.params.id}})
    .then(()=>{
        res.redirect('/admin');
    })
    .catch((err)=>{
        res.status(400).send("Error al modificar el usuario "+err);
    });
});

module.exports=ruta;