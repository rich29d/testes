(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.circulo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("Ai3C3QhMhMABhrQgBhqBMhMQBNhNBqAAQBrAABMBNQBMBMAABqQAABrhMBMQhMBNhrgBQhqABhNhNg");
	this.shape.setTransform(21.2,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.8,-5,52,52);


// stage content:
(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}
	
	var este = this;
	
	$( "#slider-range-min" ).slider({
      range: "min",
      value: 1,
      min: 1,
      max: 49,
      slide: function( event, ui ) {
        //$( "#amount" ).val( "$" + ui.value );
		este.gotoAndStop(ui.value);
      }
    });
	
	
	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// Camada 2
	this.instance = new lib.circulo();
	this.instance.setTransform(53.9,87.7,1,1,22.2,0,0,20.5,20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:0,guide:{path:[53.9,87.6,53.8,87.4,53.8,87.1,53.8,87.1,53.8,87,53.7,87,53.7,87,53.6,87,53.6,87,53.6,87.1,53.6,87.1,53.8,89.7,54.1,92.5]}},1).to({x:56.8,y:110},1).to({x:60,y:127.1},1).to({x:63.9,y:143.9},1).to({x:68.6,y:160.4},1).to({x:74.3,y:176.6},1).to({x:81.1,y:192.5},1).to({x:89.1,y:207.8},1).to({x:98.5,y:222.4},1).to({x:109.2,y:235.8},1).to({x:121.5,y:247.8},1).to({x:135.5,y:258},1).to({x:150.9,y:265.9},1).to({x:167.5,y:271.4},1).to({x:184.7,y:274.3},1).to({x:202.2,y:274.8},1).to({x:220,y:273.2},1).to({x:237.6,y:269.9},1).to({x:254.8,y:265},1).to({x:271.6,y:259},1).to({x:287.9,y:252},1).to({x:303.7,y:244.2},1).to({x:319.2,y:235.8},1).to({x:334.3,y:226.8},1).to({x:349.1,y:217.5},1).to({x:363.5,y:207.7},1).to({x:378.2,y:199.3},1).to({x:394.9,y:198.7},1).to({x:407.4,y:210.8},1).to({x:414.6,y:227.1},1).to({x:419.7,y:244.6},1).to({x:424.3,y:261.7},1).to({x:429.6,y:277.9},1).to({x:439.5,y:291.2},1).to({x:456.3,y:290.2},1).to({x:473,y:286},1).to({x:489.6,y:281.5},1).to({x:506.1,y:276.5},1).to({x:522.5,y:271},1).to({x:538.7,y:265},1).to({x:554.7,y:258.4},1).to({x:570.2,y:251.2},1).to({x:585.2,y:243.4},1).to({x:599.9,y:234.8},1).to({x:614,y:225.2},1).to({x:627.3,y:214.5},1).to({x:639.6,y:202.6},1).to({x:650.5,y:189.2},1).to({x:659.4,y:174.3},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(295.5,254.5,67.8,67.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;