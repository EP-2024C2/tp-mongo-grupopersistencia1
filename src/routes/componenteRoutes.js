const { Router } = require('express')
const controllerComponentes = require('../controllers/componenteControllers')
const { componenteSchema, validador } = require('../middleware/') 

const router = Router()

router.get('/', controllerComponentes.getComponentes)

router.get('/:id', controllerComponentes.getComponenteById)

router.post('/', validador(componenteSchema), controllerComponentes.crearComponente)

router.put('/:id',validador(componenteSchema,true), controllerComponentes.modificarComponente)

router.delete('/:id', controllerComponentes.borrarComponente)

router.get('/:id/productos', controllerComponentes.getProductosByComponente)

module.exports = router