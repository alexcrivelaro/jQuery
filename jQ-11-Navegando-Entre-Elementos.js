/*
<div class="site">
    <div class="topo">
        <div> -----------------------------selecionar essa div?
            <span class="irmão"></span>
            <span class="filha"></span>
        </div>
    </div>
    <div class="conteudo"></div>
    <div class="rodape"></div>
</div>

Resposta:
$('.filha').parent() ----seleciona o elemento que está antes

Procurar a filha:
$('.site').find('.filha');  ----find vai para frente

Procurar a primeira div:
$('div').eq(0);

Procurar o segundo span:
$('span').eq(1);

Procurar a classe "conteudo";
$('.conteudo');

Estou na classe "irmao" e preciso ir para a clase topo:
$(".irmao").closest(".topo");   ----closest vai para trás


*/