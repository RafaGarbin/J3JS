// criei a função tocaSomAplausos
function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();}

// criei a constante listaDeTeclas e busquei a classe coletiva tecla
const listaDeTeclas= document.querySelectorAll(".tecla");

//criei variável contador
let contador=0;
//criei o laço de repetição while, com a condicional somar um para o contador
while (contador<9){
    listaDeTeclas[0].onclick=tocaSomAplausos;
    contador = contador +1; 
    console.log (contador);
}