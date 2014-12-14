var UnEstudianteView = Marionette.ItemView.extend({
  // tagName : 'div' // no lo ponemos porque es el default
  className : 'una-persona',

  template : _.template('<h3><%- nacimiento %></h3><ul><li>Cédula:</li><li><%- cedula %></li><li><%- carnet %></li><li><%- carrera %></li>')
});