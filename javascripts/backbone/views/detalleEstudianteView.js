var UnEstudianteView = Marionette.ItemView.extend({
  // tagName : 'div' // no lo ponemos porque es el default
  className : 'una-persona',

  template : _.template('<div class="detalles">\
	<h2><%- nombre %></h2>\
	<p>Cédula: <%- cedula %></p>\
	<p>Fecha de nacimiento: <%- nacimiento %></p>\
	<p>Carnet: <%- carnet %></p>\
	<p>Carrera: <%- carrera %></p>\
	<p>Lugar de Procedencia: <%- lugar %></p>\
	<div class="detallesback"><a href="#estudiantes">Volver</a></div>\
</div>')
})