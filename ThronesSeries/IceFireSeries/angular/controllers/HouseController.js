//Main controller to get house data
// this is without $scope
thronesApp.controller('HouseController',['$http','ThronesService','$routeParams',function($http,ThronesService,$routeParams) {

  //create a context
  var main = this;

  this.house = $routeParams.houseUrl;
  
  this.aHouseDetail = [];

  this.loadHouseDetail = function(){

      ThronesService.getHouseDetail(main.house)
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
                main.aHouseDetail.push(response.data);
          }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
              // $location.path('/error');

          });
  }// end load all ThronesSeries
 
  this.loadHouseDetail();

}]); // end HouseController