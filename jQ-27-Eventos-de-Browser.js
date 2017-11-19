$(function(){

    $('#div').bind('scroll', function(){
        console.log("Scrollou!");
        $(this).css('background-color', 'green');
    });

    $(window).bind('resize', function(){
        console.log("MUDOU O TAMANHO DA TELA!");
    });
});

/*
preventDefault(); ----evita a ação padrão, nesse caso, não envia o formulário
*/