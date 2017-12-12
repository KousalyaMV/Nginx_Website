//route config file to define path to href

thronesApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/',{
            // location of the template
        	templateUrl		: 'views/main-view.html',
        	// Which controller it should use 
            controller 		: 'mainController',
            // what is the alias of that controller.
        	controllerAs 	: 'AllSeries'
        })
        .when('/bookDet/:bookUrl',{
            // location of the template
            templateUrl     : 'views/BookDetail-view.html',
            // Which controller it should use 
            controller      : 'BooksController',
            // what is the alias of that controller.
            controllerAs    : 'bookDetail'  

        })
         .when('/houseDet/:houseUrl',{
            // location of the template
            templateUrl     : 'views/HouseDetail-view.html',
            // Which controller it should use 
            controller      : 'HouseController',
            // what is the alias of that controller.
            controllerAs    : 'houseDetail'  

        })
          .when('/charDet/:charUrl',{
            // location of the template
            templateUrl     : 'views/CharDetail-view.html',
            // Which controller it should use 
            controller      : 'CharController',
            // what is the alias of that controller.
            controllerAs    : 'charDetail'  

        })
        .when('/error',{

            template   : '<h1>Some error occured while connecting to backend</h1>'

        })
        .otherwise(
            {
                //redirectTo:'/'
                template   : '<h1>404 page not found</h1>'
            }
        );
}]);