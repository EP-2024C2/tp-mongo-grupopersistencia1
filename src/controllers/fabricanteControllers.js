const { default: mongoose } = require('mongoose')
const {Fabricante, Producto} = require('../models')

const getFabricantes = async (req, res) => {
  try {
    const fabricantes = await Fabricante.find();
    res.status(200).json(fabricantes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los fabricantes' });
  }
};


const getFabricantesById = async (req, res) => {
  try {
    const fabricante = await Fabricante.findById(req.params.id);
    if (!fabricante) {
      return res.status(404).json({ error: 'Fabricante no encontrado' });
    }
    res.status(200).json(fabricante);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el fabricante' });
  }
};


const crearFabricante = async (req, res) => {
  try {
      const nuevoProducto = await Fabricante.create(req.body)

      return res.status(201).json({message: 'Fabricante creado',
          nuevoProducto
      })
  } catch (error) {
      console.log('Error al crear el fabricante:', error.message)
      return res.status(500).json({message: `Error al crear el fabricante. ${error.message}`})
  }
}

const modificarFabricante = async (req, res) => {
  try {
    const { nombre } = req.body;
    const fabricante = await Fabricante.findByIdAndUpdate(
      req.params.id,
      { nombre },
      { new: true }
    );
    if (!fabricante) {
      return res.status(404).json({ error: 'Fabricante no encontrado' });
    }
    res.status(200).json(`Fabricante actualizado:${fabricante}`);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el fabricante' });
  }
};


const borrarFabricante = async (req, res) => {
  const idFabricante = req.params.id
  try {
    const fabricante = await Fabricante.findByIdAndDelete(idFabricante);
    if (!fabricante) {
      return res.status(404).json({ error: 'Fabricante no encontrado' });
    }
    await Producto.updateMany(
      { fabricantes: fabricanteId },  
      { $pull: { fabricante: fabricanteId } }  
    )
    
    res.status(200).json({ message: 'Fabricante eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el fabricante' });
  }
};

const getProductosByFabricante = async (req, res) => {
  try {
    const fabricanteId = req.params.id;
    const fabricante = await Fabricante.findById(fabricanteId);
    
    if (!fabricante) {
      return res.status(404).json({ error: 'Fabricante no encontrado' });
    }
    
    if(fabricante.productos.length == 0){return res.status(400).json({message:'El fabricante no tiene productos asociados.'})}
    
    const productosFabricante = await fabricante.populate('productos')
    res.status(200).json(productosFabricante.productos);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los productos del fabricante'});
    console.log(error.message)
  }
}

module.exports={
    getFabricantes,
    getFabricantesById,
    crearFabricante,
    modificarFabricante,
    borrarFabricante,
    getProductosByFabricante
}