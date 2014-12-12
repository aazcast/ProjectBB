var FormViewFuncionario = Marionette.ItemView.extend({
	className : 'formBlog',
	template : _.template('<form>\
        <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name" value="<%- nombre %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula" value="<%- cedula %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="salario">Salario:</label></div><div class="grid-2"><input type="text" id="salario" value="<%- salario %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="carrera">Departamento:</label></div><div class="grid-2"><input type="text" id="departamento" value="<%- departamento %>"></div></div>\
        <p><a id="btn-editfunc" href="javascript:;">Editar Funcionario</a></p>\
      </form>'),
	//events
	events : {
 		'click #btn-editfunc' : 'editFuncionario'//clickBoton edita un estudiante

	},
 	editFuncionario : function(){
    var $nombre = $('input#name'),
        $cedula = $('input#cedula'),
        $salario = $('input#salario'),
        $departamento = $('input#departamento'),
        itisok = false;
        console.log();

    var miFuncionarioCollection = new FuncionarioCollection(JSON.parse(localStorage.getItem('funcionarioCollection')));
    miFuncionarioCollection.where({cedula : this.model.attributes.cedula})[0].set({nombre : $nombre.val(), cedula : $cedula.val(), salario : $salario.val(), departamento : $departamento.val()});
  	localStorage["funcionarioCollection"] = JSON.stringify(miFuncionarioCollection);
    Backbone.history.stop();
    Backbone.history.start();
  }
}); 