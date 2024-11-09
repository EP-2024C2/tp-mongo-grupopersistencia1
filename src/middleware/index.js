const mongoose = require("mongoose");

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

const validarId = (model) =>{  //Solo valida si el id es un objectid valido. La lógica de los errores está en los controladores
    return async(req,res,next) =>{
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID inválido" });
        }
        next()
    }
}


module.exports = {
    validarSchema,
    validarId
}
