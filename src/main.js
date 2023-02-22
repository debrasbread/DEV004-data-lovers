import { example } from './data.js';

import data from './data/ghibli/ghibli.js';

const peliculas = data.films;
const contenedorPeliculas = document.querySelector("#container-movies");

for (let i = 0; i < peliculas.length; i++) {
  const posterPelicula = peliculas[i].poster;
  const divPelis = document.createElement("div");
  divPelis.classList.add("flex-item");
  const imgPelis = document.createElement("img");
  imgPelis.src = posterPelicula;
  divPelis.append(imgPelis);
  contenedorPeliculas.append(divPelis);
}



