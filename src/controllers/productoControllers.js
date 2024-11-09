const {producto} = require('../models')

const getProductos = async (req,res) => {
    try {
        const productos = await producto.find()
        if(productos.length === 0){
            return res.send(404).json({message:'Productos no encontrados'})
        }    
        return res.status(200).json(productos)
    } catch (error) {
        console.log('No se pudieron mostrar los productos', error.message)
        return res.status(500).json({message:error.message})
    }
}

const getProductosById = async(req,res)=>{
    try {
        const productoEncontrado = await producto.findById(req.params.id)
        if(!productoEncontrado){return res.status(404).json({message:'Producto no encontrado'})}
        return res.status(200).json(productoEncontrado)
    } catch (error) {
        return res.status(500).json({message:`Error al buscar producto.${error.message}`})
    }
}


const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await producto.create(req.body)

        return res.status(201).json({message: 'Producto creado',
            nuevoProducto
        })
    } catch (error) {
        console.log('Error al crear el producto:', error.message)
        return res.status(500).json({message: `Error al crear el producto. ${error.message}`})
    }
}


const modificarProducto = async (req,res) => {
    const id = req.params.id
    try {
        const productoActualizado = await producto.findOneAndUpdate({_id:id},req.body,{new:true})

        if(!productoActualizado){return res.status(404).json({message:`Producto no encontrado`})}
        return res.status(200).json({message:`Se actualizo el producto ${productoActualizado.nombre}. ${productoActualizado}`})

    } catch (error) {
        console.log(`Error al modificar producto:${error.message}`)
        return res.status(500).json({message: `Error al modificar producto:${error.message}`})
    }
}

const borrarProducto = async(req,res) =>{  ///Corregir
    const id = req.params.id
    try {
        const productoEliminado = await producto.findOneAndDelete({_id:id})
        if(!productoEliminado){return res.status(404).json({message:'No se encontró el producto'})}

        /*
        if(componentes.len > 0 || fabricantes.len > 0){ 
            return res.status(500).json({message:`No se pudo eliminar "${productoEliminado.nombre} porque tiene componentes/fabricantes asociados". ${error.message}` }) 
        }
        algo así deberia quedar
        */
        return res.status(200).json({message:`Producto "${productoEliminado.nombre}" eliminado`})

    } catch (error) {
        return res.status(500).json({message:`No se pudo eliminar "${productoEliminado.nombre}". ${error.message}` })
    }
}

module.exports = {
    getProductos,
    getProductosById,
    crearProducto,
    modificarProducto,
    borrarProducto
}

