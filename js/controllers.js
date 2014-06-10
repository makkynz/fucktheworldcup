'use strict';

// Controllers

var fwcCtrls = angular.module('AppName.controllers', []);

fwcCtrls.controller('homeCtrl', ['$scope', 'InstagramService', 'CommonService', function($scope, instagram, common) {
  
  	instagram.search(config.tags,function(feed){  
  		$scope.common = common	
  		//common.preLoadImages(instagram.getImagesFromFeedData(feed.data), function(){
  			$scope.feed = common.shuffleArray(feed.data);
  		//});  	
  		
  	});

  	$scope.selectedIndex = 0; 

  	$scope.itemClicked = function ($index) {
    	$scope.selectedIndex = $index;
  	};   
   
 }]);
