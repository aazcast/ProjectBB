var FormView = Marionette.ItemView.extend({
	className : 'formBlog',
	template : _.template('<<form>\
  <p><label for="title">Titulo: <input type="text" id="title"></label></p>\
  <p><label for="content">Content: <input type="text" id="content"></label></p>\
  <p><label for="image">Imagen: <input type="text" id="image"></label></p>\
</form>')
}); 