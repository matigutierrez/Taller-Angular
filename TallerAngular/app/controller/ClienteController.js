(function () {
  //instancioamos el modulo y agregarmos al controlados mas modulos, localstorage y scope
  angular.module("app")
  .controller('ClienteController',['$scope','$localStorage', function ($scope, $localStorage) {
    
    //creamos el modelo para ingresar datos
    $scope.userModel = {
      nombre: '',
      email: '',
      telefono: ''
    }
    
    //recibimos el capital_actual de localstorage
    $scope.monto = $localStorage.cantidad;

    //decimos si hay datos en localstorage se los pasamos a user, sino lo dejamos con un arreglo
    $scope.users = $localStorage.users || [];

    /*boton que crea un nuevo elemento en nuestro arrreglo
    una vez agregado, lo guardamos en localstorage
    vaciamos los campos de texto*/
    $scope.enviar = function (model) {
      $scope.users.push({nombre:model.nombre, email:model.email, telefono:model.telefono});
      $localStorage.users = $scope.users;
      model.nombre = '';
      model.email = '';
      model.telefono = '';
    }

    //eliminamos la fila y actualizamos el localstorage
    $scope.eliminar = function ($index) {
      $scope.users.splice($index,1);
      $localStorage.users = $scope.users;
    } 

    /*boton para actualizar 
    recibimos los datos del formulario
    se los pasamos al arreglo
    y registramos los cambios en localstorage*/
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
