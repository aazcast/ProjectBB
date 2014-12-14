var FuncionarioComposite = Marionette.CompositeView.extend({
	//add the template
  	template : _.template('<div class="forms">\
     <h2>Nuevo Funcionario</h2>\
       <form>\
          <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name"></div></div>\
          <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula"></div></div>\
          <div class="row"><div class="grid-6"><label for="cedula">Fecha de Nacimiento:</label></div><div class="grid-2"><input type="date" id="nacimiento"></div></div>\
          <div class="row"><div class="grid-6"><label for="salario">Salario:</label></div><div class="grid-2"><input type="text" id="salario"></div></div>\
          <div class="row"><div class="grid-6"><label for="departamento">Departamento:</label></div><div class="grid-2"><input type="text" id="departamento"></div></div>\
          <p><a id="btn-newfunc" href="javascript:;">Crear Funcionario</a></p>\
      </form>\
      </div><div class="success"><p>Su Funcionario se ha creado exitosamente</p></div><div class="goback"><a href="#funcionarios">Volver</a></div><div class="boton cf"><a href="#crear">Crear Funcionario</a></div><div class="listusers"><table id="funcionario"><tr><td>Nombre</td><td>Cédula</td><td>Opciones</td></tr></table></div>'),

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
      		$nacimiento = $('input#nacimiento'),
      		$salario = $('input#salario'),
      		$departamento = $('input#departamento'),
      		searchReg = /^[a-zA-Z0-9-]+$/,
      		fechNac = null;
      		//itisok = false;

      	fechNac = $nacimiento.val();
      	fechNac = new Date();

	   if($nombre.val() != "" && $cedula.val() != ""){
      		console.log("primer if");
	       if(searchReg.test($nombre.val()) && searchReg.test($cedula.val())  && searchReg.test($salario.val()) && searchReg.test($departamento.val()) ){
		    	this.collection.add({
		        	nombre : $nombre.val(),
		        	cedula : $cedula.val(),
		        	nacimiento : fechNac,
		        	salario : $salario.val(),
		        	departamento : $departamento.val(),
	      		});	
	      		$('.success').show();
	    	}
	    }else {
	    	if (!searchReg.test($nombre.val())) {
		        $nombre.addClass('fail')
		      } else {
		        $nombre.removeClass('fail')
		      }
		      if (!searchReg.test($cedula.val())) {
		        $cedula.addClass('fail')
		      } else {
		        $cedula.removeClass('fail')
		      }
		      if (!searchReg.test($nacimiento.val())) {
		        $nacimiento.addClass('fail')
		      } else {
		        $nacimiento.removeClass('fail')
		      }
		      if (!searchReg.test($salario.val())) {
		        $salario.addClass('fail')
		      } else {
		        $salario.removeClass('fail')
		      }
		      if (!searchReg.test($departamento.val())) {
		        $departamento.addClass('fail')
		      } else {
		        $departamento.removeClass('fail')
		      }
	    }
      	
 	}
})