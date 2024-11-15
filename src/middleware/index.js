const mongoose = require("mongoose");

const validarSchema = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            next()
        } catch (error) {
            
            return res.status(400).json({ message: error.message });
        }
    };
};

const validarId = () =>{  //Solo comprueba si el id es un objectid valido. La lógica de los errores está en los controladores
    return async(req,res,next) =>{
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: `ID invalido: '${id}' no es un ObjectId` });
        }
        next()
    }
}


module.exports = {
    validarSchema,
    validarId
}
