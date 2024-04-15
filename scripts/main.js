import { data } from './data.js';
var seriesTbody = document.getElementById('Series');
var promedioTemporadasElm = document.getElementById("total-Promedio");
renderSeriesInTable(data);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(data));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.order, "</td>\n                          <td>").concat("", "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        var tdName = trElement.querySelector('td:nth-child(2)');
        var anchor = document.createElement('a');
        anchor.href = '#';
        anchor.textContent = serie.name;
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            displayCard(serie);
        });
        if (tdName) {
            tdName.appendChild(anchor);
        }
        seriesTbody.appendChild(trElement);
    });
}
function displayCard(serie) {
    var cardTitle = document.querySelector('.card-Name');
    var cardText = document.querySelector('.card-Sinopsis');
    var cardImg = document.querySelector('.card-ImageOnTop');
    var cardLink = document.querySelector('.card-link');
    if (cardTitle && cardText && cardImg && cardLink) {
        cardTitle.textContent = serie.name;
        cardText.textContent = serie.sinopsis;
        cardImg.src = serie.image; //Las imagenes no sirven, y probe los links por aparte y sale el error 404 por eso en la 
        // en la pagina no se ven presentes
        cardLink.href = serie.link;
    }
}
function getPromedioTemporadas(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    var rtaFinal = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    series.forEach(function (serie) { return totalSeries = totalSeries + 1; });
    rtaFinal = totalSeasons / totalSeries;
    return rtaFinal;
}
