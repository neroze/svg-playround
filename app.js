var App = {};
var Obj = {};
var draw;
App.random = function(_limit) {
	var limit = _limit || 50;
	return Math.floor((Math.random() * limit) + 1);
}


App.draw_sun = function() {
	
	return draw
		.ellipse(200, 200)
		.attr({
			fill: 'blue',
			'fill-opacity': 0.5,
			stroke: '#FFF',
			'stroke-width': 10
		});
}

App.draw_mountains = function(){
	var mt1 = draw.path('M 5 500, L 170, 200, L 500 480, L 250 600')
		.fill('#333').stroke({
			width: 1,
			color: '#333'
		});

	var mt2 = draw.path('M 5 500, L 170, 200, L 250 600')
		.fill('#3dd').stroke({
			width: 1,
			color: '#333'
		});

	var Mtgroup = draw.group();
	Mtgroup.add(mt1);
	Mtgroup.add(mt2);

	return Mtgroup;

}

App.init = function() {
	var _w = App.random(100);
	var _h = App.random(100);
	draw = SVG('drawing').size('100%', '100%');

	var sun = App.draw_sun();
	sun.x(50).y(50);
	sun.animate(20000).x(800);

	
	var mountain3 = App.draw_mountains();
	mountain3.x(350).y(-120).scale('0.25');
	mountain3.animate(20000).x(800);

	var mountain2 = App.draw_mountains();
	mountain2.x(200).y(-100).scale('0.5');
	mountain2.animate(20000).x(800);

	var mountain = App.draw_mountains();
	mountain.animate(20000).x(900);

	

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
	App.init();
});