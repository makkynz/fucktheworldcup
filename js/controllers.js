'use strict';

// Controllers

var fwcCtrls = angular.module('AppName.controllers', []);

fwcCtrls.controller('homeCtrl', ['$scope', 'InstagramService', 'CommonService', function($scope, instagram, common) {
  
  	instagram.search(config.tags,function(feed){  
  		$scope.common = common;	  		
  		$scope.feed = common.shuffleArray(feed.data); 		
  		
  	});

  	$scope.selected = -1; 

  	$scope.select = function (index) {
  		
    	$scope.selected = index;
  	};   
   
 }]);
