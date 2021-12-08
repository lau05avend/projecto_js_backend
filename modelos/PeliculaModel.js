import mongoose from 'mongoose'

//Crear un objeto mongo:Schema:
const Schema = mongoose.Schema

//construir un esquema para contactos:
const PeliculaModel = new Schema({

    nombre: {
        type: String,
        required: 'nombre vacio'
    },
    año_lanzamiento: {
        type: Date,
        required: 'nombre vacio'
    },
    sinopsis: {
        type: String,
        required: 'sinopsis vacio'
    },
    genero: {
        type: String,
        required: 'genero vacio'
    },
    director: {
        type: String,
        required: 'director vacio'
    },
    duracion:{
        type: Number
    },
    idioma: {
        type: String
    },
    popularidad: {
        type: Number
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    }
})

export default PeliculaModel 