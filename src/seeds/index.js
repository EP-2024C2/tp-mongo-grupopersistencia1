const {Producto,Fabricante,Componente} = require('../models')
const seedProductos = require('./productoSeeds')
const seedComponentes = require('./componenteSeeds')
const seedFabricantes = require('./fabricanteSeeds')

const cleanAndSeed = async()=>{
    try{
        await Producto.deleteMany({})
        await Fabricante.deleteMany({})
        await Componente.deleteMany({})
        await seedProductos()
        await seedComponentes()
        await seedFabricantes()
        console.log('Todos los datos insertados')
    }
    catch(error){
        console.log('Error al insertar datos',error.message)
    }
}

module.exports = cleanAndSeed