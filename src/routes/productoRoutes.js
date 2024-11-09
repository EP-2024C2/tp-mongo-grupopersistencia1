const { Router } = require('express')
const controllerProductos = require('../controllers/productoControllers')
const {validarSchema,validarId} = require('../middleware')
const {productoSchema, productoSchemaUpdate} = require('../schemas/productoSchema')
const { producto } = require('../models')


const route = Router()

route.get('/', controllerProductos.getProductos ) //Obtener todos los productos

route.get('/:id', validarId(producto),controllerProductos.getProductosById ) //Obtener un producto en particular

route.post('/', validarSchema(productoSchema),controllerProductos.crearProducto) //Crear un producto 

route.put('/:id', validarId(producto),validarSchema(productoSchemaUpdate),controllerProductos.modificarProducto) //Modificar un producto 

route.delete('/:id', validarId(producto), controllerProductos.borrarProducto) //Borrar un producto 
//CORREGIR QUE NO SE PUEDA ELIMINAR SI ESTÁ ASOCIADO
//Lo mismo con los fabricantes y componentes 


/*
route.post('/:id/fabricantes', controllerProductos.asociarProductoConFabricante) //asociar producto con fabricante

route.get('/:id/fabricantes', controllerProductos.getFabricantesByProducto) //Obtener todos los fabricantes de un producto

route.post('/:id/componentes',controllerProductos.asociarProductoConComponente) //asociar un producto con 1 o n componentes

route.get('/:id/componentes', controllerProductos.getComponentesByProducto) //Obtener todos los componentes de un producto
*/


module.exports = route