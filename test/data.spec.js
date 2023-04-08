// Test ordenar por título A-Z
describe("peliculasPorTituloAZ", () => {
  it("debe ordenar las películas de A a Z", () => {
    const peliculas = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
    ];
    const ordenarAZ = peliculasPorTituloAZ(peliculas);
    expect(ordenarAZ).toEqual([
      { title: "Castle in the Sky" },
      { title: "Grave of the Fireflies" },
      { title: "Kiki's Delivery Service" },
      { title: "My Neighbor Totoro" },
    ]);
  });
}); // Test ordenar por título Z-A
describe("peliculasPorTituloZA", () => {
  it("debe ordenar las películas de Z a A", () => {
    const peliculas = [
      { title: "Castle in the Sky" },
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
    ];
    const ordenarZA = peliculasPorTituloZA(peliculas);
    expect(ordenarZA).toEqual([
      { title: "My Neighbor Totoro" },
      { title: "Kiki's Delivery Service" },
      { title: "Grave of the Fireflies" },
      { title: "Castle in the Sky" },
    ]);
  });
}); // Test ordenar por año, descendente
describe("Ordenar películas de manera Ascendente", () => {
  const datos = [
    { release_date: "1992" },
    { release_date: "1991" },
    { release_date: "1986" },
    { release_date: "1988" },
  ];
  const ordenarDeAntiguaANueva = peliculasAscendente(datos);
  it("los años desde la mas antigua a la mas nueva", () => {
    expect(ordenarDeAntiguaANueva).toEqual([
      { release_date: "1986" },
      { release_date: "1988" },
      { release_date: "1991" },
      { release_date: "1992" },
    ]);
  });
}); // Test ordenar por año, descendente
describe("Ordenar películas de manera Descendente", () => {
  const datos = [
    { release_date: "1992" },
    { release_date: "1991" },
    { release_date: "1986" },
    { release_date: "1988" },
  ];
  const ordenarDeNuevaAAntigua = peliculasDescendente(datos);
  it("los años desde el mas nuevo al mas antiguo", () => {
    expect(ordenarDeNuevaAAntigua).toEqual([
      { release_date: "1992" },
      { release_date: "1991" },
      { release_date: "1988" },
      { release_date: "1986" },
    ]);
  });
}); // Test filtrar por director
describe("filtrarDirectores", () => {
  it("debe devolver las películas del director seleccionado", () => {
    const peliculas = [
      { title: "Castle in the Sky", director: "Hayao Miyazaki" },
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "Kiki's Delivery Service", director: "Hayao Miyazaki" },
      { title: "Grave of the Fireflies", director: "Isao Takahata" },
    ];
    const directorSeleccionado = "Hayao Miyazaki";
    const peliculasFiltradas = filtrarDirectores(
      peliculas,
      directorSeleccionado
    );
    expect(peliculasFiltradas).toEqual([
      { title: "Castle in the Sky", director: "Hayao Miyazaki" },
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki" },
      { title: "Kiki's Delivery Service", director: "Hayao Miyazaki" },
    ]);
  });
}); // Test filtrar por productor
describe("filtrarProductor", () => {
  it("debe devolver las películas del productor seleccionado", () => {
    const peliculas = [
      { title: "Pom Poko", producer: "Toshio Suzuki" },
      { title: "Castle in the Sky", producer: "Isao Tahakata" },
      { title: "Only Yesterday", producer: "Toshio Suzuki" },
      { title: "Porco Rosso", producer: "Toshio Suzuki" },
    ];
    const productorSeleccionado = "Toshio Suzuki";
    const peliculasFiltradas = filtrarProductor(
      peliculas,
      productorSeleccionado
    );
    expect(peliculasFiltradas).toEqual([
      { title: "Pom Poko", producer: "Toshio Suzuki" },
      { title: "Only Yesterday", producer: "Toshio Suzuki" },
      { title: "Porco Rosso", producer: "Toshio Suzuki" },
    ]);
  });
});
import {
  peliculasPorTituloAZ,
  peliculasPorTituloZA,
  peliculasAscendente,
  peliculasDescendente,
  filtrarDirectores,
  filtrarProductor,
} from "../src/data.js";
