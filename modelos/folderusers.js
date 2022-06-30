const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const FolderUsersSchema=conexion.define('foldersUsers',{
        idFAU:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        idUser:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        idFolder:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
        idRole:{
            type:Sequelize.INTEGER,
            foreingKey:true
        },
    });
    return FolderUsersSchema;
}