// INITILIZE DIRECTIVE
// ============================================================
angular.module("app").directive('dirThing', function() {
  return {
    restrict: 'EA',
    templateUrl: './app/directives/directiveTmpl.html',
    controller: 'directiveCtrl',
    scope: {
      listItem: '=',
      deleteItem: '&'
    }
  };
});
