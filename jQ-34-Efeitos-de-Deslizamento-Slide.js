$(function(){

    $('.botao').bind('click', function(){
        $('.div').slideToggle('slow');
    
    });

    $('.hellobar').bind('click', function(){
        $(this).slideUp();
    });

});




/*
Desaparecer:
$('.div').slideUp();
$('.div').slideUp('fast');
$('.div').slideUp('slow');

Aparecer:
$('.div').slideDown();
$('.div').slideDown('fast');
$('.div').slideDown('slow');


*/