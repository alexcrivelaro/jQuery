$(function(){
  
    $('#botao1').mouseover(function(){
        $(this).addClass('fundoVermelho');
    });
    $('#botao1').mouseout(function(){
        $(this).removeClass('fundoVermelho');
    });

    $('#botao2').click(function(){
        $(this).toggleClass('fundoVermelho');
    });

    /*
    toogle - se eu der esse comando ele verifica se tem a classe 
    se tiver vai colocar a classe, se não tira a classe
    */

});

$(function(){

      if($('#botao3').hasClass("fundoVermelho")){
            $('#botao3').removeClass('fundoVermelho');
        } else {
            $('#botao3').addClass('fundoVermelho');
        }
    });

                 



