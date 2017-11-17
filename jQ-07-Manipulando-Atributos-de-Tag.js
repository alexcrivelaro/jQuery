$(function(){

    $('a').attr('href', 'http://google.com.br');

    $('img').attr('width', '400');

    console.log($('img').attr('border')); /* retorna apenas o valor da borda */

    console.log($('img').attr('src')); /* retorna apenas o endereõ da imagem */
    

});

/*
 $('a').attr('href', 'http://google.com.br'); 
    |          |              |
    |          |              └--e trocar por esse elemento
    |          └-----------------com essa atribuição               
    └----------------------------selecionar a tag 'a'     

$('img').attr('width', '100');
    |          |         |
    |          |         └--e trocar por esse elemento
    |          └------------com essa atribuição              
    └-----------------------selecionar a tag 'img'   
    */