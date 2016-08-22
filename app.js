var App = {};
var Obj = {};
var Art = {};
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

App.draw_tree = function(){
	var _camp = $('#tree').find('path').attr('d');
	return draw.path(_camp)
						.fill('green').stroke({
							width: 1,
							color: '#333'
						});
}

App.draw_tree_two = function(){
	var _camp = $('#tree2').find('path').attr('d');
	return draw.path(_camp)
						.fill(none).stroke({
							width: 1,
							color: 'green'
						});
}

App.make_forest = function(){
	var _no_of_trees = 10
	var tree = App.draw_tree();

	var y = 500;
	var scale = 1
	for (var i = 0; i < 3; i++) {
			for (var j = 0; j < _no_of_trees; j++) {

				tree.clone().x(App.random(900)).y(y).scale(scale)
			}
			y -= 80;
			scale -= 0.35;
	}
	tree.hide();

	
}


App.init = function() {
	var _w = App.random(100);
	var _h = App.random(100);
	draw = SVG('drawing').size('100%', '100%');

	App.make_forest();
	//mountain.animate(20000).x(900);
}


jQuery(document).ready(function($) {
	App.init();
});