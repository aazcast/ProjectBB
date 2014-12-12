var FormView = Marionette.ItemView.extend({
	className : 'formBlog',
	template : _.template('<div class="forms"><form>\
        <div class="row"><div class="grid-6"><label for="name">Nombre:</label></div><div class="grid-2"><input type="text" id="name" value="<%- nombre %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="cedula">Cédula:</label></div><div class="grid-2"><input type="text" id="cedula" value="<%- cedula %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="carnet">Carnet:</label></div><div class="grid-2"><input type="text" id="carnet" value="<%- carnet %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="carrera">Carrera:</label></div><div class="grid-2"><input type="text" id="carrera" value="<%- carrera %>"></div></div>\
        <div class="row"><div class="grid-6"><label for="lugar">Lugar de Procedencia:</label></div><div class="grid-2"><input type="text" id="lugar" value="<%- lugar %>"></div></div>\
        <p><a id="btn-editstudent" href="javascript:;">Editar Estudiante</a></p>\
      </form></div>'),
	//events
	events : {
 		'click #btn-editstudent' : 'editEstudiante'//clickBoton edita un estudiante

	},
 	editEstudiante : function(){
    var $nombre = $('input#name'),
        $cedula = $('input#cedula'),
        $carnet = $('input#carnet'),
        $carrera = $('input#carrera'),
        $lugar = $('input#lugar'),
        itisok = false;
        console.log()
    var miEstudianteCollection = new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection')));
    miEstudianteCollection.where({cedula : this.model.attributes.cedula})[0].set({nombre : $nombre.val(), cedula : $cedula.val(), carnet : $carnet.val(), carrera : $carrera.val(), lugar : $lugar.val()});
  	localStorage["estudianteCollection"] = JSON.stringify(miEstudianteCollection);
    Backbone.history.stop();
    Backbone.history.start();
  }
}); 