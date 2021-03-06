var EstudianteComposite = Marionette.CompositeView.extend({
	//add the template
  	template : _.template('<div class="forms">\
     <h2>Nuevo Estudiantes</h2>\
      <form>\
        <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name"></div></div>\
        <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula"></div></div>\
        <div class="row"><div class="grid-6"><label for="cedula">Fecha de Nacimiento:</label></div><div class="grid-2"><input type="date" id="nacimiento"></div></div>\
        <div class="row"><div class="grid-6"><label for="carnet">Carnet:</label></div><div class="grid-2"><input type="text" id="carnet"></div></div>\
        <div class="row"><div class="grid-6"><label for="carrera">Carrera:</label></div><div class="grid-2"><input type="text" id="carrera"></div></div>\
        <div class="row"><div class="grid-6"><label for="lugar">Lugar de Procedencia:</label></div><div class="grid-2"><input type="text" id="lugar"></div></div>\
        <p><a id="btn-newstudent" href="javascript:;">Crear Estudiante</a></p>\
      </form>\
      </div><div class="success"><p>Su Estudiante se ha creado exitosamente</p></div><div class="goback"><a href="#estudiantes">Volver</a></div><div class="boton cf"><a href="#crear">Crear Estudiante</a></div><div class="listusers"><table id="estudiantes"><tr><td>Nombre</td><td>Cédula</td><td>Opciones</td></tr></table></div>'),
	
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
      		$nacimiento = $('input#nacimiento'),
      		$carrera = $('input#carrera'),
      		$lugar = $('input#lugar'),
      		searchReg = /^[a-zA-Z0-9- ]+$/,
      		fechaNac = null,

      		fechNac = $nacimiento.val();
      		fechNac = new Date();
      		
      if($nombre.val() != "" && $cedula.val() != ""){
      		console.log("primer if");
	       if(searchReg.test($nombre.val()) && searchReg.test($cedula.val())  && searchReg.test($carnet.val()) && searchReg.test($carrera.val()) && searchReg.test($lugar.val())){
		    	this.collection.add({
	        		nombre : $nombre.val(),
	        		cedula : $cedula.val(),
	        		nacimiento : fechNac,
	        		carnet : $carnet.val(),
	        		carrera : $carrera.val(),
	       	 		lugar : $lugar.val()
      			});
      			$('.success').show();
	    	}
	    }else {
	    	//nombre el input
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
		      if (!searchReg.test($carnet.val())) {
		        $carnet.addClass('fail')
		      } else {
		        $carnet.removeClass('fail')
		      }
		      if (!searchReg.test($carrera.val())) {
		        $carrera.addClass('fail')
		      } else {
		        $carrera.removeClass('fail')
		      }
		      if (!searchReg.test($lugar.val())) {
		        $lugar.addClass('fail')
		      } else {
		        $lugar.removeClass('fail')
		      }
	    }
 	}

})