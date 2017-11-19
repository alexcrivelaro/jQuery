$(function(){

    $('#botao').bind('click', function(e){
        e.preventDefault();

        var txt = $('#nome').val();
        alert("Olá "+txt+ ". Foi evitado o : "+e.type+".");
        

    });
});

/*
preventDefault(); ----evita a ação padrão, nesse caso, não envia o formulário
*/