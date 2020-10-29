const btnVerde = document.getElementById ("btnVerde");
const btnAmarelo = document.getElementById ("btnAmarelo");
const btnVermelho  = document.getElementById ("btnVermelho");
const btnAutomatico = document.getElementById ("btnAutomatico");
const sema = document.getElementById ("sema");

var imgs = [];   

imgs[0] = './img/vermelho.png';
imgs[1] = './img/amarelo.png';
imgs[2] = './img/verde.png';


var imgTest = -1;




function semaVerde (){
        sema.src = './img/verde.png';
        clearInterval(intervalId);
    
}
function semaAmarelo (){
        sema.src = './img/amarelo.png';
        clearInterval(intervalId);
}
function semaVermelho (){
        sema.src = './img/vermelho.png';
        clearInterval(intervalId);
}
let intervalId;
function semaAutomatico() {
        intervalId = setInterval(function semaAutomatico (){   
    
       ++imgTest;

       if (imgTest >= imgs.length) {
        imgTest = 0;
            
        }
       sema.src = imgs[imgTest];     

}, 10
00);
}

btnVermelho.addEventListener("click", semaVermelho);
btnAmarelo.addEventListener("click", semaAmarelo);
btnVerde.addEventListener("click", semaVerde);

btnAutomatico.addEventListener("click", semaAutomatico);


 
