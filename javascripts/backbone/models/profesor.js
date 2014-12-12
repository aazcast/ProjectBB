var Profesor = Persona.extend({
	defaults : {
		salario : 0,
		diasLaborales : ''
	},
  	initialize : function(){
    	console.warn('Nuevo profesor creado!');
  	}
});