const { Router } = require('express')
const controllerProductos = require('../controllers/productoControllers')
const {validarSchema,validarId} = require('../middleware')
const {productoSchema, productoSchemaUpdate} = require('../schemas/productoSchema')
const { Producto } = require('../models')


const router = Router()

router.get('/', controllerProductos.getProductos ) 

router.get('/:id', validarId(),controllerProductos.getProductosById ) 

router.post('/', validarSchema(productoSchema),controllerProductos.crearProducto) 

router.put('/:id', validarId(),validarSchema(productoSchemaUpdate),controllerProductos.modificarProducto) 

router.delete('/:id', validarId(), controllerProductos.borrarProducto) 

router.post('/:id/fabricantes',validarId(), controllerProductos.asociarProductoConFabricante) 

router.get('/:id/fabricantes',validarId(), controllerProductos.getFabricantesByProducto) 

router.post('/:id/componentes',validarId(),controllerProductos.asociarProductoConComponente) 

router.get('/:id/componentes',validarId(), controllerProductos.getComponentesByProducto) 

router.put('/:id/componentesDelete', validarId(), controllerProductos.desasociarComponente)

router.put('/:id/fabricantesDelete', validarId(), controllerProductos.desasociarFabricante)

module.exports = router