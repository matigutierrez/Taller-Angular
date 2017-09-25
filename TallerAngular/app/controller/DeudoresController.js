(function () {
  //instancioamos el modulo y agregarmos al controlados mas modulos, localstorage y scope
  angular.module("app")
  .controller('DeudoresController',['$scope','$localStorage', function ($scope, $localStorage) {
    //recibimos los datos del capital actual de localstorage
    $scope.monto = $localStorage.cantidad;

    //decimos si hay datos en localstorage se los pasamos a user, sino lo dejamos con un arreglo
    $scope.deudores = $localStorage.deudas || [];


    //perfeccionado para version 2.0
    $scope.pagar = function ($index) {
      var ganancia = parseInt($scope.deudores[$index].prestamos);
      $scope.monto = parseInt(ganancia + $localStorage.cantidad);
      $localStorage.cantidad = $scope.monto;
      $scope.deudores.splice($index,1);
      $localStorage.deudas = $scope.deudores;
    }

  }]);
})();

