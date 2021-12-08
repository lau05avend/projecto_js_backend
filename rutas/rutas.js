//construccion de 
//endpoint: ruta en un proyecto REST orientado a servicios
//          responder como mensajes en formato JSON 
import {  addPelicula, 
          getPeliculas, 
          getPeliculaById, 
          deletePelicula, 
          updatePelicula } from "../controladores/PeliculaController.js";

const rutas = function(app){
       app.route('/peliculas') 
            .get( getPeliculas  )   
            .post( addPelicula  )
       app.route('/peliculas/:peliculaid')  
            .get(getPeliculaById )
            .put( updatePelicula )
            .delete( deletePelicula )      
}

export default rutas;

