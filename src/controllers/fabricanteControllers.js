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
    const { nombre } = req.body;
    const fabricante = new Fabricante({ nombre });
    await fabricante.save();
    res.status(201).json(fabricante);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear el fabricante' });
  }
};

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
    res.status(200).json(fabricante);
  } catch (error) {
    res.status(500).json({ error: 'Error al modificar el fabricante' });
  }
};


const borrarFabricante = async (req, res) => {
  try {
    const fabricante = await Fabricante.findByIdAndDelete(req.params.id);
    if (!fabricante) {
      return res.status(404).json({ error: 'Fabricante no encontrado' });
    }
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
  
      const productos = await Producto.find({ fabricante: fabricanteId });
  
      res.status(200).json(productos);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener los productos del fabricante' });
    }
  };

module.exports={
    getFabricantes,
    getFabricantesById,
    crearFabricante,
    modificarFabricante,
    borrarFabricante,
    getProductosByFabricante
}