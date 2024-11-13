const {Producto} = require('../models')

const seedProductos = async()=>{
    await Producto.insertMany([
        {
            nombre:'PC',
            descripcion:'Pc gamer con lucesitas',
            precio:350
        },
        {
            nombre:'Monitor',
            descripcion:'Monitor 144hz',
            precio:120
        }
    ])
    
}
module.exports = seedProductos