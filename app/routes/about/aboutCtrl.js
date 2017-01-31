// INITILIZE CONTROLLER
// ============================================================
angular.module("app").controller("aboutCtrl", function($scope, mainService, $state, $state) {

  // VARIABLES
  // ============================================================
  $scope.test = $state.params.id;
  $scope.aboutList = mainService.things;

  // FUNCTIONS
  // ============================================================
  $scope.deleteItem = function(item) {
    $scope.aboutList.splice($scope.aboutList.indexOf(item), 1);
  }

});
