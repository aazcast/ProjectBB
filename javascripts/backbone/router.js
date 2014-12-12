var universidadRouter = Backbone.Router.extend({

  routes : {
    'estudiantes' : 'showAllEstudiantes',
    'estudiantes/:cedula' : 'showEstudiante',
    'editstudent/:cedula' : 'editstudent',
    'profesores' : 'showAllProfesores',
    'profesores/:cedula' : 'showProfesor',
    'editProfesores/:cedula' : 'editProfesor',
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
  editstudent : function (_cedula) {
    var miEstudianteCollection = new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection')));
    var miEstudiante = miEstudianteCollection.where({cedula: _cedula})[0];
    var miFormView = new FormView({model: miEstudiante});
    $('#all-personas').html(miFormView.render().$el);
    
  },

  showProfesor : function(_cedula){
    var miProfesoresCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
    var miProfesor = miProfesoresCollection.where({cedula: _cedula})[0];
    var miProfesorView = new UnProfesorView({model: miProfesor});
    $('#all-personas').hide();
    $("#no-route").hide();
    $('#single').html(miProfesorView.render().$el);
  },

  showAllProfesores : function(){
    var miProfesoresView = new ProfesorComposite({ collection : new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection'))) });
    $("#no-route").hide();
    $("#all-personas").show();
    $('#all-personas').html(miProfesoresView.render().$el);
  },

  editProfesor : function (_cedula) {
    var miProfesoresCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
    var miProfesor = miProfesoresCollection.where({cedula: _cedula})[0];
    var miFormViewProfesor = new FormViewProfesor({model: miProfesor});
    $('#all-personas').html(miFormViewProfesor.render().$el);
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