const {Fabricante} = require('../models')

const seedFabricantes = async()=>{
    await Fabricante.insertMany([
        {
            nombre:'LG',
            direccion:'pedro diaz 123',
            numeroContacto:'1154329876'
        },
        {
            nombre:'HP',
            direccion:'origone 1231',
            numeroContacto:'11231563123'
        }
    ])
    
}
module.exports = seedFabricantes