const { Router } = require('express')
const controllerFabricantes = require('../controllers/fabricanteControllers')
const {fabricanteSchema,fabricanteSchemaUpdate} = require('../schemas/fabricanteSchema')
const {validarSchema,validarId} = require('../middleware')
const {Fabricante}= require('../models')

const router = Router()


router.get('/',controllerFabricantes.getFabricantes)

router.get('/:id',validarId(), controllerFabricantes.getFabricantesById)

router.post('/',validarSchema(fabricanteSchema),controllerFabricantes.crearFabricante) 

router.put('/:id',validarId(),validarSchema(fabricanteSchemaUpdate),controllerFabricantes.modificarFabricante) 

router.delete('/:id',validarId(), controllerFabricantes.borrarFabricante)

router.get('/:id/productos',validarId(),controllerFabricantes.getProductosByFabricante)



module.exports=router