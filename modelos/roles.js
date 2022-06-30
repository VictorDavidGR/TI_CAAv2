const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const RolesSchema=conexion.define('roles',{
        idRole:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        nameRole:{
            type:Sequelize.STRING
        },
    });
    return RolesSchema;
}