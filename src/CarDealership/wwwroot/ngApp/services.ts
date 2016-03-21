namespace CarDealership.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('CarDealership').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('CarDealership').service('myService', MyService);
    }
