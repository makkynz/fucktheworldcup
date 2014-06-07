'use strict';

// Services
var fwcService = angular.module('AppName.services', ['ngResource']);	


//Instagram API calls
fwcService.factory('InstagramService',['$http', function($http){return{
  		
		search : function(tag, callback) {
			var endPoint = "https://api.instagram.com/v1/media/popular?client_id=b3691ccf09e94f0d85dfb01bb7bd907c&callback=JSON_CALLBACK";
            
      $http.jsonp(endPoint).success(function(response){
          callback(response.data);
      });    	
		}

}}]);
	