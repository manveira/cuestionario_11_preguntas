function verificarRespuestas() {

var total = 11;
var puntos = 0;

var myForm = document.forms["quizForm"];
var respuestas = ["c","b","c","c","b","b","a","b","b","a","a"];

for (var i = 1; i <= total; i++) {
  if (myForm["preg" + i].value === null || myForm["preg" + i].value === "") {
     alert("De por Dios, si es tan amable responda la pregunta " +i+ " aunque sea por favor");
     return false;
  }
  else {
    if (myForm["preg" + i].value === respuestas[i-1]) {
        puntos++;
    }
  }
}
//fin del for
var resultados = document.getElementById("resultado");
resultados.innerHTML = '<h3>TU PUNTUACIÓN FINAL ES <span>'+ puntos +'</span>/<span>'+ total +' PUNTOS TOTALES </span></h3>';

return false;               //fin de función
}
