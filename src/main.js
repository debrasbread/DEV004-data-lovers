import botonesPelis from "./data.js";
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

// codigo de botones
//obtener los dropdowns del documento
const dropdowns = document.querySelectorAll(".dropdown");

//loop a través de los elementos del dropdown
dropdowns.forEach((dropdown) => {
  //obtener elementos para cada dropdown
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");
  // console.log(select);
  // if (select !== null) {
  //agregar el click event al elemento seleccionado
  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  //}

  //loop a traves de las posiciones
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});

// Botón A-Z

// Obtener el elemento de la lista del botón "A-Z" en el HTML
const botonAZ = document.querySelector("li:nth-child(3)");

// Agregar un evento "click" al botón "A-Z"
botonAZ.addEventListener("click", () => {
  // Llamar a la función "peliculasPorTituloAZ" para ordenar las películas por orden alfabético (de A a Z)
  const peliculasAZ = botonesPelis.peliculasPorTituloAZ(peliculas);
  // Renderizar las películas ordenadas por título
  renderPeliculas(peliculasAZ);
});

// Botón Z-A

// Obtener el elemento de la lista del botón "Z-A" en el HTML
const botonZA = document.querySelector("li:nth-child(4)");

// Agregar un evento "click" al botón "Z-A"
botonZA.addEventListener("click", () => {
  // Llamar a la función "peliculasPorTituloZA" para ordenar las películas por orden alfabético inverso (de Z a A)
  const peliculasZA = botonesPelis.peliculasPorTituloZA(peliculas);

  // Renderizar las películas ordenadas por título
  renderPeliculas(peliculasZA);
});

// Botón año ascendente
const fechaOrdenarA = document.querySelector("li:nth-child(1)");

fechaOrdenarA.addEventListener("click", () => {
  const peliculasAño = botonesPelis.peliculasAscendente(peliculas);
  renderPeliculas(peliculasAño);
});

// Botón año descendente
const fechaOrdenarD = document.querySelector("li:nth-child(2)");

fechaOrdenarD.addEventListener("click", () => {
  const peliculasAñoD = botonesPelis.peliculasDescendente(peliculas);
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
    const peliculasFiltradas = botonesPelis.filtrarDirectores(
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
    const peliculasFiltradas = botonesPelis.filtrarProductor(
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

