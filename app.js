var App = {};
var Obj = {};
var Art = {};
var draw;
App.random = function(_limit, _greater_than) {
	var limit = _limit || 50;
	var _ran =  Math.floor((Math.random() * limit) + 1);

	if(_greater_than){
		console.log('regenrating again'+_greater_than);
		if(_ran < _greater_than){
			_ran = App.random(limit, _greater_than);
			console.log(_ran);
			return _ran;
		}else{
			return _ran;
		}
	}else{
		console.log(_ran);
		return _ran;
	}
	
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
	var _no_of_trees = 20
	var tree = App.draw_tree();

	var y = 500;
	var scale = 0.2
	for (var i = 0; i < 1; i++) {
			for (var j = 0; j < _no_of_trees; j++) {

				tree.clone().x(App.random(1500, 500)).y(App.random(300,150)).scale(scale).opacity(0.5)
			}
			y -= 80;
			scale -= 0.35;
	}
	tree.hide();

	
}

App.make_fish_tail = function(){
	var _camp = $('#fishtail').find('path').attr('d');
	return draw.path(_camp)
						.fill('none').stroke({
							width: 1,
							color: 'green'
						});
}

App.treeker = function(){
	var _camp = $('#treeker').find('path').attr('d');
	return draw.path(_camp)
						.fill('none').stroke({
							width: 1,
							
						});
}

App.ghumba = function(){
	var _camp = $('#ghumba').find('path').attr('d');
	return draw.path(_camp)
						.fill('none').stroke({
							width: 1,
							
						});
}


App.init = function() {
	var _w = App.random(100);
	var _h = App.random(100);
	draw = SVG('drawing').size('100%', '100%');

	App.make_forest();
	var fishtail = App.make_fish_tail();
								fishtail.x(50);
	fishtail.clone().scale("0.5").x(750).y(-70).flip('x');
	fishtail.clone().scale("0.7").x(900).y(-50);
	fishtail.clone().scale("0.4").x(2200).y(-50);
	fishtail.clone().scale("0.4").x(2700).y(-80).flip('x');
	fishtail.clone().x(1400).flip('x')
	App.treeker().x(50).y(300);

	App.ghumba().scale(0.6).x(1100).opacity(0.5).y(200);
	//mountain.animate(20000).x(900);
}


jQuery(document).ready(function($) {
	App.init();
});