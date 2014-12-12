var universidadRouter = Backbone.Router.extend({

  routes : {
    'estudiantes' : 'showAllEstudiantes',
    'estudiantes/:cedula' : 'showEstudiante',
    '*other' : 'showDefault'
  },
  showEstudiante : function(_cedula){
    var miEstudianteCollection = new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection')));
    var miEstudiante = miEstudianteCollection.where({cedula: _cedula})[0];
    var miEstudianteView = new UnEstudianteView({model: miEstudiante});
    $('#all-personas').hide();
    $("#no-route").hide();
    $('#single').html(miEstudianteView.render().$el);
  },
  showAllEstudiantes : function() {
    var miEstudiantesView = new EstudianteComposite({ collection : new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection'))) });
    $("#no-route").hide();
    $("#all-personas").show();
    $('#all-personas').html(miEstudiantesView.render().$el);
  },
  showDefault : function(route){
    $("#persona-view").hide();
    $("#all-personas").hide();
    $("#no-route") .show();
  }
});

console.warn("FACK.");
var miRouter = new universidadRouter();
Backbone.history.start();