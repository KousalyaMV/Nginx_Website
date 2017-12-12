//Main controller to get all data

// this is without $scope
thronesApp.controller('mainController',['$http','ThronesService',function($http,ThronesService) {
  //create a context
  var main = this;

  this.pageHeading = 'Games Of Thrones Series';
  //this.pageSubHeading = 'A collection of experience by students, alumni and edWisor.com team'
  
  // i knew the result is going to be array, so i declared an empty array to initialize
  this.AllData=[];

  this.sortData=false;

  this.loadAllBooks = function(){

      ThronesService.getAllBooks()
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
              //  console.log(response.data)
                main.AllData.push(response.data);
          }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
              // $location.path('/error');

          });
  }// end load all ThronesSeries
  
  this.loadAllHouses = function(){

      ThronesService.getAllHouses()
        .then(function successCallback(response) {
                // this callback will be called asynchronously
                // when the response is available
               main.AllData.push(response.data);
          }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
               // $location.path('/error');

          });
  }// end load all ThronesSeries

  this.loadAllCharacters = function(){

      ThronesService.getAllCharacters()
          .then(function successCallback(response) {
                    // this callback will be called asynchronously
                // when the response is available
              //  angular.forEach(response,function(value){
                main.AllData.push(response.data);
                //});
          }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                alert("some error occurred. Check the console.");
               // $location.path('/error');

          });
  }// end load all ThronesSeries
  this.loadAllBooks();
  this.loadAllHouses();
  this.loadAllCharacters();

}]); // end mainController
