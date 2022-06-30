const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const DepartmentsSchema=conexion.define('departments',{
        idDept:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        nameDept:{
            type:Sequelize.STRING
        },
        idPrintDept:{
            type:Sequelize.INTEGER
        },
        pssPrintDept:{
            type:Sequelize.INTEGER
        },
        idPrinter:{
            type:Sequelize.INTEGER, //clave foranea
            foreingKey:true
        },
    });
    return DepartmentsSchema;
}