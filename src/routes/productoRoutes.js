const { Router } = require('express')
const controllerProductos = require('../controllers/productoControllers')
const {validarSchema} = require('../middleware')
const {productoSchema} = require('../schemas/productoSchema')


const route = Router()

route.get('/', controllerProductos.getProductos ) //Obtener todos los productos

route.get('/:id', controllerProductos.getProductosById ) //Obtener un producto en particular

route.post('/', validarSchema(productoSchema),controllerProductos.crearProducto) //Crear un producto 

route.put('/:id', controllerProductos.modificarProducto) //Modificar un producto **AGREGAR SCHEMA ESPECIFICO PARA UPDATES

//El schema de put no debe permitir que se pase cualquier cosa a los campos del producto. ( ej descripcion debe ser  un string)
//NO debe tener los campos como required()

/*

route.delete('/:id', controllerProductos.borrarProducto) //Borrar un producto

route.post('/:id/fabricantes', controllerProductos.asociarProductoConFabricante) //asociar producto con fabricante

route.get('/:id/fabricantes', controllerProductos.getFabricantesByProducto) //Obtener todos los fabricantes de un producto

route.post('/:id/componentes',controllerProductos.asociarProductoConComponente) //asociar un producto con 1 o n componentes

route.get('/:id/componentes', controllerProductos.getComponentesByProducto) //Obtener todos los componentes de un producto
*/
module.exports = route