$(function(){

    /*$('.botao').bind('mousedown' ,function(){
        console.log("Apertou o mouse");
    });*/
   
    $('.botao').bind('mouseup' ,function(){
        console.log("Soltou o mouse");
    });

    $('.botao').bind('mousemove' ,function(){
        console.log("Moveu o mouse");
    });
    
    $(function(){
        $('.botao').bind('mouseover', function(){
            $(this).addClass('botao_emcima');
        });

        $('.botao').bind('mouseout', function(){
            $(this).removeClass('botao_emcima');
        });

    });

    $('.botao').bind('click' ,function(){
        console.log("Clicou!");
    });

    $('.botao').bind('dblclick' ,function(){
        console.log("Deu um duplo clique!");
    });
   
    
});

