// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("homeCtrl", function($scope, mainService, $state) {

  // VARIABLES
  // ============================================================
  $scope.test = 'home';
  $scope.list = mainService.things

  // FUNCTIONS
  // ============================================================
  $scope.addToList = function (input) {
    console.log('input: ', input);
    $scope.list.push(input);
    console.log(mainService.things);
  }

  $scope.goToAbout = function () {
    $state.go('about', {id: $scope.test})
  }

});
