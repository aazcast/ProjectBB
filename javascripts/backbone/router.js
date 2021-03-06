var universidadRouter = Backbone.Router.extend({

  routes : {
    //estudiantes
    'estudiantes' : 'showAllEstudiantes',
    'estudiantes/:cedula' : 'showEstudiante',
    'editstudent/:cedula' : 'editstudent',
    //Profesores
    'profesores' : 'showAllProfesores',
    'profesores/:cedula' : 'showProfesor',
    'editProfesores/:cedula' : 'editProfesor',
    //Funcionarios
    'funcionarios' : 'showAllFuncionarios',
    'funcionarios/:cedula' : 'showFuncionario',
    'editFuncionario/:cedula' : 'editFuncionario',
    //Default
    'crear' : 'crearPersona',
    '*other' : 'showDefault'
  },
  //Estudiantes
  showEstudiante : function(_cedula){
    var miEstudianteCollection = new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection')));
    var miEstudiante = miEstudianteCollection.where({cedula: _cedula})[0];
    var miEstudianteView = new UnEstudianteView({model: miEstudiante});
    $('#all-personas').hide();
    $("#no-route").hide();
    $('.goback').show();
    $('#single').show();
    $('#single').html(miEstudianteView.render().$el);
  },
  showAllEstudiantes : function() {
    var miEstudiantesView = new EstudianteComposite({ collection : new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection'))) });
    $("#no-route").hide();
    $('#single').hide();
    $("#all-personas").show();
    $('#all-personas').html(miEstudiantesView.render().$el);
  },
  editstudent : function (_cedula) {
    var miEstudianteCollection = new EstudianteCollection(JSON.parse(localStorage.getItem('estudianteCollection')));
    var miEstudiante = miEstudianteCollection.where({cedula: _cedula})[0];
    var miFormView = new FormView({model: miEstudiante});
    $('#all-personas').html(miFormView.render().$el);
    $('.forms').show();
    $('.goback').show();
    $('#single').hide();
    
  },
  //Profesores
  showProfesor : function(_cedula){
    var miProfesoresCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
    var miProfesor = miProfesoresCollection.where({cedula: _cedula})[0];
    var miProfesorView = new UnProfesorView({model: miProfesor});
    $('#all-personas').hide();
    $("#no-route").hide();
    $('#single').show();
    $('#single').html(miProfesorView.render().$el);
  },

  showAllProfesores : function(){
    var miProfesoresView = new ProfesorComposite({ collection : new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection'))) });
    $("#no-route").hide();
    $('#single').hide();
    $("#all-personas").show();
    $('#all-personas').html(miProfesoresView.render().$el);
  },

  editProfesor : function (_cedula) {
    var miProfesoresCollection = new ProfesorCollection(JSON.parse(localStorage.getItem('profesorCollection')));
    var miProfesor = miProfesoresCollection.where({cedula: _cedula})[0];
    var miFormViewProfesor = new FormViewProfesor({model: miProfesor});
    $('#all-personas').html(miFormViewProfesor.render().$el);
    $('.forms').show();
    $('.goback').show();
    $('#single').hide();
  },
  //Funcionarios
  showFuncionario : function(_cedula){
    var miFuncionarioCollection = new FuncionarioCollection(JSON.parse(localStorage.getItem('funcionarioCollection')));
    var miFuncionario = miFuncionarioCollection.where({cedula: _cedula})[0];
    var miFuncionarioView = new UnFuncionarioView({model: miFuncionario});
    $('#all-personas').hide();
    $('.goback').show();    
    $('#single').show();
    $("#no-route").hide();
    $('#single').html(miFuncionarioView.render().$el);
  },

  showAllFuncionarios : function(){
    var miFuncionarioView = new FuncionarioComposite({ collection : new FuncionarioCollection(JSON.parse(localStorage.getItem('funcionarioCollection'))) });
    $("#no-route").hide();
    $('#single').hide();
    $("#all-personas").show();
    $('#all-personas').html(miFuncionarioView.render().$el);
  },

  editFuncionario : function (_cedula) {
    var miFuncionarioCollection = new FuncionarioCollection(JSON.parse(localStorage.getItem('funcionarioCollection')));
    var miFuncionario = miFuncionarioCollection.where({cedula: _cedula})[0];
    var miFuncionarioView = new FormViewFuncionario({model: miFuncionario});
    $('#all-personas').html(miFuncionarioView.render().$el);
    $('.forms').show();
    $('#single').hide();
    $('.goback').show();
  },
  //Default route
  crearPersona : function () {
    $('.forms').show();
    $('.boton').hide();
    $('.listusers').hide();
    $('#single').hide();
    $('.goback').show();
    //validate Name
    $('input#name').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate name
    //validate cedula
    $('input#cedula').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate cedula
    //validate carrera
    $('input#carrera').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate carrera
    //validate carnet
    $('input#carnet').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate carnet
    //validate lugar
    $('input#lugar').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate lugar
    //validate salario
    $('input#salario').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate salario
    //validate diasLaborales
    $('input#diasLaborales').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate diasLaborales
    //validate departamento
    $('input#departamento').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate departamento
    //validate nacimiento
    $('input#nacimiento').on('blur', function () {
      //this el input
      var txtRegExp = /^[a-zA-Z0-9- ]+$/;
      var $this = $(this)
      if (!txtRegExp.test($this.val())) {
        $this.addClass('fail')
      } else {
        $this.removeClass('fail')
      }
    });//end validate nacimiento
  },
  showDefault : function(route){
    $("#persona-view").hide();
    $("#all-personas").hide();
    $('#single').hide();
    $("#no-route") .show();
  }
});

console.warn("FACK.");
var miRouter = new universidadRouter();
Backbone.history.start();