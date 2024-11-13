const mongoose = require('mongoose')
//const MONGO_URL = process.env.DB_URL || 'mongodb://admin:admin1234@mongodb:27017/'  //Esta url se usa cuando la app se ejecuta desde el contenedor
const MONGO_URL = 'mongodb://admin:admin1234@localhost:27017/'  //esta url se utiliza desde el localhost

const connectToDatabase = async () =>{
    try{
        await mongoose.connect(MONGO_URL, {
            dbName: 'Productos',
            connectTimeoutMS: 30000
        })
        console.log('Conexion exitosa')
    }
    catch(error){
        console.log('Error al conectarse a la base de datos:', error.message)
    }
}
 
module.exports = {
    connectToDatabase,
    mongoose
}