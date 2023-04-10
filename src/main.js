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

// Asignar eventos de click a las opciones de filtrado por director
const directorDropdown = document.querySelector("#menuDirector");
const directorOptions = directorDropdown.querySelectorAll("li");
directorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedDirector = option.innerText;
    const peliculasFiltradas = dataMovies.filtrarDirectores(
      peliculas,
      selectedDirector
    );

    // Renderizar las películas filtradas
    renderPeliculas(peliculasFiltradas);
  });
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
