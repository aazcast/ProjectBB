var FuncionarioView = Marionette.ItemView.extend({
	tagName : 'tr',
	template : _.template('<td><a href="#funcionarios/<%- cedula %>"><%- nombre %></a></td><td><%- cedula %></td><td><a href="#funcionarios/<%- cedula %>">Ver</a><a href="#editFuncionario/<%- cedula %>">Modificar</a><a href="#funcionarios" class="eliminarFuncionario">Eliminar</a></td>'),
	
    events : {
     	'click .eliminarFuncionario' : 'eliminarFuncionario'//click eliminar estudiante 
    },
    eliminarFuncionario : function(){
 		var miFuncCollection = new FuncionarioCollection(JSON.parse(localStorage.getItem('funcionarioCollection')));
    	miFuncCollection.where({nombre: this.model.attributes.nombre})[0].destroy();
    	localStorage["funcionarioCollection"] = JSON.stringify(miFuncCollection);
    	Backbone.history.stop();
    	Backbone.history.start();
 	}
})