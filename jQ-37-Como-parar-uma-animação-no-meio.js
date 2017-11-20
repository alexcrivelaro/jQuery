$(function(){

    $('#btn1').bind('click', function(){
       
        $('.div').animate({
           'top':50,
           'left':700,
           'height':50,
           'width':50,
           'border-radius':25,
           'font-size':40
        }, {
            duration:1500,
            step:function(){
                console.log("Nova etapa...");
            },
            complete:function(){
                console.log("Animação finalizada!");
            },
            start:function(){
                console.log("Animação começou!!!");
                $('.div').animate({
                    'top':242,
                    'left':8,
                    'height':150,
                    'width':150,
                    'border-radius':0,
                    'font-size':20

                }, 1500);
            }
        });
    });

    $('#btn2').bind('click', function(){
        $('.div').stop();

    });
});



