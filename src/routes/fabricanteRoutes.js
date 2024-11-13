const { Router } = require('express')
const controllerFabricantes = require('../controllers/fabricanteControllers')
//const {fabricanteSchema, validador} = require('../middleware') 


const route = Router()

/*
route.get('/',controllerFabricantes.getFabricantes)


route.get('/:id',controllerFabricantes.getFabricantesById)

route.post('/',validador(fabricanteSchema,false),controllerFabricantes.crearFabricante) //false no hace falta porque está por default, lo dejo a modo de ejemplo

route.put('/:id', validador(fabricanteSchema,true),controllerFabricantes.modificarFabricante) //el valor 'true' es solo si el metodo es PUT

route.delete('/:id', controllerFabricantes.borrarFabricante)

route.get('/:id/productos',controllerFabricantes.getProductosByFabricante)
*/

module.exports=route