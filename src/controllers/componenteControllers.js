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

// Obtener un componente en particular
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

// Crear un nuevo componente
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

// Modificar los datos de un componente
const modificarComponente = async (req, res) => {
    const { id } = req.params;
    const { nombre, descripcion, producto } = req.body;
    try {
        const componente = await Componente.findById(id);
        if (!componente) {
            return res.status(404).json({ message: 'Componente no encontrado' });
        }
        
        // Actualizamos el componente
        componente.nombre = nombre || componente.nombre;
        componente.descripcion = descripcion || componente.descripcion;
        componente.producto = producto || componente.producto;

        await componente.save();
        res.status(200).json(componente);
    } catch (error) {
        res.status(500).json({ message: `Error al modificar el componente: ${error.message}` });
    }
};

// Borrar un componente
const borrarComponente = async (req, res) => {
    const { id } = req.params;
    try {
        const componente = await Componente.findByIdAndDelete(id);
        if (!componente) {
            return res.status(404).json({ message: 'Componente no encontrado' });
        }
        res.status(200).json({ message: `Componente ${componente.nombre} eliminado correctamente` });
    } catch (error) {
        res.status(500).json({ message: `Error al eliminar el componente: ${error.message}` });
    }
};

// Obtener todos los productos asociados a un componente
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

// Exportar funciones
module.exports = {
    getComponentes,
    getComponenteById,
    crearComponente,
    modificarComponente,
    borrarComponente,
    getProductosByComponente,
};