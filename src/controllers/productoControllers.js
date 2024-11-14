const { default: mongoose } = require('mongoose')
const {Producto, Fabricante, Componente} = require('../models')

const getProductos = async (req,res) => {
    try {
        const productos = await Producto.find()
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
        const productoEncontrado = await Producto.findById(req.params.id)
        if(!productoEncontrado){return res.status(404).json({message:'Producto no encontrado'})}
        return res.status(200).json(productoEncontrado)
    } catch (error) {
        return res.status(500).json({message:`Error al buscar producto.${error.message}`})
    }
}


const crearProducto = async (req, res) => {
    try {
        const nuevoProducto = await Producto.create(req.body)

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
        const productoActualizado = await Producto.findOneAndUpdate({_id:id},req.body,{new:true})

        if(!productoActualizado){return res.status(404).json({message:`Producto no encontrado`})}
        return res.status(200).json({message:`Se actualizo el producto ${productoActualizado.nombre}. ${productoActualizado}`})

    } catch (error) {
        console.log(`Error al modificar producto:${error.message}`)
        return res.status(500).json({message: `Error al modificar producto:${error.message}`})
    }
}

const borrarProducto = async(req,res) =>{ 
    const id = req.params.id
    
    try {
        const producto = await Producto.findById(id)
        
        if(producto.componentes.length > 0 || producto.fabricantes.length > 0){ 
            return res.status(400).json({message:
                `No se pudo eliminar "${producto.nombre}" porque tiene componentes/fabricantes asociados` }) 
        }
        
        const productoEliminado = await Producto.findByIdAndDelete(id)

        if(!productoEliminado){return res.status(404).json({message:'No se encontró el producto'})}


        return res.status(200).json({message:`Producto "${productoEliminado.nombre}" eliminado`})

    } catch (error) {
        return res.status(500).json({message:`No se pudo eliminar el producto. ${error.message}` })
    }
}

const asociarProductoConFabricante = async(req,res)=>{
    const idProducto = req.params.id
    const {idFabricante} = req.body //El cuerpo de la solicitud debe ser un json con un campo "idFabricante"
    try {
        
        if(!mongoose.Types.ObjectId.isValid(idFabricante)){
            return res.status(400).json({message:`${idFabricante} no es un objectId`})
        }
        const fabricante = await Fabricante.findById(idFabricante)
        if(!fabricante){return res.status(404).json({message:'Fabricante no encontrado'})}
        
        const producto = await Producto.findById(idProducto)
        if(!producto){return res.status(404).json({message:'Producto no encontrado'})}

        if(producto.fabricantes.includes(idFabricante)){
            return res.status(400).json({message:`${producto.nombre} ya se encuentra asociado con ${fabricante.nombre}`})
        }

        const productoActualizado = await Producto.findByIdAndUpdate(
            idProducto,
            { $push: {fabricantes: idFabricante} },
            { new: true }
          )

        await Fabricante.findByIdAndUpdate(
            idFabricante,
            { $push: {productos: idProducto} },
            { new: true }
        )
        
        return res.status(200).json({message:`Producto ${productoActualizado.nombre} asociado con ${fabricante.nombre}`})
    } catch (error) {
        return res.status(500).json({message:`Error al asociar producto con fabricante.${error.message}`})
    }
}

const getFabricantesByProducto = async (req, res) => {
    try {
      const productoId = req.params.id;
      const producto = await Producto.findById(productoId);
      
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      
      if(producto.fabricantes.length == 0){return res.status(400).json({message:'El producto no tiene fabricantes asociados.'})}
      const fabricantesProducto = await producto.populate('fabricantes')
      
      res.status(200).json(fabricantesProducto.fabricantes);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los fabricantes del producto'});
      console.log(error.message)
    }
  }

const asociarProductoConComponente = async (req, res) => {
    const idProducto = req.params.id;
    const { idComponente } = req.body; 
    
    try {
        if (!mongoose.Types.ObjectId.isValid(idComponente)) {
            return res.status(400).json({ message: `${idComponente} no es un ObjectId válido` });
        }
        const componente = await Componente.findById(idComponente);
        if (!componente) {
            return res.status(404).json({ message: 'Componente no encontrado' });
        }
        const producto = await Producto.findById(idProducto);
        if (!producto) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        if(producto.componentes.includes(idComponente)){
            return res.status(400).json({message:`${producto.nombre} ya se encuentra asociado con ${componente.nombre}`})
        }
        
        const productoActualizado = await Producto.findByIdAndUpdate(
            idProducto,
            { $push: { componentes: idComponente } },
            { new: true }
        )

        await Componente.findByIdAndUpdate(
            idComponente,
            { $push: {productos: idProducto} },
            { new: true }
        )

        return res.status(200).json({
            message: `Producto ${productoActualizado.nombre} asociado con el componente ${componente.nombre}`
        })

    } catch (error) {
        return res.status(500).json({ message: `Error al asociar componente con producto. ${error.message}` });
    }
};  

const getComponentesByProducto = async (req, res) => {
    try {
      const productoId = req.params.id;
      const producto = await Producto.findById(productoId);
      
      if (!producto) {
        return res.status(404).json({ error: 'Producto no encontrado' });
      }
      
      if(producto.componentes.length == 0){return res.status(400).json({message:'El producto no tiene componentes asociados.'})}
      const componentesProducto = await producto.populate('componentes')
      
      res.status(200).json(componentesProducto.componentes);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los componentes del producto'});
      console.log(error.message)
    }
  }

module.exports = {
    getProductos,
    getProductosById,
    crearProducto,
    modificarProducto,
    borrarProducto,
    asociarProductoConFabricante,
    getFabricantesByProducto,
    asociarProductoConComponente,
    getComponentesByProducto
}

