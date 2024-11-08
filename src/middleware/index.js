const Joi = require('joi');
const validarSchema = (schema) => {
    return async (req, res, next) => {
        try {
            // Validar el cuerpo de la solicitud usando el esquema
            await schema.validateAsync(req.body);
            next();  // Si la validación pasa, se pasa al siguiente middleware o controlador
        } catch (error) {
            // En caso de error, se captura y se responde con el mensaje de error
            return res.status(400).json({ message: error.message });
        }
    };
};
module.exports = {
    validarSchema
}
