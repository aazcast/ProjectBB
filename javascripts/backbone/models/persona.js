var Persona = Backbone.Model.extend({
	//Variedades default
	defaults : {
		nombre : '',
		cedula : '',
		nacimiento : new Date
	},
	initialize : function() {
		console.log('Persona agregada', this.get('nombre'));
	}
});