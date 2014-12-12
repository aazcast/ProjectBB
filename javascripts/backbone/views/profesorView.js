var ProfesorView = Marionette.ItemView.extend({
	tagName : 'tr',
	template : _.template('<td><a href="#profesores/<%- cedula %>"><%- nombre %></a></td><td><%- cedula %></td><td><a href="#profesores/<%- cedula %>">Ver</a><a href="#editProfesores/<%- cedula %>">Modificar</a><a href="#profesores" class="eliminarProfe">Eliminar</a></td>'),
	
    events : {
     	'click .eliminarProfe' : 'eliminarProfe'//click eliminar estudiante 
    },
    eliminarProfe : function(){
 		var miProfeCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
    	miProfeCollection.where({nombre: this.model.attributes.nombre})[0].destroy();
    	localStorage["profesorCollection"] = JSON.stringify(miProfeCollection);
    	Backbone.history.stop();
    	Backbone.history.start();
 	}
})