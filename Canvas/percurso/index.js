(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 742,
	height: 562,
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



(lib.traçado4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tracado_4.psd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egq1AgzIADgRIAAAAIAMhEIAyAGIgBABQgHAogFAdIAAABIgDAPgEgqZAeZIAOhXIAyAHIgPBXgEgp+Ab+IAShvIABgFIAwAPIgSBsgEgphAZEIABgJQAKguALgvIAwAPQgLAsgJAsIgDAOgEgo6AWaQAQg8ATg7IAuATQgSA5gQA7gEgoAATgQAbhOAihNIAqAbQgfBJgaBMgEgmmAQFQAcg/Ahg8IAqAbQggA8gdA/gEglHANNQAfg3Aig1IApAeQghA0gfA1gEgjeAKmQAhgyAlgwIAmAhQgkAvghAwgEghuAIMQApgzAsgyIAkAjQgrAxgoAzgA/qFzQAkgnAlgmIAygxIAgAmIgvAuQglAmgjAngA88DEQA0gwA4gvIAgAmQg4Awg0AwgA6aA4QBAg0BFgyIAcApQhDAwg+A0gA3chYIBMg1IAcApIhMA1gA1Xi1QAvgfAxggIAcApQgxAggvAfgAy8kaIBfg6IAZAsQgvAbgtAdgAwgl4IBmg7IAZAsQg1AdgyAegAt8nVIB1g/IAYAsQg8Afg5AggArJo0IAzgaIAegQIAVAtIgdAPIgyAagAo5p9IB8g9IAVAtIh8A9gAl9rYIBfgtIAWAuIhhAtgAjesjIBzgzIAVAtIhyA0gAgrtzIB9g5IAWAuIh+A4gACTvIIBvguIAUAtIhuAvgAFCwSIB0gyIAVAtIh0AygAH3xfIBpgtIAVAuIhoAsgAKgynIB/g2IAVAtIh/A2gANgz4IBfgoIAZgKIAVAtIgbALIhcAngAQZ1GIBtgvIAVAtIhuAvgATG2RIBugvIAWAtIhvAvgAV23dIBtgwIAVAtIhtAxgAYk4qICEg7IAVAtIiFA7gAbo6DIAwgWIBXgpIAWAtIhYAqIgwAVgAev7gIBtg1IAWAtIhtA1gEAhbgczIBug3IAZArIhxA4gEAkIgeLIBzg7IAZAsIhzA7gEAm5gfmIBlg3IAbAqIhnA4gEAqygg3IAEgBIgIAEIAEgDg");
	this.shape.setTransform(371,300.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(96.8,89.7,548.5,421.2);


(lib.traçado3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tracado_3.psd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egu7AnOIgIgIIgFgGIgBADIABgEIABgCIAGAJIAAgBIADAFIADAEIgFABIAFgBgEgxFAkJIgRhOIAygFIAPBHIAIAfIgyAFIgGgYgEgxpAhVIAygGIAKA4IgyAGIgKg4gEgx8AfNIAygEQAFArAHAsIgyAFQgHgsgFgsgEgyJAc0IAzACQACAyAFAyIgyADQgFg1gDg0gEgyLAcFQgBg1AAg0IAyAFQAAAyACA0gEgyLAZtQACgwADgvIAyAHQgDAugCAugEgyCAXfIAKhPIAxAMIgJBKgEgxxAVhQAHgxAKgwIAxANQgKAwgHAwgEgxVATSQAJgoALgnIAvARQgKAlgJAmgEgw0ARVIAUhBIAvAUIgUA+gEgwQAPnQAUg4AYg3IArAaQgWA0gTA1gEgvRANNIAUgrIAeg8IAqAdIgbA1IgVAugEguIAK9QAYgsAbgsIAnAgQgaAqgXArgEgs8AI9IAuhGIAlAkIgsBCgEgrxAHOQAdgpAfgoIAjAlQgeAogcAngEgqYAFYIA2hBIAgAoIgyA+gEgpDADzQAug1Ayg0IAgAoQgyA0guA1gEgnDABpIA8g7IAdApIg5A5gEgllAANQAygtA1gvIAdAoQg1AugyAwgEgjbgBuQA1guA5guIAbArQg3Asg1AugEghJgDnQAzgpA2goIAbArQg1AogzAogA+7lUIBkhHIAZArIhiBGgA8xm2IBkhEIAPgJIAZArIgNAIIhlBFgA6XodQBCgrBGgrIAYAsQhFAqhCArgA3nqMIBrhAIAYAsIhrBAgA1UrjICMhPIAXAsQhHAnhEAogAyftJICDhGIAUAtIiABFgAvzulICHhFIAVAtIiHBGgAtCv/ICDhBIAUAuIiCBAgAqWxUICHhAIATAuIiFA/gAnlynICLhAIATAuIiLBAgAkwz6IB7g2IARAvIh5A1gAiL1CICFg5IAPAvIiDA5gAAj2NICRg8IARAvIiRA8gADf3bIB6gxIARAvIh6AxgAGE4dICHg0IANAwIiDAzgAI25iIB1gtIAOAwIh2AtgALX6gIA+gXIBJgbIAOAwIhGAaIhCAZgAOK7iICGgxIANAwIiGAxgAQ78jIB+gtIANAxIh9AtgATk9fICag2IAOAxIiaA1gAWq+kIChg3IAOAxIiiA3gAZ3/qICig2IAOAxIijA2gEAdFgguICyg6IANAxIiyA5gEAgigh2ICgg0IAPAwIihA0gEAjugi3ICVgwIAPAxIiVAvgEAmvgj0ICNgsIAQAwIiOAsgEApogkuICcgvIAPAwIibAvgEAswglqIBoggIAQAwIhpAfgEAvFgmXICrgzIAOgEIAPAwIgMADIitA0g");
	this.shape.setTransform(401.2,288.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.9,37,642.7,502.4);


(lib.traçado2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tracado_2.psd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgnrAkjIAwgPQAbBGAgBGIgwASQgghIgbhHgEgoqAhnIAygKQASBAAXBBIgwAPQgYhDgThDgEgpTAe+IAygGQALA2AOA4IgxAKQgPg5gLg5gEgpzAbTIAzgBQAGBWAPBXIgzAGQgPhagGhYgEgp1AYIIAzAEQgEBGADBGIgzACQgDhKAEhIgEgpxAXOQAGg+AKg+IAyAKQgKA7gFA7gEgpXAUZQAMg2APg2IAwAQQgOAzgLAzgEgosAR2QARg2AVg1IAuAVQgUAzgQAzgEgnwAPWQAVgwAYgvIArAYQgXAugTAtgEgmpANEQAgg6Akg6IAqAcQgkA4geA4gEglFAKgQAjg1Ang0IAlAjQglAwghAygEgjYAIKQArg2Awg2IAhAmQgtA0gpA0gEghXAFzQAtgwAxgxIAhAmQgxAxgsAwgA/QDqIBJhEIAfgdIAeAqIgbAYIhKBFgA88BkQA2gvA6gvIAdApQg6Avg2AvgA6fgbQA3gsA6grIAaArQg5Aqg1AogA4AiUQA3goA7gpIAZAsQg6Aog3AogA1fkFQBIgxBNgxIAaArQhNAxhIAxgAyamGIA+gmIA/gnIAaArIg/AmIg+AngAvsnxIBog9IAaArIhoA9gAtTpKIBmg6IAaArIhmA5gAq7qgIB1hAIAVAtIhxA+gAoUr7IBug7IAWAsIhuA7gAlztRICGhGIAWAtIiGBGgAi6uxIAigRIBVgrIAWAtIhVAqIgiASgAgQwHICFhDIAWAtIiHBDgACpxjIEpiSIAWAtIkpCSgAIG0PIB6g8IAWAtIh6A8gAK01kICChAIAWAtIiCBAgANq29ICBhAIAWAtIiBBAgAQf4WICWhLIAWAtIiWBLgATo57ICRhJIAWAtIiRBJgAWt7eICVhOIAXAtIiWBOgAZ09GIB2hAIAYAtIh2A/gAcd+hIAKgGIBtg9IAYAsIhtA9IgLAGgEAfGggBQBKgqBGgqIAaArQhHAqhLAsgEAiHghzQBCgoA+gnIAaAqQg+AohBAogEAk3gjhIBghAIAbArIhgBAgEAnGglCQBPg2BGg1IAFgEIAYAjIAAAKQhHA2hQA3g");
	this.shape.setTransform(324.8,258.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(56.7,10.7,536.2,496.4);


(lib.Traçado1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tracado_1.psd
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AvDfMIAngfIAlApIgnAfIglgpgAwcdfIApgcQAXAfAaAeIgnAfQgbgfgYghgAxzbiIAsgaQAXAmAbAlIgqAdQgbgngZgngAzDZRIAvgUQAVAtAaAsIgsAaQgbgvgXgwgA0BW6IAwgQQAQAvAUAvIguAUQgVgxgRgxgA0yUBIAxgLQAMA+ASA+IgwAQQgThAgMhBgA1GRqIAzgDQADArAGAqIgyAMQgHgvgDgvgA1JPSIAzACQgCAtACArIgzAEQgCgvACgvgA1FOXQADgrAGgrIAyAKQgGAngDAngA0zMHQAIgvAMgvIAvAQQgKAsgHArgA0RJwQALgsAPgsIAuATQgOAqgLAqgAzlHgQAVg6AYg5IAsAZQgXA3gTA2gAygE2QAVguAXguIAqAcQgXAtgTAsgAxYClQAeg5Aig5IApAdQgiA5geA4gAv5ABQAcgsAfgtIAnAgQgeArgbAqgAudiIQAhguAjgvIAmAgQgjAuggAugAs2kTQAtg7Ayg8IAnAgQgyA7gtA7gAqxm2IA3g/IAjAjIgzA7gApTohIA2g6IAjAjIg2A6gAn1qGIA+g/IAkAjIg+A/gAmNrvIBHhFIATgSIAjAkIgUASIhGBEgAkJtuQA6g2A8g2IAgAnQg6A0g4A0gAhnwBIBnhaIAeAoIhlBZgAAtyBQBAg1BCg1IAgAnQhDA1hBA3gADd0PQBAgyBDgyIAdApQhBAwg/AxgAGP2WQBDgyBFgxIAdApQhFAxhDAygAJH4bIBvhMIAbAqIhtBLgALm6IIBuhIIAbAqIhuBIgAOF7wICMhYIAbAqIiMBYgARD9nQB1hHB5hGIABAAIAZArIgBABQh4BFh0BHg");
	this.shape.setTransform(158,305.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(22.5,102,271.1,407.5);


(lib.sombra = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AB9BrIAAAAIAAAAgAh8AAID0hqIgsBrIAxBqIj5hrg");
	this.shape.setTransform(12.5,10.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,25.1,21.5);


(lib.Seta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2 Cópia
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DCDCDC").s().p("Ah2A0IgEgBID1hqIgsBrIACAEg");
	this.shape.setTransform(13.2,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Camada 2 Cópia 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AB9BrIAAAAIAAAAgAh8AAID0hqIgsBrIAxBqIj5hrg");
	this.shape_1.setTransform(13.4,10.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Camada 2
	this.instance = new lib.sombra();
	this.instance.setTransform(17,16.8,1,1,0,0,0,12.5,10.8);
	this.instance.alpha = 0.621;
	this.instance.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance.cache(-2,-2,29,26);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.9,0,34.6,34);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(1));

	// Camada 8
	this.instance = new lib.Seta();
	this.instance.setTransform(635.1,117.1,0.999,0.999,-26.1,0,0,20.7,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:16.4,regY:14.9,scaleX:1,scaleY:1,rotation:-26.4,x:628.7,y:123.6},0).wait(1).to({rotation:-26.6,x:624.6,y:125.3},0).wait(1).to({rotation:-26.9,x:620.6,y:127.1},0).wait(1).to({rotation:-27.1,x:616.6,y:128.6},0).wait(1).to({rotation:-27.4,x:612.4,y:130.3},0).wait(1).to({rotation:-27.6,x:608.3,y:131.9},0).wait(1).to({rotation:-27.5,x:601.5,y:135.7},0).wait(1).to({rotation:-27.4,x:594.5,y:139.4},0).wait(1).to({rotation:-27.2,x:587.4,y:142.9},0).wait(1).to({rotation:-27.1,x:580.4,y:146.4},0).wait(1).to({rotation:-26.9,x:573.3,y:149.8},0).wait(1).to({rotation:-26.8,x:566.2,y:153.1},0).wait(1).to({rotation:-26.7,x:559.1,y:156.5},0).wait(1).to({rotation:-26.5,x:551.9,y:159.8},0).wait(1).to({rotation:-26.4,x:544.8,y:163},0).wait(1).to({rotation:-26.3,x:537.6,y:166.3},0).wait(1).to({rotation:-26.1,x:530.4,y:169.6},0).wait(1).to({rotation:-26,x:523.3,y:172.8},0).wait(1).to({rotation:-25.9,x:516.1,y:176},0).wait(1).to({rotation:-25.7,x:508.9,y:179.2},0).wait(1).to({rotation:-25.6,x:501.8,y:182.4},0).wait(1).to({rotation:-25.5,x:494.5,y:185.6},0).wait(1).to({rotation:-25.3,x:487.3,y:188.7},0).wait(1).to({rotation:-25.2,x:480.2,y:191.9},0).wait(1).to({rotation:-25,x:473,y:195.1},0).wait(1).to({rotation:-24.9,x:465.8,y:198.3},0).wait(1).to({rotation:-24.8,x:458.6,y:201.5},0).wait(1).to({rotation:-24.6,x:451.4,y:204.6},0).wait(1).to({rotation:-24.5,x:444.2,y:207.7},0).wait(1).to({rotation:-24.4,x:437,y:210.9},0).wait(1).to({rotation:-24.2,x:429.8,y:214.1},0).wait(1).to({rotation:-24.1,x:422.6,y:217.2},0).wait(1).to({rotation:-24,x:415.4,y:220.4},0).wait(1).to({rotation:-23.8,x:408.2,y:223.6},0).wait(1).to({rotation:-23.7,x:401,y:226.7},0).wait(1).to({rotation:-23.5,x:393.8,y:229.9},0).wait(1).to({rotation:-23.4,x:386.6,y:233.1},0).wait(1).to({rotation:-23.3,x:379.4,y:236.3},0).wait(1).to({rotation:-23.1,x:372.3,y:239.5},0).wait(1).to({rotation:-23,x:365,y:242.7},0).wait(1).to({rotation:-22.9,x:357.9,y:246},0).wait(1).to({rotation:-24,x:349.7,y:249.7},0).wait(1).to({rotation:-25,x:341.5,y:253.6},0).wait(1).to({rotation:-26.1,x:333.3,y:257.5},0).wait(1).to({rotation:-27.2,x:325.2,y:261.3},0).wait(1).to({rotation:-28.3,x:317.1,y:265.2},0).wait(1).to({rotation:-29.4,x:309,y:269.3},0).wait(1).to({rotation:-30.5,x:300.9,y:273.3},0).wait(1).to({rotation:-31.6,x:292.9,y:277.5},0).wait(1).to({rotation:-32.7,x:284.9,y:281.8},0).wait(1).to({rotation:-33.7,x:277.1,y:286.2},0).wait(1).to({rotation:-34.8,x:269.2,y:290.8},0).wait(1).to({rotation:-35.9,x:261.5,y:295.4},0).wait(1).to({rotation:-36.8,x:255.1,y:299.4},0).wait(1).to({rotation:-37.7,x:248.6,y:303.4},0).wait(1).to({rotation:-38.6,x:242.2,y:307.5},0).wait(1).to({rotation:-39.5,x:235.8,y:311.7},0).wait(1).to({rotation:-40.4,x:229.5,y:315.9},0).wait(1).to({rotation:-41.2,x:223.1,y:320.2},0).wait(1).to({rotation:-42.1,x:216.9,y:324.5},0).wait(1).to({rotation:-43,x:210.7,y:329},0).wait(1).to({rotation:-43.9,x:204.7,y:333.6},0).wait(1).to({rotation:-44.8,x:198.7,y:338.3},0).wait(1).to({rotation:-45.7,x:192.9,y:343.3},0).wait(1).to({rotation:-47,x:187.9,y:348.1},0).wait(1).to({rotation:-48.3,x:182.9,y:353.1},0).wait(1).to({rotation:-49.6,x:178.2,y:358.2},0).wait(1).to({rotation:-50.9,x:173.5,y:363.5},0).wait(1).to({rotation:-52.2,x:169,y:368.9},0).wait(1).to({rotation:-53.5,x:164.6,y:374.2},0).wait(1).to({rotation:-54.8,x:160.3,y:379.8},0).wait(1).to({rotation:-56.1,x:156.1,y:385.4},0).wait(1).to({rotation:-57.4,x:152,y:391.1},0).wait(1).to({rotation:-58.7,x:148,y:396.9},0).wait(1).to({rotation:-60.1,x:144.2,y:402.7},0).wait(1).to({rotation:-61.4,x:140.4,y:408.6},0).wait(1).to({rotation:-62.7,x:136.8,y:414.6},0).wait(1).to({rotation:-64,x:133.2,y:420.6},0).wait(1).to({rotation:-65.3,x:129.8,y:426.8},0).wait(1).to({rotation:-66.6,x:126.6,y:433},0).wait(1).to({rotation:-67.9,x:123.5,y:439.3},0).wait(1).to({rotation:-69.2,x:120.8,y:445.7},0).wait(1).to({rotation:-69.9,x:119.1,y:450.4},0).wait(1).to({rotation:-70.5,x:117.3,y:455.1},0).wait(1).to({rotation:-71.2,x:115.8,y:459.8},0).wait(1).to({rotation:-71.9,x:114.3,y:464.6},0).wait(1).to({rotation:-72.5,x:112.9,y:469.4},0).wait(1).to({rotation:-73.2,x:111.6,y:474.2},0).wait(1).to({rotation:-73.9,x:110.4,y:479.1},0).wait(1).to({rotation:-74.5,x:109.3,y:484},0).wait(1).to({rotation:-75.2,x:108.2,y:488.8},0).wait(1).to({rotation:-75.9,x:107.2,y:493.8},0).wait(1).to({rotation:-76.5,x:106.3,y:498.6},0).wait(1).to({rotation:-77.2,x:105.5,y:503.6},0).wait(1).to({rotation:-77.9,x:104.6,y:508.5},0).wait(1).to({rotation:-78.5,x:103.9,y:513.5},0).wait(1).to({rotation:-79.2,x:103.2,y:518.4},0).wait(1).to({rotation:-79.8,x:102.5,y:523.4},0).wait(1).to({rotation:-80.5,x:101.9,y:528.3},0).wait(1).to({rotation:-81.2,x:101.3,y:533.3},0).wait(1));

	// Camada 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AtYrGIH7lAIS2bNIn7FAg");
	var mask_graphics_1 = new cjs.Graphics().p("At7qnII7lvIS8bLIovFig");
	var mask_graphics_2 = new cjs.Graphics().p("AueqJIJ5meITDbLIpjGEg");
	var mask_graphics_3 = new cjs.Graphics().p("AvAprIK4nMITJbJIqWGmg");
	var mask_graphics_4 = new cjs.Graphics().p("AvipMIL2n8ITPbJIrJHIg");
	var mask_graphics_5 = new cjs.Graphics().p("AwFouIM2oqITVbIIr9Hpg");
	var mask_graphics_6 = new cjs.Graphics().p("AwooQIN1pZITcbHIsxILg");
	var mask_graphics_7 = new cjs.Graphics().p("AxLnyIO0qHITibGItkItg");
	var mask_graphics_8 = new cjs.Graphics().p("AxtnUIPyq2ITpbFIuYJQg");
	var mask_graphics_9 = new cjs.Graphics().p("AyQm1IQyrlITvbEIvMJxg");
	var mask_graphics_10 = new cjs.Graphics().p("AyzmWIRxsVIT2bEIwBKSg");
	var mask_graphics_11 = new cjs.Graphics().p("AzVl5ISwtCIT7bCIwzK1g");
	var mask_graphics_12 = new cjs.Graphics().p("Az3laITttyIUDbCIxnLWg");
	var mask_graphics_13 = new cjs.Graphics().p("A0ak8IUrugIUKbBIyaL4g");
	var mask_graphics_14 = new cjs.Graphics().p("A09keIVqvOIURa/IzOMag");
	var mask_graphics_15 = new cjs.Graphics().p("A1gkAIWpv9IUXa/I0BM8g");
	var mask_graphics_16 = new cjs.Graphics().p("A2CjhIXowsIUda9I01Neg");
	var mask_graphics_17 = new cjs.Graphics().p("A2ljDIYnxbIUka9I1qOAg");
	var mask_graphics_18 = new cjs.Graphics().p("A3HikIZlyKIUqa8I2cOhg");
	var mask_graphics_19 = new cjs.Graphics().p("A3qiGIaly5IUwa7I3QPEg");
	var mask_graphics_20 = new cjs.Graphics().p("A4MhoIbiznIU3a6I4EPlg");
	var mask_graphics_21 = new cjs.Graphics().p("A4vhKIci0WIU9a5I41QIg");
	var mask_graphics_22 = new cjs.Graphics().p("A5SgrIdi1FIVDa4I5pQpg");
	var mask_graphics_23 = new cjs.Graphics().p("A51gNIeg10IVLa4I6eRLg");
	var mask_graphics_24 = new cjs.Graphics().p("A6XAPIff2gIVQa2I7QRtg");
	var mask_graphics_25 = new cjs.Graphics().p("A66AuMAgegXQIVXa2I8FSPg");
	var mask_graphics_26 = new cjs.Graphics().p("A7cBMMAhcgX+IVda1I83Swg");
	var mask_graphics_27 = new cjs.Graphics().p("A7/BqMAicgYtIVja0I9rTTg");
	var mask_graphics_28 = new cjs.Graphics().p("A8iCIMAjagZbIVqazI+fT0g");
	var mask_graphics_29 = new cjs.Graphics().p("A9ECnMAkZgaLIVwazI/SUVg");
	var mask_graphics_30 = new cjs.Graphics().p("A9nDFMAlZga5IV2axMggGAU4g");
	var mask_graphics_31 = new cjs.Graphics().p("A+KDkMAmXgbpIV9axMgg6AVag");
	var mask_graphics_32 = new cjs.Graphics().p("A+sEBMAnWgcWIWDavMghuAV8g");
	var mask_graphics_33 = new cjs.Graphics().p("A/PEgMAoVgdGIWJavMgigAWdg");
	var mask_graphics_34 = new cjs.Graphics().p("A/xE+MApTgd0IWQauMgjUAW/g");
	var mask_graphics_35 = new cjs.Graphics().p("EggUAFdMAqTgekIWWatMgkJAXhg");
	var mask_graphics_36 = new cjs.Graphics().p("Egg3AF7MArSgfSIWdarMgk8AYEg");
	var mask_graphics_37 = new cjs.Graphics().p("EghZAGZMAsQggAIWjaqMglvAYlg");
	var mask_graphics_38 = new cjs.Graphics().p("Egh8AG3MAtQggvIWpaqMgmkAZHg");
	var mask_graphics_39 = new cjs.Graphics().p("EgifAHWMAuOgheIWwaoMgnWAZpg");
	var mask_graphics_40 = new cjs.Graphics().p("EgjBAH0MAvNgiNIW2aoMgoLAaLg");
	var mask_graphics_41 = new cjs.Graphics().p("EgjkAITMAwNgi8IW7apMgo9Aaqg");
	var mask_graphics_42 = new cjs.Graphics().p("EgkGAIxMAxLgjrIXCaoMgpxAbNg");
	var mask_graphics_43 = new cjs.Graphics().p("EgkpAJPMAyKgkZIXJanMgqmAbug");
	var mask_graphics_44 = new cjs.Graphics().p("EglMAJtMAzJglIIXPamMgrYAcRg");
	var mask_graphics_45 = new cjs.Graphics().p("EgluAKMMA0Hgl3IXWalMgsNAcyg");
	var mask_graphics_46 = new cjs.Graphics().p("EgmRAKqMA1HgmmIXcalMgtBAdUg");
	var mask_graphics_47 = new cjs.Graphics().p("EgmzALJMA2FgnVIXiakMgtzAd1g");
	var mask_graphics_48 = new cjs.Graphics().p("EgnWALnMA3EgoEIXpajMgunAeYg");
	var mask_graphics_49 = new cjs.Graphics().p("Egn5AMFMA4EgoyIXvahMgvcAe6g");
	var mask_graphics_50 = new cjs.Graphics().p("EgobAMjMA5CgphIX1ahMgwOAfbg");
	var mask_graphics_51 = new cjs.Graphics().p("Ego+ANBMA6BgqPIX8agMgxCAf9g");
	var mask_graphics_52 = new cjs.Graphics().p("EgphANgMA7Agq/IYCafMgx2Aggg");
	var mask_graphics_53 = new cjs.Graphics().p("EgqDAN+MA7+grtIYJaeMgyqAhBg");
	var mask_graphics_54 = new cjs.Graphics().p("EgqmAOcMA8+gscIYOadMgzdAhkg");
	var mask_graphics_55 = new cjs.Graphics().p("EgrIAO7MA98gtLIYVacMg0QAiFg");
	var mask_graphics_56 = new cjs.Graphics().p("EgrrAPZMA+7gt6IYcacMg1EAimg");
	var mask_graphics_57 = new cjs.Graphics().p("EgsOAP3MA/7guoIYhaaMg14AjJg");
	var mask_graphics_58 = new cjs.Graphics().p("EgswAQWMBA5gvYIYoaaMg2sAjrg");
	var mask_graphics_59 = new cjs.Graphics().p("EgtTAQzMBB4gwFIYvaZMg3fAkMg");
	var mask_graphics_60 = new cjs.Graphics().p("Egt1ARSMBC2gw0IY2aXMg4UAkug");
	var mask_graphics_61 = new cjs.Graphics().p("EguYARxMBD2gxkIY7aXMg5HAlQg");
	var mask_graphics_62 = new cjs.Graphics().p("Egu7ASPMBE1gySIZCaVMg56Alyg");
	var mask_graphics_63 = new cjs.Graphics().p("EgvdAStMBFzgzBIZIaVMg6uAmUg");
	var mask_graphics_64 = new cjs.Graphics().p("EgwAATLMBGygzvIZPaUMg7iAm1g");
	var mask_graphics_65 = new cjs.Graphics().p("EgwjATpMBHyg0eIZUaTMg8UAnYg");
	var mask_graphics_66 = new cjs.Graphics().p("EgxFAUIMBIwg1NIZbaSMg9JAn5g");
	var mask_graphics_67 = new cjs.Graphics().p("EgxoAUmMBJwg18IZhaRMg99Aocg");
	var mask_graphics_68 = new cjs.Graphics().p("EgyKAVFMBKug2rIZnaQMg+vAo9g");
	var mask_graphics_69 = new cjs.Graphics().p("EgytAVjMBLtg3aIZuaQMg/kApfg");
	var mask_graphics_70 = new cjs.Graphics().p("EgzQAWBMBMsg4IIZ0aOMhAWAqBg");
	var mask_graphics_71 = new cjs.Graphics().p("EgzyAWfMBNqg43IZ7aOMhBLAqjg");
	var mask_graphics_72 = new cjs.Graphics().p("Eg0VAW+MBOqg5mIaBaNMhB/ArEg");
	var mask_graphics_73 = new cjs.Graphics().p("Eg03AXcMBPog6UIaIaLMhCyArmg");
	var mask_graphics_74 = new cjs.Graphics().p("Eg1aAX6MBQng7DIaOaLMhDmAsIg");
	var mask_graphics_75 = new cjs.Graphics().p("Eg19AYYMBRmg7xIaVaKMhEaAsqg");
	var mask_graphics_76 = new cjs.Graphics().p("Eg2fAY3MBSlg8hIaaaJMhFNAtMg");
	var mask_graphics_77 = new cjs.Graphics().p("Eg3CAZVMBTkg9PIahaIMhGAAtug");
	var mask_graphics_78 = new cjs.Graphics().p("Eg3lAZzMBUjg9+IanaHMhG0AuQg");
	var mask_graphics_79 = new cjs.Graphics().p("Eg4HAaSMBVig+tIataGMhHoAuxg");
	var mask_graphics_80 = new cjs.Graphics().p("Eg4qAawMBWhg/cIa0aFMhIbAvUg");
	var mask_graphics_81 = new cjs.Graphics().p("Eg5MAbOMBXfhAKIa6aEMhJPAv2g");
	var mask_graphics_82 = new cjs.Graphics().p("Eg5vAbtMBYehA6IbBaDMhKDAwYg");
	var mask_graphics_83 = new cjs.Graphics().p("Eg6SAcLMBZehBoIbGaCMhK1Aw5g");
	var mask_graphics_84 = new cjs.Graphics().p("Eg60AcpMBachCXIbNaCMhLqAxbg");
	var mask_graphics_85 = new cjs.Graphics().p("Eg7XAdIMBbbhDGIbUaAMhMdAx9g");
	var mask_graphics_86 = new cjs.Graphics().p("Eg75AdmMBcahD1IbaaAMhNSAyfg");
	var mask_graphics_87 = new cjs.Graphics().p("Eg8cAeEMBdZhEjIbgZ/MhOFAzAg");
	var mask_graphics_88 = new cjs.Graphics().p("Eg8/AeiMBeYhFSIbnZ+MhO4Azjg");
	var mask_graphics_89 = new cjs.Graphics().p("Eg9hAfBMBfWhGBIbtZ9MhPsA0Eg");
	var mask_graphics_90 = new cjs.Graphics().p("Eg+EAffMBgVhGwIb0Z8MhQgA0ng");
	var mask_graphics_91 = new cjs.Graphics().p("Eg+nAf+MBhVhHfIb5Z7MhRTA1Ig");
	var mask_graphics_92 = new cjs.Graphics().p("Eg/JAgcMBiThIOIcAZ7MhSHA1qg");
	var mask_graphics_93 = new cjs.Graphics().p("Eg/sAg6MBjShI8IcHZ6MhS7A2Lg");
	var mask_graphics_94 = new cjs.Graphics().p("EhAOAhYMBkRhJrIcMZ5MhTuA2ug");
	var mask_graphics_95 = new cjs.Graphics().p("EhAxAh3MBlQhKaIcTZ3MhUiA3Qg");
	var mask_graphics_96 = new cjs.Graphics().p("EhBUAiUMBmPhLHIcaZ2MhVWA3xg");
	var mask_graphics_97 = new cjs.Graphics().p("EhB2AizMBnOhL3IcfZ2MhWJA4Tg");
	var mask_graphics_98 = new cjs.Graphics().p("EhCZAjSMBoNhMmIcmZ0MhW8A42g");
	var mask_graphics_99 = new cjs.Graphics().p("EhC7AjwMBpLhNVIctZ0MhXxA5Xg");
	var mask_graphics_100 = new cjs.Graphics().p("EhDeAkOMBqKhODIczZyMhYkA55g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:673,y:76.7}).wait(1).to({graphics:mask_graphics_1,x:669.3,y:78.6}).wait(1).to({graphics:mask_graphics_2,x:665.7,y:80.5}).wait(1).to({graphics:mask_graphics_3,x:662,y:82.4}).wait(1).to({graphics:mask_graphics_4,x:658.3,y:84.2}).wait(1).to({graphics:mask_graphics_5,x:654.6,y:86.1}).wait(1).to({graphics:mask_graphics_6,x:651,y:88}).wait(1).to({graphics:mask_graphics_7,x:647.3,y:89.9}).wait(1).to({graphics:mask_graphics_8,x:643.6,y:91.8}).wait(1).to({graphics:mask_graphics_9,x:640,y:93.6}).wait(1).to({graphics:mask_graphics_10,x:636.3,y:95.5}).wait(1).to({graphics:mask_graphics_11,x:632.6,y:97.4}).wait(1).to({graphics:mask_graphics_12,x:629,y:99.3}).wait(1).to({graphics:mask_graphics_13,x:625.3,y:101.2}).wait(1).to({graphics:mask_graphics_14,x:621.6,y:103}).wait(1).to({graphics:mask_graphics_15,x:618,y:104.9}).wait(1).to({graphics:mask_graphics_16,x:614.3,y:106.8}).wait(1).to({graphics:mask_graphics_17,x:610.6,y:108.7}).wait(1).to({graphics:mask_graphics_18,x:606.9,y:110.5}).wait(1).to({graphics:mask_graphics_19,x:603.3,y:112.4}).wait(1).to({graphics:mask_graphics_20,x:599.6,y:114.3}).wait(1).to({graphics:mask_graphics_21,x:595.9,y:116.2}).wait(1).to({graphics:mask_graphics_22,x:592.3,y:118}).wait(1).to({graphics:mask_graphics_23,x:588.6,y:119.9}).wait(1).to({graphics:mask_graphics_24,x:584.9,y:121.8}).wait(1).to({graphics:mask_graphics_25,x:581.3,y:123.7}).wait(1).to({graphics:mask_graphics_26,x:577.6,y:125.6}).wait(1).to({graphics:mask_graphics_27,x:573.9,y:127.4}).wait(1).to({graphics:mask_graphics_28,x:570.3,y:129.3}).wait(1).to({graphics:mask_graphics_29,x:566.6,y:131.2}).wait(1).to({graphics:mask_graphics_30,x:562.9,y:133.1}).wait(1).to({graphics:mask_graphics_31,x:559.3,y:135}).wait(1).to({graphics:mask_graphics_32,x:555.6,y:136.9}).wait(1).to({graphics:mask_graphics_33,x:551.9,y:138.7}).wait(1).to({graphics:mask_graphics_34,x:548.2,y:140.6}).wait(1).to({graphics:mask_graphics_35,x:544.6,y:142.5}).wait(1).to({graphics:mask_graphics_36,x:540.9,y:144.4}).wait(1).to({graphics:mask_graphics_37,x:537.2,y:146.2}).wait(1).to({graphics:mask_graphics_38,x:533.6,y:148.1}).wait(1).to({graphics:mask_graphics_39,x:529.9,y:150}).wait(1).to({graphics:mask_graphics_40,x:526.2,y:151.9}).wait(1).to({graphics:mask_graphics_41,x:522.6,y:153.7}).wait(1).to({graphics:mask_graphics_42,x:518.9,y:155.6}).wait(1).to({graphics:mask_graphics_43,x:515.2,y:157.5}).wait(1).to({graphics:mask_graphics_44,x:511.6,y:159.4}).wait(1).to({graphics:mask_graphics_45,x:507.9,y:161.2}).wait(1).to({graphics:mask_graphics_46,x:504.2,y:163.1}).wait(1).to({graphics:mask_graphics_47,x:500.5,y:165}).wait(1).to({graphics:mask_graphics_48,x:496.9,y:166.9}).wait(1).to({graphics:mask_graphics_49,x:493.2,y:168.8}).wait(1).to({graphics:mask_graphics_50,x:489.5,y:170.7}).wait(1).to({graphics:mask_graphics_51,x:485.9,y:172.5}).wait(1).to({graphics:mask_graphics_52,x:482.2,y:174.4}).wait(1).to({graphics:mask_graphics_53,x:478.5,y:176.3}).wait(1).to({graphics:mask_graphics_54,x:474.9,y:178.2}).wait(1).to({graphics:mask_graphics_55,x:471.2,y:180.1}).wait(1).to({graphics:mask_graphics_56,x:467.5,y:181.9}).wait(1).to({graphics:mask_graphics_57,x:463.9,y:183.8}).wait(1).to({graphics:mask_graphics_58,x:460.2,y:185.7}).wait(1).to({graphics:mask_graphics_59,x:456.5,y:187.6}).wait(1).to({graphics:mask_graphics_60,x:452.9,y:189.4}).wait(1).to({graphics:mask_graphics_61,x:449.2,y:191.3}).wait(1).to({graphics:mask_graphics_62,x:445.5,y:193.2}).wait(1).to({graphics:mask_graphics_63,x:441.8,y:195.1}).wait(1).to({graphics:mask_graphics_64,x:438.2,y:196.9}).wait(1).to({graphics:mask_graphics_65,x:434.5,y:198.8}).wait(1).to({graphics:mask_graphics_66,x:430.8,y:200.7}).wait(1).to({graphics:mask_graphics_67,x:427.2,y:202.6}).wait(1).to({graphics:mask_graphics_68,x:423.5,y:204.4}).wait(1).to({graphics:mask_graphics_69,x:419.8,y:206.3}).wait(1).to({graphics:mask_graphics_70,x:416.2,y:208.2}).wait(1).to({graphics:mask_graphics_71,x:412.5,y:210.1}).wait(1).to({graphics:mask_graphics_72,x:408.8,y:212}).wait(1).to({graphics:mask_graphics_73,x:405.2,y:213.9}).wait(1).to({graphics:mask_graphics_74,x:401.5,y:215.7}).wait(1).to({graphics:mask_graphics_75,x:397.8,y:217.6}).wait(1).to({graphics:mask_graphics_76,x:394.1,y:219.5}).wait(1).to({graphics:mask_graphics_77,x:390.5,y:221.4}).wait(1).to({graphics:mask_graphics_78,x:386.8,y:223.3}).wait(1).to({graphics:mask_graphics_79,x:383.1,y:225.1}).wait(1).to({graphics:mask_graphics_80,x:379.5,y:227}).wait(1).to({graphics:mask_graphics_81,x:375.8,y:228.9}).wait(1).to({graphics:mask_graphics_82,x:372.1,y:230.8}).wait(1).to({graphics:mask_graphics_83,x:368.5,y:232.6}).wait(1).to({graphics:mask_graphics_84,x:364.8,y:234.5}).wait(1).to({graphics:mask_graphics_85,x:361.1,y:236.4}).wait(1).to({graphics:mask_graphics_86,x:357.5,y:238.3}).wait(1).to({graphics:mask_graphics_87,x:353.8,y:240.1}).wait(1).to({graphics:mask_graphics_88,x:350.1,y:242}).wait(1).to({graphics:mask_graphics_89,x:346.5,y:243.9}).wait(1).to({graphics:mask_graphics_90,x:342.8,y:245.8}).wait(1).to({graphics:mask_graphics_91,x:339.1,y:247.7}).wait(1).to({graphics:mask_graphics_92,x:335.4,y:249.5}).wait(1).to({graphics:mask_graphics_93,x:331.8,y:251.4}).wait(1).to({graphics:mask_graphics_94,x:328.1,y:253.3}).wait(1).to({graphics:mask_graphics_95,x:324.4,y:255.2}).wait(1).to({graphics:mask_graphics_96,x:320.8,y:257.1}).wait(1).to({graphics:mask_graphics_97,x:317.1,y:258.9}).wait(1).to({graphics:mask_graphics_98,x:313.4,y:260.8}).wait(1).to({graphics:mask_graphics_99,x:309.8,y:262.7}).wait(1).to({graphics:mask_graphics_100,x:306.1,y:264.6}).wait(1));

	// Camada 6
	this.instance_1 = new lib.traçado4("synched",0);
	this.instance_1.setTransform(369,283,1,1,0,0,0,369,261);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(101));

	// Camada 8 Cópia
	this.instance_2 = new lib.Seta();
	this.instance_2.setTransform(717.2,62.4,0.998,0.998,-16.3,0,0,20.6,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:16.4,regY:14.9,scaleX:1,scaleY:1,rotation:-16.2,x:703.9,y:70},0).wait(1).to({rotation:-16.1,x:693.7,y:73.2},0).wait(1).to({rotation:-16,x:683.5,y:76.4},0).wait(1).to({rotation:-15.8,x:673.3,y:79.5},0).wait(1).to({rotation:-15.7,x:663,y:82.3},0).wait(1).to({rotation:-15.6,x:652.7,y:85.2},0).wait(1).to({rotation:-15.9,x:643.5,y:87.8},0).wait(1).to({rotation:-16.2,x:634.4,y:90.7},0).wait(1).to({rotation:-16.5,x:625.3,y:93.6},0).wait(1).to({rotation:-16.8,x:616.2,y:96.5},0).wait(1).to({rotation:-17.1,x:607.1,y:99.6},0).wait(1).to({rotation:-17.4,x:598.1,y:102.7},0).wait(1).to({rotation:-17.7,x:589,y:105.8},0).wait(1).to({rotation:-18,x:580.1,y:108.9},0).wait(1).to({rotation:-18.3,x:571,y:112.1},0).wait(1).to({rotation:-18.6,x:562.1,y:115.3},0).wait(1).to({rotation:-18.9,x:553,y:118.6},0).wait(1).to({rotation:-19.1,x:544.1,y:121.8},0).wait(1).to({rotation:-19.4,x:535.1,y:125.1},0).wait(1).to({rotation:-19.7,x:526.1,y:128.4},0).wait(1).to({rotation:-20,x:517.2,y:131.8},0).wait(1).to({rotation:-20.3,x:508.2,y:135.1},0).wait(1).to({rotation:-20.6,x:499.3,y:138.5},0).wait(1).to({rotation:-20.9,x:490.3,y:141.8},0).wait(1).to({rotation:-21.2,x:481.4,y:145.2},0).wait(1).to({rotation:-21.5,x:472.5,y:148.7},0).wait(1).to({rotation:-21.8,x:463.6,y:152.1},0).wait(1).to({rotation:-22.1,x:454.7,y:155.6},0).wait(1).to({rotation:-22.4,x:445.8,y:159.1},0).wait(1).to({rotation:-22.7,x:437,y:162.7},0).wait(1).to({rotation:-23,x:428.1,y:166.2},0).wait(1).to({rotation:-23.3,x:419.3,y:169.7},0).wait(1).to({rotation:-23.6,x:410.4,y:173.4},0).wait(1).to({rotation:-23.9,x:401.6,y:177},0).wait(1).to({rotation:-24.2,x:392.8,y:180.7},0).wait(1).to({rotation:-24.5,x:383.9,y:184.4},0).wait(1).to({rotation:-24.8,x:375.2,y:188.2},0).wait(1).to({rotation:-25.1,x:366.4,y:192.1},0).wait(1).to({rotation:-25.4,x:357.7,y:196},0).wait(1).to({rotation:-25.7,x:349.1,y:200.1},0).wait(1).to({rotation:-26,x:340.5,y:204.3},0).wait(1).to({rotation:-26.9,x:331.7,y:208.3},0).wait(1).to({rotation:-27.9,x:323,y:212.4},0).wait(1).to({rotation:-28.8,x:314.3,y:216.6},0).wait(1).to({rotation:-29.8,x:305.6,y:220.9},0).wait(1).to({rotation:-30.7,x:297.1,y:225.4},0).wait(1).to({rotation:-31.7,x:288.5,y:229.9},0).wait(1).to({rotation:-32.6,x:280,y:234.4},0).wait(1).to({rotation:-33.6,x:271.5,y:239.1},0).wait(1).to({rotation:-34.5,x:263.1,y:243.9},0).wait(1).to({rotation:-35.5,x:254.8,y:248.8},0).wait(1).to({rotation:-36.4,x:246.6,y:253.8},0).wait(1).to({rotation:-37.4,x:238.4,y:259.1},0).wait(1).to({rotation:-37.9,x:231.3,y:264.1},0).wait(1).to({rotation:-38.4,x:224.4,y:269.1},0).wait(1).to({rotation:-39,x:217.5,y:274.4},0).wait(1).to({rotation:-39.5,x:210.7,y:279.8},0).wait(1).to({rotation:-40,x:203.9,y:285.1},0).wait(1).to({rotation:-40.5,x:197.2,y:290.6},0).wait(1).to({rotation:-41.1,x:190.6,y:296.2},0).wait(1).to({rotation:-41.6,x:184,y:301.8},0).wait(1).to({rotation:-42.1,x:177.4,y:307.4},0).wait(1).to({rotation:-42.6,x:170.9,y:313.1},0).wait(1).to({rotation:-43.2,x:164.4,y:318.8},0).wait(1).to({rotation:-44.5,x:159.5,y:323.5},0).wait(1).to({rotation:-45.8,x:154.5,y:328.6},0).wait(1).to({rotation:-47.2,x:149.8,y:333.7},0).wait(1).to({rotation:-48.5,x:145.2,y:339},0).wait(1).to({rotation:-49.8,x:140.6,y:344.3},0).wait(1).to({rotation:-51.1,x:136.3,y:349.8},0).wait(1).to({rotation:-52.5,x:132,y:355.2},0).wait(1).to({rotation:-53.8,x:127.8,y:360.9},0).wait(1).to({rotation:-55.1,x:123.8,y:366.6},0).wait(1).to({rotation:-56.4,x:119.9,y:372.4},0).wait(1).to({rotation:-59.2,x:114.9,y:380.4},0).wait(1).to({rotation:-61.9,x:110.2,y:388.6},0).wait(1).to({rotation:-64.7,x:105.8,y:397},0).wait(1).to({rotation:-67.4,x:101.8,y:405.5},0).wait(1).to({rotation:-70.2,x:98.2,y:414.3},0).wait(1).to({rotation:-72.9,x:95.2,y:423.2},0).wait(1).to({rotation:-75.7,x:92.6,y:432.4},0).wait(1).to({rotation:-78.4,x:90.9,y:441.6},0).wait(1).to({rotation:-79.6,x:89.5,y:446.4},0).wait(1).to({rotation:-80.7,x:88.5,y:451.3},0).wait(1).to({rotation:-81.9,x:87.7,y:456.2},0).wait(1).to({rotation:-83,x:87.1,y:461.2},0).wait(1).to({rotation:-84.2,x:86.7,y:466.1},0).wait(1).to({rotation:-85.3,x:86.5,y:471.1},0).wait(1).to({rotation:-86.5,x:86.3,y:476.1},0).wait(1).to({rotation:-87.6,x:86.2,y:481.1},0).wait(1).to({rotation:-88.8,x:86.3,y:486.1},0).wait(1).to({rotation:-89.9,x:86.4,y:491},0).wait(1).to({rotation:-91.1,x:86.6,y:496},0).wait(1).to({rotation:-92.2,x:86.8,y:501.1},0).wait(1).to({rotation:-93.3,x:87.1,y:506},0).wait(1).to({rotation:-94.5,x:87.5,y:511},0).wait(1).to({rotation:-95.6,x:87.9,y:515.9},0).wait(1).to({rotation:-96.8,x:88.4,y:520.9},0).wait(1).to({rotation:-97.9,x:89,y:525.9},0).wait(1).to({rotation:-99.1,x:89.6,y:530.8},0).wait(1));

	// Camada 7 Cópia (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AnhvrIJRhPMAFyAgmIpRBPg");
	var mask_1_graphics_1 = new cjs.Graphics().p("Aobu/IKpiQMAGPAgcIqcCDg");
	var mask_1_graphics_2 = new cjs.Graphics().p("ApWuRIMDjTMAGqAgTIrmC2g");
	var mask_1_graphics_3 = new cjs.Graphics().p("AqQtkINbkVMAHGAgKIswDpg");
	var mask_1_graphics_4 = new cjs.Graphics().p("ArLs3IO1lXMAHhAgBIt6Ecg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AsFsKIQOmZIH9f4IvEFPg");
	var mask_1_graphics_6 = new cjs.Graphics().p("As/rcIRmncIIZfvIwPGCg");
	var mask_1_graphics_7 = new cjs.Graphics().p("Atsq0IStoYIIsfoIxIGxg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AuZqKIT0pVII/fhIyCHeg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AvFpiIU6qRIJRfaIy7INg");
	var mask_1_graphics_10 = new cjs.Graphics().p("Avyo5IWBrOIJkfUIz0I7g");
	var mask_1_graphics_11 = new cjs.Graphics().p("AweoRIXIsKIJ1fOI0tJpg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AxLnnIYPtIIKIfII1nKXg");
	var mask_1_graphics_13 = new cjs.Graphics().p("Ax3m/IZVuEIKafBI2fLGg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AykmWIacvAIKte5I3ZL0g");
	var mask_1_graphics_15 = new cjs.Graphics().p("AzQltIbjv9IK+ezI4SMig");
	var mask_1_graphics_16 = new cjs.Graphics().p("Az9lEIcqw6ILRetI5LNQg");
	var mask_1_graphics_17 = new cjs.Graphics().p("A0qkbIdxx3ILjenI6EN9g");
	var mask_1_graphics_18 = new cjs.Graphics().p("A1WjzIe3yyIL2efI6+Osg");
	var mask_1_graphics_19 = new cjs.Graphics().p("A2DjKIf+zvIMJeZI73Pag");
	var mask_1_graphics_20 = new cjs.Graphics().p("A2vihMAhFgUsIMaeSI8wQJg");
	var mask_1_graphics_21 = new cjs.Graphics().p("A3ch4MAiMgVpIMteMI9qQ3g");
	var mask_1_graphics_22 = new cjs.Graphics().p("A4IhPMAjSgWlIM/eFI+iRkg");
	var mask_1_graphics_23 = new cjs.Graphics().p("A41gmMAkZgXiINSd+I/cSTg");
	var mask_1_graphics_24 = new cjs.Graphics().p("A5hAAMAlggYcINjd4MggVATBg");
	var mask_1_graphics_25 = new cjs.Graphics().p("A6OAqMAmngZaIN2dyMghOATug");
	var mask_1_graphics_26 = new cjs.Graphics().p("A67BSMAnugaVIOJdqMgiIAUdg");
	var mask_1_graphics_27 = new cjs.Graphics().p("A7nB7MAo0gbSIObdkMgjBAVLg");
	var mask_1_graphics_28 = new cjs.Graphics().p("A8UCkMAp7gcPIOuddMgj6AV6g");
	var mask_1_graphics_29 = new cjs.Graphics().p("A9BDNMArDgdMIO/dXMgkzAWog");
	var mask_1_graphics_30 = new cjs.Graphics().p("A9tD2MAsIgeIIPTdQMgltAXVg");
	var mask_1_graphics_31 = new cjs.Graphics().p("A+KEZMAs4gewIPdc7MgmSAX0g");
	var mask_1_graphics_32 = new cjs.Graphics().p("A+oE8MAtpgfYIPocnMgm4AYSg");
	var mask_1_graphics_33 = new cjs.Graphics().p("A/FFfMAuYggAIPzcTMgneAYwg");
	var mask_1_graphics_34 = new cjs.Graphics().p("A/jGCMAvJggnIP+b9MgoEAZOg");
	var mask_1_graphics_35 = new cjs.Graphics().p("EggAAGlMAv4ghPIQJbpMgorAZsg");
	var mask_1_graphics_36 = new cjs.Graphics().p("EggeAHIMAwpgh3IQTbVMgpPAaKg");
	var mask_1_graphics_37 = new cjs.Graphics().p("Egg7AHrMAxZgieIQea/Mgp3Aaog");
	var mask_1_graphics_38 = new cjs.Graphics().p("EghYAIOMAyJgjGIQoatMgqcAbEg");
	var mask_1_graphics_39 = new cjs.Graphics().p("Egh1AIxMAy4gjuIQzaZMgrCAbig");
	var mask_1_graphics_40 = new cjs.Graphics().p("EgiTAJUMAzpgkVIQ+aDMgroAcAg");
	var mask_1_graphics_41 = new cjs.Graphics().p("ApwJ4MA0Zgk+IRJZvMgsQAceg");
	var mask_1_graphics_42 = new cjs.Graphics().p("EgjeAKXMA1hgliIRcZdMgtIAc6g");
	var mask_1_graphics_43 = new cjs.Graphics().p("EgkLAK4MA2ogmIIRvZLMguCAdWg");
	var mask_1_graphics_44 = new cjs.Graphics().p("Egk4ALXMA3wgmsISBY5Mgu8Adyg");
	var mask_1_graphics_45 = new cjs.Graphics().p("EgllAL3MA44gnRISTYoMgv2AeNg");
	var mask_1_graphics_46 = new cjs.Graphics().p("EgmSAMXMA6Agn2ISlYVMgwwAeqg");
	var mask_1_graphics_47 = new cjs.Graphics().p("Egm/AM3MA7HgobIS4YEMgxqAfFg");
	var mask_1_graphics_48 = new cjs.Graphics().p("EgnsANWMA8Pgo/ITKXzMgyjAfgg");
	var mask_1_graphics_49 = new cjs.Graphics().p("EgoZAN3MA9WgpmITdXhMgzdAf+g");
	var mask_1_graphics_50 = new cjs.Graphics().p("EgpGAOWMA+egqKITvXQMg0XAgYg");
	var mask_1_graphics_51 = new cjs.Graphics().p("EgpzAO2MA/mgqvIUBW+Mg1QAg0g");
	var mask_1_graphics_52 = new cjs.Graphics().p("EgqgAPWMBAtgrTIUUWrMg2KAhRg");
	var mask_1_graphics_53 = new cjs.Graphics().p("A6iP2MBB1gr5IUnWaMg3HAhtg");
	var mask_1_graphics_54 = new cjs.Graphics().p("Egr7AQgMBC+gs4IU5WWMg4IAibg");
	var mask_1_graphics_55 = new cjs.Graphics().p("EgspARLMBEGgt4IVNWSMg5LAjJg");
	var mask_1_graphics_56 = new cjs.Graphics().p("EgtWAR2MBFPgu4IVeWNMg6OAj4g");
	var mask_1_graphics_57 = new cjs.Graphics().p("EguEASgMBGYgv3IVxWJMg7SAkng");
	var mask_1_graphics_58 = new cjs.Graphics().p("EguxATLMBHfgw4IWEWFMg8UAlWg");
	var mask_1_graphics_59 = new cjs.Graphics().p("EgvfAT2MBIogx4IWXWBMg9YAmEg");
	var mask_1_graphics_60 = new cjs.Graphics().p("EgwNAUgMBJxgy3IWqV9Mg+bAmyg");
	var mask_1_graphics_61 = new cjs.Graphics().p("Egw6AVLMBK5gz3IW8V5Mg/eAngg");
	var mask_1_graphics_62 = new cjs.Graphics().p("EgxnAV2MBMBg03IXOV0MhAhAoPg");
	var mask_1_graphics_63 = new cjs.Graphics().p("EgyVAWhMBNKg14IXhVxMhBkAo+g");
	var mask_1_graphics_64 = new cjs.Graphics().p("EgzCAXLMBOSg23IXzVtMhCoApsg");
	var mask_1_graphics_65 = new cjs.Graphics().p("EgzrAXhMBPJg3IIYOVSMhDqAp+g");
	var mask_1_graphics_66 = new cjs.Graphics().p("Eg0TAX3MBP/g3aIYoU5MhErAqOg");
	var mask_1_graphics_67 = new cjs.Graphics().p("Eg08AYMMBQ3g3rIZCUgMhFuAqfg");
	var mask_1_graphics_68 = new cjs.Graphics().p("Eg1lAYiMBRtg39IZeUGMhGwAqxg");
	var mask_1_graphics_69 = new cjs.Graphics().p("Eg2gAYsMBTig30IZfT1MhIRAqcg");
	var mask_1_graphics_70 = new cjs.Graphics().p("Eg3cAY2MBVZg3sIZgTlMhJyAqIg");
	var mask_1_graphics_71 = new cjs.Graphics().p("Eg3qAaDMBVcg6HIZ5T6MhJjAsPg");
	var mask_1_graphics_72 = new cjs.Graphics().p("Eg33AbQMBVfg8iIaQUQMhJUAuVg");
	var mask_1_graphics_73 = new cjs.Graphics().p("Eg4ZAcDMBWZg97IaaUYMhJzAvZg");
	var mask_1_graphics_74 = new cjs.Graphics().p("Eg47Ac2MBXTg/UIakUgMhKRAwdg");
	var mask_1_graphics_75 = new cjs.Graphics().p("Eg5cAdpMBYMhAtIatUoMhKwAxhg");
	var mask_1_graphics_76 = new cjs.Graphics().p("Eg5+AedMBZGhCHIa3UwMhLPAylg");
	var mask_1_graphics_77 = new cjs.Graphics().p("Eg6fAfQMBZ/hDgIbAU4MhLtAzpg");
	var mask_1_graphics_78 = new cjs.Graphics().p("Eg7BAgDMBa5hE4IbKU/MhMLA0sg");
	var mask_1_graphics_79 = new cjs.Graphics().p("Eg7iAg2MBbyhGSIbTVHMhMpA1yg");
	var mask_1_graphics_80 = new cjs.Graphics().p("Eg8EAhpMBcshHqIbdVOMhNJA21g");
	var mask_1_graphics_81 = new cjs.Graphics().p("Eg8mAicMBdmhJEIbmVYMhNnA35g");
	var mask_1_graphics_82 = new cjs.Graphics().p("Eg9HAjPMBefhKcIbwVeMhOGA49g");
	var mask_1_graphics_83 = new cjs.Graphics().p("Eg9uAj9MBfdhLpIcAVhMhO4A54g");
	var mask_1_graphics_84 = new cjs.Graphics().p("Eg+VAkrMBgchM2IcPVlMhPqA6xg");
	var mask_1_graphics_85 = new cjs.Graphics().p("Eg+8AlaMBhahODIcfVmMhQcA7tg");
	var mask_1_graphics_86 = new cjs.Graphics().p("Eg/jAmIMBiZhPQIcuVpMhROA8ng");
	var mask_1_graphics_87 = new cjs.Graphics().p("EhAJAm2MBjWhQcIc9VsMhSAA9hg");
	var mask_1_graphics_88 = new cjs.Graphics().p("EhAxAnkMBkVhRpIdOVvMhSyA+cg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EhBXAoTMBlThS2IddVwMhTlA/Xg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EhB+ApBMBmRhUDIdsV0MhUWBARg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EhClApvMBnQhVPId7V2MhVIBBLg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EhDMAqdMBoOhWcIeLV5MhV6BCGg");
	var mask_1_graphics_93 = new cjs.Graphics().p("EhDzArLMBpMhXpIebV8MhWsBDBg");
	var mask_1_graphics_94 = new cjs.Graphics().p("EhEaAr5MBqLhY1IeqV+MhXfBD7g");
	var mask_1_graphics_95 = new cjs.Graphics().p("EhFBAsnMBrJhaBIe6WAMhYQBE1g");
	var mask_1_graphics_96 = new cjs.Graphics().p("EhFoAtVMBsIhbOIfJWDMhZCBFwg");
	var mask_1_graphics_97 = new cjs.Graphics().p("EhGPAuEMBtGhccIfZWGMhZ1BGrg");
	var mask_1_graphics_98 = new cjs.Graphics().p("EhG1AuyMBuEhdoIfnWIMhamBHlg");
	var mask_1_graphics_99 = new cjs.Graphics().p("EAnmgvaIf4WLMhbZBIfMgziAALg");
	var mask_1_graphics_100 = new cjs.Graphics().p("EAn+gwAMAgHAWNMhcLBJaMgz9AAag");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:747.7,y:53.9}).wait(1).to({graphics:mask_1_graphics_1,x:741.4,y:56.1}).wait(1).to({graphics:mask_1_graphics_2,x:735.1,y:58.3}).wait(1).to({graphics:mask_1_graphics_3,x:728.7,y:60.5}).wait(1).to({graphics:mask_1_graphics_4,x:722.4,y:62.6}).wait(1).to({graphics:mask_1_graphics_5,x:716.1,y:64.8}).wait(1).to({graphics:mask_1_graphics_6,x:709.7,y:67}).wait(1).to({graphics:mask_1_graphics_7,x:704.8,y:68.8}).wait(1).to({graphics:mask_1_graphics_8,x:699.8,y:70.6}).wait(1).to({graphics:mask_1_graphics_9,x:694.9,y:72.4}).wait(1).to({graphics:mask_1_graphics_10,x:689.9,y:74.2}).wait(1).to({graphics:mask_1_graphics_11,x:685,y:76.1}).wait(1).to({graphics:mask_1_graphics_12,x:680,y:77.9}).wait(1).to({graphics:mask_1_graphics_13,x:675,y:79.7}).wait(1).to({graphics:mask_1_graphics_14,x:670.1,y:81.5}).wait(1).to({graphics:mask_1_graphics_15,x:665.1,y:83.3}).wait(1).to({graphics:mask_1_graphics_16,x:660.2,y:85.1}).wait(1).to({graphics:mask_1_graphics_17,x:655.2,y:86.9}).wait(1).to({graphics:mask_1_graphics_18,x:650.3,y:88.7}).wait(1).to({graphics:mask_1_graphics_19,x:645.3,y:90.5}).wait(1).to({graphics:mask_1_graphics_20,x:640.3,y:92.3}).wait(1).to({graphics:mask_1_graphics_21,x:635.4,y:94.1}).wait(1).to({graphics:mask_1_graphics_22,x:630.4,y:95.9}).wait(1).to({graphics:mask_1_graphics_23,x:625.5,y:97.8}).wait(1).to({graphics:mask_1_graphics_24,x:620.5,y:99.6}).wait(1).to({graphics:mask_1_graphics_25,x:615.5,y:101.4}).wait(1).to({graphics:mask_1_graphics_26,x:610.6,y:103.2}).wait(1).to({graphics:mask_1_graphics_27,x:605.6,y:105}).wait(1).to({graphics:mask_1_graphics_28,x:600.7,y:106.8}).wait(1).to({graphics:mask_1_graphics_29,x:595.7,y:108.6}).wait(1).to({graphics:mask_1_graphics_30,x:590.8,y:110.4}).wait(1).to({graphics:mask_1_graphics_31,x:586.4,y:112.2}).wait(1).to({graphics:mask_1_graphics_32,x:582,y:114}).wait(1).to({graphics:mask_1_graphics_33,x:577.6,y:115.8}).wait(1).to({graphics:mask_1_graphics_34,x:573.3,y:117.5}).wait(1).to({graphics:mask_1_graphics_35,x:568.9,y:119.3}).wait(1).to({graphics:mask_1_graphics_36,x:564.5,y:121.1}).wait(1).to({graphics:mask_1_graphics_37,x:560.2,y:122.9}).wait(1).to({graphics:mask_1_graphics_38,x:555.8,y:124.7}).wait(1).to({graphics:mask_1_graphics_39,x:551.4,y:126.5}).wait(1).to({graphics:mask_1_graphics_40,x:547,y:128.3}).wait(1).to({graphics:mask_1_graphics_41,x:382.6,y:130}).wait(1).to({graphics:mask_1_graphics_42,x:538.3,y:131.8}).wait(1).to({graphics:mask_1_graphics_43,x:533.9,y:133.6}).wait(1).to({graphics:mask_1_graphics_44,x:529.5,y:135.4}).wait(1).to({graphics:mask_1_graphics_45,x:525.2,y:137.2}).wait(1).to({graphics:mask_1_graphics_46,x:520.8,y:139}).wait(1).to({graphics:mask_1_graphics_47,x:516.5,y:140.7}).wait(1).to({graphics:mask_1_graphics_48,x:512.1,y:142.5}).wait(1).to({graphics:mask_1_graphics_49,x:507.7,y:144.3}).wait(1).to({graphics:mask_1_graphics_50,x:503.3,y:146.1}).wait(1).to({graphics:mask_1_graphics_51,x:498.9,y:147.9}).wait(1).to({graphics:mask_1_graphics_52,x:494.6,y:149.7}).wait(1).to({graphics:mask_1_graphics_53,x:383.5,y:151.4}).wait(1).to({graphics:mask_1_graphics_54,x:486.4,y:152.7}).wait(1).to({graphics:mask_1_graphics_55,x:482.5,y:153.9}).wait(1).to({graphics:mask_1_graphics_56,x:478.6,y:155.2}).wait(1).to({graphics:mask_1_graphics_57,x:474.8,y:156.4}).wait(1).to({graphics:mask_1_graphics_58,x:470.9,y:157.7}).wait(1).to({graphics:mask_1_graphics_59,x:467,y:158.9}).wait(1).to({graphics:mask_1_graphics_60,x:463.2,y:160.2}).wait(1).to({graphics:mask_1_graphics_61,x:459.3,y:161.4}).wait(1).to({graphics:mask_1_graphics_62,x:455.4,y:162.6}).wait(1).to({graphics:mask_1_graphics_63,x:451.6,y:163.9}).wait(1).to({graphics:mask_1_graphics_64,x:447.7,y:165.1}).wait(1).to({graphics:mask_1_graphics_65,x:443.5,y:165.8}).wait(1).to({graphics:mask_1_graphics_66,x:439.3,y:166.4}).wait(1).to({graphics:mask_1_graphics_67,x:435.1,y:167}).wait(1).to({graphics:mask_1_graphics_68,x:430.9,y:167.6}).wait(1).to({graphics:mask_1_graphics_69,x:429.7,y:169.7}).wait(1).to({graphics:mask_1_graphics_70,x:428.5,y:171.8}).wait(1).to({graphics:mask_1_graphics_71,x:420.5,y:174.1}).wait(1).to({graphics:mask_1_graphics_72,x:412.5,y:176.5}).wait(1).to({graphics:mask_1_graphics_73,x:407.6,y:179.1}).wait(1).to({graphics:mask_1_graphics_74,x:402.7,y:181.8}).wait(1).to({graphics:mask_1_graphics_75,x:397.8,y:184.5}).wait(1).to({graphics:mask_1_graphics_76,x:392.9,y:187.1}).wait(1).to({graphics:mask_1_graphics_77,x:388,y:189.8}).wait(1).to({graphics:mask_1_graphics_78,x:383,y:192.5}).wait(1).to({graphics:mask_1_graphics_79,x:378.1,y:195.2}).wait(1).to({graphics:mask_1_graphics_80,x:373.2,y:197.8}).wait(1).to({graphics:mask_1_graphics_81,x:368.3,y:200.5}).wait(1).to({graphics:mask_1_graphics_82,x:363.4,y:203.2}).wait(1).to({graphics:mask_1_graphics_83,x:359,y:205}).wait(1).to({graphics:mask_1_graphics_84,x:354.7,y:206.8}).wait(1).to({graphics:mask_1_graphics_85,x:350.3,y:208.5}).wait(1).to({graphics:mask_1_graphics_86,x:345.9,y:210.3}).wait(1).to({graphics:mask_1_graphics_87,x:341.6,y:212.1}).wait(1).to({graphics:mask_1_graphics_88,x:337.2,y:213.9}).wait(1).to({graphics:mask_1_graphics_89,x:332.8,y:215.7}).wait(1).to({graphics:mask_1_graphics_90,x:328.4,y:217.4}).wait(1).to({graphics:mask_1_graphics_91,x:324.1,y:219.2}).wait(1).to({graphics:mask_1_graphics_92,x:319.7,y:221}).wait(1).to({graphics:mask_1_graphics_93,x:315.3,y:222.8}).wait(1).to({graphics:mask_1_graphics_94,x:311,y:224.6}).wait(1).to({graphics:mask_1_graphics_95,x:306.6,y:226.4}).wait(1).to({graphics:mask_1_graphics_96,x:302.2,y:228.2}).wait(1).to({graphics:mask_1_graphics_97,x:297.8,y:229.9}).wait(1).to({graphics:mask_1_graphics_98,x:293.5,y:231.7}).wait(1).to({graphics:mask_1_graphics_99,x:289.1,y:234}).wait(1).to({graphics:mask_1_graphics_100,x:284.7,y:236.6}).wait(1));

	// Camada 5
	this.instance_3 = new lib.traçado3("synched",0);
	this.instance_3.setTransform(369,283,1,1,0,0,0,369,261);

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(101));

	// Camada 8 Cópia 2
	this.instance_4 = new lib.Seta();
	this.instance_4.setTransform(588.1,36.8,0.996,0.996,-33.9,0,0,20.4,11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:16.4,regY:14.9,scaleX:1,scaleY:1,rotation:-33.4,x:579.9,y:45.9},0).wait(1).to({rotation:-32.9,x:573.3,y:50.2},0).wait(1).to({rotation:-32.3,x:566.7,y:54.5},0).wait(1).to({rotation:-31.8,x:560.1,y:58.8},0).wait(1).to({rotation:-31.2,x:553.5,y:63},0).wait(1).to({rotation:-30.7,x:546.9,y:67.3},0).wait(1).to({rotation:-30.5,x:540.9,y:70.9},0).wait(1).to({rotation:-30.4,x:534.9,y:74.3},0).wait(1).to({rotation:-30.3,x:528.9,y:77.8},0).wait(1).to({rotation:-30.2,x:522.8,y:81.1},0).wait(1).to({rotation:-30.1,x:516.7,y:84.4},0).wait(1).to({rotation:-30,x:510.6,y:87.7},0).wait(1).to({rotation:-29.9,x:504.5,y:91},0).wait(1).to({rotation:-29.8,x:498.4,y:94.3},0).wait(1).to({rotation:-29.6,x:492.2,y:97.5},0).wait(1).to({rotation:-29.5,x:486.1,y:100.8},0).wait(1).to({rotation:-29.4,x:480,y:103.9},0).wait(1).to({rotation:-29.3,x:473.8,y:107.1},0).wait(1).to({rotation:-29.2,x:467.7,y:110.3},0).wait(1).to({rotation:-29.1,x:461.5,y:113.5},0).wait(1).to({rotation:-29,x:455.3,y:116.7},0).wait(1).to({rotation:-28.9,x:449.2,y:119.9},0).wait(1).to({rotation:-28.7,x:443,y:123.1},0).wait(1).to({rotation:-28.6,x:436.8,y:126.2},0).wait(1).to({rotation:-28.5,x:430.7,y:129.4},0).wait(1).to({rotation:-28.4,x:424.5,y:132.5},0).wait(1).to({rotation:-28.3,x:418.3,y:135.7},0).wait(1).to({rotation:-28.2,x:412.1,y:138.8},0).wait(1).to({rotation:-28.1,x:406,y:142},0).wait(1).to({rotation:-28,x:399.8,y:145.1},0).wait(1).to({rotation:-27.9,x:393.6,y:148.2},0).wait(1).to({rotation:-27.7,x:387.4,y:151.4},0).wait(1).to({rotation:-27.6,x:381.2,y:154.5},0).wait(1).to({rotation:-27.5,x:375,y:157.6},0).wait(1).to({rotation:-27.4,x:368.9,y:160.7},0).wait(1).to({rotation:-27.3,x:362.6,y:163.8},0).wait(1).to({rotation:-27.2,x:356.5,y:167},0).wait(1).to({rotation:-27.1,x:350.2,y:170.1},0).wait(1).to({rotation:-27,x:344.1,y:173.2},0).wait(1).to({rotation:-26.8,x:337.8,y:176.2},0).wait(1).to({rotation:-26.7,x:331.6,y:179.4},0).wait(1).to({rotation:-27.3,x:322.2,y:183.8},0).wait(1).to({rotation:-27.8,x:312.9,y:188.5},0).wait(1).to({rotation:-28.4,x:303.5,y:193.3},0).wait(1).to({rotation:-28.9,x:294.3,y:198.1},0).wait(1).to({rotation:-29.4,x:285,y:203},0).wait(1).to({rotation:-30,x:275.8,y:207.9},0).wait(1).to({rotation:-30.5,x:266.6,y:212.9},0).wait(1).to({rotation:-31.1,x:257.5,y:218},0).wait(1).to({rotation:-31.6,x:248.3,y:223},0).wait(1).to({rotation:-32.2,x:239.2,y:228.2},0).wait(1).to({rotation:-32.7,x:230.1,y:233.3},0).wait(1).to({rotation:-33.3,x:221,y:238.6},0).wait(1).to({rotation:-34,x:213,y:243.2},0).wait(1).to({rotation:-34.8,x:205.2,y:247.9},0).wait(1).to({rotation:-35.5,x:197.4,y:252.8},0).wait(1).to({rotation:-36.3,x:189.7,y:257.9},0).wait(1).to({rotation:-37,x:182.2,y:263.2},0).wait(1).to({rotation:-37.8,x:175,y:269},0).wait(1).to({rotation:-38.5,x:167.9,y:274.9},0).wait(1).to({rotation:-39.4,x:162.6,y:279.4},0).wait(1).to({rotation:-40.3,x:157.2,y:283.9},0).wait(1).to({rotation:-41.1,x:151.8,y:288.3},0).wait(1).to({rotation:-42,x:146.3,y:292.7},0).wait(1).to({rotation:-42.9,x:140.8,y:297},0).wait(1).to({rotation:-43.7,x:134.9,y:300.7},0).wait(1).to({rotation:-46,x:127.4,y:307.7},0).wait(1).to({rotation:-48.3,x:120.2,y:315.2},0).wait(1).to({rotation:-50.6,x:113.3,y:322.9},0).wait(1).to({rotation:-52.8,x:106.6,y:330.8},0).wait(1).to({rotation:-55.1,x:100.1,y:338.9},0).wait(1).to({rotation:-57.4,x:94,y:347.1},0).wait(1).to({rotation:-59.7,x:88.4,y:355.9},0).wait(1).to({rotation:-61.9,x:83.5,y:365},0).wait(1).to({rotation:-66.1,x:79.3,y:374.1},0).wait(1).to({rotation:-70.2,x:74.8,y:382.9},0).wait(1).to({rotation:-74.3,x:70.3,y:391.8},0).wait(1).to({rotation:-78.4,x:66.3,y:400.9},0).wait(1).to({rotation:-82.5,x:63.6,y:410.5},0).wait(1).to({rotation:-86.6,x:62,y:420.3},0).wait(1).to({rotation:-90.7,x:61.4,y:430.3},0).wait(1).to({rotation:-94.8,x:61.5,y:440.3},0).wait(1).to({rotation:-96.1,x:61.6,y:445.4},0).wait(1).to({rotation:-97.3,x:61.9,y:450.4},0).wait(1).to({rotation:-98.6,x:62.2,y:455.5},0).wait(1).to({rotation:-99.8,x:62.6,y:460.5},0).wait(1).to({rotation:-101.1,x:63.2,y:465.6},0).wait(1).to({rotation:-102.3,x:63.8,y:470.6},0).wait(1).to({rotation:-103.6,x:64.6,y:475.6},0).wait(1).to({rotation:-104.8,x:65.5,y:480.7},0).wait(1).to({rotation:-106.1,x:66.5,y:485.6},0).wait(1).to({rotation:-107.3,x:67.7,y:490.5},0).wait(1).to({rotation:-108.6,x:68.9,y:495.4},0).wait(1).to({rotation:-109.8,x:70.3,y:500.3},0).wait(1).to({rotation:-111.1,x:71.8,y:505.1},0).wait(1).to({rotation:-112.3,x:73.6,y:509.9},0).wait(1).to({rotation:-113.6,x:75.5,y:514.6},0).wait(1).to({rotation:-114.8,x:77.6,y:519.2},0).wait(1).to({rotation:-116.1,x:79.8,y:523.7},0).wait(1).to({rotation:-117.3,x:82.5,y:528},0).wait(1));

	// Camada 7 Cópia 2 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_0 = new cjs.Graphics().p("AszryIINklIRacJIoMEmg");
	var mask_2_graphics_1 = new cjs.Graphics().p("AtSrOII+lZIRncIIo7FHg");
	var mask_2_graphics_2 = new cjs.Graphics().p("AtzqqIJxmOIR2cJIptFog");
	var mask_2_graphics_3 = new cjs.Graphics().p("AuSqHIKinBISDcIIqbGJg");
	var mask_2_graphics_4 = new cjs.Graphics().p("AuypkILVn0ISQcIIrLGpg");
	var mask_2_graphics_5 = new cjs.Graphics().p("AvSpAIMHopISecJIr8HKg");
	var mask_2_graphics_6 = new cjs.Graphics().p("AvyocIM5pdISscJIssHqg");
	var mask_2_graphics_7 = new cjs.Graphics().p("AwSn4INrqSIS6cKItcILg");
	var mask_2_graphics_8 = new cjs.Graphics().p("AwynVIOdrFITIcKIuMIrg");
	var mask_2_graphics_9 = new cjs.Graphics().p("AxSmxIPQr6ITVcKIu8JNg");
	var mask_2_graphics_10 = new cjs.Graphics().p("AxymNIQCsuITjcKIvsJtg");
	var mask_2_graphics_11 = new cjs.Graphics().p("AySlqIQ0thITxcJIwcKOg");
	var mask_2_graphics_12 = new cjs.Graphics().p("AyylGIRnuWIT+cKIxMKvg");
	var mask_2_graphics_13 = new cjs.Graphics().p("AzSkiISZvKIUMcKIx8LPg");
	var mask_2_graphics_14 = new cjs.Graphics().p("Azyj/ITLv+IUacLIysLwg");
	var mask_2_graphics_15 = new cjs.Graphics().p("A0SjbIT+wyIUncKIzdMRg");
	var mask_2_graphics_16 = new cjs.Graphics().p("A0yi3IUwxmIU1cKI0NMxg");
	var mask_2_graphics_17 = new cjs.Graphics().p("A1SiUIVgyaIVFcLI08NSg");
	var mask_2_graphics_18 = new cjs.Graphics().p("A1yhwIWSzOIVTcLI1tNyg");
	var mask_2_graphics_19 = new cjs.Graphics().p("A2ShNIXE0CIVhcLI2bOTg");
	var mask_2_graphics_20 = new cjs.Graphics().p("A2ygpIX202IVvcLI3LO0g");
	var mask_2_graphics_21 = new cjs.Graphics().p("A3SgFIYp1qIV8cKI37PVg");
	var mask_2_graphics_22 = new cjs.Graphics().p("A3yAcIZb2cIWKcLI4rP2g");
	var mask_2_graphics_23 = new cjs.Graphics().p("A4SBAIaN3QIWYcLI5bQWg");
	var mask_2_graphics_24 = new cjs.Graphics().p("A4yBkIa/4FIWmcMI6MQ3g");
	var mask_2_graphics_25 = new cjs.Graphics().p("A5SCHIby44IWzcLI68RYg");
	var mask_2_graphics_26 = new cjs.Graphics().p("A5yCrIck5sIXBcMI7sR4g");
	var mask_2_graphics_27 = new cjs.Graphics().p("A6RDPIdW6hIXOcMI8cSZg");
	var mask_2_graphics_28 = new cjs.Graphics().p("A6yDyIeJ7UIXbcMI9LS5g");
	var mask_2_graphics_29 = new cjs.Graphics().p("A7REWIe68JIXpcMI97Tbg");
	var mask_2_graphics_30 = new cjs.Graphics().p("A7yE6Ift89IX4cMI+tT7g");
	var mask_2_graphics_31 = new cjs.Graphics().p("A8SFdMAgfgdwIYGcLI/cUdg");
	var mask_2_graphics_32 = new cjs.Graphics().p("A8yGBMAhRgelIYUcMMggMAU9g");
	var mask_2_graphics_33 = new cjs.Graphics().p("A9RGlMAiDgfaIYgcNMgg7AVeg");
	var mask_2_graphics_34 = new cjs.Graphics().p("A9yHIMAi2ggNIYvcNMghtAV+g");
	var mask_2_graphics_35 = new cjs.Graphics().p("A+RHsMAjnghBIY9cMMgidAWfg");
	var mask_2_graphics_36 = new cjs.Graphics().p("A+yIQMAkagh1IZKcNMgjLAW+g");
	var mask_2_graphics_37 = new cjs.Graphics().p("A/RIzMAlLgipIZZcNMgj9AXgg");
	var mask_2_graphics_38 = new cjs.Graphics().p("A/yJXMAl/gjdIZmcNMgktAYAg");
	var mask_2_graphics_39 = new cjs.Graphics().p("EggRAJ6MAmwgkRIZzcNMglcAYig");
	var mask_2_graphics_40 = new cjs.Graphics().p("EggxAKeMAnjglFIaAcNMgmMAZCg");
	var mask_2_graphics_41 = new cjs.Graphics().p("EghRALCMAoVgl6IaOcOMgm8AZjg");
	var mask_2_graphics_42 = new cjs.Graphics().p("EghyALdMApEgmgIahcMMgnzAZ7g");
	var mask_2_graphics_43 = new cjs.Graphics().p("EgiSAL4MApygnGIazcLMgopAaSg");
	var mask_2_graphics_44 = new cjs.Graphics().p("EgiyAMTMAqggntIbFcKMgpeAarg");
	var mask_2_graphics_45 = new cjs.Graphics().p("EgjTAMuMArQgoTIbXcJMgqVAbCg");
	var mask_2_graphics_46 = new cjs.Graphics().p("EgjzANJMAr+go5IbpcHMgrLAbag");
	var mask_2_graphics_47 = new cjs.Graphics().p("EgkUANkMAstgpgIb8cGMgsBAbzg");
	var mask_2_graphics_48 = new cjs.Graphics().p("EglHAORMAuSgqnIb9b9MgtEAcwg");
	var mask_2_graphics_49 = new cjs.Graphics().p("Egl7AO9MAv3grvIcAbzMguIAdyg");
	var mask_2_graphics_50 = new cjs.Graphics().p("EgmuAPqMAxbgs2IcCbnMgvMAeyg");
	var mask_2_graphics_51 = new cjs.Graphics().p("EgnhAQWMAy/gt+IcEbeMgwPAfzg");
	var mask_2_graphics_52 = new cjs.Graphics().p("EgoVARDMA0kgvGIcGbTMgxRAg0g");
	var mask_2_graphics_53 = new cjs.Graphics().p("EgpIARvMA2IgwNIcJbIMgyVAh1g");
	var mask_2_graphics_54 = new cjs.Graphics().p("Egp7AScMA3tgxVIcKa+MgzYAi1g");
	var mask_2_graphics_55 = new cjs.Graphics().p("EgqvATIMA5SgycIcMazMg0cAj2g");
	var mask_2_graphics_56 = new cjs.Graphics().p("EgriAT1MA62gzkIcPaoMg1gAk3g");
	var mask_2_graphics_57 = new cjs.Graphics().p("EgsHAURMA7zg0PIccakMg2aAlag");
	var mask_2_graphics_58 = new cjs.Graphics().p("EgssAUuMA8vg08IcqafMg3UAl+g");
	var mask_2_graphics_59 = new cjs.Graphics().p("EgtRAVKMA9sg1nIc4aaMg4PAmhg");
	var mask_2_graphics_60 = new cjs.Graphics().p("Egt3AVnMA+qg2UIdFaWMg5JAnFg");
	var mask_2_graphics_61 = new cjs.Graphics().p("EgucAWDMA/ng2/IdSaRMg6DAnog");
	var mask_2_graphics_62 = new cjs.Graphics().p("EgvBAWgMBAkg3sIdfaNMg6+AoMg");
	var mask_2_graphics_63 = new cjs.Graphics().p("EgvmAW8MBBgg4XIdtaIMg74Aovg");
	var mask_2_graphics_64 = new cjs.Graphics().p("EgwLAXYMBCdg5CId6aDMg8yApSg");
	var mask_2_graphics_65 = new cjs.Graphics().p("EgwwAXWMBDHg4+IeaZ/Mg+BApSg");
	var mask_2_graphics_66 = new cjs.Graphics().p("EgxWAXTMBDyg43Ie7Z6Mg/QApPg");
	var mask_2_graphics_67 = new cjs.Graphics().p("Egx6AXQMBEcg4xIfZZ2MhAcApNg");
	var mask_2_graphics_68 = new cjs.Graphics().p("EgygAXNMBFGg4rIf7ZyMhBsApLg");
	var mask_2_graphics_69 = new cjs.Graphics().p("EgzjAYQMBHfg6XIfoZhMhCwAqug");
	var mask_2_graphics_70 = new cjs.Graphics().p("Eg0nAZSMBJ4g8DIfXZTMhD0AsQg");
	var mask_2_graphics_71 = new cjs.Graphics().p("Eg1qAaTMBMQg9tIfFZDMhE4Atyg");
	var mask_2_graphics_72 = new cjs.Graphics().p("Eg2uAbVMBOqg/ZIezY0MhF9AvVg");
	var mask_2_graphics_73 = new cjs.Graphics().p("Eg3xAcXMBRBhBEIeiYlMhHAAw2g");
	var mask_2_graphics_74 = new cjs.Graphics().p("Eg41AdZMBTbhCwIeQYWMhIFAyZg");
	var mask_2_graphics_75 = new cjs.Graphics().p("Eg5MAeNMBT8hELIedYnMhI1AzWg");
	var mask_2_graphics_76 = new cjs.Graphics().p("Eg5kAfBMBUehFmIerY4MhJmA0Tg");
	var mask_2_graphics_77 = new cjs.Graphics().p("Eg58Af2MBVAhHCIe4ZJMhKWA1Qg");
	var mask_2_graphics_78 = new cjs.Graphics().p("Eg6TAgqMBVghIcIfHZYMhLHA2Og");
	var mask_2_graphics_79 = new cjs.Graphics().p("Eg6rAheMBWDhJ3IfUZqMhL4A3Jg");
	var mask_2_graphics_80 = new cjs.Graphics().p("Eg7DAiSMBWkhLSIfjZ7MhMpA4Gg");
	var mask_2_graphics_81 = new cjs.Graphics().p("Eg7aAjHMBXFhMuIfwaMMhNaA5Dg");
	var mask_2_graphics_82 = new cjs.Graphics().p("Eg7yAj6MBXnhOIIf+adMhOKA6Ag");
	var mask_2_graphics_83 = new cjs.Graphics().p("Eg8QAkmMBYchPIMAgFAaOMhOiA63g");
	var mask_2_graphics_84 = new cjs.Graphics().p("Eg8wAlSMBZRhQIMAgQAZ/MhO7A7ug");
	var mask_2_graphics_85 = new cjs.Graphics().p("Eg9OAl+MBaGhRIMAgXAZwMhPSA8lg");
	var mask_2_graphics_86 = new cjs.Graphics().p("Eg9sAmqMBa6hSHMAgfAZgMhPpA9bg");
	var mask_2_graphics_87 = new cjs.Graphics().p("Eg+LAnVMBbwhTHMAgnAZSMhQCA+Sg");
	var mask_2_graphics_88 = new cjs.Graphics().p("Eg+qAoBMBclhUGMAgwAZCMhQaA/Jg");
	var mask_2_graphics_89 = new cjs.Graphics().p("Eg/JAotMBdbhVGMAg4AYzMhQzBAAg");
	var mask_2_graphics_90 = new cjs.Graphics().p("Eg/nApZMBePhWGMAhAAYkMhRKBA3g");
	var mask_2_graphics_91 = new cjs.Graphics().p("EhAGAqFMBfEhXGMAhJAYWMhRiBBtg");
	var mask_2_graphics_92 = new cjs.Graphics().p("EhAlAqwMBf5hYFMAhSAYHMhR7BCkg");
	var mask_2_graphics_93 = new cjs.Graphics().p("EhBDArcMBguhZEMAhZAX3MhSSBDbg");
	var mask_2_graphics_94 = new cjs.Graphics().p("EhBiAsIMBhjhaEMAhiAXoMhSqBERg");
	var mask_2_graphics_95 = new cjs.Graphics().p("EhCBAszMBiZhbDMAhpAXZMhTBBFIg");
	var mask_2_graphics_96 = new cjs.Graphics().p("EhCfAtfMBjNhcDMAhyAXKMhTaBF/g");
	var mask_2_graphics_97 = new cjs.Graphics().p("EhC+AuLMBkChdDMAh7AW7MhTyBG2g");
	var mask_2_graphics_98 = new cjs.Graphics().p("EhDcAu2MBk3heCMAiCAWsMhUJBHtg");
	var mask_2_graphics_99 = new cjs.Graphics().p("EAhxgvgMAiLAWcMhUhBIjMgzWAADg");
	var mask_2_graphics_100 = new cjs.Graphics().p("EAiHgwAMAiUAWNMhU6BJaMgz7AAag");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:mask_2_graphics_0,x:567.9,y:-44.2}).wait(1).to({graphics:mask_2_graphics_1,x:564.8,y:-41.8}).wait(1).to({graphics:mask_2_graphics_2,x:561.8,y:-39.4}).wait(1).to({graphics:mask_2_graphics_3,x:558.7,y:-37}).wait(1).to({graphics:mask_2_graphics_4,x:555.6,y:-34.6}).wait(1).to({graphics:mask_2_graphics_5,x:552.6,y:-32.2}).wait(1).to({graphics:mask_2_graphics_6,x:549.5,y:-29.8}).wait(1).to({graphics:mask_2_graphics_7,x:546.5,y:-27.4}).wait(1).to({graphics:mask_2_graphics_8,x:543.4,y:-25}).wait(1).to({graphics:mask_2_graphics_9,x:540.4,y:-22.6}).wait(1).to({graphics:mask_2_graphics_10,x:537.3,y:-20.2}).wait(1).to({graphics:mask_2_graphics_11,x:534.2,y:-17.8}).wait(1).to({graphics:mask_2_graphics_12,x:531.2,y:-15.4}).wait(1).to({graphics:mask_2_graphics_13,x:528.1,y:-13}).wait(1).to({graphics:mask_2_graphics_14,x:525.1,y:-10.6}).wait(1).to({graphics:mask_2_graphics_15,x:522,y:-8.1}).wait(1).to({graphics:mask_2_graphics_16,x:519,y:-5.8}).wait(1).to({graphics:mask_2_graphics_17,x:515.9,y:-3.4}).wait(1).to({graphics:mask_2_graphics_18,x:512.9,y:-1}).wait(1).to({graphics:mask_2_graphics_19,x:509.8,y:1.5}).wait(1).to({graphics:mask_2_graphics_20,x:506.8,y:3.9}).wait(1).to({graphics:mask_2_graphics_21,x:503.7,y:6.3}).wait(1).to({graphics:mask_2_graphics_22,x:500.6,y:8.7}).wait(1).to({graphics:mask_2_graphics_23,x:497.6,y:11.1}).wait(1).to({graphics:mask_2_graphics_24,x:494.5,y:13.5}).wait(1).to({graphics:mask_2_graphics_25,x:491.5,y:15.9}).wait(1).to({graphics:mask_2_graphics_26,x:488.4,y:18.3}).wait(1).to({graphics:mask_2_graphics_27,x:485.4,y:20.7}).wait(1).to({graphics:mask_2_graphics_28,x:482.3,y:23.1}).wait(1).to({graphics:mask_2_graphics_29,x:479.3,y:25.5}).wait(1).to({graphics:mask_2_graphics_30,x:476.2,y:27.9}).wait(1).to({graphics:mask_2_graphics_31,x:473.1,y:30.3}).wait(1).to({graphics:mask_2_graphics_32,x:470.1,y:32.7}).wait(1).to({graphics:mask_2_graphics_33,x:467,y:35.1}).wait(1).to({graphics:mask_2_graphics_34,x:464,y:37.5}).wait(1).to({graphics:mask_2_graphics_35,x:460.9,y:39.9}).wait(1).to({graphics:mask_2_graphics_36,x:457.9,y:42.3}).wait(1).to({graphics:mask_2_graphics_37,x:454.8,y:44.7}).wait(1).to({graphics:mask_2_graphics_38,x:451.8,y:47.1}).wait(1).to({graphics:mask_2_graphics_39,x:448.7,y:49.5}).wait(1).to({graphics:mask_2_graphics_40,x:445.6,y:51.9}).wait(1).to({graphics:mask_2_graphics_41,x:442.6,y:54.3}).wait(1).to({graphics:mask_2_graphics_42,x:439.5,y:56.2}).wait(1).to({graphics:mask_2_graphics_43,x:436.4,y:58.1}).wait(1).to({graphics:mask_2_graphics_44,x:433.3,y:60}).wait(1).to({graphics:mask_2_graphics_45,x:430.2,y:61.9}).wait(1).to({graphics:mask_2_graphics_46,x:427.1,y:63.8}).wait(1).to({graphics:mask_2_graphics_47,x:424,y:65.7}).wait(1).to({graphics:mask_2_graphics_48,x:419,y:69.2}).wait(1).to({graphics:mask_2_graphics_49,x:414,y:72.6}).wait(1).to({graphics:mask_2_graphics_50,x:409,y:76.1}).wait(1).to({graphics:mask_2_graphics_51,x:404,y:79.6}).wait(1).to({graphics:mask_2_graphics_52,x:399,y:83}).wait(1).to({graphics:mask_2_graphics_53,x:394,y:86.5}).wait(1).to({graphics:mask_2_graphics_54,x:389,y:90}).wait(1).to({graphics:mask_2_graphics_55,x:384.1,y:93.5}).wait(1).to({graphics:mask_2_graphics_56,x:379.1,y:96.9}).wait(1).to({graphics:mask_2_graphics_57,x:375.5,y:99.2}).wait(1).to({graphics:mask_2_graphics_58,x:371.9,y:101.5}).wait(1).to({graphics:mask_2_graphics_59,x:368.4,y:103.8}).wait(1).to({graphics:mask_2_graphics_60,x:364.8,y:106.1}).wait(1).to({graphics:mask_2_graphics_61,x:361.2,y:108.4}).wait(1).to({graphics:mask_2_graphics_62,x:357.6,y:110.8}).wait(1).to({graphics:mask_2_graphics_63,x:354.1,y:113.1}).wait(1).to({graphics:mask_2_graphics_64,x:350.5,y:115.3}).wait(1).to({graphics:mask_2_graphics_65,x:346.9,y:115.8}).wait(1).to({graphics:mask_2_graphics_66,x:343.4,y:116.3}).wait(1).to({graphics:mask_2_graphics_67,x:339.8,y:116.7}).wait(1).to({graphics:mask_2_graphics_68,x:336.2,y:117.1}).wait(1).to({graphics:mask_2_graphics_69,x:329.5,y:121.8}).wait(1).to({graphics:mask_2_graphics_70,x:322.9,y:126.5}).wait(1).to({graphics:mask_2_graphics_71,x:316.2,y:131.1}).wait(1).to({graphics:mask_2_graphics_72,x:309.6,y:135.8}).wait(1).to({graphics:mask_2_graphics_73,x:302.9,y:140.4}).wait(1).to({graphics:mask_2_graphics_74,x:296.3,y:145.1}).wait(1).to({graphics:mask_2_graphics_75,x:293.5,y:149.9}).wait(1).to({graphics:mask_2_graphics_76,x:290.8,y:154.8}).wait(1).to({graphics:mask_2_graphics_77,x:288.1,y:159.6}).wait(1).to({graphics:mask_2_graphics_78,x:285.4,y:164.5}).wait(1).to({graphics:mask_2_graphics_79,x:282.7,y:169.3}).wait(1).to({graphics:mask_2_graphics_80,x:280,y:174.2}).wait(1).to({graphics:mask_2_graphics_81,x:277.3,y:179}).wait(1).to({graphics:mask_2_graphics_82,x:274.6,y:183.9}).wait(1).to({graphics:mask_2_graphics_83,x:271,y:186.6}).wait(1).to({graphics:mask_2_graphics_84,x:267.4,y:189.4}).wait(1).to({graphics:mask_2_graphics_85,x:263.8,y:192.1}).wait(1).to({graphics:mask_2_graphics_86,x:260.2,y:194.9}).wait(1).to({graphics:mask_2_graphics_87,x:256.6,y:197.6}).wait(1).to({graphics:mask_2_graphics_88,x:253,y:200.3}).wait(1).to({graphics:mask_2_graphics_89,x:249.4,y:203.1}).wait(1).to({graphics:mask_2_graphics_90,x:245.8,y:205.8}).wait(1).to({graphics:mask_2_graphics_91,x:242.2,y:208.6}).wait(1).to({graphics:mask_2_graphics_92,x:238.6,y:211.3}).wait(1).to({graphics:mask_2_graphics_93,x:235,y:214.1}).wait(1).to({graphics:mask_2_graphics_94,x:231.4,y:216.8}).wait(1).to({graphics:mask_2_graphics_95,x:227.8,y:219.6}).wait(1).to({graphics:mask_2_graphics_96,x:224.2,y:222.3}).wait(1).to({graphics:mask_2_graphics_97,x:220.6,y:225}).wait(1).to({graphics:mask_2_graphics_98,x:217,y:227.8}).wait(1).to({graphics:mask_2_graphics_99,x:213.4,y:230.7}).wait(1).to({graphics:mask_2_graphics_100,x:209.8,y:234.6}).wait(1));

	// Camada 4
	this.instance_5 = new lib.traçado2("synched",0);
	this.instance_5.setTransform(369.1,281,1,1,0,0,0,369,261);

	this.instance_5.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(101));

	// Camada 8 Cópia 3
	this.instance_6 = new lib.Seta();
	this.instance_6.setTransform(290,126.8,0.995,0.995,-31.8,0,0,20.1,11.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({_off:false},0).wait(1).to({regX:16.4,regY:14.9,scaleX:1,scaleY:1,rotation:-33.3,x:276.8,y:138.9},0).wait(1).to({rotation:-34.7,x:265.1,y:146.5},0).wait(1).to({rotation:-36.1,x:253.5,y:154.3},0).wait(1).to({rotation:-37.4,x:241.9,y:162},0).wait(1).to({rotation:-38.8,x:230.4,y:169.8},0).wait(1).to({rotation:-40.2,x:218.9,y:177.7},0).wait(1).to({rotation:-41.6,x:207.5,y:185.6},0).wait(1).to({rotation:-43,x:196.1,y:193.7},0).wait(1).to({rotation:-44.4,x:184.9,y:201.9},0).wait(1).to({rotation:-45.8,x:173.8,y:210.4},0).wait(1).to({rotation:-47.2,x:163.2,y:219.4},0).wait(1).to({rotation:-47.1,x:154.5,y:227.5},0).wait(1).to({rotation:-46.9,x:145.6,y:235.4},0).wait(1).to({rotation:-46.7,x:136.3,y:242.9},0).wait(1).to({rotation:-46.6,x:126.9,y:250.2},0).wait(1).to({rotation:-46.4,x:117.6,y:257.7},0).wait(1).to({rotation:-46.3,x:110.3,y:267},0).wait(1).to({rotation:-47.9,x:103.9,y:276.3},0).wait(1).to({rotation:-49.5,x:96.9,y:285.2},0).wait(1).to({rotation:-51.1,x:89.9,y:294},0).wait(1).to({rotation:-52.7,x:82.9,y:302.8},0).wait(1).to({rotation:-54.4,x:75.9,y:311.7},0).wait(1).to({rotation:-56,x:69.3,y:320.7},0).wait(1).to({rotation:-57.6,x:62.8,y:330},0).wait(1).to({rotation:-59.2,x:56.7,y:339.4},0).wait(1).to({rotation:-63.8,x:51.4,y:348.8},0).wait(1).to({rotation:-68.3,x:46.6,y:358.5},0).wait(1).to({rotation:-72.9,x:42.2,y:368.3},0).wait(1).to({rotation:-77.5,x:38.2,y:378.2},0).wait(1).to({rotation:-82,x:34.6,y:388.3},0).wait(1).to({rotation:-86.6,x:31.6,y:398.7},0).wait(1).to({rotation:-91.1,x:29.2,y:409.1},0).wait(1).to({rotation:-95.7,x:27.6,y:419.7},0).wait(1).to({rotation:-100.3,x:27.1,y:430.4},0).wait(1).to({rotation:-104.8,x:28.2,y:441.1},0).wait(1).to({rotation:-106.5,x:29.4,y:446.6},0).wait(1).to({rotation:-108.1,x:30.7,y:452.1},0).wait(1).to({rotation:-109.7,x:32,y:457.6},0).wait(1).to({rotation:-111.3,x:33.4,y:463.1},0).wait(1).to({rotation:-113,x:34.8,y:468.5},0).wait(1).to({rotation:-114.6,x:36.5,y:473.9},0).wait(1).to({rotation:-116.2,x:38.2,y:479.3},0).wait(1).to({rotation:-117.9,x:40,y:484.6},0).wait(1).to({rotation:-119.5,x:42,y:489.9},0).wait(1).to({rotation:-121.1,x:44.2,y:495.1},0).wait(1).to({rotation:-122.7,x:46.6,y:500.2},0).wait(1).to({rotation:-124.4,x:49.2,y:505.1},0).wait(1).to({rotation:-126,x:52.1,y:510},0).wait(1).to({rotation:-127.6,x:55.2,y:514.6},0).wait(1).to({rotation:-129.3,x:58.7,y:519.1},0).wait(1).to({rotation:-130.9,x:62.4,y:523.4},0).wait(1).to({rotation:-132.5,x:66.3,y:527.4},0).wait(1).to({rotation:-134.1,x:70.3,y:531.5},0).wait(1));

	// Camada 7 Cópia 3 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_47 = new cjs.Graphics().p("AszryIIMklIRacJIoLEmg");
	var mask_3_graphics_48 = new cjs.Graphics().p("AtqrWIJrleIRpbGIpdGjg");
	var mask_3_graphics_49 = new cjs.Graphics().p("Auhq6ILKmYIR5aFIquIgg");
	var mask_3_graphics_50 = new cjs.Graphics().p("AvYqfIMpnQISIZDIsAKcg");
	var mask_3_graphics_51 = new cjs.Graphics().p("AwPqDIOHoKISYYBItRMag");
	var mask_3_graphics_52 = new cjs.Graphics().p("AxGpnIPmpDISnW/IuiOWg");
	var mask_3_graphics_53 = new cjs.Graphics().p("Ax9pMIRFp8IS3V9Iv1QUg");
	var mask_3_graphics_54 = new cjs.Graphics().p("Ay0owISkq1ITGU7IxGSQg");
	var mask_3_graphics_55 = new cjs.Graphics().p("AzsoUIUBrvITYT8IyXULg");
	var mask_3_graphics_56 = new cjs.Graphics().p("A0jn5IVgsnITnS5IzoWIg");
	var mask_3_graphics_57 = new cjs.Graphics().p("A1andIW/thIT2R4I05YFg");
	var mask_3_graphics_58 = new cjs.Graphics().p("A2RnCIYeuZIUFQ2I2LaBg");
	var mask_3_graphics_59 = new cjs.Graphics().p("A3DmcIZwvXIUXQEI3Wbig");
	var mask_3_graphics_60 = new cjs.Graphics().p("A31l3IbCwTIUpPRI4jdEg");
	var mask_3_graphics_61 = new cjs.Graphics().p("A4nlSIcVxPIU5OeI5velg");
	var mask_3_graphics_62 = new cjs.Graphics().p("A5YktIdmyLIVLNrMga8AgGg");
	var mask_3_graphics_63 = new cjs.Graphics().p("A6KkJIe5zGIVcM4MgcJAhng");
	var mask_3_graphics_64 = new cjs.Graphics().p("A68jkMAgLgUCIVuMFMgdWAjJg");
	var mask_3_graphics_65 = new cjs.Graphics().p("A7fgjMAiSgWfIUtLQMgcVAi1g");
	var mask_3_graphics_66 = new cjs.Graphics().p("A8CCbMAkYgY4ITtKbMgbXAigg");
	var mask_3_graphics_67 = new cjs.Graphics().p("A8lFaMAmegbTIStJlMgaVAiOg");
	var mask_3_graphics_68 = new cjs.Graphics().p("A9IIbMAolgdvIRsIvMgZVAh6g");
	var mask_3_graphics_69 = new cjs.Graphics().p("A9sLbMAqsggKIQtH5MgYVAhmg");
	var mask_3_graphics_70 = new cjs.Graphics().p("A+POaMAszgikIPrHCMgXTAhTg");
	var mask_3_graphics_71 = new cjs.Graphics().p("A+yRbMAu5glAIOrGNMgWTAg+g");
	var mask_3_graphics_72 = new cjs.Graphics().p("ARqztINsFXMgVSAgrMgpZABZg");
	var mask_3_graphics_73 = new cjs.Graphics().p("ATO07IMrEiMgUSAgXMgrfAE+g");
	var mask_3_graphics_74 = new cjs.Graphics().p("AUx2JILrDsMgTRAgEMgtmAIig");
	var mask_3_graphics_75 = new cjs.Graphics().p("AUA21IMeDdMgTsAhzMgtPAIbg");
	var mask_3_graphics_76 = new cjs.Graphics().p("ATO3hINSDPMgUIAjgMgs3AIUg");
	var mask_3_graphics_77 = new cjs.Graphics().p("ASd4OIOFDBMgUkAlPMgsfAINg");
	var mask_3_graphics_78 = new cjs.Graphics().p("ARs46IO4CyMgVAAm9MgsHAIGg");
	var mask_3_graphics_79 = new cjs.Graphics().p("AQ65mIPsCjMgVbAosMgrwAH+g");
	var mask_3_graphics_80 = new cjs.Graphics().p("AQJ6SIQfCVMgV3AqaMgrYAH2g");
	var mask_3_graphics_81 = new cjs.Graphics().p("APY6/IRTCHMgWTAsIMgrCAHvg");
	var mask_3_graphics_82 = new cjs.Graphics().p("AOm7rISGB4MgWuAt3MgqpAHog");
	var mask_3_graphics_83 = new cjs.Graphics().p("AN28HITNBuMgXtAvPMgqYAHSg");
	var mask_3_graphics_84 = new cjs.Graphics().p("ANG8jIUUBjMgYtAwnMgqGAG9g");
	var mask_3_graphics_85 = new cjs.Graphics().p("AMW8/IVbBZMgZrAx/Mgp2AGng");
	var mask_3_graphics_86 = new cjs.Graphics().p("ALm9bIWiBPMgarAzXMgpkAGSg");
	var mask_3_graphics_87 = new cjs.Graphics().p("AK293IXpBEMgbqA0wMgpTAF7g");
	var mask_3_graphics_88 = new cjs.Graphics().p("AKG+TIYwA5MgcpA2IMgpCAFmg");
	var mask_3_graphics_89 = new cjs.Graphics().p("AJW+wIZ3AwMgdoA3gMgoxAFRg");
	var mask_3_graphics_90 = new cjs.Graphics().p("AIm/MIa+AlMgeoA45MgofAE7g");
	var mask_3_graphics_91 = new cjs.Graphics().p("AH2/oIcFAbMgfnA6RMgoOAElg");
	var mask_3_graphics_92 = new cjs.Graphics().p("AG3/wIdDAMMgf9A7FMgn2AEQg");
	var mask_3_graphics_93 = new cjs.Graphics().p("AF3/4IeDgBMggUA75MgnfAD7g");
	var mask_3_graphics_94 = new cjs.Graphics().p("AE4/5IfBgQMggqA8uMgnHADlg");
	var mask_3_graphics_95 = new cjs.Graphics().p("AD4/6MAgAgAfMgg/A9jMgmwADPg");
	var mask_3_graphics_96 = new cjs.Graphics().p("AC5/8MAg/gAsMghXA+XMgmYAC6g");
	var mask_3_graphics_97 = new cjs.Graphics().p("AB5/9MAh+gA6MghtA/LMgmAACkg");
	var mask_3_graphics_98 = new cjs.Graphics().p("AA6/9MAi8gBKMgiDBAAMglpACPg");
	var mask_3_graphics_99 = new cjs.Graphics().p("AgE//MAj6gBXMgiZBA0MglSAB6g");
	var mask_3_graphics_100 = new cjs.Graphics().p("EgBDggAMAk4gBmMgivBBpMgk6ABkg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(47).to({graphics:mask_3_graphics_47,x:327.8,y:139.8}).wait(1).to({graphics:mask_3_graphics_48,x:321.5,y:144.8}).wait(1).to({graphics:mask_3_graphics_49,x:315.2,y:149.8}).wait(1).to({graphics:mask_3_graphics_50,x:308.9,y:154.8}).wait(1).to({graphics:mask_3_graphics_51,x:302.6,y:159.8}).wait(1).to({graphics:mask_3_graphics_52,x:296.3,y:164.8}).wait(1).to({graphics:mask_3_graphics_53,x:290,y:169.8}).wait(1).to({graphics:mask_3_graphics_54,x:283.7,y:174.8}).wait(1).to({graphics:mask_3_graphics_55,x:277.3,y:179.8}).wait(1).to({graphics:mask_3_graphics_56,x:271,y:184.8}).wait(1).to({graphics:mask_3_graphics_57,x:264.7,y:189.8}).wait(1).to({graphics:mask_3_graphics_58,x:258.4,y:194.8}).wait(1).to({graphics:mask_3_graphics_59,x:252.6,y:199.2}).wait(1).to({graphics:mask_3_graphics_60,x:246.8,y:203.6}).wait(1).to({graphics:mask_3_graphics_61,x:241.1,y:208}).wait(1).to({graphics:mask_3_graphics_62,x:235.3,y:212.4}).wait(1).to({graphics:mask_3_graphics_63,x:229.5,y:216.7}).wait(1).to({graphics:mask_3_graphics_64,x:223.7,y:221.1}).wait(1).to({graphics:mask_3_graphics_65,x:219,y:219.5}).wait(1).to({graphics:mask_3_graphics_66,x:214.3,y:217.9}).wait(1).to({graphics:mask_3_graphics_67,x:209.6,y:216.3}).wait(1).to({graphics:mask_3_graphics_68,x:204.9,y:214.6}).wait(1).to({graphics:mask_3_graphics_69,x:200.2,y:213}).wait(1).to({graphics:mask_3_graphics_70,x:195.5,y:211.4}).wait(1).to({graphics:mask_3_graphics_71,x:190.8,y:209.8}).wait(1).to({graphics:mask_3_graphics_72,x:186.1,y:212.6}).wait(1).to({graphics:mask_3_graphics_73,x:181.4,y:222.4}).wait(1).to({graphics:mask_3_graphics_74,x:176.7,y:232.3}).wait(1).to({graphics:mask_3_graphics_75,x:171.1,y:238.2}).wait(1).to({graphics:mask_3_graphics_76,x:165.6,y:244.1}).wait(1).to({graphics:mask_3_graphics_77,x:160,y:250.1}).wait(1).to({graphics:mask_3_graphics_78,x:154.5,y:256}).wait(1).to({graphics:mask_3_graphics_79,x:148.9,y:261.9}).wait(1).to({graphics:mask_3_graphics_80,x:143.3,y:267.9}).wait(1).to({graphics:mask_3_graphics_81,x:137.8,y:273.8}).wait(1).to({graphics:mask_3_graphics_82,x:132.2,y:279.7}).wait(1).to({graphics:mask_3_graphics_83,x:133.4,y:283.6}).wait(1).to({graphics:mask_3_graphics_84,x:134.6,y:287.4}).wait(1).to({graphics:mask_3_graphics_85,x:135.7,y:291.2}).wait(1).to({graphics:mask_3_graphics_86,x:136.9,y:295.1}).wait(1).to({graphics:mask_3_graphics_87,x:138.1,y:298.9}).wait(1).to({graphics:mask_3_graphics_88,x:139.3,y:302.7}).wait(1).to({graphics:mask_3_graphics_89,x:140.5,y:306.5}).wait(1).to({graphics:mask_3_graphics_90,x:141.7,y:310.4}).wait(1).to({graphics:mask_3_graphics_91,x:142.8,y:314.2}).wait(1).to({graphics:mask_3_graphics_92,x:142.3,y:316.2}).wait(1).to({graphics:mask_3_graphics_93,x:141.8,y:318.1}).wait(1).to({graphics:mask_3_graphics_94,x:141.3,y:319.3}).wait(1).to({graphics:mask_3_graphics_95,x:140.8,y:320.6}).wait(1).to({graphics:mask_3_graphics_96,x:140.3,y:321.8}).wait(1).to({graphics:mask_3_graphics_97,x:139.8,y:323.1}).wait(1).to({graphics:mask_3_graphics_98,x:139.3,y:324.3}).wait(1).to({graphics:mask_3_graphics_99,x:138.7,y:325.6}).wait(1).to({graphics:mask_3_graphics_100,x:138.2,y:326.8}).wait(1));

	// Camada 3
	this.instance_7 = new lib.Traçado1("synched",0);
	this.instance_7.setTransform(369,283,1,1,0,0,0,369,261);
	this.instance_7._off = true;

	this.instance_7.mask = mask_3;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(47).to({_off:false},0).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(856.9,305.1,250.2,155.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;