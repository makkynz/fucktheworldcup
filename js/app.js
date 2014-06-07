'use strict';

// Declare app level module which depends on filters, and services

angular.module('fwc', ['ngRoute','ngResource','AppName.filters','AppName.services','AppName.directives','AppName.controllers'])

.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
	});
	
}]);

