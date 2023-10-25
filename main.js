// criei a função tocaSomAplausos
function tocaSomAplausos(idElementoAudio){
    document.querySelector(idElementoAudio).play();}

// criei a constante listaDeTeclas e busquei a classe coletiva tecla
const listaDeTeclas= document.querySelectorAll(".tecla");

//criei variável contador
let contador=0;
//criei o laço de repetição while, com a condicional somar um para o contador
while (contador < listaDeTeclas.length){
    listaDeTeclas[contador].onclick=tocaSom;
    contador = contador + 1; 
    console.log (contador);
}