$(function(){

    $('button').bind('click', function(){
        alert("Clicou!");
    });

    $('button').bind('mouseover', function(){
        $(this).addClass('fundoVermelho');
    });

    $('button').bind('mouseout', function(){
        $(this).removeClass('fundoVermelho');
    });
});

/*
No console é só digitar:
$('button').unbind('click');

ou ainda:
$('button').off('click');

Para revor o evento mouseover
$('button').off('mouseover');
*/