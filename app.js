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
	var mt1 = draw.path('M 5 500, L 100 400, L 200 450, L 210 440, L 110 390, L 130 370, L 225 425, L 235 410, L 145 360, L 165 340, L 260 390, L 275 370')
		.fill('none').stroke({
			width: 1,
			color: '#333'
		});

	// var mt2 = draw.path('M 5 500, L 170, 200, L 250 600')
	// 	.fill('#3dd').stroke({
	// 		width: 1,
	// 		color: '#333'
	// 	});

	// var Mtgroup = draw.group();
	// Mtgroup.add(mt1);
	// Mtgroup.add(mt2);

	// return Mtgroup;

}

App.init = function() {
	var _w = App.random(100);
	var _h = App.random(100);
	draw = SVG('drawing').size('100%', '100%');

	var sun = App.draw_sun();
	sun.x(50).y(50);
	//sun.animate(20000).x(800);


	var mountain = App.draw_mountains();
	//mountain.animate(20000).x(900);


}


jQuery(document).ready(function($) {
	App.init();
});