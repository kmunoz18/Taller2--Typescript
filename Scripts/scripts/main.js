import { series } from './data.js';
let tablaBody = document.getElementById('series-table-body');
const promedioElemento = document.getElementById("seasons-average");
renderSeriesInTable(series);
promedioElemento.innerHTML = `Seasons average: ${promedio(series)}`;
function renderSeriesInTable(series) {
    series.forEach(c => {
        let elemento = document.createElement("tr");
        elemento.innerHTML = `<td><strong>${c.number}</strong></td>
                           <td> <a href= ${c.link}>${c.name}</a> </td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
        tablaBody.appendChild(elemento);
    });
}
function promedio(series) {
    let temporadas = 0;
    let nseries = series.length;
    series.forEach((serie) => temporadas = temporadas + serie.seasons);
    return temporadas / nseries;
}
