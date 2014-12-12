var Estudiante = Persona.extend({
	defaults : {
		carnet : '',
		carrera : '',
		lugarPrecedencia : ''
	},
  	initialize : function(){
    	console.warn('Nuevo estudiante creado!');
  	}
});