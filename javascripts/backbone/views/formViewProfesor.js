var FormViewProfesor = Marionette.ItemView.extend({
	className : 'formBlog',
	template : _.template('<form>\
        <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name" value="<%- nombre %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula" value="<%- cedula %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="carnet">Salario:</label></div><div class="grid-2"><input type="text" id="salario" value="<%- salario %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="carrera">Dias Loborales:</label></div><div class="grid-2"><input type="text" id="diasLaborales" value="<%- diasLaborales %>"></div></div>\
        <p><a id="btn-editprofe" href="javascript:;">Editar Profesor</a></p>\
      </form>'),
	//events
	events : {
 		'click #btn-editprofe' : 'editProfesor'//clickBoton edita un estudiante

	},
 	editProfesor : function(){
    var $nombre = $('input#name'),
        $cedula = $('input#cedula'),
        $salario = $('input#salario'),
        $dias = $('input#diasLaborales'),
        itisok = false;
        console.log();

    var miProfesorCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
    miProfesorCollection.where({cedula : this.model.attributes.cedula})[0].set({nombre : $nombre.val(), cedula : $cedula.val(), salario : $salario.val(), diasLaborales : $dias.val()});
  	localStorage["profesorCollection"] = JSON.stringify(miProfesorCollection);
    Backbone.history.stop();
    Backbone.history.start();
  }
}); 