

import { example } from './data.js';



/* Importamos el objeto data del archivo ghibli.js 
import data from './data/ghibli/ghibli.js';

/* Creamos variable "peliculas" y le asignamos el valor de la propiedad "films" del objeto "data". 
La propiedad films es un array que contiene información detallada de cada una de las películas del Studio Ghibli. *
const peliculas = data.films;

/* Seleccionamos el elemento HTML con el id "peliculas" usando document.getElementById(). 
Este elemento es el contenedor donde se mostrarán los títulos de las películas. *
const contenedorPeliculas = document.getElementById("peliculas");

/* Con un bucle for recorremos cada una de las películas del array. *
for (let i = 0; i < peliculas.length; i++) {

/* Creamos la variable "tituloPelicula" y le asignamos el valor de la propiedad "title" de la película actual. *
  const tituloPelicula = peliculas[i].title;

/* Creamos la variable divPelis y en ella almacenamos un elemento div (HTML) usando document.createElement(). *
  const divPelis = document.createElement("div");

/* Con la propiedad innerHTML asignamos el valor de "tituloPelicula" como el contenido del elemento div recién creado.*
  divPelis.innerHTML = tituloPelicula;

 /* Agregamos el elemento div al contenedor de películas utilizando contenedorPeliculas.append(divPelis). *
  contenedorPeliculas.append(divPelis);
}


*/



import data from './data/ghibli/ghibli.js';

const peliculas = data.films;
const contenedorPeliculas = document.getElementById("peliculas");

for (let i = 0; i < peliculas.length; i++) {
  const posterPelicula = peliculas[i].poster;
  const divPelis = document.createElement("div");
  const imgPelis = document.createElement("img");
  imgPelis.src = posterPelicula;
  divPelis.append(imgPelis);
  contenedorPeliculas.append(divPelis);
}

