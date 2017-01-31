// INITILIZE APP
// ============================================================
var app = angular.module("app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {

  // INITILIZE STATES
  // ============================================================
  $stateProvider

    // HOME STATE
    .state('home', {
      url: '/home',
      templateUrl: './app/routes/home/homeTmpl.html',
      controller: 'homeCtrl'
    })


    // ABOUT STATE
    .state('about', {
      url: '/about/:id',
      templateUrl: './app/routes/about/aboutTmpl.html',
      controller: 'aboutCtrl'
    });


  // ASSIGN OTHERWISE
  // ============================================================
  $urlRouterProvider.otherwise('/home');
});
