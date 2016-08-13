var App = {};
App.rect = [];
App.random = function(_limit){
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}

App.create_ellipse = function(){
	var _w = App.random(100);
	var _h = App.random(100);
	var draw = SVG('drawing').size(500, 500);
	return draw.ellipse(_w, _h).attr({ fill: '#333' }).stroke({ color: '#f06', opacity: 0.6, width: 5 }).x(50).y(50)
}


jQuery(document).ready(function($) {
	for (var i = 1 ; i >= 0; i--) {
		App.rect.push( App.create_ellipse() );
	}

	jQuery(document).ready(function($) {
		$(document).on('click', 'body', function(event) {
			event.preventDefault();
			/* Act on the event */
			App.rect[0].animate().move(10, 500);
		});
	});
	
});