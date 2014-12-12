var EstudianteView = Marionette.ItemView.extend({
	tagName : 'tr',
	template : _.template('<td><a href="#estudiantes/<%- cedula %>"><%- nombre %></a></td><td><%- cedula %></td><td><a href="#estudiantes/<%- cedula %>">Ver</a><a href="#editstudent/<%- cedula %>">Modificar</a><a href="#estudiantes" class="eliminarStudent">Eliminar</a></td>'),
	events : {
     	'click .eliminarStudent' : 'eliminarEstudiante'//click eliminar estudiante 
    },
    eliminarEstudiante : function(){
 		var miStudentCollection = new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection')));
    	miStudentCollection.where({nombre: this.model.attributes.nombre})[0].destroy();
    	localStorage["estudianteCollection"] = JSON.stringify(miStudentCollection);
    	Backbone.history.stop();
    	Backbone.history.start();
 	}
})