$(function(){

    

    $('button').mouseover(function(){
        $(this).addClass('fundoVermelho');
    });
    $('button').mouseout(function(){
        $(this).removeClass('fundoVermelho');
    });

    $('button').click(function(){
        $(this).toggleClass('fundoVermelho');

     if($(this).hasClass("fundoVermelho")){
            $(this).removeClass('fundoVermelho');
        } else {
            $(this).addClass('fundoVermelho');
        }
    
                
    });
});

/*
toogle - se eu der esse comando ele verifica se tem a classe 
se tiver vai colocar a classe, se não tira a classe
*/
