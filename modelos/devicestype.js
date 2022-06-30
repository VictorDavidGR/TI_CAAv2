const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const deviceTypeSchedule=conexion.define('devicetype',{
        idDeviceType:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        type:{
            type:Sequelize.STRING
        },
    });
    return RolesSchedule;
}