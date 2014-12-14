var UnProfesorView = Marionette.ItemView.extend({
  // tagName : 'div' // no lo ponemos porque es el default
  className : 'una-persona',

  template : _.template('<div class="detalles">\
	<h2><%- nombre %></h2>\
	<p>Cédula: <%- cedula %></p>\
	<p>Fecha de nacimiento: <%- nacimiento %></p>\
	<p>Salario: <%- salario %></p>\
	<p>Dias de Laborales: <%- diasLaborales %></p>\
	<div class="detallesback"><a href="#estudiantes">Volver</a></div>\
</div>')
});