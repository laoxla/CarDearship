var CarDealership;
(function (CarDealership) {
    angular.module('CarDealership', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Define routes
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: '/ngApp/home.html',
            controller: CarDealership.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: '/ngApp/about.html',
            controller: CarDealership.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/notFound.html'
        })
            .state("carMake", {
            url: "/carMake",
            templateUrl: "/ngApp/carMake.html",
            controller: CarDealership.Controllers.CarMakeController,
            controllerAs: "controller"
        });
        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
})(CarDealership || (CarDealership = {}));
//# sourceMappingURL=app.js.map