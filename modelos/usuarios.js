const Sequelize=require('sequelize');

module.exports=(conexion)=>{
    const UsuarioSchema=conexion.define('usuario',{
        idUser:{
            type:Sequelize.INTEGER,   //Tipo de dato
            primaryKey:true,          //Clave primaria no se puede repetir
            autoIncrement:true        //Que lo maneje mysql
        },
        numEmpleado:{
            type:Sequelize.STRING
        },
        userName:{
            type:Sequelize.STRING
        },
        nameUser:{
            type:Sequelize.STRING
        },
        birthdayUser:{
            type:Sequelize.STRING
        },
        textMail:{
            type:Sequelize.STRING        
        },
        idDept:{
            type:Sequelize.INTEGER
        },
        linkLOI:{
            type:Sequelize.STRING
        },
        status:{
            type:Sequelize.BOOLEAN
        },
        tipo:{
            type:Sequelize.STRING
        },
        idArea:{
            type:Sequelize.INTEGER,
        }
    });
    return UsuarioSchema;
}