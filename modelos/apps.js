const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const AppsSchedule=conexion.define('apps',{
        idApp:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        nameApp:{
            type:Sequelize.STRING
        },
    });
    return AppsSchedule;
}