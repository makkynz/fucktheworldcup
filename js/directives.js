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

	.directive('fwcFeedhover', function (){
		return {
	        link: function(scope, el, attrs) {   

	            el.bind("mouseenter" , function(e){ 
	            	el.addClass('hover');                
	            });
	            el.bind("mouseleave" , function(e){ 
	            	el.removeClass('hover');                
	            });

	        }
    	}
	})

	.directive('fwcFeedclick', function (){
		return {
	        link: function(scope, el, attrs) {   

	            el.bind("click" , function(e){ 
	            	el.addClass('selected');                
	            });

	        }
    	}
	})


	.directive('fwcMasonaryresize', ['$window', '$document', function($window, $document) {
	    return {
	        link: function(scope, elem, attrs) {
	            scope.onResize = function() {
	            	var scrollbarWidth = 15;
	            	var docWidth = $window.innerWidth - scrollbarWidth;
	               	var resizeFactor = Math.ceil(docWidth / 160);
	               	if(resizeFactor > 6) resizeFactor = 6;

	               	var newItemWidth = Math.floor(docWidth / resizeFactor);
	               	var styleNode = document.createElement('style');
					styleNode.setAttribute("type", "text/css");
					var textNode = document.createTextNode(".feed-item{width: "+newItemWidth+"px !important;} .feed .feed-item.selected{margin-left:-"+newItemWidth/2+"px;margin-top:-"+newItemWidth/2+"px}");
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

