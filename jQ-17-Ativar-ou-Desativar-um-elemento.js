/*
Para ativar ou desativar uso no html - disabled="disabled"
<input type="text" name="nome" id="nome" /><br><br>
<input type="text" name="nome" id="nome" disabled="disabled"/><br><br>

ou ainda no jQuery:
$('#nome').attr('disabled', 'disabled');

para remover esse atributo:
$('#nome').removeAttr('disabled', 'disabled');

desabilitar o checkbox - id="salvo":
$('#salvo').attr('disabled', 'disabled');

para remover:
$('#salvo').removeAttr('disabled', 'disabled');

Deixar selecionado o checkbox.
$('#salvo').attr('checked', 'checked')

Remover a seleção do checkbox:
$('#salvo').removeAttr('checked')


*/