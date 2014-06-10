'use strict';

// Services
var fwcService = angular.module('AppName.services', ['ngResource']);	


//Instagram API calls
fwcService.factory('InstagramService',['$http', function($http){

	var _this ={

		search : function(tags, callback) {
			var results = [];
			angular.forEach(tags ,function(tag){
				var endPoint = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?client_id=b3691ccf09e94f0d85dfb01bb7bd907c&callback=JSON_CALLBACK";
            
	      		$http.jsonp(endPoint).success(function(response){
	      			results.push(response);
	      			if(results.length == tags.length){
	      				callback(_this._combineResults(results));
	      			}	          
	      		}); 
	    	});     
		},

		_combineResults : function (results){
			var newResult = {next_urls: [], data: []};
			angular.forEach(results ,function(result){
				newResult.next_urls.push(result.pagination.next_url);
				newResult.data = newResult.data.concat(result.data);				
			});
			
			return newResult;
		},

		getImagesFromFeedData: function(data){
			var result = [];
			angular.forEach(data ,function(item){
				result.push(item.images.low_resolution.url);							
			});

			return result;
		}

	}


	return _this;
  		
		
}]);
	


//common  functions
fwcService.factory('CommonService',['$http', function($http){

	var _this ={

		isMobile : function() {
			return window.innerWidth <= 768;
		},

		shuffleArray: function(array){
			var m = array.length, t, i;

		  // While there remain elements to shuffle
		  while (m) {
		    // Pick a remaining element…
		    i = Math.floor(Math.random() * m--);

		    // And swap it with the current element.
		    t = array[m];
		    array[m] = array[i];
		    array[i] = t;
		  }

		  return array;
		},

		preLoadImages: function(arrayImgUrls, callback){
			var loadedCount = 0;
			angular.forEach(arrayImgUrls ,function(imgUrl){				
            	var img = new Image();
            	img.onload = haveTried;
            	img.onerror = haveTried;
    			img.src=imgUrl;	      		
	      	}); 

	      	function haveTried(){
	      		loadedCount++;
      			if(loadedCount == arrayImgUrls.length){
      				callback();
      			}
	      	}
	    	   
		},

		getParameterByName: function (name) {
		    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
		        results = regex.exec(location.search);
		    return results == null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
		}	      	

	}


	return _this;
  		
		
}]);