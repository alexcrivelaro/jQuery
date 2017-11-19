$(function(){

    $('#form').bind('submit', function(e){
        e.preventDefault();

        console.log("O formulário foi submitado!");
    });

    $('#nome').bind('select', function(){
        console.log("Algo foi selecionado");
    });

    $('#nome, #email').bind('focus', function(){
        $(this).addClass('focado');
    });

    $('#nome, #email').bind('blur', function(){
        $(this).removeClass('focado');
    });

    $('#idade').bind('change', function(){

        alert("Você mudou a seleção para "+$(this).val());
    })
    
});

/*
preventDefault(); ----evita a ação padrão, nesse caso, não envia o formulário
blur();  -------------desfoca
*/