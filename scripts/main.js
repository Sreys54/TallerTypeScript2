import { data } from './data.js';
var seriesTbody = document.getElementById('Series');
var promedioTemporadasElm = document.getElementById("total-Promedio");
renderSeriesInTable(data);
promedioTemporadasElm.innerHTML = "".concat(getPromedioTemporadas(data));
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.order, "</td>\n                           <td>").concat(serie.name, "</td>\n                           <td>").concat(serie.channel, "</td>\n                           <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
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
