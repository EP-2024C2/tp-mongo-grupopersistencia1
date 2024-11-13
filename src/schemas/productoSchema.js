
const Joi = require('joi')



//Se usa productoSchema cuando se crea un producto y productoSchemaUpdate cuando se actualiza




const productoSchema = Joi.object().keys({
    nombre: Joi.string().required().max(20).messages({
        "string.max": `'nombre' debe tener como máximo {#limit} caracteres`,
        "string.base": "'nombre' debe ser una cadena de texto",
        "string.empty":"'nombre' no puede estar vacio",
        "any.required":"'nombre' no puede estar vacio"
    }),
    descripcion: Joi.string().max(120).messages({
        "string.max": `'descripcion' debe tener como máximo {#limit} caracteres`,
        "string.base":"'descripcion' debe ser una cadena de texto",
        "string.empty":"'descripcion' no puede estar vacio",
    }),
    precio: Joi.number().required().messages({
        "number.base": "'precio' debe ser un numero",
        "any.required": "'precio' no puede estar vacío"
    }),
    pathImg: Joi.string().uri().messages({
        "string.uri": "'pathImg' debe ser una URL válida",
    })
})


const productoSchemaUpdate = Joi.object().keys({
    nombre: Joi.string().max(20).messages({
        "string.max": `'nombre' debe tener como máximo {#limit} caracteres`,
        "string.base": "'nombre' debe ser una cadena de texto"
    }),
    descripcion: Joi.string().max(120).messages({
        "string.max": `'descripcion' debe tener como máximo {#limit} caracteres`,
        "string.base":"'descripcion' debe ser una cadena de texto"
    }),
    precio: Joi.number().messages({
        "number.base": "'precio' debe ser un numero"
    }),
    pathImg: Joi.string().uri().messages({
        "string.uri": "'pathImg' debe ser una URL válida",
    })
})

module.exports = {
    productoSchema,
    productoSchemaUpdate
}