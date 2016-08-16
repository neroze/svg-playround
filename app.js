var App = {};
var Obj = {};
var draw;
App.random = function(_limit) {
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}

App.draw_random_dots = function() {
	var _w = App.random(100);
	var _h = App.random(100);
	return draw.ellipse(10,10)
		.attr({
			fill: '#333'
		})
		.stroke({
			color: '#f06',
			opacity: 0.6,
			width: 5
		})
		.x(App.random(800)).y(App.random(700));

	 
}


App.draw_lines_to_dots = function(){
	$.each(App.dots, function(index, el) {
			App.draw_from_dot(el)
	});
}

App.draw_from_dot = function(el){
	console.log(el.x() );
			var _fromX = el.x();
			var _fromY = el.y();
			var _timeout = 500;
			$.each(App.dots, function(index, _el){
				
				 (function(_time) {
          setTimeout(function() {
              var line = draw.line(_fromX, _fromY, _el.x(), _el.y()).stroke({ width: 1 });
          }, _time);
          _timeout += 500;

      }(_timeout));
			});
}


App.init = function() {
	var dfd = jQuery.Deferred();

	var _w = App.random(100);
	var _h = App.random(100);
	draw = SVG('drawing').size('100%', '100%');
	App.dots = [];
	
	for (var i = 10 ; i >= 0; i--) {
		App.dots.push(App.draw_random_dots());
	}
	dfd.resolve( "hurray" );
 	return dfd.promise();
}


jQuery(document).ready(function($) {
	var s = App.init();

	s.done(function(){
		App.draw_lines_to_dots();
	});

	$(document)
	.on('click', '#drawing svg ellipse', function(event) {
			event.preventDefault();
			//this.instance.x(App.random(500));
			console.log(this.instance);
			App.draw_from_dot(this.instance);
	});
	
});