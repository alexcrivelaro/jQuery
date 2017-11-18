/*
Exibindo o html:
$('#palavras').html();
"
            Palavras que constroem.
        "
Para eliminar esses espaços em branco uso a função trim().
1º guardo na variável tira.
var tira = $('#palavras').html();

2º uso a função trim();
$.trim(tira);
"Palavras que constroem."

3º guardo novamente o valor:
tira = $.trim(tira);

Ou tudo de uma só vez:
var tira = $.trim($('#palavras').html());

Pegar um elemento por vez:
$('li').each(function() {
    alert($(this).html());
});

Verificar o tipo de variável:
var nome = "Alex";
$.type(nome); ---------ou
typeof nome;  ----nesse caso melhor o javascript

Verificar se é numérico:
$.isNumeric(idade);
true or false

*/