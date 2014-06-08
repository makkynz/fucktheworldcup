'use strict';

// Directives

angular.module('AppName.directives', [])

	.directive('fwcImageload', function (){
		return {
        link: function(scope, el, attrs) {   

            el.bind("load" , function(e){ 
            	el.addClass('show');                
            });

        }
    }
	});
