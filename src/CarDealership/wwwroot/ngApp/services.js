var CarDealership;
(function (CarDealership) {
    var Services;
    (function (Services) {
        var MovieService = (function () {
            function MovieService($resource) {
                this.MovieResource = $resource('/api/movies');
            }
            MovieService.prototype.listMovies = function () {
                return this.MovieResource.query();
            };
            return MovieService;
        }());
        Services.MovieService = MovieService;
        angular.module('CarDealership').service('movieService', MovieService);
        var MyService = (function () {
            function MyService() {
            }
            return MyService;
        }());
        Services.MyService = MyService;
        angular.module('CarDealership').service('myService', MyService);
    })(Services = CarDealership.Services || (CarDealership.Services = {}));
})(CarDealership || (CarDealership = {}));
//# sourceMappingURL=services.js.map