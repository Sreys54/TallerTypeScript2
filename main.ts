import { Serie } from './serie.js';
import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('Series')!;
const promedioTemporadasElm: HTMLElement = document.getElementById("total-Promedio")!;

renderSeriesInTable(data);

promedioTemporadasElm.innerHTML = `${getPromedioTemporadas(data)}`;

function renderSeriesInTable(series: Serie[]): void {
  console.log('Desplegando series');
  series.forEach((serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${serie.order}</td>
                          <td>${""}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    const tdName = trElement.querySelector('td:nth-child(2)'); 
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.textContent = serie.name;
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      displayCard(serie);
    });
    if(tdName) {
      tdName.appendChild(anchor);
    }
    seriesTbody.appendChild(trElement);
  });
}

function displayCard(serie: Serie): void {
  const cardTitle: HTMLElement | null = document.querySelector('.card-Name');
  const cardText: HTMLElement | null = document.querySelector('.card-Sinopsis');
  const cardImg: HTMLImageElement | null = document.querySelector('.card-ImageOnTop');
  const cardLink: HTMLAnchorElement | null = document.querySelector('.card-link');

  if (cardTitle && cardText && cardImg && cardLink) {
      cardTitle.textContent = serie.name;
      cardText.textContent = serie.sinopsis;  
      cardImg.src = serie.image; //Las imagenes no sirven, y probe los links por aparte y sale el error 404 por eso en la 
                                // en la pagina no se ven presentes
      cardLink.href = serie.link; 
  }
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