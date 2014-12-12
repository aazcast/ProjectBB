var EstudianteCollection = Backbone.Collection.extend({
	model : Estudiante,
	initialize : function () {
		this.on('add', function() {
			console.log('se ha agregado el estudiante en collection')
			localStorage.setItem('estudianteCollection', JSON.stringify(this.toJSON()) );
		})
	}
});