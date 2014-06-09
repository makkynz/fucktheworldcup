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
	})

	.directive('fwcMasonaryresize', ['$window', function($window) {
	    return {
	        link: function(scope, elem, attrs) {
	            scope.onResize = function() {
	               var resizeFactor = Math.ceil($window.innerWidth / 160);
	               if(resizeFactor > 6) resizeFactor = 6;

	               var newItemWidth = Math.floor($window.innerWidth / resizeFactor);
	               var styleNode = document.createElement('style');
					styleNode.setAttribute("type", "text/css");
					var textNode = document.createTextNode(".feed-item{width: "+newItemWidth+"px !important;}");
					styleNode.appendChild(textNode);
					document.getElementsByTagName("head")[0].appendChild(styleNode);
	            }

	            scope.onResize();

	            angular.element($window).bind('resize', function() {
	                scope.onResize();
	            })
	        }
	    }
	}])

