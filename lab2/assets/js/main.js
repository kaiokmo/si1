var app = angular.module("lab2", ['ngMaterial']);

app.controller("lab2controller", function ($scope) {
	$scope.app = "Lab 2";

	$scope.tarefas = [{
		descricao: 'Levar o cachorro pra passear',
		concluido: false
	}, {
		descricao: 'Estudar lógica',
		concluido: false
	}, {
		descricao: 'Terminar o Lab de SI',
		concluido: false
	}];

	$scope.tarefasSelecionadas = [];

	$scope.toggle = function (item, list) {
		var idx = list.indexOf(item);
		if (idx > -1) {
			list.splice(idx, 1);
		} else {
			list.push(item);
		}
	};

	$scope.exists = function (item, list) {
		return list.indexOf(item) > -1;
	};

	$scope.isIndeterminate = function () {
		return ($scope.tarefasSelecionadas.length !== 0 &&
			$scope.tarefasSelecionadas.length !== $scope.tarefas.length);
	};

	$scope.isChecked = function () {
		return $scope.tarefasSelecionadas.length === $scope.tarefas.length;
	};

	$scope.toggleAll = function () {
		if ($scope.tarefasSelecionadas.length === $scope.tarefas.length) {
			$scope.tarefasSelecionadas = [];
		} else if ($scope.tarefasSelecionadas.length === 0 || $scope.tarefasSelecionadas.length > 0) {
			$scope.tarefasSelecionadas = $scope.tarefas.slice(0);
		}
	};
});