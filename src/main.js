import dataMovies from "./data.js";
import data from "./data/ghibli/ghibli.js";

const peliculas = data.films;
const contenedorPeliculas = document.querySelector("#contenedor-peliculas");

function renderPeliculas(peliculas) {
  contenedorPeliculas.innerHTML = peliculas
    .map((pelicula) => {
      const { title, poster, director, release_date } = pelicula;
      return `<section class="grid-item">
        <p class="titulosPelis">${title}</p>
        <img src="${poster}" class="cortinita"/>
        <div class="overlay">
          <div class="directorPeli">
            <p class="directores">${director}</p>
            <p class="anio">${release_date}</p>
          </div>
        </div>
      </section>`;
    })
    .join("");
}

const gridItems = document.querySelectorAll(".grid-item");

gridItems.forEach((item) => {
  const img = item.querySelector("img");
  item.addEventListener("mouseover", () => {
    img.classList.add(`img-overlay`);
  });
  item.addEventListener("mouseout", () => {
    img.classList.remove(`img-overlay`);
  });
});

const menuOrdenar = document.getElementById("menuOrdenar");
menuOrdenar.addEventListener("change", (event) => {
  const seleccion = event.target.value;

  let peliculasOrdenadas;

  switch (seleccion) {
  case "opcion1":
    peliculasOrdenadas = dataMovies.peliculasAscendente(peliculas);
    break;
  case "opcion2":
    peliculasOrdenadas = dataMovies.peliculasDescendente(peliculas);
    break;
  case "opcion3":
    peliculasOrdenadas = dataMovies.peliculasPorTituloAZ(peliculas);
    break;
  case "opcion4":
    peliculasOrdenadas = dataMovies.peliculasPorTituloZA(peliculas);
    break;
  default:
    peliculasOrdenadas = peliculas;
    break;
  }

  renderPeliculas(peliculasOrdenadas);
});


const menuDirector = document.getElementById("menuDirector");
menuDirector.addEventListener("change", (event) => {
  const seleccion = event.target.value;

  let peliculasFiltradas;

  switch (seleccion) {
  case "opcion1":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.director === "Hayao Miyazaki");
    break;
  case "opcion2":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.director === "Isao Takahata");
    break;
  case "opcion3":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.director === "Yoshifumi Kondō");
    break;
  case "opcion4":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.director === "Hiroyuki Morita");
    break;
  case "opcion5":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.director === "Gorō Miyazaki");
    break;
  case "opcion6":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.director === "Hiromasa Yonebayashi");
    break;
  default:
    peliculasFiltradas = peliculas;
    break;
  }

  renderPeliculas(peliculasFiltradas);
});


const menuProductor = document.getElementById("menuProductor");
menuProductor.addEventListener("change", (event) => {
  const seleccion = event.target.value;

  let peliculasFiltradas;

  switch (seleccion) {
  case "opcion1":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.producer === "Isao Takahata");
    break;
  case "opcion2":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.producer === "Hayao Miyazaki");
    break;
  case "opcion3":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.producer === "Toru Hara");
    break;
  case "opcion4":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.producer === "Toshio Suzuki");
    break;
  case "opcion5":
    peliculasFiltradas = peliculas.filter((pelicula) => pelicula.producer === "Yoshiaki Nishimura");
    break;
  default:
    peliculasFiltradas = peliculas;
    break;
  }

  renderPeliculas(peliculasFiltradas);
});



// Resetear los menús
function resetMenus() {
  const menuOrdenar = document.getElementById("menuOrdenar");
  menuOrdenar.selectedIndex = 0;

  const directorDropdown = document.getElementById("menuDirector");
  directorDropdown.selectedIndex = 0;

  const productorDropdown = document.getElementById("menuProductor");
  productorDropdown.selectedIndex = 0;
}

window.onload = function () {
  resetMenus();
  renderPeliculas(peliculas);
};

export default renderPeliculas;
