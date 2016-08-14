var App = {};

App.random = function(_limit){
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}

App.create_ellipse = function(){
	var _w = App.random(100);
	var _h = App.random(100);
	var draw = SVG('drawing').size('100%', '100%');
}


jQuery(document).ready(function($) {
	
	
});