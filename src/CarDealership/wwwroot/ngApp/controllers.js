var CarDealership;
(function (CarDealership) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(movieService) {
                this.message = 'Hello from the home page!';
                this.movies = movieService.listMovies();
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var CarMakeController = (function () {
            function CarMakeController($http, $uibModal) {
                var _this = this;
                this.$http = $http;
                this.$uibModal = $uibModal;
                $http.get("/api/makes")
                    .then(function (response) {
                    _this.carMakes = response.data;
                });
            }
            CarMakeController.prototype.getCars = function () {
                var _this = this;
                this.$http.get("/api/cars/")
                    .then(function (response) {
                    _this.makeCars = response.data;
                    console.log(_this.makeCars);
                    console.log(_this.selectedCarMake);
                });
            };
            CarMakeController.prototype.getCarDetail = function (carId) {
                this.$uibModal.open({
                    templateUrl: "detailListModal.html",
                    controller: ModalController,
                    controllerAs: "modalController",
                    resolve: {
                        carId: function () {
                            return carId;
                        }
                    }
                });
            };
            return CarMakeController;
        }());
        Controllers.CarMakeController = CarMakeController;
        var ModalController = (function () {
            function ModalController(carId, $http) {
                var _this = this;
                this.carId = carId;
                this.$http = $http;
                this.$http.get("/api/cars/" + carId)
                    .then(function (response) {
                    _this.carDetails = response.data;
                    console.log(_this.carDetails);
                });
            }
            return ModalController;
        }());
        Controllers.ModalController = ModalController;
    })(Controllers = CarDealership.Controllers || (CarDealership.Controllers = {}));
})(CarDealership || (CarDealership = {}));
//# sourceMappingURL=controllers.js.map