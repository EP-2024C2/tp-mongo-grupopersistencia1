const {Componente} = require('../models')

const seedComponentes = async()=>{
    await Componente.insertMany([
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