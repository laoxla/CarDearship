namespace CarDealership.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public movies;

        constructor(movieService: CarDealership.Services.MovieService) {
            this.movies = movieService.listMovies();
        }
    }

    export class AboutController {
        public message = 'Hello from the about page!';
    }

    export class CarMakeController {

        public carMakes;
        public selectedCarMake;
        public makeCars;
        public cars;

        constructor(private $http: ng.IHttpService,
            private $uibModal: ng.ui.bootstrap.IModalService) {
            $http.get("/api/makes")
                .then((response) => {
                    this.carMakes = response.data;
                });

        }
        getCars() {

            this.$http.get(`/api/cars/`)
                .then((response) => {
                    this.makeCars = response.data;
                    console.log(this.makeCars);
                    console.log(this.selectedCarMake);
                });
        }

        getCarDetail(carId) {
            this.$uibModal.open({
                templateUrl: "detailListModal.html",
                controller: ModalController,
                controllerAs: "modalController",
                resolve: {
                    carId: () => {
                        return carId;
                    }
                }
            });

        }
    }

    export class ModalController {
        carDetails;
        constructor(private carId: number, private $http: ng.IHttpService) {
            this.$http.get<any>(`/api/cars/${carId}`)
                .then((response) => {
                    this.carDetails = response.data;
                    console.log(this.carDetails);
                });
        }

    }


}
