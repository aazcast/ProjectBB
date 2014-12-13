var FormViewProfesor = Marionette.ItemView.extend({
	className : 'formBlog',
	template : _.template('<div class="forms"><form>\
        <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name" value="<%- nombre %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula" value="<%- cedula %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="salario">Salario:</label></div><div class="grid-2"><input type="text" id="salario" value="<%- salario %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="carrera">Dias Loborales:</label></div><div class="grid-2"><input type="checkbox" name="dias" id="diasLaborales" value="Lunes">Lunes<input type="checkbox" name="dias" id="diasLaborales" value="Martes">Martes<input type="checkbox" name="dias" id="diasLaborales" value="Miercoles">Miercoles<input type="checkbox" name="dias" id="diasLaborales" value="Jueves">Jueves<input type="checkbox" name="dias" id="diasLaborales" value="Viernes">Viernes<input type="checkbox" name="dias" id="diasLaborales" value="Sabado">Sabado<input type="checkbox" name="dias" id="diasLaborales" value="Domingo">Domingo</div></div>\
        <p><a id="btn-editprofe" href="javascript:;">Editar Profesor</a></p>\
      </form></div><div class="success"><p>Su Profesor se ha editado exitosamente</p></div><div class="goback"><a href="#profesores">Volver</a></div>'),
	//events
	events : {
 		'click #btn-editprofe' : 'editProfesor'//clickBoton edita un estudiante

	},
 	editProfesor : function(){
    var $nombre = $('input#name'),
        $cedula = $('input#cedula'),
        $salario = $('input#salario'),
        $dias = $('input#diasLaborales'),
        searchReg = /^[a-zA-Z0-9-]+$/;
        console.log();

    //var miProfesorCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
    //miProfesorCollection.where({cedula : this.model.attributes.cedula})[0].set({nombre : $nombre.val(), cedula : $cedula.val(), salario : $salario.val(), diasLaborales : $dias.val()});
  	//localStorage["profesorCollection"] = JSON.stringify(miProfesorCollection);
    //Backbone.history.stop();
    //Backbone.history.start();

    if($nombre.val() != "" && $cedula.val() != ""){
            console.log("primer if");

            if(searchReg.test($nombre.val()) && searchReg.test($cedula.val())  && searchReg.test($salario.val()) && searchReg.test($dias.val()) ){
            
               var  miProfesorCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
                    miProfesorCollection.where({cedula : this.model.attributes.cedula})[0].set({nombre : $nombre.val(), cedula : $cedula.val(), salario : $salario.val(), diasLaborales : $dias.val()});
                    localStorage["profesorCollection"] = JSON.stringify(miProfesorCollection);
                    Backbone.history.stop();
                    Backbone.history.start();
                    $('.success').show();
            }else {
                console.log("in-else");
            }
        }else {
            console.log("out-else");
        }

  }
}); 