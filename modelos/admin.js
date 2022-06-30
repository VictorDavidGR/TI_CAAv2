// Declaramos constante Sequelize para crear la conexion 
const Sequelize=require('sequelize');

// Exportamos la tabla de Administrador
module.exports=(conexion)=>{
    const AdminSchema=conexion.define('admin',{
        // Se recupera la informacion de cada columna de infromacion como el id el nombre y la contraseña
        id:{
            type:Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreUsu:{
            type:Sequelize.STRING
        },
        contraseñaAdmin:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.BOOLEAN
        }
        
    });
    return AdminSchema;
}