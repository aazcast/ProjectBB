var ProfesorComposite = Marionette.CompositeView.extend({
	//add the template
  	template : _.template('<div class="forms">\
     <h2>Nuevo Profesor</h2>\
       <form>\
          <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name"></div></div>\
          <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula"></div></div>\
          <div class="row"><div class="grid-6"><label for="salario">Salario:</label></div><div class="grid-2"><input type="text" id="salario"></div></div>\
          <div class="row"><div class="grid-6"><label for="diasLaborales">Dias Laborales:</label></div><div class="grid-2" id="date"><input type="checkbox" name="dias" id="l" value="Lunes">Lunes<input type="checkbox" name="dias" id="k" value="Martes">Martes<input type="checkbox" name="dias" id="m" value="Miercoles">Miercoles<input type="checkbox" name="dias" id="j" value="Jueves">Jueves<input type="checkbox" name="dias" id="v" value="Viernes">Viernes<input type="checkbox" name="dias" id="s" value="Sabado">Sabado<input type="checkbox" name="dias" id="d" value="Domingo">Domingo</div></div>\
          <p><a id="btn-newprofe" href="javascript:;">Crear Profesor</a></p>\
          <p><a id="btn-editprofe" href="javascript:;">Editar Profesor</a></p>\
      </form>\
      </div><div class="success"><p>Su Profesor se ha creado exitosamente</p></div><div class="goback"><a href="#profesores">Volver</a></div><div class="boton cf"><a href="#crear">Crear Profesor</a></div><div class="listusers"><table id="profesores"><tr><td>Nombre</td><td>Cédula</td><td>Opciones</td></tr></table></div>'),

	//add the container
	childViewContainer : '#profesores',

	//add the view line
	childView : ProfesorView,

	//events
	events : {
		'click #btn-newprofe' : 'nuevoProfesor',//clickBoton crear nuevo profesor
 		'click #show-form' : 'mostrarForm'//clickBoton mostrar formulario profesor
 		//'click #btn-editprof' : 'editProfesor'//clickBoton edita un profesor

	},

	collectionEvents : {
		'change' : 'changeRender' // 'change' : 'render'
	},

	changeRender : function(){
 		alert("Un profesor ha cambiado");
 		this.render();
 	},
 	/*onBeforeRender : function(){
 		this.collection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
 	},*/

 	nuevoProfesor : function(){
 		var $nombre = $('input#name'),
      		$cedula = $('input#cedula'),
      		$salario = $('input#salario'),
      		$lunes = $('input#l'),
      		$martes = $('input#k'),
      		$miercoles = $('input#m'),
      		$jueves = $('input#j'),
      		$viernes = $('input#v'),
      		$sabado = $('input#s'),
      		$domingo = $('input#d'),
      		$dias = "",
      		$divCont = document.getElementById('date'),
			$checks  = $divCont.getElementsByTagName('input'),
      		searchReg = /^[a-zA-Z0-9-]+$/,
      		checkedCheckboxes = false;
      		//itisok = false;

      		
			for(i=0;i<$checks.length; i++){
			     if($checks[i].checked == true){
			     	$dias+=$checks[i].value+"- ";
			   }
			}
			console.log($dias);

      		 $('input[name=dias]').each(function (i, checkbox) {
			  if ($(checkbox).is(":checked")) {

			  	checkedCheckboxes = true;
			  }
			 });
			 if (!checkedCheckboxes) {
			  alert('seleccione almenos una casilla!');
			  return false;
			 }

      	if($nombre.val() != "" && $cedula.val() != ""){
      		console.log("primer if");
	       if(searchReg.test($nombre.val()) && searchReg.test($cedula.val())  && searchReg.test($salario.val())){
		    	this.collection.add({
			       	nombre : $nombre.val(),
			        cedula : $cedula.val(),
			        salario : $salario.val(),
			        diasLaborales: $dias
		      	});	
	    	}
	    }else {
	    	console.log("else");
	    }

      	
 	}
})