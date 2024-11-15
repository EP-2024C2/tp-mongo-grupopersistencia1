const { Router } = require('express')
const controllerFabricantes = require('../controllers/fabricanteControllers')
const {fabricanteSchema,fabricanteSchemaUpdate} = require('../schemas/fabricanteSchema')
const {validarSchema,validarId} = require('../middleware')
const {Fabricante}= require('../models')

const router = Router()


router.get('/',controllerFabricantes.getFabricantes)

router.get('/:id',validarId(Fabricante), controllerFabricantes.getFabricantesById)

router.post('/',validarSchema(fabricanteSchema),controllerFabricantes.crearFabricante) 

router.put('/:id',validarId(Fabricante),validarSchema(fabricanteSchemaUpdate),controllerFabricantes.modificarFabricante) 

router.delete('/:id',validarId(Fabricante), controllerFabricantes.borrarFabricante)

router.get('/:id/productos',validarId(Fabricante),controllerFabricantes.getProductosByFabricante)


module.exports=router