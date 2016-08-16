var App = {};
var draw;
App.random = function(_limit) {
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}

App.create_ellipse = function() {
	var _w = App.random(100);
	var _h = App.random(100);
	draw = SVG('drawing').size('100%', '100%');
	ellipse = draw
		.ellipse(200, 200)
		.attr({
			fill: 'blue',
			'fill-opacity': 0.5,
			stroke: '#FFF',
			'stroke-width': 10
		})

	trangle = draw.path('M 100 210, L 100 110,L 180 170, C 180 170 150 210 97 210')
		.fill('#333').stroke({
			width: 1,
			color: '#333'
		});

	group = draw.group();
	group.add(ellipse);
	group.add(trangle);
	group.x(150).y(50);

	var click = function() {
		this.animate().move(100, 90).fill({
			color: '#f06',
			opacity: "0.5"
		}).loop();
	}

	var clickE = function() {
		this.animate({
			speed: 4000,
			reverse: true
		}).scale(2);
	}

	trangle.on('click', click);

	ellipse.on('click', clickE)

}


jQuery(document).ready(function($) {
	App.create_ellipse();
});