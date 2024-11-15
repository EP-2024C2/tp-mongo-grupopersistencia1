
const Joi = require('joi')



//Se usa fabricanteSchema cuando se crea un producto y fabricanteSchemaUpdate cuando se actualiza


const fabricanteSchema = Joi.object().keys({
    nombre: Joi.string().required().max(20).messages({
        "string.max": `'nombre' debe tener como máximo {#limit} caracteres`,
        "string.base": "'nombre' debe ser una cadena de texto",
        "string.empty":"'nombre' no puede estar vacio",
        "any.required":"'nombre' no puede estar vacio"
    }),
    direccion: Joi.string().max(120).required().messages({
        "string.max": `'direccion' debe tener como máximo {#limit} caracteres`,
        "string.base":"'direccion' debe ser una cadena de texto",
        "string.empty":"'direccion' no puede estar vacio",
        "any.required":"'direccion' no puede estar vacio"
    }),
    numeroContacto: Joi.string().length(10).required().messages({
        "string.length": `'numeroContacto' debe tener {#limit} caracteres`,
        "string.base": "'numeroContacto' debe ser una cadena de texto",
        "string.empty":"'numeroContacto' no puede estar vacio",
        "any.required":"'numeroContacto' no puede estar vacio"
    }),
    pathImgPerfil: Joi.string().uri().messages({
        "string.uri": "'pathImg' debe ser una URL válida",
    })
})


const fabricanteSchemaUpdate = Joi.object().keys({
    nombre: Joi.string().max(20).messages({
        "string.max": `'nombre' debe tener como máximo {#limit} caracteres`,
        "string.base": "'nombre' debe ser una cadena de texto"
    }),
    direccion: Joi.string().max(120).messages({
        "string.max": `'descripcion' debe tener como máximo {#limit} caracteres`,
        "string.base":"'descripcion' debe ser una cadena de texto"
    }),
    numeroContacto: Joi.string().length(10).messages({
        "string.length": `'numeroContacto' debe tener {#limit} caracteres`,
        "string.base": "'numeroContacto' debe ser una cadena de texto",
    }),
    pathImgPerfil: Joi.string().uri().messages({
        "string.uri": "'pathImg' debe ser una URL válida",
    })
})


module.exports = {
    fabricanteSchema,
    fabricanteSchemaUpdate
}