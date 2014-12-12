var ProfesorCollection = Backbone.Collection.extend({
	model : Profesor,
	initialize : function () {
		this.on('add', function() {
			console.log('se ha agregado el profesor en collection')
			localStorage.setItem('profesorCollection', JSON.stringify(this.toJSON()) );
		})
	}
});