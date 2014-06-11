'use strict';

// Controllers

var fwcCtrls = angular.module('AppName.controllers', []);

fwcCtrls.controller('homeCtrl', ['$scope', 'InstagramService', 'CommonService', function($scope, instagram, common) {
  	
  	//check if hashtag in url, else use defaults from config
  	var tags = window.location.hash.length == 0 ? config.tags : [window.location.hash.substring(1)];
  	
  	instagram.search(tags,function(feed){  
  		$scope.common = common;	  		
  		$scope.feed = common.shuffleArray(feed.data); 		
  		
  	});

  	$scope.selected = -1; 

  	$scope.select = function (index) {  		
    	$scope.selected = $scope.selected != index ? index : -1;
  	};   
   
 }]);
