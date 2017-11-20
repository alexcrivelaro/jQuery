$(function(){

    $('.botao').bind('click', function(){
        $('.div').fadeToggle('slow');
    
    });

});




/*
Desaparecer:
$('.div').fadeOut();

Aparecer:
$('.div').fadeIn();

Aparecer e desaparecer com efeito controlado
$('.div').fadeTo('slow', 0.8);

Aparecer e desaparecer alternadamente:
$('.div').fadeToggle();
$('.div').fadeToggle('fast');
$('.div').fadeToggle('slow');

*/