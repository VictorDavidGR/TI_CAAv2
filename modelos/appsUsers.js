const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const AppUsersSchema=conexion.define('appsUsers',{
        idAAU:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        idUser:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        idApp:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        idRole:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
    });
    return AppUsersSchema;
}