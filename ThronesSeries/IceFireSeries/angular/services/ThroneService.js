// using factory method

// Factory method uses the returned value of the function,
// it returns the values

thronesApp.factory('ThronesService',function ($http){

	// this method first 
	var thronesAPIS  =  {};
	var baseUrl =  'https://www.anapioficeandfire.com/api';

	thronesAPIS.getAllBooks = function(){

		return $http ({

		  method: 'GET',
		  url:baseUrl+'/books?page=1&pageSize=12'})


	}// end

	thronesAPIS.getAllCharacters = function(){

		return $http ({

		  method: 'GET',
		  url:baseUrl+'/characters?page=20&pageSize=50'

	})// end 
}
	thronesAPIS.getAllHouses = function(){

		return $http ({

		  method: 'GET',
		  url:baseUrl+'/houses?page=1&pageSize=59'})

	}// end

		thronesAPIS.getBookDetail = function(bookNum){

		return $http ({

		  method: 'GET',

		  url:baseUrl+'/books/'+bookNum })

	}// end
	thronesAPIS.getHouseDetail = function(houseNum){

		return $http ({

		  method: 'GET',

		  url:baseUrl+'/houses/'+houseNum })

	}// end

	thronesAPIS.getCharDetail = function(charNum){

	return $http ({

	  method: 'GET',

	  url:baseUrl+'/characters/'+charNum })

    }//  end
	return thronesAPIS;
});//end thrones service