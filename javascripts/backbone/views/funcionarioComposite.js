var FuncionarioComposite = Marionette.CompositeView.extend({
	//add the template
  	template : _.template('<div class="forms">\
     <h2>Nuevo Funcionario</h2>\
       <form>\
          <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name"></div></div>\
          <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula"></div></div>\
          <div class="row"><div class="grid-6"><label for="salario">Salario:</label></div><div class="grid-2"><input type="text" id="salario"></div></div>\
          <div class="row"><div class="grid-6"><label for="departamento">Departamento:</label></div><div class="grid-2"><input type="text" id="departamento"></div></div>\
          <p><a id="btn-newfunc" href="javascript:;">Crear Funcionario</a></p>\
      </form>\
      </div><div class="boton cf"><a href="#crear">Crear Funcionario</a></div><div class="listusers"><table id="funcionario"><tr><td>Nombre</td><td>Cédula</td><td>Opciones</td></tr></table></div>'),

	//add the container
	childViewContainer : '#funcionario',

	//add the view line
	childView : FuncionarioView,

	//events
	events : {
		'click #btn-newfunc' : 'nuevoFuncionario',//clickBoton crear nuevo funcionario
 		'click #show-form' : 'mostrarForm'//clickBoton mostrar formulario funcionario
 		//'click #btn-editprof' : 'editProfesor'//clickBoton edita un funcionario

	},

	collectionEvents : {
		'change' : 'changeRender' // 'change' : 'render'
	},

	changeRender : function(){
 		alert("Un funcionario ha cambiado");
 		this.render();
 	},
 	/*onBeforeRender : function(){
 		this.collection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
 	},*/

 	nuevoFuncionario : function(){
 		var $nombre = $('input#name'),
      		$cedula = $('input#cedula'),
      		$salario = $('input#salario'),
      		$departamento = $('input#departamento'),
      		itisok = false;

      	this.collection.add({
	        nombre : $nombre.val(),
	        cedula : $cedula.val(),
	        salario : $salario.val(),
	        departamento : $departamento.val(),
      	});
 	}
})