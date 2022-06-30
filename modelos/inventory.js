const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const InventorySchema=conexion.define('inventory',{
        idInventory:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        hostName:{
            type:Sequelize.STRING
        },
        serialNumber:{
            type:Sequelize.STRING
        },
        ram:{
            type:Sequelize.STRING
        },
        rom:{
            type:Sequelize.STRING
        },
        cpu:{
            type:Sequelize.STRING
        },
        extraNotes:{
            type:Sequelize.STRING
        },
        available:{
            type:Sequelize.STRING
        },
        idDeviceType:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        idUser:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        idModel:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        status:{
            type:Sequelize.INTEGER
        },
    });
    return InventorySchema;
}