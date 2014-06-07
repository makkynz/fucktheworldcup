'use strict';

// Controllers

var fwcCtrls = angular.module('AppName.controllers', []);

fwcCtrls.controller('homeCtrl', ['$scope', 'InstagramService', function($scope, instagram) {
  
  	instagram.search('fucktheworldcup',function(feed){  	
  		console.log(feed);	
  		$scope.feed = feed;
  	});   
   
 }]);
