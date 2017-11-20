$(function(){

    $('#form').bind('submit', function(e){
        e.preventDefault();

        var txt = $(this).serialize();
        
        $.ajax({
            type:'POST',
            url:'jQ-45-Recebendo-e-manipulando-JSON.php',
            data:txt,
            dataType:'json', 
            success: function(json) {
                if(json.status == 'ok') {
                    alert("Funcionou!");
                } else {
                    alert("Ocorreu um erro");
                }
            }
        });
    });
});
