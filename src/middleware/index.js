const mongoose = require("mongoose");

const validarSchema = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next();  
        } catch (error) {
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
