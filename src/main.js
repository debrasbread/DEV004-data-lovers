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

renderPeliculas(peliculas);

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





// Obtener una referencia a los elementos de los menús
const menuOrdenar = document.querySelector('#menuOrdenar');
const menuDirector = document.querySelector('#menuDirector');
const menuProductor = document.querySelector('#menuProductor');

// Agregar event listeners para detectar cuando se selecciona una opción en cada menú
menuOrdenar.addEventListener('change', () => {
  ordenarPeliculas();
});

menuDirector.addEventListener('change', () => {
  filtrarPeliculasDir();
});

menuProductor.addEventListener('change', () => {
  filtrarPeliculasProd();
});











// Botón A-Z

// Obtener el elemento de la lista del botón "A-Z" en el HTML
const botonAZ = document.querySelector("li:nth-child(3)");

// Agregar un evento "click" al botón "A-Z"
botonAZ.addEventListener("click", () => {
  // Llamar a la función "peliculasPorTituloAZ" para ordenar las películas por orden alfabético (de A a Z)
  const peliculasAZ = dataMovies.peliculasPorTituloAZ(peliculas);
  // Renderizar las películas ordenadas por título
  renderPeliculas(peliculasAZ);
});

// Botón Z-A

// Obtener el elemento de la lista del botón "Z-A" en el HTML
const botonZA = document.querySelector("li:nth-child(4)");

// Agregar un evento "click" al botón "Z-A"
botonZA.addEventListener("click", () => {
  // Llamar a la función "peliculasPorTituloZA" para ordenar las películas por orden alfabético inverso (de Z a A)
  const peliculasZA = dataMovies.peliculasPorTituloZA(peliculas);

  // Renderizar las películas ordenadas por título
  renderPeliculas(peliculasZA);
});

// Botón año ascendente
const fechaOrdenarA = document.querySelector("li:nth-child(1)");

fechaOrdenarA.addEventListener("click", () => {
  const peliculasAño = dataMovies.peliculasAscendente(peliculas);
  renderPeliculas(peliculasAño);
});

// Botón año descendente
const fechaOrdenarD = document.querySelector("li:nth-child(2)");

fechaOrdenarD.addEventListener("click", () => {
  const peliculasAñoD = dataMovies.peliculasDescendente(peliculas);
  renderPeliculas(peliculasAñoD);
});

// Botón directores
// Obtener el elemento del botón desplegable por id
const directorDropdown = document.querySelector("#directorDropdown");

// Añadir un evento "click" a cada opción del menú desplegable
const directorOptions = directorDropdown.querySelectorAll(".menu li");
directorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    // Obtener el nombre del director seleccionado
    const selectedDirector = option.innerText;
    const peliculasFiltradas = dataMovies.filtrarDirectores(
      peliculas,
      selectedDirector
    );

    // Renderizar las películas filtradas
    renderPeliculas(peliculasFiltradas);
  });
});

//boton PRODUCTORES
const producerDropdown = document.querySelector("#productoresDropdown");
const productorOptions = producerDropdown.querySelectorAll(".menu li");
productorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    const selectedProducer = option.innerText;
    const peliculasFiltradas = dataMovies.filtrarProductor(
      peliculas,
      selectedProducer
    );
    renderPeliculas(peliculasFiltradas);
  });
});
// function toggleDropdown() {
//   var dropdown = document.getElementById("productoresDropdown");
//   dropdown.classList.toggle("dropdown3");
// }

export default renderPeliculas;
