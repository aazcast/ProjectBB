var EstudianteComposite = Marionette.CompositeView.extend({
	//add the template
  	template : _.template('<div class="forms">\
     <h2>Nuevo Estudiantes</h2>\
      <form>\
        <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name"></div></div>\
        <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula"></div></div>\
        <div class="row"><div class="grid-6"><label for="carnet">Carnet:</label></div><div class="grid-2"><input type="text" id="carnet"></div></div>\
        <div class="row"><div class="grid-6"><label for="carrera">Carrera:</label></div><div class="grid-2"><input type="text" id="carrera"></div></div>\
        <div class="row"><div class="grid-6"><label for="lugar">Lugar de Procedencia:</label></div><div class="grid-2"><input type="text" id="lugar"></div></div>\
        <p><a id="btn-newstudent" href="javascript:;">Crear Estudiante</a></p>\
      </form>\
      </div><div class="goback"><a href="#estudiantes">Volver</a></div><div class="boton cf"><a href="#crear">Crear Estudiante</a></div><div class="listusers"><table id="estudiantes"><tr><td>Nombre</td><td>Cédula</td><td>Opciones</td></tr></table></div>'),

	//add the container
	childViewContainer : '#estudiantes',

	//add the view line
	childView : EstudianteView,

	//events
	events : {
		'click #btn-newstudent' : 'nuevoEstudiante',//clickBoton crear nuevo estudiante
 		'click #show-form' : 'mostrarForm'//clickBoton mostrar formulario estudiante

	},

	collectionEvents : {
		'change' : 'changeRender' // 'change' : 'render'
	},

	changeRender : function(){
 		alert("Un estudiante ha cambiado");
 		this.render();
 	},
 	/*onBeforeRender : function(){
 		this.collection = new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection')));
 	},*/

 	nuevoEstudiante : function(){
 		var $nombre = $('input#name'),
      		$cedula = $('input#cedula'),
      		$carnet = $('input#carnet'),
      		$carrera = $('input#carrera'),
      		$lugar = $('input#lugar'),
      		searchReg = /^[a-zA-Z0-9-]+$/;
      		if($nombre.val() != "" && $cedula.val() != ""){
      		console.log("primer if");
	       if(searchReg.test($nombre.val()) && searchReg.test($cedula.val())  && searchReg.test($salario.val()) && searchReg.test($dias.val()) ){
		    	this.collection.add({
	        		nombre : $nombre.val(),
	        		cedula : $cedula.val(),
	        		carnet : $carnet.val(),
	        		carrera : $carrera.val(),
	       	 		lugar : $lugar.val()
      			});
	    	}
	    }else {
	    	console.log("else");
	    }
      	this.collection.add({
	        nombre : $nombre.val(),
	        cedula : $cedula.val(),
	        carnet : $carnet.val(),
	        carrera : $carrera.val(),
	        lugar : $lugar.val()
      	});
 	}

})