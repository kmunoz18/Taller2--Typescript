import { series } from './data.js';
let tablaBody = document.getElementById('series-table-body');
const promedioElemento = document.getElementById("seasons-average");
const cartaElemento = document.getElementById("detalle-serie");
renderSeriesInTable(series);
promedioElemento.innerHTML = `Seasons average: ${promedio(series)}`;
function renderSeriesInTable(series) {
    series.forEach(c => {
        let elemento = document.createElement("tr");
        elemento.innerHTML = `<td><strong>${c.number}</strong></td>
                           <td> ${c.name}</a> </td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        tablaBody.appendChild(elemento);
        elemento.addEventListener("click", () => MostrarDetalleSerie(c));
    });
}
function promedio(series) {
    let temporadas = 0;
    let nseries = series.length;
    series.forEach((serie) => temporadas = temporadas + serie.seasons);
    return temporadas / nseries;
}
function MostrarDetalleSerie(c) {
    cartaElemento.innerHTML = `
        <div class="card">
          <img src="${c.imagen}" class="card-img-top" alt="${c.name}">
          <div class="card-body">
            <h5 class="card-title">${c.name}</h5>
            <p class="card-text">${c.descripcion}</p>
            <a href="${c.link}" target="_blank"> ${c.link}</a>
          </div>
        </div>
      `;
}
