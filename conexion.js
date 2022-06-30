// Conexion MYSQL, modelos de tabla y ruta de recuperacion
const Sequelize=require('sequelize');
                            // Ruta de recuperacion si no existe la funcion de const dara error
const UsuarioModelo=require('./modelos/usuarios');
const AppsModelo=require('./modelos/apps');
const AppsUsersModelo=require('./modelos/appsUsers');
const DepartmentsModelo=require('./modelos/departments');
const devicesTypeModelo=require('./modelos/devicestype');
const FolderUsersModelo=require('./modelos/folderusers');
const InventoryModelo=require('./modelos/inventory');
const ManagersModelo=require('./modelos/managers');
const RolesModelo=require('./modelos/roles');

//secuencia para conectar con workbench
                            //bd   //usu  //contraseña
const conexion=new Sequelize('bd_bypasav2','root','', {
    host:'localhost',
    dialect:'mysql'
});

// Conexion con tabla usuario
const Usuario=UsuarioModelo(conexion);
const Apps=AppsModelo(conexion);
const AppsUsers=AppsUsersModelo(conexion);
const Department=DepartmentsModelo(conexion);
const DevicesType=devicesTypeModelo(conexion);
const FolderUsers=FolderUsersModelo(conexion);
const Inventory=InventoryModelo(conexion);
const Managers=ManagersModelo(conexion);
const Roles=RolesModelo(conexion);
conexion.sync({force:false})
.then(()=>{
    console.log("Conectado a MySql");
})
.catch((err)=>{
    console.log("Error al conectarse a MySql "+err);
});

//UsuarioModelo.belongsTo(AreasModelo,{foreignKey : "idArea"});
//AreasModelo.hasMany(UsuarioModelo,{foreignKey : "idArea"});

// Exportamos informacion
module.exports={
    Usuario,
    Apps,
    AppsUsers,
    Department,
    DevicesType,
    FolderUsers,
    Inventory,
    Managers,
    Roles
}