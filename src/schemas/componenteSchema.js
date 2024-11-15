
const Joi = require('joi')



//Se usa componenteSchema cuando se crea un producto y componenteSchemaUpdate cuando se actualiza


const componenteSchema = Joi.object().keys({
    nombre: Joi.string().required().max(20).messages({
        "string.max": `'nombre' debe tener como máximo {#limit} caracteres`,
        "string.base": "'nombre' debe ser una cadena de texto",
        "string.empty":"'nombre' no puede estar vacio",
        "any.required":"'nombre' no puede estar vacio"
    }),
    descripcion: Joi.string().max(120).messages({
        "string.max": `'descripcion' debe tener como máximo {#limit} caracteres`,
        "string.base":"'descripcion' debe ser una cadena de texto"
    })
})


const componenteSchemaUpdate = Joi.object().keys({
    nombre: Joi.string().max(20).messages({
        "string.max": `'nombre' debe tener como máximo {#limit} caracteres`,
        "string.base": "'nombre' debe ser una cadena de texto"
    }),
    descripcion: Joi.string().max(120).messages({
        "string.max": `'descripcion' debe tener como máximo {#limit} caracteres`,
        "string.base":"'descripcion' debe ser una cadena de texto"
    })
})

module.exports = {
    componenteSchema,
    componenteSchemaUpdate
}