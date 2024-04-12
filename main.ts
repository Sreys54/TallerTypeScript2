import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('Series')!;
const promedioTemporadasElm: HTMLElement = document.getElementById("total-Promedio")!;

renderSeriesInTable(data);

promedioTemporadasElm.innerHTML = `${getPromedioTemporadas(data)}`


function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.order}</td>
                           <td>${serie.name}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(trElement);
  });
}

function getPromedioTemporadas(series: Serie[]): number {
  let totalSeasons: number = 0;
  let totalSeries: number = 0;
  let rtaFinal: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  series.forEach((serie)=> totalSeries = totalSeries + 1);
  rtaFinal = totalSeasons/totalSeries;
  return rtaFinal;
}
