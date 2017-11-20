$(function(){

    $('#form').bind('submit', function(e){
        e.preventDefault();

        var txt = $(this).serialize();
        console.log(txt);

        $.ajax({
            type:'GET',
            url:'jQ-44-Requisicao-Ajax-Completa.php',
            data:txt,
            success: function(resultado) {
                $('.div').html("Resultado: "+resultado);
            },
            error:function(){
                alert("Ocorreu um erro");
            }
        });
    });
});
