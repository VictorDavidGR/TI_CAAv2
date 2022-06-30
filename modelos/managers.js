const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const ManagersSchema=conexion.define('managers',{
        idManager:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        idDept:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        idUser:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
    });
    return ManagersSchema;
}