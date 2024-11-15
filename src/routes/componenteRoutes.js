const { Router } = require('express')
const controllerComponentes = require('../controllers/componenteControllers')
const { componenteSchema, componenteSchemaUpdate } = require('../schemas/componenteSchema') 
const {Componente} = require('../models')
const {validarSchema,validarId} = require('../middleware')

const router = Router()

router.get('/', controllerComponentes.getComponentes)

router.get('/:id',validarId(),controllerComponentes.getComponenteById)

router.post('/', validarSchema(componenteSchema),controllerComponentes.crearComponente)

router.put('/:id',validarId(),validarSchema(componenteSchemaUpdate), controllerComponentes.modificarComponente)

router.delete('/:id',validarId(), controllerComponentes.borrarComponente)

router.get('/:id/productos',validarId(), controllerComponentes.getProductosByComponente)

module.exports = router