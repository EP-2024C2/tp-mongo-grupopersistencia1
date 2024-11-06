const { Schema, default: mongoose } = require('mongoose')

const fabricanteSchema = new Schema({
    nombre:{
        type: Schema.Types.String,
        required:true
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
    }
})

module.exports = mongoose.model('Fabricante',fabricanteSchema)