import { Serie } from "./serie.js";
import { series } from './data.js';


let tablaBody: HTMLElement = document.getElementById('series-table-body')!;
const promedioElemento: HTMLElement = document.getElementById("seasons-average")!;


renderSeriesInTable(series);
promedioElemento.innerHTML = `Seasons average: ${promedio(series)}`;

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let elemento = document.createElement("tr");
    elemento.innerHTML = `<td><strong>${c.number}</strong></td>
                           <td> <a href= ${c.link}>${c.name}</a> </td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>`;
    tablaBody.appendChild(elemento);
  });
}

function promedio(series: Serie[]): number {
    let temporadas : number = 0;
    let nseries : number = series.length;
    series.forEach((serie) => temporadas = temporadas + serie.seasons);
    return temporadas/nseries;

  }

