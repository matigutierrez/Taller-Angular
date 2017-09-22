(function () {
  angular.module("app")
  .controller('ClienteController',['$scope','$localStorage', function ($scope, $localStorage) {
    $scope.cliente = 'app/views/formcliente.html';
    $scope.userModel = {
      nombre: '',
      email: '',
      telefono: ''
    }

    $scope.users = $localStorage.users || [];
    $scope.enviar = function (model) {
      $scope.users.push({nombre:model.nombre, email:model.email, telefono:model.telefono});
      $localStorage.users = $scope.users;
      model.nombre = '';
      model.email = '';
      model.telefono = '';
    }

    $scope.eliminar = function ($index) {
      $scope.users.splice($index,1);
      $localStorage.users = $scope.users;
    } 

    $scope.actualizar = function ($index, model) {
      if (model.nombre != '' && model.email != '' && model.telefono != ''){
        $scope.users[$index].nombre = model.nombre;
        $scope.users[$index].email = model.email;
        $scope.users[$index].telefono = model.telefono;
        $localStorage.users = $scope.users;
      }
      if (model.nombre != '') {
        $scope.users[$index].nombre = model.nombre;
        $localStorage.users = $scope.users;
      }
      if (model.email != '') {
        $scope.users[$index].email = model.email;
        $localStorage.users = $scope.users;
      }
      if (model.telefono != '') {
        $scope.users[$index].telefono = model.telefono;
        $localStorage.users = $scope.users;
      }
      model.nombre = '';
      model.email = '';
      model.telefono = '';
    }

  }]);
})();
