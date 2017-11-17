/* 1ª forma - como carregar a página antes do jQuery */

/*$( document ).ready(function(){
    alert("Tudo certo!");
})
*/

/* 2ª forma - com exemplo otimizado */

/*$(function(){
    alert("Carregou a página!");
});    
*/

/* 3ª forma - criar a função por fora e depois carregar a mesma */

function tudoPronto() {       /* cria a função por fora */
    alert("Tudo pronto!");
}
$(document).ready(tudoPronto); 

/* Quando nosso documento - (document) 
   estiver pronto - .ready (quando toda a página estiver carregada) 
   irá executar a função - (tudoPronto)*/