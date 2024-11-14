const { Schema, default: mongoose } = require('mongoose')

const fabricanteSchema = new Schema({
    nombre:{
        type: Schema.Types.String,
        required:true,
        unique: true
    },
    direccion:{
        type:Schema.Types.String,
        required:true
    },
    numeroContacto:{
        type:Schema.Types.String,
        required:true
    },
    pathImgPerfil:{
        type:Schema.Types.String
    },
    productos: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Producto',
      }]
})

module.exports = mongoose.model('Fabricante',fabricanteSchema)