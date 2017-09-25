(function () {
  /*establesco las rutas que ocupo con el modulo ngRoute
  cuando habró cierto link ej(/clientes) me redirecciona a cierto template y controlador
  con otherwise digo que principal sera la vista por defecto*/
  angular.module("app")
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
    .when("/clientes", {
      templateUrl : '../../TallerAngular/app/views/formcliente.html',
      controller : 'ClienteController'
    })
    .when("/:nombre/:email/:telefono",{
      templateUrl : '../../TallerAngular/app/views/prestamocliente.html',
      controller : 'PrestamoController'
    })
    .when("/deudores",{
      templateUrl : '../../TallerAngular/app/views/deudasclientes.html',
      controller : 'DeudoresController'
    })
    .when("/principal",{
      templateUrl : '../../TallerAngular/app/views/principal.html',
      controller : 'InicioController'
    })
    .otherwise({
      redirectTo : '/principal'
    });
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }]);
})();