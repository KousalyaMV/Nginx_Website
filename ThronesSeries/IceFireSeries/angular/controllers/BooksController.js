//Main controller to get book data
// this is without $scope
thronesApp.controller('BooksController',['$http','ThronesService','$routeParams',function($http,ThronesService,$routeParams) {

  //create a context
  var main = this;

  this.book = $routeParams.bookUrl;
  
  this.aBookDetail = [];

  this.loadBookDetail = function(){

      ThronesService.getBookDetail(main.book)
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                main.aBookDetail.push(response.data);
          }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
              // $location.path('/error');

          });
  }// end load all ThronesSeries
 
  this.loadBookDetail();


}]); // end HouseController
