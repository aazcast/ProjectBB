var Funcionario = Persona.extend({
	defaults : {
		salario : 0,
		departamento : ''
	},
  	initialize : function(){
    	console.warn('Nuevo funcionario creado!');
  	}
});