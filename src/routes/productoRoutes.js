const { Router } = require('express')
const controllerProductos = require('../controllers/productoControllers')
//const {productoSchema, validador} = require('../middleware')

const route = Router()

route.get('/', controllerProductos.getProductos ) //Obtener todos los productos

route.get('/:id', controllerProductos.getProductosById ) //Obtener un producto en particular

route.post('/', controllerProductos.crearProducto) //Crear un producto ***AGREGAR VALIDADOR***
/*

route.put('/:id', validador(productoSchema,true), controllerProductos.modificarProducto) //Modificar un producto

route.delete('/:id', controllerProductos.borrarProducto) //Borrar un producto

route.post('/:id/fabricantes', controllerProductos.asociarProductoConFabricante) //asociar producto con fabricante

route.get('/:id/fabricantes', controllerProductos.getFabricantesByProducto) //Obtener todos los fabricantes de un producto

route.post('/:id/componentes',controllerProductos.asociarProductoConComponente) //asociar un producto con 1 o n componentes

route.get('/:id/componentes', controllerProductos.getComponentesByProducto) //Obtener todos los componentes de un producto
*/
module.exports = route