$(function(){

    $('#btn1').bind('click', function(){
        /*alert("CLICOU NO BOTÃO 1"); */
        $('#btn2').trigger('click');
    });

    $('#btn2').bind('click', function(){
        alert("CLICOU NO BOTÃO 2");
    });

});

/*
$('button').trigger("click");
               |
               └---trigger = disparar o gatilho, desencadear
*/