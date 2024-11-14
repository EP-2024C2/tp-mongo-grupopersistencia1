const { Router } = require('express')
const controllerProductos = require('../controllers/productoControllers')
const {validarSchema,validarId} = require('../middleware')
const {productoSchema, productoSchemaUpdate} = require('../schemas/productoSchema')
const { producto } = require('../models')


const route = Router()

route.get('/', controllerProductos.getProductos ) 

route.get('/:id', validarId(producto),controllerProductos.getProductosById ) 

route.post('/', validarSchema(productoSchema),controllerProductos.crearProducto) 

route.put('/:id', validarId(producto),validarSchema(productoSchemaUpdate),controllerProductos.modificarProducto) 

route.delete('/:id', validarId(producto), controllerProductos.borrarProducto) 
//CORREGIR QUE NO SE PUEDA ELIMINAR SI ESTÁ ASOCIADO
//Lo mismo con los fabricantes y componentes 

route.post('/:id/fabricantes', controllerProductos.asociarProductoConFabricante) 

route.get('/:id/fabricantes', controllerProductos.getFabricantesByProducto) 

route.post('/:id/componentes',controllerProductos.asociarProductoConComponente) //asociar un producto con 1 o n componentes

route.get('/:id/componentes', controllerProductos.getComponentesByProducto) 



module.exports = route