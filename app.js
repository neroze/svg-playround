var App = {};
App.rect = [];
App.random = function(_limit){
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}

App.create_ellipse = function(){
	var _w = App.random(100);
	var _h = App.random(100);
	
	return draw.ellipse(_w, _h).attr({ fill: '#333' })
				.stroke({ color: '#f06', opacity: 0.6, width: 5 })
				.x(App.random(700)).y(App.random(500))
				.attr('x', App.random(100)+'%').animate().attr('x', App.random(100)+'%')
				.animate().dmove(App.random(800), App.random(400));
	
}


jQuery(document).ready(function($) {
	 draw = SVG('drawing').size('100%', '100%');
	for (var i = 0 ; i <= 50; i++) {
		App.rect[i] = App.create_ellipse();
	}

	jQuery(document).ready(function($) {
		$(document)
		.on('mousemove', 'body', function(event) {
			event.preventDefault();

			
			for (var i = 0; i < App.rect.length ; i++) {
				App.rect[i].stop().animate().move(App.random(event.pageX),App.random(event.pageY));
				console.log("I"+i);
			}
		});
	});
	
});