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

    
    
    $('#email').bind('keyup', function(){
        alert("Uma tecla foi solta!");
    })

    $('#endereco').bind('keyup', function(e){
        console.log(e.keyCode);
    });

    $('#nome').bind('keyup', function(e){
        if(e.keyCode == 13) {
            var txt = $(this).val();
            console.log(txt);
            $(this).val('');
    /*função com no chat */
        }
    });
    
});

/*
preventDefault(); ----evita a ação padrão, nesse caso, não envia o formulário
blur();  -------------desfoca
*/