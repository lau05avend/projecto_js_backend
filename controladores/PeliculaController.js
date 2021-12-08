import mongoose from 'mongoose'
import PeliculaSchema from '../modelos/PeliculaModel.js'

//objet creado a partir del Schema de contacto
const Pelicula = mongoose.model('Pelicula' , PeliculaSchema)

//accion de añadir nuevo Contacto
export const addPelicula = (request, response) => {
    //nuevo objeto basado en el DAO
    let nuevoPelicula = new Pelicula(   request.body )
    //grabar contacto en mongo
    nuevoPelicula.save( (error , pelicula )=>{
           if(error){
               response.send(`Error detectado: ${error}`)
           }else{
               response.json(pelicula)
           } 

    })
}
//accion para obetener todas las personas
export const getPeliculas = (r , s ) =>{
    Pelicula.find(  {} , (error , peliculas ) => {
        if(error){
            s.send(error)
        }else{
            s.json(peliculas)
        }
    })
}

//accion detalles de contactos
export const getPeliculaById = (request , response )=> {
    Pelicula.findById( request.params.peliculaid , (error , pelicula ) => {
        if(error){
            response.send(error)
        }else{
            response.json(pelicula)
        }
    }  )
}

//accion para borrar contacto
export const deletePelicula = (request , response ) => {
    Pelicula.deleteOne ({ _id: request.params.peliculaid} , (error , pelicula_borrada )=>{
                if(error ) { response.send(error) }
                else {  response.json(  { "mensaje" : "borrado exitoso"     }    )   }
    })
}

//accion para actualizar contacto
export const updatePelicula = (request , response ) => {
    Pelicula.findOneAndUpdate ({ _id:request.params.peliculaid } 
                                , request.body
                                , {
                                    new:true
                                }
                                , (error , pelicula_actualizado) => {
                                       if(error){ response.send(error) }
                                       else{   response.json(pelicula_actualizado)  }
                                }   )
}


