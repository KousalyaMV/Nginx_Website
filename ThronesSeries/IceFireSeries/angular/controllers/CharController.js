//Main controller to get cnaracter data
// this is without $scope
thronesApp.controller('CharController',['$http','ThronesService','$routeParams',function($http,ThronesService,$routeParams) {

  //create a context
  var main = this;

  this.char = $routeParams.charUrl;
  
  this.aCharDetail = [];

  this.loadCharDetail = function(){

      ThronesService.getCharDetail(main.char)
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                main.aCharDetail.push(response.data);
          }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
              // $location.path('/error');

          });
  }// end 
 
  this.loadCharDetail();

}]); // end HouseController