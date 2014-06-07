'use strict';

// Controllers

var fwcCtrls = angular.module('AppName.controllers', []);

fwcCtrls.controller('homeCtrl', ['$scope', 'InstagramService', function($scope, instagram) {
  
  	instagram.search(config.tags,function(feed){  	  	
  		$scope.feed = feed.data;
  	});   
   
 }]);
