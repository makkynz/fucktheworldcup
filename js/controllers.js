'use strict';

// Controllers

var fwcCtrls = angular.module('AppName.controllers', []);

fwcCtrls.controller('homeCtrl', ['$scope', 'InstagramService', 'CommonService', function($scope, instagram, common) {
  
  	instagram.search(config.tags,function(feed){  
  		$scope.common = common	  	
  		$scope.feed = feed.data;
  	});   
   
 }]);
