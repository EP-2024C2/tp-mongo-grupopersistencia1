
const Joi = require('joi')

const productoSchema = Joi.object().keys({
    nombre: Joi.string().required().max(20).messages({
        "string.max": `'nombre' debe tener como máximo {#limit} caracteres`,
        "string.base": "'nombre' debe ser una cadena de texto",
        "any.required":"'nombre' no puede estar vacio"
    }),
    descripcion: Joi.string().max(120).messages({
        "string.max": `'descripcion' debe tener como máximo {#limit} caracteres`,
        "string.base":"'descripcion' debe ser una cadena de texto"
    }),
    precio: Joi.number().required().messages({
        "number.base": "'precio' debe ser un numero",
        "any.required": "'precio' no puede estar vacío"
    }),
    pathImg: Joi.string().uri().messages({
        "string.uri": "'pathImg' debe ser una URL válida",
    })
})



module.exports = {
    productoSchema
}