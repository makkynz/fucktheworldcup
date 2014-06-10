'use strict';

// Controllers

var fwcCtrls = angular.module('AppName.controllers', []);

fwcCtrls.controller('homeCtrl', ['$scope', 'InstagramService', 'CommonService', function($scope, instagram, common) {
  	
  	var tags = common.getParameterByName('tag') == null ? config.tags : [common.getParameterByName('tag')];
  	
  	instagram.search(tags,function(feed){  
  		$scope.common = common;	  		
  		$scope.feed = common.shuffleArray(feed.data); 		
  		
  	});

  	$scope.selected = -1; 

  	$scope.select = function (index) {  		
    	$scope.selected = $scope.selected != index ? index : -1;
  	};   
   
 }]);
