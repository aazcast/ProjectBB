var UnFuncionarioView = Marionette.ItemView.extend({
  // tagName : 'div' // no lo ponemos porque es el default
  className : 'una-persona',

  template : _.template('<h3><%- nombre %></h3><ul><li>Cédula:</li><li><%- cedula %></li><li><%- salario %></li><li><%- departamento %></li></ul>')
});