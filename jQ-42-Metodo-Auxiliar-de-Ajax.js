$(function(){

    $('button').bind('click', function(){

        $('.div').load("jQ-42-Metodo-Auxiliar-de-Ajax-Arquivo-Externo.html");
    /*  -- seleciona a 'div', carrega (load) o arquivo e joga nessa div. -- */
    
    /*   -- método get --
        $.get("jQ-42-Metodo-Auxiliar-de-Ajax-Arquivo-Externo.html", function(dado){
            $('.div').html(dado);
        }); */
    
    /*  -- método post --
        $.post("jQ-42-Metodo-Auxiliar-de-Ajax-Arquivo-Externo.html", function(dado){
            $('.div').html(dado);
        });  */
    
    });
});