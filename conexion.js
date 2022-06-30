// Conexion MYSQL, modelos de tabla y ruta de recuperacion
const Sequelize=require('sequelize');
                            // Ruta de recuperacion si no existe la funcion de const dara error
const UsuarioModelo=require('./modelos/usuarios');

//secuencia para conectar con workbench
                            //bd   //usu  //contraseña
const conexion=new Sequelize('bd_bypasav2','root',' ', {
    host:'localhost',
    dialect:'mysql'
});

// Conexion con tabla usuario
const Usuario=UsuarioModelo(conexion);
conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a MySql");
})
.catch((err)=>{
    console.log("Error al conectarse a MySql "+err);
});

//UsuarioModelo.belongsTo(AreasModelo,{foreignKey : "idArea"});
//AreasModelo.hasMany(UsuarioModelo,{foreignKey : "idArea"});

// Exportamos informacion
module.exports={
    Usuario
    //Preguntas,
    //Respuestas
}