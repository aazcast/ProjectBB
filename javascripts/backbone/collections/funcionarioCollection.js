var FuncionarioCollection = Backbone.Collection.extend({
	model : Funcionario,
	initialize : function () {
		this.on('add', function() {
			console.log('se ha agregado el funcionario en collection')
			localStorage.setItem('funcionarioCollection', JSON.stringify(this.toJSON()));
		})
	}
});