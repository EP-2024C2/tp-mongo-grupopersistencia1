const { Router } = require('express')
const controllerProductos = require('../controllers/productoControllers')
const {validarSchema,validarId} = require('../middleware')
const {productoSchema, productoSchemaUpdate} = require('../schemas/productoSchema')
const { Producto } = require('../models')


const router = Router()

router.get('/', controllerProductos.getProductos ) 

router.get('/:id', validarId(Producto),controllerProductos.getProductosById ) 

router.post('/', validarSchema(productoSchema),controllerProductos.crearProducto) 

router.put('/:id', validarId(Producto),validarSchema(productoSchemaUpdate),controllerProductos.modificarProducto) 

router.delete('/:id', validarId(Producto), controllerProductos.borrarProducto) 
//CORREGIR QUE NO SE PUEDA ELIMINAR SI ESTÁ ASOCIADO
//Lo mismo con los fabricantes y componentes 

router.post('/:id/fabricantes',validarId(Producto), controllerProductos.asociarProductoConFabricante) 

router.get('/:id/fabricantes',validarId(Producto), controllerProductos.getFabricantesByProducto) 

router.post('/:id/componentes',validarId(Producto),controllerProductos.asociarProductoConComponente) 

router.get('/:id/componentes',validarId(Producto), controllerProductos.getComponentesByProducto) 


module.exports = router