const {componente} = require('../models')

const seedComponentes = async()=>{
    await componente.insertMany([
        {
            nombre:'Procesador',
            descripcion:'i3 9100f'
        },
        {
            nombre:'pantalla led',
            descripcion:'pantalla 4k'
        }
    ])
    
}
module.exports = seedComponentes