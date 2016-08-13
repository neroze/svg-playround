var App = {};
App.rect = [];
App.random = function(_limit){
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}

App.create_ellipse = function(){
	var _w = App.random(100);
	var _h = App.random(100);
	
	return draw.ellipse(_w, _h).attr({ fill: '#333' }).stroke({ color: '#f06', opacity: 0.6, width: 5 }).x(App.random(400)).y(App.random(700))
}

App.dance = function(){
	for (var i = 0; i < App.rect.length ; i++) {
		App.rect[i].animate(App.random(1000), 'elastic').move(App.random(400), App.random(800));
		console.log("I"+i);
	}
}

App.loop_daance = function(){
	App.timer = setInterval(function () {
			App.dance();
	}, 1000)
}

App.timer = null


jQuery(document).ready(function($) {
	draw = SVG('drawing').size('100%', '100%');
	for (var i = 50 ; i >= 0; i--) {
		App.rect.push( App.create_ellipse() );
	}

	jQuery(document).ready(function($) {
		$(document)
		.on('click', 'body', function(event) {
			event.preventDefault();
			if(App.timer == null){
				App.loop_daance();
			}else{
				clearInterval(App.timer);
				App.timer = null;
			}
		});

		


	});
	
});