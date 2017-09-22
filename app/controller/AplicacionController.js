	
(function () {
	angular.module("app")
	.controller('AppController',['$scope','$localStorage',function($scope, $localStorage){
		$scope.vista = 'app/views/panel.html';
		var nuevo = {
				nombre: '',
				apellido: '',
				imagen: '',
				vivo: ''
			}
		/*$scope.users = [
			{
			nombre: 'Juan',
			apellido: 'Nieves',
			imagen: 'https://pbs.twimg.com/profile_images/613894506480439296/MGWBzW3B.jpg',
			vivo: true
			},
			{
			nombre: 'Daenerys',
			apellido: 'Targaryen',
			imagen: 'https://pbs.twimg.com/profile_images/699219278927675393/de5Cjrju.png',
			vivo: false
			},
			{
			nombre: 'Eddard',
			apellido: 'Stark',
			imagen: 'https://pbs.twimg.com/profile_images/623606708531818496/8ap1ZAb6.jpg',
			vivo: true
			}
		];*/

		$scope.users = $localStorage.users;

		$scope.cargar = function(){
			nuevo = {
				nombre: this.nombre,
				apellido: this.apellido,
				imagen: this.imagen,
				vivo: this.bool
			}
			
			$scope.users.push({nombre:this.nombre, apellido: this.apellido, imagen:this.imagen, vivo:this.bool});
			$localStorage.users = this.users;
		}
	}]);
})();
