const { Schema, default:mongoose} = require('mongoose')

const componenteSchema = new Schema({
    nombre:{
        type: Schema.Types.String,
        required:true,
        unique: true
    },
    descripcion:{
        type:Schema.Types.String
    },
    productos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto'
      }]
})

module.exports = mongoose.model('Componente', componenteSchema)