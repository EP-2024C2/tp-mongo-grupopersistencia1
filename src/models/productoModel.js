const { Schema, default: mongoose } = require('mongoose')

const productoSchema = new Schema({
    nombre:{
        type: Schema.Types.String,
        required:true,
        unique: true
    },
    descripcion:{
        type:Schema.Types.String
    },
    precio:{
        type:Schema.Types.Number,
        required:true
    },
    pathImg:{
        type:Schema.Types.String
    },
    fabricantes:[{
        type:Schema.Types.ObjectId,
        ref:'Fabricante'
    }],
    componentes:[{
        type:Schema.Types.ObjectId,
        ref:'Componente'
    }]
})

module.exports = mongoose.model('Producto',productoSchema)