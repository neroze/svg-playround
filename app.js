var App = {};

App.random = function(_limit){
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}

App.create_ellipse = function(){
	var _w = App.random(100);
	var _h = App.random(100);
	var draw = SVG('drawing').size(500, 500).x(App.random());
	var rect = draw.ellipse(_w, _h).attr({ fill: '#333' }).stroke({ color: '#f06', opacity: 0.6, width: 5 }).x(App.random(300)).y(App.random(200))
}


jQuery(document).ready(function($) {
	for (var i = 50 ; i >= 0; i--) {
		App.create_ellipse();
	}
	
});