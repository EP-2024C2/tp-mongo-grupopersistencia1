const { default: mongoose } = require('mongoose')
const {Componente, Producto} = require('../models')

const getComponentes = async (req, res) => {
    try {
        const componentes = await Componente.find();
        res.status(200).json(componentes);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener los componentes: ${error.message}` });
    }
};


const getComponenteById = async (req, res) => {
    const { id } = req.params;
    try {
        const componente = await Componente.findById(id);
        if (!componente) {
            return res.status(404).json({ message: 'Componente no encontrado' });
        }
        res.status(200).json(componente);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener el componente: ${error.message}` });
    }
};


const crearComponente = async (req, res) => {
    const { nombre, descripcion, producto } = req.body;
    try {
        const nuevoComponente = new Componente({ nombre, descripcion, producto });
        await nuevoComponente.save();
        res.status(201).json(nuevoComponente);
    } catch (error) {
        res.status(400).json({ message: `Error al crear el componente: ${error.message}` });
    }
};


const modificarComponente = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, producto } = req.body;
    try {
        const componente = await Componente.findById(id);
        if (!componente) {
            return res.status(404).json({ message: 'Componente no encontrado' });
        }
        
        
        componente.nombre = nombre || componente.nombre;
        componente.descripcion = descripcion || componente.descripcion;
        componente.producto = producto || componente.producto;

        await componente.save();
        res.status(200).json(componente);
    } catch (error) {
        res.status(500).json({ message: `Error al modificar el componente: ${error.message}` });
    }
};


const borrarComponente = async (req, res) => {
    const componenteId = req.params.id;
    try {
        const componente = await Componente.findByIdAndDelete(componenteId);
        if (!componente) {
            return res.status(404).json({ message: 'Componente no encontrado' });
        }

        if(componente.productos.length > 0){
            return res.status(400).json({message:`No se pudo eliminar '${componente.nombre}' porque tiene productos asociados.`})
          }
     
        res.status(200).json({ message: `Componente ${componente.nombre} eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ message: `Error al eliminar el componente: ${error.message}` });
    }
};


const getProductosByComponente = async (req, res) => {
    const { id } = req.params;
    try {
        const componente = await Componente.findById(id);
        if (!componente) {
            return res.status(404).json({ message: 'Componente no encontrado' });
        }

        const productos = await Producto.find({ _id: componente.producto });
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: `Error al obtener los productos del componente: ${error.message}` });
    }
};


module.exports = {
    getComponentes,
    getComponenteById,
    crearComponente,
    modificarComponente,
    borrarComponente,
    getProductosByComponente,
};