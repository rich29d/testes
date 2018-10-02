(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 30,
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



(lib.Forma2 = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Forma2_1 = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Forma2copiar = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Forma3 = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Forma3_1 = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Forma3copiar = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Forma3copiar2 = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Forma3copiar3 = function() {
	this.spriteSheet = ss["logo_animado_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Forma3copiar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AtAGWIOis8ILfBBItWMSg");
	mask.setTransform(83.4,42.9);

	// Camada 1
	this.instance = new lib.Forma3copiar();
	this.instance.setTransform(-545,-279);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,166.8,85.3);


(lib.Forma3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABUGsIvRtAILhgZIQbNjg");
	mask.setTransform(89.5,43.9);

	// Camada 1
	this.instance = new lib.Forma3_1();
	this.instance.setTransform(-655,-361);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.9,178.9,86.9);


(lib.Forma2copiar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Camada 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ABeIlIrHyFIWrTBg");
	var mask_graphics_1 = new cjs.Graphics().p("AgJIjIrPyBIWwS9g");
	var mask_graphics_2 = new cjs.Graphics().p("AgHIhIrTx9IW1S5g");
	var mask_graphics_3 = new cjs.Graphics().p("AgFIfIrXx5IW5S1g");
	var mask_graphics_4 = new cjs.Graphics().p("AgCIdIrdx1IW/Sxg");
	var mask_graphics_5 = new cjs.Graphics().p("AAAIbIrhxxIXDStg");
	var mask_graphics_6 = new cjs.Graphics().p("AABIYIrlxsIXISog");
	var mask_graphics_7 = new cjs.Graphics().p("AADIWIrpxnIXNSjg");
	var mask_graphics_8 = new cjs.Graphics().p("AAFIUIrtxkIXRSgg");
	var mask_graphics_9 = new cjs.Graphics().p("AAIISIryxfIXVSbg");
	var mask_graphics_10 = new cjs.Graphics().p("AAKIQIr3xbIXbSXg");
	var mask_graphics_11 = new cjs.Graphics().p("AAMIOIr7xXIXfSTg");
	var mask_graphics_12 = new cjs.Graphics().p("AAPIMIsBxTIXlSPg");
	var mask_graphics_13 = new cjs.Graphics().p("AARIKIsFxPIXpSLg");
	var mask_graphics_14 = new cjs.Graphics().p("AAUIIIsLxLIXuSHg");
	var mask_graphics_15 = new cjs.Graphics().p("AAWIGIsPxHIXzSDg");
	var mask_graphics_16 = new cjs.Graphics().p("AAYIDIsTxCIX3R+g");
	var mask_graphics_17 = new cjs.Graphics().p("AAbIBIsYw+IX7R6g");
	var mask_graphics_18 = new cjs.Graphics().p("AAdH/Isdw5IYBR1g");
	var mask_graphics_19 = new cjs.Graphics().p("AAfH9Ishw1IYFRxg");
	var mask_graphics_20 = new cjs.Graphics().p("AAaIDIsXxBIX7R9g");
	var mask_graphics_21 = new cjs.Graphics().p("AAUIIIsLxLIXvSHg");
	var mask_graphics_22 = new cjs.Graphics().p("AAPIOIsBxXIXlSTg");
	var mask_graphics_23 = new cjs.Graphics().p("AAJITIr1xhIXZSdg");
	var mask_graphics_24 = new cjs.Graphics().p("AAEIZIrrxtIXPSpg");
	var mask_graphics_25 = new cjs.Graphics().p("AAAIeIrhx3IXDSzg");
	var mask_graphics_26 = new cjs.Graphics().p("AgFIjIrXyBIW5S9g");
	var mask_graphics_27 = new cjs.Graphics().p("AgKIpIrNyNIWuTJg");
	var mask_graphics_28 = new cjs.Graphics().p("AgQIuIrByYIWjTUg");
	var mask_graphics_29 = new cjs.Graphics().p("AgVI0Iq2yjIWXTfg");
	var mask_graphics_30 = new cjs.Graphics().p("AgbI5IqryuIWNTqg");
	var mask_graphics_31 = new cjs.Graphics().p("AggI/Iqhy5IWCT1g");
	var mask_graphics_32 = new cjs.Graphics().p("AgmJEIqVzDIV3T/g");
	var mask_graphics_33 = new cjs.Graphics().p("AgrJKIqKzPIVrULg");
	var mask_graphics_34 = new cjs.Graphics().p("AgxJPIp/zaIVhUWg");
	var mask_graphics_35 = new cjs.Graphics().p("Ag2JVIp1zlIVXUhg");
	var mask_graphics_36 = new cjs.Graphics().p("Ag8JaIppzvIVLUrg");
	var mask_graphics_37 = new cjs.Graphics().p("AhBJgIpfz7IVBU3g");
	var mask_graphics_38 = new cjs.Graphics().p("AhHJlIpT0FIU1VBg");
	var mask_graphics_39 = new cjs.Graphics().p("AhMJrIpJ0RIUrVNg");
	var mask_graphics_40 = new cjs.Graphics().p("AhSJwIo90bIUfVXg");
	var mask_graphics_41 = new cjs.Graphics().p("AhOJtIpF0VIUmVRg");
	var mask_graphics_42 = new cjs.Graphics().p("AhLJpIpL0NIUtVJg");
	var mask_graphics_43 = new cjs.Graphics().p("AhIJmIpR0HIUzVDg");
	var mask_graphics_44 = new cjs.Graphics().p("AhFJiIpXz/IU5U7g");
	var mask_graphics_45 = new cjs.Graphics().p("AhBJfIpfz5IVBU1g");
	var mask_graphics_46 = new cjs.Graphics().p("Ag+JbIplzyIVHUug");
	var mask_graphics_47 = new cjs.Graphics().p("Ag7JYIprzrIVNUng");
	var mask_graphics_48 = new cjs.Graphics().p("Ag3JVIpzzlIVUUhg");
	var mask_graphics_49 = new cjs.Graphics().p("Ag0JRIp5zdIVbUZg");
	var mask_graphics_50 = new cjs.Graphics().p("AgxJOIp/zXIVhUTg");
	var mask_graphics_51 = new cjs.Graphics().p("AguJKIqFzPIVnULg");
	var mask_graphics_52 = new cjs.Graphics().p("AgqJHIqNzJIVuUFg");
	var mask_graphics_53 = new cjs.Graphics().p("AgnJDIqTzBIV1T9g");
	var mask_graphics_54 = new cjs.Graphics().p("AgkJAIqZy7IV7T3g");
	var mask_graphics_55 = new cjs.Graphics().p("AggI8Iqhy0IWCTwg");
	var mask_graphics_56 = new cjs.Graphics().p("AgdI5IqnytIWJTpg");
	var mask_graphics_57 = new cjs.Graphics().p("AgaI2IqtynIWPTjg");
	var mask_graphics_58 = new cjs.Graphics().p("AgXIyIqzyfIWVTbg");
	var mask_graphics_59 = new cjs.Graphics().p("AgTIvIq7yZIWcTVg");
	var mask_graphics_60 = new cjs.Graphics().p("AgQIrIrByRIWjTNg");
	var mask_graphics_61 = new cjs.Graphics().p("AgNIoIrHyLIWpTHg");
	var mask_graphics_62 = new cjs.Graphics().p("AgKIkIrNyDIWvS/g");
	var mask_graphics_63 = new cjs.Graphics().p("AgGIhIrVx9IW2S5g");
	var mask_graphics_64 = new cjs.Graphics().p("AgDIdIrbx2IW9Syg");
	var mask_graphics_65 = new cjs.Graphics().p("AAAIaIrhxvIXDSrg");
	var mask_graphics_66 = new cjs.Graphics().p("AACIWIrnxnIXKSjg");
	var mask_graphics_67 = new cjs.Graphics().p("AAFITIrtxhIXRSdg");
	var mask_graphics_68 = new cjs.Graphics().p("AAIIQIrzxbIXXSXg");
	var mask_graphics_69 = new cjs.Graphics().p("AALIMIr5xTIXdSPg");
	var mask_graphics_70 = new cjs.Graphics().p("AAKINIr3xVIXbSRg");
	var mask_graphics_71 = new cjs.Graphics().p("AAJIPIr1xZIXZSVg");
	var mask_graphics_72 = new cjs.Graphics().p("AAIIQIryxbIXVSXg");
	var mask_graphics_73 = new cjs.Graphics().p("AAGIRIrvxdIXTSZg");
	var mask_graphics_74 = new cjs.Graphics().p("AAFISIrtxfIXRSbg");
	var mask_graphics_75 = new cjs.Graphics().p("AAEIUIrrxjIXPSfg");
	var mask_graphics_76 = new cjs.Graphics().p("AADIVIroxlIXLShg");
	var mask_graphics_77 = new cjs.Graphics().p("AABIWIrlxnIXJSjg");
	var mask_graphics_78 = new cjs.Graphics().p("AAAIXIrjxpIXHSlg");
	var mask_graphics_79 = new cjs.Graphics().p("AAAIZIrixtIXFSpg");
	var mask_graphics_80 = new cjs.Graphics().p("AAAIaIrgxvIXBSrg");
	var mask_graphics_81 = new cjs.Graphics().p("AgCIbIrdxxIW/Stg");
	var mask_graphics_82 = new cjs.Graphics().p("AgDIcIrbx0IW9Swg");
	var mask_graphics_83 = new cjs.Graphics().p("AgEIeIrZx3IW7Szg");
	var mask_graphics_84 = new cjs.Graphics().p("AgFIfIrXx5IW4S1g");
	var mask_graphics_85 = new cjs.Graphics().p("AgHIgIrTx7IW1S3g");
	var mask_graphics_86 = new cjs.Graphics().p("AgIIhIrRx+IWzS6g");
	var mask_graphics_87 = new cjs.Graphics().p("AgJIjIrPyBIWxS9g");
	var mask_graphics_88 = new cjs.Graphics().p("AgKIkIrNyDIWuS/g");
	var mask_graphics_89 = new cjs.Graphics().p("ABeIlIrHyFIWrTBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:83.5,y:61}).wait(1).to({graphics:mask_graphics_1,x:94.1,y:61.2}).wait(1).to({graphics:mask_graphics_2,x:93.8,y:61.4}).wait(1).to({graphics:mask_graphics_3,x:93.6,y:61.6}).wait(1).to({graphics:mask_graphics_4,x:93.3,y:61.8}).wait(1).to({graphics:mask_graphics_5,x:93.1,y:62}).wait(1).to({graphics:mask_graphics_6,x:92.9,y:62.3}).wait(1).to({graphics:mask_graphics_7,x:92.6,y:62.5}).wait(1).to({graphics:mask_graphics_8,x:92.4,y:62.7}).wait(1).to({graphics:mask_graphics_9,x:92.2,y:62.9}).wait(1).to({graphics:mask_graphics_10,x:91.9,y:63.1}).wait(1).to({graphics:mask_graphics_11,x:91.7,y:63.3}).wait(1).to({graphics:mask_graphics_12,x:91.4,y:63.5}).wait(1).to({graphics:mask_graphics_13,x:91.2,y:63.7}).wait(1).to({graphics:mask_graphics_14,x:91,y:63.9}).wait(1).to({graphics:mask_graphics_15,x:90.7,y:64.1}).wait(1).to({graphics:mask_graphics_16,x:90.5,y:64.4}).wait(1).to({graphics:mask_graphics_17,x:90.3,y:64.6}).wait(1).to({graphics:mask_graphics_18,x:90,y:64.8}).wait(1).to({graphics:mask_graphics_19,x:89.8,y:65}).wait(1).to({graphics:mask_graphics_20,x:90.3,y:64.4}).wait(1).to({graphics:mask_graphics_21,x:90.9,y:63.9}).wait(1).to({graphics:mask_graphics_22,x:91.4,y:63.3}).wait(1).to({graphics:mask_graphics_23,x:92,y:62.8}).wait(1).to({graphics:mask_graphics_24,x:92.5,y:62.2}).wait(1).to({graphics:mask_graphics_25,x:93.1,y:61.7}).wait(1).to({graphics:mask_graphics_26,x:93.6,y:61.2}).wait(1).to({graphics:mask_graphics_27,x:94.2,y:60.6}).wait(1).to({graphics:mask_graphics_28,x:94.7,y:60.1}).wait(1).to({graphics:mask_graphics_29,x:95.3,y:59.5}).wait(1).to({graphics:mask_graphics_30,x:95.8,y:59}).wait(1).to({graphics:mask_graphics_31,x:96.4,y:58.4}).wait(1).to({graphics:mask_graphics_32,x:96.9,y:57.9}).wait(1).to({graphics:mask_graphics_33,x:97.5,y:57.3}).wait(1).to({graphics:mask_graphics_34,x:98,y:56.8}).wait(1).to({graphics:mask_graphics_35,x:98.5,y:56.2}).wait(1).to({graphics:mask_graphics_36,x:99.1,y:55.7}).wait(1).to({graphics:mask_graphics_37,x:99.6,y:55.1}).wait(1).to({graphics:mask_graphics_38,x:100.2,y:54.6}).wait(1).to({graphics:mask_graphics_39,x:100.7,y:54}).wait(1).to({graphics:mask_graphics_40,x:101.3,y:53.5}).wait(1).to({graphics:mask_graphics_41,x:101,y:53.8}).wait(1).to({graphics:mask_graphics_42,x:100.6,y:54.2}).wait(1).to({graphics:mask_graphics_43,x:100.3,y:54.5}).wait(1).to({graphics:mask_graphics_44,x:100,y:54.9}).wait(1).to({graphics:mask_graphics_45,x:99.6,y:55.2}).wait(1).to({graphics:mask_graphics_46,x:99.3,y:55.6}).wait(1).to({graphics:mask_graphics_47,x:99,y:55.9}).wait(1).to({graphics:mask_graphics_48,x:98.7,y:56.2}).wait(1).to({graphics:mask_graphics_49,x:98.3,y:56.6}).wait(1).to({graphics:mask_graphics_50,x:98,y:56.9}).wait(1).to({graphics:mask_graphics_51,x:97.7,y:57.3}).wait(1).to({graphics:mask_graphics_52,x:97.4,y:57.6}).wait(1).to({graphics:mask_graphics_53,x:97,y:58}).wait(1).to({graphics:mask_graphics_54,x:96.7,y:58.3}).wait(1).to({graphics:mask_graphics_55,x:96.4,y:58.7}).wait(1).to({graphics:mask_graphics_56,x:96,y:59}).wait(1).to({graphics:mask_graphics_57,x:95.7,y:59.3}).wait(1).to({graphics:mask_graphics_58,x:95.4,y:59.7}).wait(1).to({graphics:mask_graphics_59,x:95.1,y:60}).wait(1).to({graphics:mask_graphics_60,x:94.7,y:60.4}).wait(1).to({graphics:mask_graphics_61,x:94.4,y:60.7}).wait(1).to({graphics:mask_graphics_62,x:94.1,y:61.1}).wait(1).to({graphics:mask_graphics_63,x:93.8,y:61.4}).wait(1).to({graphics:mask_graphics_64,x:93.4,y:61.8}).wait(1).to({graphics:mask_graphics_65,x:93.1,y:62.1}).wait(1).to({graphics:mask_graphics_66,x:92.8,y:62.5}).wait(1).to({graphics:mask_graphics_67,x:92.4,y:62.8}).wait(1).to({graphics:mask_graphics_68,x:92.1,y:63.1}).wait(1).to({graphics:mask_graphics_69,x:91.8,y:63.5}).wait(1).to({graphics:mask_graphics_70,x:91.9,y:63.4}).wait(1).to({graphics:mask_graphics_71,x:92,y:63.2}).wait(1).to({graphics:mask_graphics_72,x:92.2,y:63.1}).wait(1).to({graphics:mask_graphics_73,x:92.3,y:63}).wait(1).to({graphics:mask_graphics_74,x:92.4,y:62.9}).wait(1).to({graphics:mask_graphics_75,x:92.5,y:62.7}).wait(1).to({graphics:mask_graphics_76,x:92.7,y:62.6}).wait(1).to({graphics:mask_graphics_77,x:92.8,y:62.5}).wait(1).to({graphics:mask_graphics_78,x:92.9,y:62.4}).wait(1).to({graphics:mask_graphics_79,x:93,y:62.2}).wait(1).to({graphics:mask_graphics_80,x:93.2,y:62.1}).wait(1).to({graphics:mask_graphics_81,x:93.3,y:62}).wait(1).to({graphics:mask_graphics_82,x:93.4,y:61.9}).wait(1).to({graphics:mask_graphics_83,x:93.5,y:61.7}).wait(1).to({graphics:mask_graphics_84,x:93.7,y:61.6}).wait(1).to({graphics:mask_graphics_85,x:93.8,y:61.5}).wait(1).to({graphics:mask_graphics_86,x:93.9,y:61.4}).wait(1).to({graphics:mask_graphics_87,x:94,y:61.2}).wait(1).to({graphics:mask_graphics_88,x:94.2,y:61.1}).wait(1).to({graphics:mask_graphics_89,x:83.5,y:61}).wait(1));

	// Camada 1
	this.instance = new lib.Forma2copiar();
	this.instance.setTransform(-545,-165);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.6,0,145.4,122);


(lib.Forma2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_69 = function() {
		gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(69).call(this.frame_69).wait(1));

	// Camada 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AKCo9Io1RsIrOAUg");
	var mask_graphics_1 = new cjs.Graphics().p("AKGo9Io9RnIrOAUg");
	var mask_graphics_2 = new cjs.Graphics().p("AKKo7IpFRjIrOAUg");
	var mask_graphics_3 = new cjs.Graphics().p("AKOo5IpNRfIrOAUg");
	var mask_graphics_4 = new cjs.Graphics().p("AKRo3IpTRbIrOAUg");
	var mask_graphics_5 = new cjs.Graphics().p("AKVo0IpbRVIrOAUg");
	var mask_graphics_6 = new cjs.Graphics().p("AKZoyIpjRRIrOAUg");
	var mask_graphics_7 = new cjs.Graphics().p("AKcowIpqRNIrOAUg");
	var mask_graphics_8 = new cjs.Graphics().p("AKgouIpxRJIrOAUg");
	var mask_graphics_9 = new cjs.Graphics().p("AKkosIp5RFIrOAUg");
	var mask_graphics_10 = new cjs.Graphics().p("AKooqIqBRAIrOAUg");
	var mask_graphics_11 = new cjs.Graphics().p("AKrooIqIQ8IrOAUg");
	var mask_graphics_12 = new cjs.Graphics().p("AKvolIqPQ3IrOAUg");
	var mask_graphics_13 = new cjs.Graphics().p("AKzojIqXQzIrOAUg");
	var mask_graphics_14 = new cjs.Graphics().p("AK3ohIqfQvIrOAUg");
	var mask_graphics_15 = new cjs.Graphics().p("AK7ofIqnQrIrOAUg");
	var mask_graphics_16 = new cjs.Graphics().p("AK+ocIqtQlIrOAUg");
	var mask_graphics_17 = new cjs.Graphics().p("AK7oeIqnQpIrOAUg");
	var mask_graphics_18 = new cjs.Graphics().p("AK3ofIqfQrIrOAUg");
	var mask_graphics_19 = new cjs.Graphics().p("AKzohIqXQuIrOAUg");
	var mask_graphics_20 = new cjs.Graphics().p("AKvoiIqQQxIrOAUg");
	var mask_graphics_21 = new cjs.Graphics().p("AKsojIqJQzIrOAUg");
	var mask_graphics_22 = new cjs.Graphics().p("AKoolIqBQ2IrOAUg");
	var mask_graphics_23 = new cjs.Graphics().p("AKlomIp7Q5IrOAUg");
	var mask_graphics_24 = new cjs.Graphics().p("AKhonIpzQ7IrOAUg");
	var mask_graphics_25 = new cjs.Graphics().p("AKdopIprQ+IrOAUg");
	var mask_graphics_26 = new cjs.Graphics().p("AKZoqIpkRBIrOAUg");
	var mask_graphics_27 = new cjs.Graphics().p("AKWorIpdRDIrOAUg");
	var mask_graphics_28 = new cjs.Graphics().p("AKSotIpVRGIrOAUg");
	var mask_graphics_29 = new cjs.Graphics().p("AKOouIpORJIrOAUg");
	var mask_graphics_30 = new cjs.Graphics().p("AKLovIpHRLIrOAUg");
	var mask_graphics_31 = new cjs.Graphics().p("AKHoxIo/ROIrOAUg");
	var mask_graphics_32 = new cjs.Graphics().p("AKEoyIo5RRIrOAUg");
	var mask_graphics_33 = new cjs.Graphics().p("AKAozIoxRTIrOAUg");
	var mask_graphics_34 = new cjs.Graphics().p("AJ8o0IopRVIrOAUg");
	var mask_graphics_35 = new cjs.Graphics().p("AJ4o2IoiRZIrOAUg");
	var mask_graphics_36 = new cjs.Graphics().p("AJ1o3IobRbIrOAUg");
	var mask_graphics_37 = new cjs.Graphics().p("AJxo4IoTRdIrOAUg");
	var mask_graphics_38 = new cjs.Graphics().p("AJuo6IoNRhIrOAUg");
	var mask_graphics_39 = new cjs.Graphics().p("AJqo7IoFRjIrOAUg");
	var mask_graphics_40 = new cjs.Graphics().p("AJmo8In9RlIrOAUg");
	var mask_graphics_41 = new cjs.Graphics().p("AJio+In2RpIrOAUg");
	var mask_graphics_42 = new cjs.Graphics().p("AJfo/InvRrIrOAUg");
	var mask_graphics_43 = new cjs.Graphics().p("AJbpAInnRtIrOAUg");
	var mask_graphics_44 = new cjs.Graphics().p("AJYpCInhRxIrOAUg");
	var mask_graphics_45 = new cjs.Graphics().p("AJUpDInZRzIrOAUg");
	var mask_graphics_46 = new cjs.Graphics().p("AJQpFInRR2IrOAUg");
	var mask_graphics_47 = new cjs.Graphics().p("AJTpEInXR1IrOAUg");
	var mask_graphics_48 = new cjs.Graphics().p("AJUpEInaR1IrOAUg");
	var mask_graphics_49 = new cjs.Graphics().p("AJXpEInfR1IrOAUg");
	var mask_graphics_50 = new cjs.Graphics().p("AJZpEInjR1IrOAUg");
	var mask_graphics_51 = new cjs.Graphics().p("AJbpEInnR0IrOAUg");
	var mask_graphics_52 = new cjs.Graphics().p("AJdpDInrRzIrOAUg");
	var mask_graphics_53 = new cjs.Graphics().p("AJgpDInxRzIrOAUg");
	var mask_graphics_54 = new cjs.Graphics().p("AJipDIn1RzIrOAUg");
	var mask_graphics_55 = new cjs.Graphics().p("AJkpDIn5RyIrOAUg");
	var mask_graphics_56 = new cjs.Graphics().p("AJmpCIn9RxIrOAUg");
	var mask_graphics_57 = new cjs.Graphics().p("AJopCIoBRxIrOAUg");
	var mask_graphics_58 = new cjs.Graphics().p("AJqpCIoFRxIrOAUg");
	var mask_graphics_59 = new cjs.Graphics().p("AJspCIoKRxIrOAUg");
	var mask_graphics_60 = new cjs.Graphics().p("AJvpBIoPRvIrOAUg");
	var mask_graphics_61 = new cjs.Graphics().p("AJxpBIoTRvIrOAUg");
	var mask_graphics_62 = new cjs.Graphics().p("AJzpBIoXRvIrOAUg");
	var mask_graphics_63 = new cjs.Graphics().p("AJ1pBIobRvIrOAUg");
	var mask_graphics_64 = new cjs.Graphics().p("AJ4pAIohRtIrOAUg");
	var mask_graphics_65 = new cjs.Graphics().p("AJ5pAIokRtIrOAUg");
	var mask_graphics_66 = new cjs.Graphics().p("AJ8pAIopRtIrOAUg");
	var mask_graphics_67 = new cjs.Graphics().p("AJ+pAIotRtIrOAUg");
	var mask_graphics_68 = new cjs.Graphics().p("AKApAIoxRtIrOAUg");
	var mask_graphics_69 = new cjs.Graphics().p("AKCo9Io1RsIrOAUg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:64.2,y:58}).wait(1).to({graphics:mask_graphics_1,x:64.6,y:58.5}).wait(1).to({graphics:mask_graphics_2,x:65,y:58.7}).wait(1).to({graphics:mask_graphics_3,x:65.4,y:58.9}).wait(1).to({graphics:mask_graphics_4,x:65.7,y:59.1}).wait(1).to({graphics:mask_graphics_5,x:66.1,y:59.4}).wait(1).to({graphics:mask_graphics_6,x:66.5,y:59.6}).wait(1).to({graphics:mask_graphics_7,x:66.9,y:59.8}).wait(1).to({graphics:mask_graphics_8,x:67.2,y:60}).wait(1).to({graphics:mask_graphics_9,x:67.6,y:60.2}).wait(1).to({graphics:mask_graphics_10,x:68,y:60.5}).wait(1).to({graphics:mask_graphics_11,x:68.4,y:60.7}).wait(1).to({graphics:mask_graphics_12,x:68.7,y:60.9}).wait(1).to({graphics:mask_graphics_13,x:69.1,y:61.1}).wait(1).to({graphics:mask_graphics_14,x:69.5,y:61.3}).wait(1).to({graphics:mask_graphics_15,x:69.9,y:61.5}).wait(1).to({graphics:mask_graphics_16,x:70.2,y:61.8}).wait(1).to({graphics:mask_graphics_17,x:69.9,y:61.6}).wait(1).to({graphics:mask_graphics_18,x:69.5,y:61.5}).wait(1).to({graphics:mask_graphics_19,x:69.1,y:61.4}).wait(1).to({graphics:mask_graphics_20,x:68.8,y:61.2}).wait(1).to({graphics:mask_graphics_21,x:68.4,y:61.1}).wait(1).to({graphics:mask_graphics_22,x:68,y:61}).wait(1).to({graphics:mask_graphics_23,x:67.7,y:60.8}).wait(1).to({graphics:mask_graphics_24,x:67.3,y:60.7}).wait(1).to({graphics:mask_graphics_25,x:66.9,y:60.6}).wait(1).to({graphics:mask_graphics_26,x:66.6,y:60.4}).wait(1).to({graphics:mask_graphics_27,x:66.2,y:60.3}).wait(1).to({graphics:mask_graphics_28,x:65.8,y:60.2}).wait(1).to({graphics:mask_graphics_29,x:65.5,y:60}).wait(1).to({graphics:mask_graphics_30,x:65.1,y:59.9}).wait(1).to({graphics:mask_graphics_31,x:64.7,y:59.8}).wait(1).to({graphics:mask_graphics_32,x:64.4,y:59.6}).wait(1).to({graphics:mask_graphics_33,x:64,y:59.5}).wait(1).to({graphics:mask_graphics_34,x:63.6,y:59.4}).wait(1).to({graphics:mask_graphics_35,x:63.3,y:59.2}).wait(1).to({graphics:mask_graphics_36,x:62.9,y:59.1}).wait(1).to({graphics:mask_graphics_37,x:62.5,y:59}).wait(1).to({graphics:mask_graphics_38,x:62.2,y:58.8}).wait(1).to({graphics:mask_graphics_39,x:61.8,y:58.7}).wait(1).to({graphics:mask_graphics_40,x:61.4,y:58.6}).wait(1).to({graphics:mask_graphics_41,x:61.1,y:58.4}).wait(1).to({graphics:mask_graphics_42,x:60.7,y:58.3}).wait(1).to({graphics:mask_graphics_43,x:60.3,y:58.2}).wait(1).to({graphics:mask_graphics_44,x:60,y:58}).wait(1).to({graphics:mask_graphics_45,x:59.6,y:57.9}).wait(1).to({graphics:mask_graphics_46,x:59.2,y:57.8}).wait(1).to({graphics:mask_graphics_47,x:59.5,y:57.8}).wait(1).to({graphics:mask_graphics_48,x:59.7,y:57.8}).wait(1).to({graphics:mask_graphics_49,x:59.9,y:57.8}).wait(1).to({graphics:mask_graphics_50,x:60.1,y:57.8}).wait(1).to({graphics:mask_graphics_51,x:60.3,y:57.9}).wait(1).to({graphics:mask_graphics_52,x:60.5,y:57.9}).wait(1).to({graphics:mask_graphics_53,x:60.8,y:57.9}).wait(1).to({graphics:mask_graphics_54,x:61,y:57.9}).wait(1).to({graphics:mask_graphics_55,x:61.2,y:58}).wait(1).to({graphics:mask_graphics_56,x:61.4,y:58}).wait(1).to({graphics:mask_graphics_57,x:61.6,y:58}).wait(1).to({graphics:mask_graphics_58,x:61.8,y:58}).wait(1).to({graphics:mask_graphics_59,x:62.1,y:58}).wait(1).to({graphics:mask_graphics_60,x:62.3,y:58.1}).wait(1).to({graphics:mask_graphics_61,x:62.5,y:58.1}).wait(1).to({graphics:mask_graphics_62,x:62.7,y:58.1}).wait(1).to({graphics:mask_graphics_63,x:62.9,y:58.1}).wait(1).to({graphics:mask_graphics_64,x:63.2,y:58.2}).wait(1).to({graphics:mask_graphics_65,x:63.4,y:58.2}).wait(1).to({graphics:mask_graphics_66,x:63.6,y:58.2}).wait(1).to({graphics:mask_graphics_67,x:63.8,y:58.2}).wait(1).to({graphics:mask_graphics_68,x:64,y:58.2}).wait(1).to({graphics:mask_graphics_69,x:64.2,y:58}).wait(1));

	// Camada 1
	this.instance = new lib.Forma2_1();
	this.instance.setTransform(-656,-249);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(70));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,128.6,115.4);


(lib.Forma3copiar3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// Camada 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AJ6KXIj1jRQBYAOBCgjQAZgMBThEQBCg3A9gPQBZgWB/AiIgBAGIHDF0gA2ki6IH+nIQA2AwCBgNQAggEDQgpQCPgdA8AQQBUAWgKBuQiVCJiLCDIhuBlg");
	var mask_graphics_1 = new cjs.Graphics().p("AJ7KWIj2jRQBYAOBCgjQAZgMBThDQBCg2A+gPQBJgOBDAIQAkAFAmALIHBF3IACADgA2ki7IH+nJIANALQAjAXA8AEQAiACApgFQAUgCBagRICCgZQCOgcA9AQQBGATAFBRQAAAPgCARIkPD7IgRAQIhtBlg");
	var mask_graphics_2 = new cjs.Graphics().p("AJ7KVIj2jRQBYAOBCgiQAagMBShCQBDg1A9gQQBKgOBCAIQAkAEAmALIHBF2IACADgA2ki8IH+nIIANAKQAiAYA9ADQAhACAqgFQAUgCBZgRICCgYQCOgcA9ARQBHATAFBQQAAAPgCARIkPD6IgRAQIhtBmg");
	var mask_graphics_3 = new cjs.Graphics().p("AJ7KVIj2jRQBXANBDghQAbgMBRhBQBDg0A+gRQBJgOBCAHQAkADAmALIHBF3IACADgA2ki8IH+nIIANAJQAiAYA9ADQAgACAqgEQAVgDBZgQICBgZQCNgaA/ARQBGATAGBPQAAAPgDAQIkOD7IgRAQIhuBlg");
	var mask_graphics_4 = new cjs.Graphics().p("AJ7KUIj2jRQBXAOBEghQAbgMBRhAQBDg0A+gQQBIgPBCAGQAkADAmALIHBF2IACADgA2ji9IH8nHIANAIQAiAYA9AEQAhABAqgEQAWgCBYgRICBgYQCNgaA+ARQBGAUAHBOIgCAfIkPD7IgRAQIhuBlg");
	var mask_graphics_5 = new cjs.Graphics().p("AJ7KUIj2jRQBXANBEggQAcgMBRg/QBDgzA+gRQBIgPBBAFQAlADAlAKIHBF3IACADgA2ji9IH8nIIANAJQAhAYA+ADQAhACAqgFQAWgCBXgQICBgYQCNgZA+ARQBGAUAIBNQAAAPgDAQQiMCBiCB6IgRAQIhuBkg");
	var mask_graphics_6 = new cjs.Graphics().p("AJ7KTIj2jRQBXANBEggQAdgLBQg+QBDgyA+gSQBIgPBCAEQAkACAlALIHBF3IACACgA2ji+IH8nHIANAIQAhAYA+ADQAgACAqgFQAXgCBXgQICBgXQCMgZA/ASQBFATAJBNIgDAfIkPD6IgQAQIhgBZIgOAMg");
	var mask_graphics_7 = new cjs.Graphics().p("AJ7KTIj2jRQBXANBEggQAdgLBQg9QBEgyA+gRQBHgQBCADQAkACAlAKIHBF3IACADgA2ji+IH8nHIANAHQAgAZA+ACQAhACAqgEQAXgDBXgQICAgWQCLgYBAASQBGATAJBMQgBAPgDAQIkOD6IgRAQIhfBZIgPALg");
	var mask_graphics_8 = new cjs.Graphics().p("AJ7KSIj2jRQBXANBEgfQAegLBQg8QBDgxA+gSQBIgQBBACQAkABAlALIHBF3IACACgA2ji/IH8nHIAMAIQAgAYA/ADQAgABAqgEQAYgCBWgQICBgWQCKgYBAATQBGATAKBLIgEAfIkOD6IgRAQIhfBZIgPALg");
	var mask_graphics_9 = new cjs.Graphics().p("AJ7KSIj2jRQBXAMBEgeQAfgLBPg7QBEgxA+gSQBHgQBBABQAlABAkAKIHBF3IACADgA2ji/IH7nHIANAHQAgAZA/ACQAgACAqgFQAYgCBWgQICAgVQCKgXBBASQBFAUALBKQgBAPgEAQIkOD6IgQAQIhgBYIgOALg");
	var mask_graphics_10 = new cjs.Graphics().p("AJ7KRIj2jRQBXANBEgeQAggLBPg7QBDgvA/gSQBGgRBBABQAlgBAkALIHBF3IACACgA2jjAIH7nGIANAGQAfAZA/ACQAgACArgFQAYgCBVgPICBgVQCJgXBBATQBFAUAMBKIgFAeIkOD6IgRAPIhfBZIgPALg");
	var mask_graphics_11 = new cjs.Graphics().p("AJ8KRIj3jRQBXAMBFgdQAggLBPg6QBDguA+gTQBHgRBAAAQAmgBAjAKIHBF3IACADgA2jjAIH7nHIANAHQAfAYA/ADQAgABAqgEQAZgDBVgPICAgVQCJgVBCATQBEAUANBJIgFAdIkOD6IgQAQIhgBZIgPAKg");
	var mask_graphics_12 = new cjs.Graphics().p("AJ8KQIj3jRQBXAMBFgcQAggLBPg5QBDguA/gTQBGgRBAgBQAmgBAjAKIHBF3IACACgA2jjBIH7nGIAMAGQAfAZBAACQAgABAqgEQAagCBTgPICAgVQCJgVBCAUQBFAUANBIIgGAdIkND6IgRAQIhfBZIgPAKg");
	var mask_graphics_13 = new cjs.Graphics().p("AJ8KQIj3jRQBXAMBFgcQAigLBNg3QBEguA+gTQBHgSBAgBQAlgDAjALIHBF3IACACgA2jjBIH7nGIAMAGQAeAZBBACQAfABArgEQAZgDBUgPICAgTQCIgVBDAUQBEAUAOBHIgGAeIkOD6IgRAPIheBZIgQAKg");
	var mask_graphics_14 = new cjs.Graphics().p("AJ7KQIj2jSQBWAMBGgbQAigLBNg3QBFgsA+gUQBGgRBAgDQAlgDAkAKIHBF3IABADgA2jjCIH7nFIAMAFQAdAZBBACQAfABAsgEQAagCBTgPIB/gTQCIgVBDAVQBEATAPBHIgHAdIkND6IgRAQIheBYIgQAJg");
	var mask_graphics_15 = new cjs.Graphics().p("AJ7KPIj2jRQBWAMBGgbQAjgLBNg1QBFgsA+gUQBFgSBAgEQAlgDAkAKIHBF3IABACgA2jjCIH6nFIANAEQAdAaBBACQAfABAsgFQAZgCBTgOICAgUQCHgTBDAUQBEAVAQBFQgDAOgEAPIkND6IgRAQIhfBYIgPAJg");
	var mask_graphics_16 = new cjs.Graphics().p("AJ7KPIj2jRQBWALBGgaQAkgLBMg0QBFgsA/gUQBFgSA/gFQAlgEAkAKIHBF4IABACgA2jjCIH6nGIAMAFQAdAZBCACQAeABAsgEQAagDBTgOIB/gTQCHgSBDAUQBEAVARBFIgHAcIkOD6IgQAQIhfBYIgPAJg");
	var mask_graphics_17 = new cjs.Graphics().p("AJ7KOIj2jRQBWALBGgaQAlgKBLgzQBGgrA+gUQBFgTA/gGQAmgEAjAKIHBF3IABACgA2jjDIH6nFIAMAEQAcAaBCABQAfABAsgEQAbgDBSgOIB/gSQCFgSBEAVQBEAUASBFIgIAcIkND6IgRAPIheBZIgQAIg");
	var mask_graphics_18 = new cjs.Graphics().p("AJ7KOIj1jRQBWALBFgaQAmgKBLgyQBFgqA/gVQBEgTBAgHQAlgEAjAJIHBF4IABACgA2jjDIH6nFIAMADQAcAaBCABQAfABAsgEQAbgCBRgOICAgSQCFgRBEAVQBEAUASBEIgIAcIkND5IgQAQIhfBZIgQAIg");
	var mask_graphics_19 = new cjs.Graphics().p("AJ7KNIj1jRQBWALBFgZQAngKBLgxQBFgqA+gVQBFgTA/gIQAmgFAiAKIHBF3IABACgA2jjEIH6nEIAMADQAbAZBDACQAeABAsgFQAcgCBRgOIB/gRQCFgRBEAWQBEAUATBDIgIAcIkND5IgRAQIhfBYIgPAIg");
	var mask_graphics_20 = new cjs.Graphics().p("AJ7KNIj1jRQBVAKBGgYQAngKBLgwQBFgpA/gVQBEgUA/gJQAmgFAiAJIHBF4IABACgA2jjEIH5nFIANADQAbAaBCABQAfABAsgEQAcgDBQgNIB/gRQCEgQBGAVQBEAVATBCQgDANgGAPIkMD5IgRAQIhfBYIgPAIg");
	var mask_graphics_21 = new cjs.Graphics().p("AJ7KMIj1jRQBVALBGgYQAogKBKgvQBGgoA+gWQBEgUA/gJQAmgHAiAKIHBF3IABACgA2jjFIH5nEIANACQAaAaBDABQAeABAsgEQAdgDBQgNIB/gQQCDgQBGAWQBEAVAUBBIgJAcIkND5IgQAPIhfBZIgQAHg");
	var mask_graphics_22 = new cjs.Graphics().p("AJ7KMIj1jRQBVALBGgYQApgJBKgvQBFgnA/gWQBEgVA+gKQAngHAhAKIHBF3IABACgA2jjFIH5nEIANACQAZAaBDABQAfABAsgEQAdgDBPgNIB/gQQCDgPBGAWQBEAVAVBBIgJAbQiLCAiCB5IgRAQIheBYIgQAHg");
	var mask_graphics_23 = new cjs.Graphics().p("AJ7KMIj1jRQBVAKBGgXQAqgJBJguQBGgnA/gWQBDgVA/gLQAmgHAhAJIHCF4IAAACgA2jjFIH5nEIAMABQAaAbBDABQAeAAAtgEQAdgDBPgMIB/gQQCCgOBHAWQBDAVAWBAIgKAbIkMD5IgRAQIhfBYIgPAHg");
	var mask_graphics_24 = new cjs.Graphics().p("AJ7KLIj1jRQBVAKBGgWQArgJBJgtQBGgmA+gWQBDgWA/gLQAmgJAhAKIHCF4IAAABgA2jjGIH5nDIAMABQAZAaBEABQAeABAsgFQAegCBOgNIB/gPQCCgOBHAXQBDAVAXA/IgKAbIkND5IgQAPIhfBYIgQAHg");
	var mask_graphics_25 = new cjs.Graphics().p("AJ7KLIj1jRQBVAKBGgWQArgJBJgsQBGglA/gXQBCgWA/gMQAmgJAhAJIHCF4IgBACgA2jjGIH4nEIANABQAYAaBEABQAeABAtgEQAfgDBNgMIB/gPQCBgNBHAXQBEAVAXA+IgLAbQiKB/iCB6IgRAPIheBYIgQAHg");
	var mask_graphics_26 = new cjs.Graphics().p("AJ7KKIj1jRQBVAKBGgVQAsgJBIgrQBHglA+gXQBDgWA+gNQAngJAgAJIHCF4IgBABgA2jjHIH4nDIANAAQAYAbBEABQAeAAAtgEQAfgDBMgMQA7gHBEgHQCBgNBIAYQBDAVAYA9IgLAbIkMD4IgRAQIheBYIgQAGg");
	var mask_graphics_27 = new cjs.Graphics().p("AJ7KKIj1jRQBVAKBGgVQAtgJBIgpQBGglA/gXQBCgWA+gPQAngJAgAJIHCF4IgBABgA2jjHIH4nDIAMAAQAYAbBFAAQAdABAtgEQAggDBMgMQA7gHBEgHQCAgMBIAYQBDAVAZA8IgMAbIkMD5IgQAPIhfBYIgQAGg");
	var mask_graphics_28 = new cjs.Graphics().p("AJ7KKIj1jRQBVAJBGgUQAugJBHgpQBHgjA/gYQBBgWA+gPQAngLAgAJIHCF4IgBACgA2jjHIH4nDIAMgBQAXAbBFABQAeAAAtgEQAggDBMgMIB+gNQB/gMBJAZQBDAVAaA8IgMAaIkMD4IgQAQIhfBYIgQAGg");
	var mask_graphics_29 = new cjs.Graphics().p("AJ7KJIj1jRQBVAKBGgUQAvgJBHgoQBGgiA/gYQBCgXA9gQQAngLAgAJIHCF4IgBABgA2jjIIH3nCIANgBQAXAbBFAAQAdAAAugEQAggDBLgLQA8gHBCgGQB/gLBKAYQBCAWAbA7IgMAaIkMD4IgRAQIheBYIgQAFg");
	var mask_graphics_30 = new cjs.Graphics().p("AJ7KJIj1jRQBVAJBGgTQAwgIBGgnQBHgiA/gYQBBgYA+gRQAngLAfAJIHCF4IgBABgA2jjIIH3nCIANgBQAWAbBGAAQAdAAAtgEQAhgDBLgLQA7gHBDgGQB+gKBKAZQBCAVAcA6IgNAaIkMD4IgQAQIheBYIgRAFg");
	var mask_graphics_31 = new cjs.Graphics().p("AJ7KJIj1jRQBUAJBHgTQAwgIBGgmQBHgiA/gYQBBgYA+gSQAngLAfAIIHCF4IgBACgA2jjIIH3nDIAMgBQAWAbBGAAQAdAAAugEQAhgDBKgLQA8gHBCgFQB+gKBKAZQBDAWAcA5IgNAaIkMD4IgQAQIhfBYIgQAFg");
	var mask_graphics_32 = new cjs.Graphics().p("AJ7KIIj1jRQBUAJBHgSQAxgIBGglQBHghA/gZQBBgYA9gSQAngNAfAJIHCF4IgBABgA2jjJIH3nCIAMgCQAWAbBGAAQAdABAugFQAhgCBKgLQA8gHBCgFQB9gJBLAZQBCAWAdA4IgOAaIkLD4IgRAPIheBYIgQAFg");
	var mask_graphics_33 = new cjs.Graphics().p("AJ7KIIj2jRQBVAJBHgSQAygIBFgkQBIggA+gZQBBgYA9gUQAngNAfAJIHCF4IgCABgA2jjJIH2nCIANgCQAVAbBHAAQAcAAAugEQAigDBJgKQA8gHBCgFQB8gIBMAaQBCAVAeA4IgPAZIkKD4IgRAQIhfBYIgQAEg");
	var mask_graphics_34 = new cjs.Graphics().p("AJ7KIIj2jRQBVAIBHgRQAzgIBFgjQBHgfA/gaQBAgYA9gVQAogNAeAIIHCF5IgCABgA2jjJIH2nCIANgDQAUAcBHAAQAcAAAvgEQAigDBJgLQA9gGBAgFQB8gIBMAaQBCAWAfA3IgPAZIkLD4IgQAQIhfBXIgQAFg");
	var mask_graphics_35 = new cjs.Graphics().p("AJ7KHIj2jRQBVAJBHgRQA0gIBEgiICHg4QBAgZA8gVQAogPAeAJIHCF4IgCABgA2jjKIH2nBIAMgDQAVAbBHAAQAcAAAugEQAjgDBIgKQA9gHBBgEQB8gHBLAaQBCAWAgA2IgPAZIkLD4IgQAPIhfBYIgRAEg");
	var mask_graphics_36 = new cjs.Graphics().p("AJ7KHIj2jRQBVAIBHgQQA0gHBEghICHg4QBAgaA8gWQAogPAeAJIHCF4IgCABgA2jjKIH1nBIANgEQAUAcBHAAQAcAAAvgEQAjgDBIgKQA9gHBAgEQB7gGBNAaQBBAWAhA2IgQAYIkKD4IgRAQIheBXIgRAEg");
	var mask_graphics_37 = new cjs.Graphics().p("AJ7KHIj2jRQBVAIBHgQQA1gHBEggICHg4QA/gaA9gXQAogPAdAIIHCF5IgCABgA2jjKIH1nBIANgEQATAcBIgBQAcAAAugEQAkgDBHgKQA+gGBAgEQB6gGBNAbQBCAWAhA1IgQAYIkLD4IgQAPIhfBYIgQAEg");
	var mask_graphics_38 = new cjs.Graphics().p("AJ7KHIj2jRQBVAIBHgPQA2gIBDgfICHg3IB8gyQAogQAdAIIHCF5IgCABgA2jjKIH1nBIANgFQASAcBJAAQAcAAAugEQAlgDBGgKQA+gGA/gDQB6gGBOAbQBBAXAiAzIgRAZIkKD3IgQAQIhfBXIgRAEg");
	var mask_graphics_39 = new cjs.Graphics().p("AJ7KHIj2jRQBVAHBHgOQA3gHBCgeQBIgcA/gbIB8gzQAogRAdAIIHCF5IgCABgA2jjKIH1nBIANgFQASAcBIAAQAcAAAvgFQAlgDBGgJQA9gGBAgDQB5gFBOAcQBBAWAjAzIgRAYIkLD4IgQAPIheBXIgRAEg");
	var mask_graphics_40 = new cjs.Graphics().p("AJ7KHIj2jRQBVAHBHgOQA3gHBCgdQBJgbA/gbIB7g1QAogRAdAIIHCF5IgCABgA2jjKIH1nBIAMgFQASAcBJgBQAbAAAwgEQAlgDBFgJQA+gGA/gCQB5gFBOAcQBBAWAkAzIgRAYIkLD3IgQAPIheBYIgRADg");
	var mask_graphics_41 = new cjs.Graphics().p("AJ7KHIj2jRQBVAIBHgOQA4gHBCgcQBIgbBAgcIB6g1QAogSAdAIIHCF5IgCABgA2jjKIH0nAIANgGQARAdBKgCQAbAAAwgEQAlgDBFgJQA9gGBAgCQB3gDBQAbQBAAXAlAxIgRAYIkLD3IgQAQIhfBXIgRADg");
	var mask_graphics_42 = new cjs.Graphics().p("AJ6KHIj1jRQBUAHBIgNQA5gGBBgcQBJgaA/gcQA+gbA8gcQAogRAdAHIHCF5IgCABgA2jjKIH0nAIAMgGQARAdBKgCQAbAAAwgEQAlgDBFgJQA+gFA/gDQB3gCBPAcQBBAWAlAxIgRAYIkLD2IgQAQIheBYIgRACg");
	var mask_graphics_43 = new cjs.Graphics().p("AJ6KHIj1jRQBUAHBIgNQA6gGBBgaQBJgaA/gbQA+gcA7gdQApgSAcAHIHCF5IgCABgA2jjKIH0nAIAMgGQARAdBKgCQAbAAAvgEQAmgEBEgIQA/gGA+gBQB3gCBQAcQBAAXAmAvIgSAYIkKD3IgQAPIheBYIgRACg");
	var mask_graphics_44 = new cjs.Graphics().p("AJ6KHIj1jRQBUAHBIgMQA6gGBBgZQBJgZA/gdQA+gbA7geQApgTAcAIIHCF5IgCAAgA2jjKIH0m/IAMgHQAQAdBKgCQAbAAAwgEQAmgDBEgJQA/gFA9gBQB3gCBQAdQBBAWAmAvIgSAYIkKD3IgRAPIhdBXIgSACg");
	var mask_graphics_45 = new cjs.Graphics().p("AJ6KHIj1jRQBUAHBIgLQA7gHBAgYQBKgYA/gdQA9gcA7geQApgUAcAIIHCF5IgDAAgA2jjKIHzm/IANgHQAPAcBLgBQAbAAAwgEIBpgMQBAgFA9gBQB2gBBQAdQBBAXAnAuIgTAXIkKD3IgQAPIheBXIgRACg");
	var mask_graphics_46 = new cjs.Graphics().p("AJ6KIIj1jSQBUAHBIgLQA8gGBAgXQBJgXBAgdQA8gdA7gfQApgUAcAHIHCF5IgDABgA2jjKIHzm/IAMgIQAQAeBKgCQAbgBAwgDQAogEBCgHQA/gGA9gBQB2AABRAdQBAAXAoAuIgTAWQiJB/iBB5IgQAPIheBXIgRABg");
	var mask_graphics_47 = new cjs.Graphics().p("AJ6KIIj1jSQBTAHBJgKQA9gHA/gWQBKgWA/geQA9gcA7ghQApgUAbAHIHCF5IgDABgA2jjKIHzm/IAMgIQAPAeBLgCQAbgBAwgDIBpgLQBAgGA9AAQB1AABRAdQBAAYApAtIgTAWIkKD3IgQAPIheBXIgSABg");
	var mask_graphics_48 = new cjs.Graphics().p("AJ6KIIj1jSQBTAHBJgKQA+gGA/gVQBJgXBAgdQA8gdA7ghQApgVAbAHIHCF5IgDABgA2jjKIHzm/IAMgIQAOAeBMgCQAagBAxgEQAogDBBgHQBAgGA8AAQB1ABBRAeQBAAXAqAsIgUAXIkKD2IgQAPIhdBXg");
	var mask_graphics_49 = new cjs.Graphics().p("AJ6KIIj1jRQBTAGBJgJQA+gGA/gVQBKgVA/geQA8gdA7giQApgWAbAHIHCF5IgDABgA2jjJIHzm/IAMgJQAOAeBLgCQAbgBAwgEIBpgKQBBgGA8ABQBzABBTAfQBAAXAqArIgUAWIkKD3IgQAPIheBXg");
	var mask_graphics_50 = new cjs.Graphics().p("AJ6KIIj1jRQBTAGBJgJQA/gGA+gTQBKgVBAgeQA8geA6giQApgXAbAHIHCF5IgDABgA2jjJIHym/IAMgJQAOAeBMgCIBLgFQApgDBAgIQBAgFA8ABQBzACBTAfQBAAXArAqIgVAWIkJD3IgQAPIheBXg");
	var mask_graphics_51 = new cjs.Graphics().p("AJ6KIIj1jRQBTAFBJgIQBAgFA9gTQBLgUA/geQA8geA6gkQAqgXAaAHIHCF6gA2kjJIHzm/IAMgJQANAeBNgDQAZAAAxgEIBqgLQBAgEA7ABQBzACBTAfQBAAXAsAqIgWAWIkJD2IgQAPIheBXg");
	var mask_graphics_52 = new cjs.Graphics().p("AJ6KIIj1jRQBTAGBJgIQBAgFA+gSQBKgUBAgeQA7gfA6gkQAqgXAaAGIHCF6gA2kjJIHym+IANgKQAMAeBNgCIBLgGQAqgCA/gIQBBgEA6ACQBzACBTAgQBAAXAtApIgWAVIkJD3IgQAOIheBYg");
	var mask_graphics_53 = new cjs.Graphics().p("AJ6KIIj1jRQBSAGBKgHQBCgGA8gRQBLgTBAgeQA7gfA5gmQAqgXAaAGIHCF6gA2kjJIHym+IANgKQAMAeBNgCIBLgGIBpgKQBAgEA7ACQByADBUAgQA/AYAuAoIgWAUIkKD3IgPAPIheBXg");
	var mask_graphics_54 = new cjs.Graphics().p("AJ6KIIj1jRQBSAFBKgGQBCgFA8gQQBLgSBAgfQA6gfA7gmQApgZAaAHIHCF5gA2kjJIHym9IAMgLQAMAeBOgDIBLgFQAqgDA+gGQBBgFA6ACQBxAFBVAfQA/AYAvAnIgWAVIkKD2IgPAPIheBYg");
	var mask_graphics_55 = new cjs.Graphics().p("AJ6KIIj1jRQEHAQCuheQArgXA6gnQAqgZAZAHIHCF5gA2kjJIH+nIQALAeBOgDQAwgBCDgNQEfgVCRB2QiVCJiLCCIhuBmg");
	var mask_graphics_56 = new cjs.Graphics().p("AJ7KIIj2jRQCIAJBwgVQA2gKAxgSQAtgQApgWQAsgYA5gmQAqgZAZAHIHCF5gA2kjJIH+nIQALAeBOgCIASgBQAqgCBSgIIAlgEQBXgGBJAHQCqAOBmBSIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_57 = new cjs.Graphics().p("AJ7KIIj2jRQCIAJBwgVQA2gKAxgSQAtgRApgWQArgXA6gmQApgZAaAHIHCF5gA2kjJIH+nIQAMAeBMgCIASgBQArgCBSgIIAlgDQBWgHBJAHQCrAOBmBSIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_58 = new cjs.Graphics().p("AJ7KIIj2jRQCIAJBwgVQA3gKAvgSQAugRApgWQArgXA6gmQApgZAaAHIHCF5gA2kjJIH+nIQAMAeBMgCIASAAQArgCBSgJIAlgDQBWgGBJAGQCqAPBnBRIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_59 = new cjs.Graphics().p("AJ7KIIj2jRQCJAJBvgVQA3gLAvgRQAugSAogVQAsgYA5glQAqgZAaAHIHCF5gA2kjJIH+nIQAMAeBMgCIASAAQAqgCBSgIIAlgEQBXgGBJAHQCpAOBoBRIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_60 = new cjs.Graphics().p("AJ7KIIj2jRQCJAJBvgVQA3gLAvgSQAugRAogWQAsgXA5glQAqgZAaAHIHCF5gA2kjJIH+nIQAMAfBMgCIASgBQAqgCBSgIIAlgDQBXgGBJAGQCpAOBoBRIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_61 = new cjs.Graphics().p("AJ7KIIj2jRQCKAJBugVQA3gLAvgSQAugSAogVQArgYA6glQAqgYAaAHIHCF5gA2kjJIH+nIQAMAfBMgCIASAAQApgCBTgIIAlgEQBWgGBKAGQCoAOBpBRIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_62 = new cjs.Graphics().p("AJ7KIIj2jRQCKAJBugWQA2gKAwgSQAtgSApgWQArgXA6glQAqgYAaAHIHCF5gA2kjJIH+nIQANAfBKgCIASAAQArgCBSgIIAlgEQBWgGBJAHQCqAOBoBQIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_63 = new cjs.Graphics().p("AJ7KIIj2jRQCKAJBugWQA2gKAwgSQAtgTAogVQAsgXA6glQAqgYAaAHIHCF5gA2kjJIH+nIQANAfBKgBIASAAQAqgCBTgJIAkgDQBXgGBJAGQCpAOBpBQIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_64 = new cjs.Graphics().p("AJ7KIIj2jRQCKAJBugWQA2gKAwgTQAtgSAogWQAsgXA6gkQApgYAbAHIHCF5gA2kjJIH+nIQANAfBKgBIASAAQAqgCBSgIIAlgEQBXgGBJAGQCpAOBpBQIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_65 = new cjs.Graphics().p("AJ7KIIj2jRQCLAJBtgWQA2gKAwgTQAtgTAogVQArgXA6gkQAqgYAbAHIHCF5gA2kjJIH+nIQAMAfBLgBIASAAQAqgCBSgIIAlgDQBXgHBJAHQCoANBqBQIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_66 = new cjs.Graphics().p("AJ7KIIj2jRQCLAJBtgWQA2gKAwgTQAtgTAogVQArgXA6gkQAqgYAaAHIHDF5gA2kjJIH+nIQANAgBKgBIARAAQAqgCBTgIIAlgEQBWgGBKAGQCoAOBqBPIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_67 = new cjs.Graphics().p("AJ7KIIj2jRQCLAJBtgWQA2gKAvgTQAugUAogVQArgXA6gjQApgYAbAHIHDF5gA2kjJIH+nIQANAgBKgBIARAAQAqgCBTgIIAlgEQBWgGBKAGQCnAOBrBPIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_68 = new cjs.Graphics().p("AJ7KIIj2jRQCLAIBtgVQA2gKAvgUQAugTAngVQArgXA7gjQApgYAbAHIHDF5gA2kjJIH+nIQANAgBJgBIASAAQApgBBUgJIAkgDQBXgHBKAHQCmANBsBPIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_69 = new cjs.Graphics().p("AJ7KIIj2jRQCMAIBsgVQA2gKAvgUQAtgUAogVQArgXA7gjQApgWAbAGIHDF5gA2kjJIH+nIQANAgBJAAIASAAQAqgCBSgIIAlgEQBXgGBJAGQCnANBsBPIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_70 = new cjs.Graphics().p("AJ7KIIj2jRQCMAIBsgVQA2gKAvgUQAtgUAogVQAsgXA6gjQApgWAbAGIHDF5gA2kjJIH+nIQANAgBJAAIASAAQApgBBTgJIAlgEQBXgGBJAGQCnAOBsBOIgBABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_71 = new cjs.Graphics().p("AJ7KIIj2jRQCMAIBsgVQA2gKAvgUQAugVAngVQArgWA7gjQApgWAbAGIHDF5gA2kjJIH+nIQANAgBJAAIARAAQApgBBUgJIAlgDQBWgHBKAHQCmANBsBOIAAABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_72 = new cjs.Graphics().p("AJ7KIIj2jRQCMAIBsgVQA2gLAvgUQAtgUAogVQArgXA7giQApgWAbAGIHDF5gA2kjJIH+nIQANAhBJAAIARAAQApgCBUgIIAlgEQBWgGBKAGQClANBtBOIAAABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_73 = new cjs.Graphics().p("AJ7KIIj2jRQCMAIBsgVQA2gLAvgUQAtgVAogUQAqgXA8giQApgWAbAGIHDF5gA2kjJIH+nIQAOAhBHAAIASAAQApgBBUgJIAlgDQBWgHBKAGQClAOBtBNIAAABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_74 = new cjs.Graphics().p("AJ7KIIj2jRQCNAIBrgVQA2gLAvgUQAtgVAogVIBmg4QApgWAbAGIHDF5gA2kjJIH+nIQAOAhBHAAIASAAQApgBBUgIIAlgEQBWgHBJAHQCmANBtBNIAAABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_75 = new cjs.Graphics().p("AJ7KIIj2jRQCNAIBrgVQA2gLAvgVQAtgVAngUQArgXA8ghQApgWAbAGIHDF5gA2kjJIH+nIQAOAhBHAAIASABQApgBBUgJIAkgEQBXgGBJAGQClANBuBNIAAABQiVCIiKCCIgBABIhtBlg");
	var mask_graphics_76 = new cjs.Graphics().p("AJ7KIIj2jRQCNAIBrgVQA2gLAugVQAugVAngVIBng3QApgWAcAGIHCF5gA2jjJIH9nIQAOAhBHABIASAAQAogBBUgJIAlgDQBXgHBJAGQClANBvBNIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_77 = new cjs.Graphics().p("AJ7KIIj2jRQCNAIBrgVQA2gLAugVQAugWAngUIBng4QApgVAcAGIHCF5gA2jjJIH9nIQAOAhBHABIASAAQAoAABUgJIAlgEQBXgGBJAFQClAOBvBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_78 = new cjs.Graphics().p("AJ7KIIj2jRQCOAIBqgVQA2gLAugVQAugWAngVIBng3QAogVAdAGIHCF5gA2jjJIH9nIQAPAhBGABIARABQApgBBUgJIAlgDQBWgHBKAGQCkANBwBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_79 = new cjs.Graphics().p("AJ7KIIj2jRQCOAIBqgVQA2gLAugWIBUgqIBog3QAogVAdAGIHCF5gA2jjJIH9nIQAPAiBGABIARAAQApgBBUgIIAkgEQBXgHBJAGQClANBwBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_80 = new cjs.Graphics().p("AJ7KIIj2jRQCOAIBqgVQA2gLAugWIBUgqIBog3QAogVAdAGIHCF5gA2jjJIH9nIQAPAiBGABQAHABAKgBQAoAABVgJIAkgEQBXgGBJAFQCkANBxBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_81 = new cjs.Graphics().p("AJ7KIIj2jRQCOAIBqgVQA2gLAugWIBUgrIBog2QAogVAdAGIHCF5gA2jjJIH9nIQAPAiBFABIASABQAogBBUgJIAlgDQBXgHBJAGQCkANBxBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_82 = new cjs.Graphics().p("AJ7KIIj2jRQCPAIBpgVQA2gLAugWIBUgrIBog2QAogVAdAGIHCF5gA2jjJIH9nIQAPAiBFACIASAAQAoAABUgJIAlgEQBXgHBJAGQCjANByBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_83 = new cjs.Graphics().p("AJ7KIIj2jRQCPAIBpgVQA2gLAugXIBUgrIBog1QAogVAdAGIHCF5gA2jjJIH9nIQAPAiBFACIARABQAogBBVgJIAkgEQBYgGBJAFQCjANByBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_84 = new cjs.Graphics().p("AJ7KIIj2jRQCPAIBpgVQA2gLAugXIBTgrIBpg1QAogVAdAGIHCF5gA2jjJIH9nIQAPAiBFACIARABQAoAABVgJIAkgEQBXgHBJAGQCjAMBzBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_85 = new cjs.Graphics().p("AJ7KIIj2jRQCPAIBpgVQA2gMAtgWIBUgsIBog1QAogUAeAGIHCF5gA2jjJIH9nIQAPAjBFACIARAAQAoAABVgJIAkgEQBXgHBJAGQCjANBzBKIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_86 = new cjs.Graphics().p("AJ7KIIj2jRQCQAIBogVQA2gMAtgWIBUgsIBog1QAogTAdAFIHDF5gA2jjJIH9nIQAQAjBDACIASABQAngBBVgJIAlgDQBXgHBJAFQCjANBzBJIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_87 = new cjs.Graphics().p("AJ7KIIj2jRQCQAIBogVQA2gMAtgXIBUgrQArgXA9geQAogTAdAFIHDF5gA2jjJIH9nIQAQAjBDACIASABQAnAABVgJIAlgEQBXgHBJAGQCiAMB0BJIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_88 = new cjs.Graphics().p("AJ7KIIj2jRQCQAIBogVQA2gMAtgXIBUgsIBog0QAogTAdAFIHDF5gA2jjJIH9nIQAQAjBDACIARABQAoAABVgJIAkgEQBYgHBJAGQCiAMB0BJIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_89 = new cjs.Graphics().p("AJ7KIIj2jRQCQAIBogVQA2gMAtgXIBTgsIBpg0QAogTAdAFIHDF5gA2jjJIH9nIQAQAjBDADIARABQAoAABVgJIAkgEQBXgHBJAFQCiANB1BIIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_90 = new cjs.Graphics().p("AJ7KIIj2jRQCRAIBngWQA2gLAtgXIBTgtQArgWA+gdQAogTAdAFIHDF5gA2jjJIH9nIQAQAjBDADIARABQAnAABWgJIAkgEQBXgHBJAGQCiAMB1BIIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_91 = new cjs.Graphics().p("AJ7KIIj2jRQCRAIBngWQA2gLAtgYIBTgsQArgWA+gdQAngTAeAFIHDF5gA2jjJIH9nIQAQAkBDACIARABQAnAABVgJIAlgDQBXgIBJAGQChAMB2BIIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_92 = new cjs.Graphics().p("AJ7KIIj2jRQCRAIBngWQA2gLAtgYIBTgtQArgWA+gcQAngTAeAFIHDF5gA2jjJIH9nIQAQAkBCADIASABQAnAABVgJIAkgEQBYgHBJAFQChANB2BHIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_93 = new cjs.Graphics().p("AJ7KIIj2jRQCRAIBngWQA2gLAtgYIBSgtQAsgWA+gdQAngSAeAFIHDF5gA2jjJIH9nIQAQAkBCADIARABQAnAABWgJIAkgEQBYgHBJAGQCgAMB3BHIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_94 = new cjs.Graphics().p("AJ7KIIj2jRQCRAIBngWQA2gLAsgZIBTgsQArgWA/gdQAngSAeAFIHDF5gA2jjJIH9nIQARAkBBADIARABQAnABBWgKIAkgDQBXgHBJAFQChAMB3BHIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_95 = new cjs.Graphics().p("AJ7KIIj2jRQCSAIBmgWQA2gLAsgZQAtgZAmgUQArgWA/gcQAngSAeAFIHDF5gA2jjJIH9nIQARAkBBAEIARABQAnAABWgJIAkgEQBXgHBJAFQCgAMB4BHIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_96 = new cjs.Graphics().p("AJ7KIIj2jRQCSAIBmgWQA2gLAsgZQAtgaAmgTQArgWA/gcQAngSAeAFIHDF5gA2jjJIH9nIQARAkBBAEIARABQAmABBWgKIAlgEQBXgHBJAGQCgAMB4BGIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_97 = new cjs.Graphics().p("AJ7KIIj2jRQCSAIBmgWQA2gLAsgZQAtgaAmgUQArgVA/gcQAngSAeAFIHDF5gA2jjJIH9nIQARAlBAADIASABQAmABBWgJIAkgEQBYgHBJAFQCfAMB5BGIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_98 = new cjs.Graphics().p("AJ7KIIj2jRQCSAIBmgWQA2gMAsgZQAtgaAlgTQArgWA/gbQAngSAfAFIHDF5gA2jjJIH9nIQARAlBAAEIARABQAnAABWgJIAkgEQBYgHBJAFQCfAMB5BGIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_99 = new cjs.Graphics().p("AJ7KIIj2jRQCTAIBlgWQA1gMAtgZQAtgaAlgUQArgVA/gbQAngSAfAFIHDF5gA2jjJIH9nIQARAlBAAEIARABQAnABBWgKIAkgDQBYgIBIAGQCgALB5BGIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_100 = new cjs.Graphics().p("AJ7KIIj2jRQCTAIBlgWQA1gMAtgZQAtgbAlgTQArgWA/gaQAngSAfAFIHDF5gA2jjJIH9nIQARAlBAAEIARABQAmABBXgJIAkgEQBXgHBJAFQCfAMB6BFIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_101 = new cjs.Graphics().p("AJ7KIIj2jRQCTAIBlgWQA1gMAtgZQAtgbAlgTQArgWA/gbQAngRAfAFIHDF5gA2jjJIH9nIQARAlBAAEQAHACAKAAQAmABBWgKIAkgEQBYgHBJAFQCfAMB6BFIAAABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_102 = new cjs.Graphics().p("AJ7KIIj2jRQCTAIBlgWQA1gMAtgaQAsgbAlgTQAsgVA/gbQAngRAfAFIHDF5gA2jjJIH9nIQARAlA/AFIASABQAmABBWgJIAkgEQBYgIBJAGQCeALB6BFIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_103 = new cjs.Graphics().p("AJ7KIIj2jRQCUAIBkgWQA1gMAsgaQAtgbAlgTQArgWBAgaQAngRAfAFIHDF5gA2jjJIH9nIQASAmA+AEIARACQAmABBXgKIAkgEQBYgHBIAFQCfALB6BFIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_104 = new cjs.Graphics().p("AJ7KIIj2jRQCUAIBkgWQA1gMAsgaQAtgcAlgTQArgVBAgaQAngQAfAEIHDF5gA2jjJIH9nIQASAmA+AEQAIACAJAAQAmABBXgKIAkgEQBYgHBIAFQCeAMB7BEIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_105 = new cjs.Graphics().p("AJ7KIIj2jRQCUAIBkgWQA1gMAsgaQAtgcAlgTQArgWBAgZQAmgQAgAEIHDF5gA2jjJIH9nIQASAmA+AFIARABQAmABBXgJIAkgEQBXgIBJAGQCeALB7BEIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_106 = new cjs.Graphics().p("AJ7KIIj2jRQCUAIBkgWQA1gMAsgbQAtgcAlgTQArgVBAgZQAmgQAgAEIHDF5gA2jjJIH9nIQASAmA+AFIARACQAlABBXgKIAkgEQBYgHBJAFQCdALB8BEIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_107 = new cjs.Graphics().p("AJ7KIIj2jRQCVAIBigWQA2gMAsgbQAtgcAkgTQAsgVBAgZQAmgQAgAEIHDF5gA2jjJIH9nIQASAmA+AFQAHACAJAAQAmABBXgJIAkgEQBYgIBJAFQCdALB8BEIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_108 = new cjs.Graphics().p("AJ7KIIj2jRQCVAIBigWQA2gMAsgbQAtgdAkgSQArgWBBgYQAmgQAgAEIHDF5gA2jjJIH9nIQASAmA9AGIARABQAmACBXgKIAkgEQBYgIBIAGQCdALB9BDIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_109 = new cjs.Graphics().p("AJ7KIIj2jRQCVAIBigWQA2gMAsgcQAtgcAkgTQArgVBBgZQAmgPAgAEIHDF5gA2jjJIH9nIQASAnA9AFIARACQAmABBXgKIAkgEQBYgHBIAFQCdALB9BDIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_110 = new cjs.Graphics().p("AJ7KIIj2jRQCVAIBigWQA2gMAsgcQAsgdAlgSQArgVBBgZQAmgPAgAEIHDF5gA2jjJIH9nIQASAnA9AFQAIACAJAAQAlACBYgKIAjgEQBYgIBJAFQCcALB+BDIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_111 = new cjs.Graphics().p("AJ7KIIj2jRQCVAIBigWQA2gNAsgbQAsgdAkgTQAsgVBAgYQAngPAgAEIHDF5gA2jjJIH9nIQATAnA8AGIARABQAlACBXgKIAkgEQBYgHBJAFQCcALB+BCIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_112 = new cjs.Graphics().p("AJ7KIIj2jRQCWAIBhgWQA2gNArgbQAtgeAkgSQArgVBBgYQAmgPAhAEIHDF5gA2jjJIH9nIQATAnA8AGIAQACQAmABBXgKIAkgDQBYgIBJAFQCcALB+BCIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_113 = new cjs.Graphics().p("AJ7KIIj2jRQCWAIBhgWQA2gNArgcQAtgdAkgTQArgVBBgXQAmgPAhAEIHDF5gA2jjJIH9nIQATAnA7AGIARACQAlACBYgKIAkgEQBYgIBIAFQCcALB/BCIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_114 = new cjs.Graphics().p("AJ7KIIj2jRQCWAIBhgWQA2gNArgcQAtgeAkgSQArgVBBgXQAmgPAhAEIHDF5gA2jjJIH9nIQATAnA7AGIARACQAlACBYgKIAkgEQBYgHBIAFQCcAKB/BCIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_115 = new cjs.Graphics().p("AJ7KIIj2jRQCWAIBhgWQA2gNArgcQAtgeAkgSQArgVBBgXQAmgPAhAEIHDF5gA2jjJIH9nIQATAoA7AGIARACQAlACBYgKIAjgEQBZgIBIAFQCbALCABBIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_116 = new cjs.Graphics().p("AJ7KIIj2jRQCXAIBggWQA2gNArgcQAtgfAjgSQAsgVBBgWQAmgPAhAEIHDF5gA2jjJIH9nIQATAoA7AGIARACQAkACBYgKIAkgEQBYgIBJAFQCbALCABBIABABQiVCJiKCBIgBABIhtBlIgBABg");
	var mask_graphics_117 = new cjs.Graphics().p("AJ7KJIj2jSQCXAHBhgVQA1gNArgdQAtgeAjgSQAsgVBBgWQAmgOAhADIHDF5gA2jjJIH9nIQAUAoA6AGIARADQAkACBYgKIAkgFQBYgHBJAFQCaALCCBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_118 = new cjs.Graphics().p("AJ7KJIj2jSQCYAHBggVQA1gNArgdQAsgeAkgSQArgVBCgWQAmgOAhADIHDF5gA2jjJIH9nIQAUAoA6AHIARACQAkACBYgKIAkgEQBYgIBIAFQCbALCCBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_119 = new cjs.Graphics().p("AJ7KJIj2jSQCYAHBggVQA1gNArgdQAsgfAkgSQArgUBCgWQAlgOAiADIHDF5gA2jjJIH9nIQAUAoA6AIIAQACQAkACBZgKIAjgFQBZgHBIAEQCbALCCBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_120 = new cjs.Graphics().p("AJ7KJIj2jSQCYAHBggVQA1gNArgdQAtggAigRQAsgVBCgVQAlgOAiADIHDF5gA2jjJIH9nIQAUAoA6AIIAQACQAkACBZgKIAjgEQBZgIBIAFQCaAKCDBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_121 = new cjs.Graphics().p("AJ7KJIj2jSQCYAHBggVQA1gNArgeQAsgfAjgRQAsgVBCgWQAlgNAiADIHDF5gA2jjJIH9nIQAUApA5AHIARACQAkADBYgLIAkgEQBYgIBJAFQCZAKCEBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_122 = new cjs.Graphics().p("AJ7KJIj2jSQCZAHBfgVQA1gNAqgeQAtgfAjgSQAsgVBCgVQAlgNAiADIHDF5gA2jjJIH9nIQAUApA5AHQAIACAIABQAlACBYgLIAkgDQBYgIBJAEQCZALCEA/IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_123 = new cjs.Graphics().p("AJ7KJIj2jSQCZAHBfgVQA1gNAqgeQAtggAjgSQAsgUBBgVQAmgNAiADIHDF5gA2jjJIH9nIQAVApA4AIIAQACQAkACBZgKIAkgEQBYgIBIAFQCaAKCEA/IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_124 = new cjs.Graphics().p("AJ7KJIj2jSQCZAHBfgVQA1gNAqgeQAtghAjgRQArgVBCgUQAmgNAiADIHDF5gA2jjJIH9nIQAUApA5AIIAQACQAkADBZgLIAjgDQBZgJBIAFQCZAKCFA/IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_125 = new cjs.Graphics().p("AJ7KJIj2jSQCZAHBfgVQA1gNAqgeQAtghAigSQAsgUBCgUQAmgNAiADIHDF5gA2jjJIH9nIQAUAqA5AHQAHACAJAAQAkADBZgKIAjgEQBZgIBIAEQCZALCFA+IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_126 = new cjs.Graphics().p("AJ7KJIj2jSQCZAHBfgVQA1gNAqgfQAtggAigSQArgVBDgTQAlgNAjADIHDF5gA2jjJIH9nIQAVApA3AJIARACQAkACBYgKIAkgEQBYgIBJAFQCYAKCGA+IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_127 = new cjs.Graphics().p("AJ7KJIj2jSQCaAHBdgVQA2gNAqgfQAsghAjgRQArgVBDgTQAmgNAhADIHEF5gA2jjJIH9nIQAVApA3AJQAIACAIAAQAlADBYgLIAkgDQBYgIBJAEQCYAKCGA+IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_128 = new cjs.Graphics().p("AJ7KJIj2jSQCaAHBdgVQA2gNAqgfQAsgiAjgRQArgUBDgTQAmgNAhADIHEF5gA2jjJIH9nIQAVAqA3AIQAIACAIAAQAkAEBZgLIAjgEQBagIBIAEQCXALCHA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_129 = new cjs.Graphics().p("AJ7KJIj2jSQCaAHBdgVQA2gNAqgfQAsgiAjgRQArgUBDgUQAlgMAiADIHEF5gA2jjJIH9nIQAVAqA2AJIARACQAjADBagLIAjgDQBZgJBJAFQCXAKCHA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_130 = new cjs.Graphics().p("AJ7KJIj2jSQCaAHBdgVQA2gOAqgfQAsgiAigRQAsgUBDgTQAlgMAiADIHEF5gA2jjJIH9nIQAVAqA2AJQAIACAJAAQAjADBagKIAjgEQBZgJBJAFQCWAKCIA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_131 = new cjs.Graphics().p("AJ7KJIj2jSQCbAIBcgXQA2gNApgfQAtgiAigRQArgUBEgTQAlgMAiADIHEF5gA2jjJIH9nIQAWArA1AIQAIACAIAAQAkADBZgKIAkgEQBZgIBIAFQCXAJCIA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_132 = new cjs.Graphics().p("AJ7KJIj2jSQCbAIBcgXQA2gNApgfQAtgjAigRQAsgTBDgTQAlgMAiADIHEF5gA2jjJIH9nIQAWAqA1AJIAQADQAkADBZgLIAkgEQBYgIBJAFQCXAKCHA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_133 = new cjs.Graphics().p("AJ7KJIj2jSQCbAIBcgXQA2gNApgfQAtgjAigRQArgUBEgSQAlgLAiACIHEF5gA2jjJIH9nIQAWAqA1AJIAQADQAkAEBZgLIAjgEQBagIBIAEQCWAKCIA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_134 = new cjs.Graphics().p("AJ7KJIj2jSQCbAIBcgXQA2gNApggQAtgiAhgRQAsgUBEgSQAlgLAiACIHEF5gA2jjJIH9nIQAWArA0AJQAJACAIAAQAjAEBagKIAjgFQBZgIBJAFQCVAJCJA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_135 = new cjs.Graphics().p("AJ7KJIj2jSQCbAIBcgXQA2gNApggQAsgjAigQQAsgVBEgRQAlgLAiACIHEF5gA2jjJIH9nIQAWArA0AJIARADQAjADBZgKIAkgFQBZgHBIAEQCWAJCJA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_136 = new cjs.Graphics().p("AJ7KJIj2jSQCbAIBcgXQA2gOApgfQAsgjAigRQAsgUBDgRQAlgLAjACIHEF5gA2jjJIH9nIQAWArA0AJIAQADQAkAEBZgLIAkgEQBZgIBIAEQCWAKCJA7IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_137 = new cjs.Graphics().p("AJ7KJIj2jSQCcAIBbgXQA2gOApgfQAsgkAigQQAsgVBDgRQAlgLAjADIHEF5gA2jjJIH9nIQAWArA0AKQAIACAIAAQAkAEBZgKIAkgFQBYgIBJAFQCVAICKA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_138 = new cjs.Graphics().p("AJ7KJIj2jSQCcAIBbgXQA2gOApggQAsgkAigQQArgUBEgRQAlgLAjADIHEF5gA2jjJIH9nIQAWArA0AKIAQADQAjADBagKIAkgFQBYgHBJAEQCVAJCKA7IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_139 = new cjs.Graphics().p("AJ7KJIj2jSQCdAIBagXQA2gOApggQArgkAjgQQArgVBEgQQAlgKAjACIHEF5gA2jjJIH9nIQAWArA0AKIAQAEQAjADBagKIAjgFQBZgJBJAFQCVAJCKA7IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_140 = new cjs.Graphics().p("AJ7KJIj2jSQCdAIBagXQA1gNApgiQAsgjAjgRQAqgUBFgQQAlgKAjACIHEF5gA2jjJIH9nIQAWAsAzAKQAJACAIABQAiAEBbgLIAjgFQBZgIBIAFQCVAJCLA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_141 = new cjs.Graphics().p("AJ7KJIj2jSQCdAIBagXQA1gNApgiQAsgkAigQQAsgUBEgQQAlgKAjACIHEF5gA2jjJIH9nIQAWAsAzAKIAQADQAjAEBbgLIAjgEQBZgJBIAFQCVAJCLA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_142 = new cjs.Graphics().p("AJ7KJIj2jSQCdAHBagWQA1gOApghQAsglAigPQAsgVBEgPQAlgKAjACIHEF5gA2jjJIH9nIQAXAsAyAKIAQAEQAjAEBbgLIAjgFQBYgIBJAEQCUAJCMA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_143 = new cjs.Graphics().p("AJ7KJIj2jSQCdAHBagWQA1gOApgiQAsgkAigQQArgUBFgPQAkgKAkACIHEF5gA2jjJIH9nIQAXAtAyAJQAHADAJABQAjADBagKIAkgFQBYgIBJAEQCUAKCMA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_144 = new cjs.Graphics().p("AJ7KJIj2jSQCeAHBZgWQA2gOAogiQAsgkAigRQArgTBFgPQAkgKAkACIHEF5gA2jjJIH9nIQAXAsAyALIAQADQAiAEBbgLIAjgEQBZgJBJAFQCTAICNA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_145 = new cjs.Graphics().p("AJ7KJIj2jSQCeAHBZgWQA2gOAogiQAsglAhgQQArgUBGgPQAkgJAkACIHEF5gA2jjJIH9nIQAXAtAxAKIARAEQAiAEBbgMIAjgDQBZgJBIAEQCUAJCNA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_146 = new cjs.Graphics().p("AJ7KJIj2jSQCeAHBZgWQA2gOAogiQAsglAhgRQArgTBGgPQAkgJAkACIHEF5gA2jjJIH9nIQAXAtAxAKQAIADAJABQAhAEBcgLIAjgEQBZgJBIAEQCTAJCOA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_147 = new cjs.Graphics().p("AJ7KJIj2jSQCeAHBZgWQA2gOAogjQAsglAhgQQArgUBGgOQAkgJAkACIHEF5gA2jjJIH9nIQAXAtAxALIARADQAhAFBcgMIAjgEQBZgJBIAFQCTAICOA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_148 = new cjs.Graphics().p("AJ7KJIj2jSQCeAHBZgWQA2gOAogjQArglAigQQArgUBGgOQAjgJAlACIHEF5gA2jjJIH9nIQAYAtAwALQAIACAIACQAiAEBbgLIAjgEQBZgJBJAEQCSAICPA5IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_149 = new cjs.Graphics().p("AJ7KJIj2jSQCeAHBZgWQA2gPAngiQAsgmAigQQArgUBFgOQAkgHAlABIHEF5gA2jjJIH9nIQAYAtAwAMQAIACAIABQAhAEBcgLIAjgEQBZgJBJAEQCSAJCPA4IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_150 = new cjs.Graphics().p("AJ7KJIj2jSQCfAHBYgWQA2gPAngiQAsgmAhgQQArgUBGgOQAkgHAlABIHEF5gA2jjJIH9nIQAXAtAwAMIARADQAiAFBbgMIAjgDQBZgKBIAFQCTAICPA4IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_151 = new cjs.Graphics().p("AJ7KJIj2jSQCfAHBYgWQA2gOAngkQAsgmAhgQQArgTBGgOQAkgHAlABIHEF5gA2jjJIH9nIQAXAtAwAMQAIACAJABQAhAFBcgLIAjgEQBZgJBIAEQCSAICQA4IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_152 = new cjs.Graphics().p("AJ7KJIj2jSQCfAHBYgWQA1gOAogkQAsgmAhgQQArgUBGgNQAkgHAlABIHEF5gA2jjJIH9nIQAYAuAvAMQAIACAJABQAhAEBcgLIAjgEQBZgIBIADQCSAJCQA3IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_153 = new cjs.Graphics().p("AJ7KJIj2jSQCfAHBYgWQA1gPAogjQAsgnAhgQQArgTBGgNQAkgIAlACIHEF5gA2jjJIH9nIQAYAuAvAMIAQADQAiAFBbgMIAjgDQBagJBHAEQCSAICRA3IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_154 = new cjs.Graphics().p("AJ7KJIj2jSQCgAHBXgWQA1gPAogjQArgnAigQQArgTBGgNQAkgIAlACIHEF5gA2jjJIH9nIQAYAuAvAMQAIACAIABQAhAFBcgLIAjgEQBagJBHAEQCRAICSA3IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_155 = new cjs.Graphics().p("AJ7KJIj2jSQCgAHBXgWQA1gOAoglQAsgmAggQQArgTBHgNQAkgIAlACIHEF5gA2jjJIH9nIQAYAuAvANQAIACAIABQAhAFBcgMIAigEQBbgIBHADQCRAJCSA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_156 = new cjs.Graphics().p("AJ7KJIj2jSQCgAHBXgWQA1gPAogkQAsgnAggPQArgUBHgMQAjgIAmACIHEF5gA2jjJIH9nIQAYAuAvANIAQADQAgAFBdgLIAigFQBagIBIAEQCRAICSA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_157 = new cjs.Graphics().p("AJ7KJIj2jSQCgAHBXgWQA1gPAogkQAsgnAfgQQAsgTBHgNQAjgGAmABIHEF5gA2jjJIH9nIQAYAuAvANQAHADAJAAQAgAFBdgKIAigFQBagJBIAEQCQAICTA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_158 = new cjs.Graphics().p("AJ7KJIj1jSQCgAHBWgXQA1gOAogkQArgoAhgPQArgUBHgMQAjgGAmABIHEF5gA2jjJIH+nIQAYAuAtAOIAQADQAhAFBcgLIAjgFQBagJBIAFQCQAHCTA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_159 = new cjs.Graphics().p("AJ7KJIj1jSQCgAHBWgXQA1gOAogkQArgpAggPQAsgTBHgMQAjgGAmABIHEF5gA2jjJIH+nIQAYAvAtANIAQADQAhAGBcgMIAjgFQBagIBIAEQCPAHCUA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_160 = new cjs.Graphics().p("AJ7KJIj1jSQChAHBVgXQA1gOAogkQArgpAggPQAsgUBHgLQAjgGAmABIHEF5gA2jjJIH+nIQAYAvAtANQAIADAIAAQAhAGBcgLIAjgFQBagJBHAEQCQAICUA1IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_161 = new cjs.Graphics().p("AJ7KJIj1jSQChAHBVgXQA1gOAoglQArgpAggOQArgUBIgLQAjgGAmABIHEF5gA2jjJIH+nIQAYAvAtANQAHADAJABQAgAFBdgLIAjgFQBZgIBIAEQCQAHCUA1IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_162 = new cjs.Graphics().p("AJ7KJIj1jSQChAHBVgXQA1gOAoglQArgpAggPQArgTBIgLQAjgGAmABIHEF5gA2jjJIH+nIQAYAvAtANIAQAEQAgAGBdgLIAigFQBagJBIAEQCPAHCVA1IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_163 = new cjs.Graphics().p("AJ7KJIj1jSQChAHBVgXQA1gOAnglQAsgpAggPQArgTBIgLQAigGAnABIHEF5gA2jjJIH+nIQAYAvAtAOIAPAEQAhAFBcgLIAjgFQBagJBIAEQCPAICVA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_164 = new cjs.Graphics().p("AJ7KJIj1jSQChAHBVgXQA1gOAngmQAsgpAfgPQAsgTBIgKQAigGAnABIHEF5gA2jjJIH+nIQAZAvArAOQAIADAIABQAgAFBdgLIAjgFQBagJBIAFQCOAHCWA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_165 = new cjs.Graphics().p("AJ7KJIj1jSQCiAHBUgXQA1gOAngmQArgpAggQQAsgSBIgLQAigEAnAAIHEF5gA2jjJIH+nIQAZAwArANIAQAFQAgAFBdgLIAjgFQBagJBHAEQCPAHCWA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_166 = new cjs.Graphics().p("AJ7KJIj1jSQCiAHBUgXQA1gPAnglQArgqAggPQArgTBJgKQAigEAnAAIHEF5gA2jjJIH+nIQAZAwArAOIAQAEQAgAGBdgMIAigFQBagIBIADQCOAICXAzIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_167 = new cjs.Graphics().p("AJ7KJIj1jSQCiAHBUgXQA1gPAnglQArgrAggPQArgSBJgKQAigEAnAAIHEF5gA2jjJIH+nIQAZAwArAOQAHADAJABQAgAGBcgMIAjgEQBagJBIAEQCOAGCXA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_168 = new cjs.Graphics().p("AJ7KJIj1jSQCiAHBTgXQA2gOAngnQArgqAfgPQAsgSBJgKQAigEAnAAIHEF5gA2jjJIH+nIQAZAwArAOIAPAFQAgAFBdgMIAjgEQBagJBIAEQCNAHCYAzIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_169 = new cjs.Graphics().p("AJ7KJIj1jSQCjAHBSgXQA2gPAngmQArgqAfgPQAsgTBIgJQAjgFAnABIHEF5gA2jjJIH+nIQAZAwAqAOQAIADAIACQAgAFBdgLIAjgEQBagKBIAEQCNAHCYAzIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_170 = new cjs.Graphics().p("AJ7KJIj1jSQCjAHBSgXQA2gPAngmQArgrAfgPQArgTBJgIQAigFAoABIHEF5gA2jjJIH+nIQAZAwAqAPQAIADAIABQAgAGBdgMIAjgEQBagKBHAEQCNAICZAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_171 = new cjs.Graphics().p("AJ7KJIj1jSQCjAHBSgXQA2gPAngmQArgsAfgOQArgTBJgIQAigFAoABIHEF5gA2jjJIH+nIQAZAxAqAOIAQAFQAfAGBegMIAigEQBbgKBHADQCNAICZAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_172 = new cjs.Graphics().p("AJ7KJIj1jSQCjAHBSgYQA2gOAmgnQAsgrAfgPQArgSBJgIQAigFAoABIHEF5gA2jjJIH+nIQAaAxApAOQAHAEAIABQAgAGBdgMIAjgEQBagKBIAEQCNAHCZAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_173 = new cjs.Graphics().p("AJ7KJIj1jSQCkAHBRgYQA2gOAmgnQArgrAfgPQAsgTBJgIQAigDAoAAIHEF5gA2jjJIH+nIQAaAxApAPQAHADAIACQAgAFBdgMIAjgEQBagJBIADQCMAHCaAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_174 = new cjs.Graphics().p("AJ7KJIj1jSQCkAHBRgYQA2gOAmgoQArgrAfgOQAsgTBJgIQAigDAoAAIHEF5gA2jjJIH+nIQAaAxAoAPIAQAFQAfAGBegMIAjgEQBagKBIADQCMAICaAxIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_175 = new cjs.Graphics().p("AJ7KJIj1jSQCkAHBRgYQA2gPAmgnQArgsAfgNQArgTBKgIQAigDAoAAIHEF5gA2jjJIH+nIQAaAxAoAPQAIAEAIABQAfAGBegMIAigEQBbgKBHAEQCMAGCbAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_176 = new cjs.Graphics().p("AJ7KJIj1jSQCkAHBRgYQA2gPAmgnQArgsAfgOQArgSBKgIQAigDAoAAIHEF5gA2jjJIH+nIQAaAxAoAQQAIADAIABQAfAGBegMIAigEQBbgJBHADQCMAHCbAxIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_177 = new cjs.Graphics().p("AJ7KJIj1jSQClAHBQgYQA2gPAmgnQArgsAegOQAsgTBKgHQAhgDApAAIHEF5gA2jjJIH+nIQAaAyAoAPQAHADAIABQAgAHBdgMIAjgEQBagKBIADQCLAHCcAxIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_178 = new cjs.Graphics().p("AJ7KJIj1jSQClAHBQgYQA2gPAmgoQArgtAfgNQA/gcCDAAIHBF5gA2jjJIH+nIQAfA7AyALQAfAGBegMQBwgOBVAEQCMAGCdAyQiVCJiLCCIhuBmg");
	var mask_graphics_179 = new cjs.Graphics().p("AJ7KJIj1jSQBaAEBBgGQA1gFAlgLQARgEAQgIQAggPAbgcQAfgfAYgQQBSgmCDAAIHBF5gA2jjJIH+nIQAgA7AzAKQAfAHBfgNQBwgOBVAEQCLAGCbAzQiVCJiLCCIhuBmg");
	var mask_graphics_180 = new cjs.Graphics().p("AJ7KJIj1jSQBaAFBBgHQA1gFAlgLQARgGAPgGQAhgQAagcQAfgfAZgQQBSglCDAAIHBF5gA2jjJIH+nIQAgA7A0AKQAfAGBhgNQBxgPBUAFQCKAHCZAzQiVCJiLCCIhuBmg");
	var mask_graphics_181 = new cjs.Graphics().p("AJ7KJIj1jSQBaAFBBgHQA0gFAmgMQARgGAPgGQAhgQAagcQAfgfAZgPQBTgmCCABIHBF5gA2jjJIH+nIQAgA7A2AKQAfAFBigNQBxgOBUAEQCKAHCWA0QiVCJiLCCIhuBmg");
	var mask_graphics_182 = new cjs.Graphics().p("AJ7KJIj1jSQBaAFBBgHQA0gGAmgMQAQgGAQgGQAhgRAagaQAfggAZgPQBTgmCCACIHBF5gA2jjJIH+nIQAgA7A3AJQAfAGBkgOQBygPBTAFQCJAHCUA1QiVCJiLCCIhuBmg");
	var mask_graphics_183 = new cjs.Graphics().p("AJ7KJIj1jSQBaAFBBgIQAzgFAmgNQARgGAQgGQAggRAbgaQAfggAZgPQBTglCCACIHBF5gA2jjJIH+nIQAhA6A3AKQAfAFBmgNQBygQBTAFQCJAHCRA2QiVCJiLCCIhuBmg");
	var mask_graphics_184 = new cjs.Graphics().p("AJ7KJIj1jSQBaAFBBgIQAzgFAmgNQARgGAPgIQAhgQAagaQAgggAZgPQBTgkCCACIHBF5gA2jjJIH+nIQAhA7A5AIQAfAGBogPQBygQBTAGQCHAHCPA3QiVCJiLCCIhuBmg");
	var mask_graphics_185 = new cjs.Graphics().p("AJ7KJIj1jSQBaAFBBgIQAygFAngOQARgGAPgIQAhgQAagaQAggfAZgQQBUgjCBACIHBF5gA2jjJIH+nIQAhA6A6AJQAfAFBqgPQBygPBTAEQCGAJCNA3QiVCJiLCCIhuBmg");
	var mask_graphics_186 = new cjs.Graphics().p("AJ7KJIj1jSQBZAFBCgIQAygGAngOQAQgGAQgIQAggQAbgbQAfgeAagPQBUgkCBADIHBF5gA2jjJIH+nIQAiA7A7AHQAfAGBrgQQBzgQBSAFQCGAJCKA4QiVCJiLCCIhuBmg");
	var mask_graphics_187 = new cjs.Graphics().p("AJ7KJIj1jSQBZAGBCgKQAxgFAogPQAQgGAQgIQAggQAbgbQAfgeAagPQBUgkCAAEIHCF5gA2jjJIH+nIQAiA6A8AIQAfAFBtgQQBzgQBSAFQCFAJCIA5QiVCJiLCCIhuBmg");
	var mask_graphics_188 = new cjs.Graphics().p("AJ7KJIj1jSQBZAGBCgKQAxgFAogQQAQgGAPgHQAhgRAagbQAggeAagPQBUgjCAAEIHCF5gA2jjJIH+nIQAiA6A+AHQAfAFBugQQB0gQBRAFQCEAJCGA6QiVCJiLCCIhuBmg");
	var mask_graphics_189 = new cjs.Graphics().p("AJ7KJIj1jSQBZAGBCgKQAwgGAogQQARgGAPgHQAhgRAagbQAggeAagPQBVgiB/AEIHCF5gA2jjJIH+nIQAjA6A+AGQAfAGBwgRQB0gRBRAGQCEAJCDA7QiVCJiLCCIhuBmg");
	var mask_graphics_190 = new cjs.Graphics().p("AJ7KJIj1jSQBZAGBCgKQAwgGAogRQARgGAPgIQAggQAbgaQAggeAagPQBVgjB/AFIHCF5IgCAAgA2jjJIH+nIQAjA5A/AHQAgAFBxgRQB1gRBRAGQCCAKCBA7QiVCJiLCCIhuBmg");
	var mask_graphics_191 = new cjs.Graphics().p("AJ7KJIj1jSQBZAGBCgLQAvgFApgSQAQgGAQgIQAggRAbgZQAfgeAbgPQBVgiB/AFIHCF5IgCAAgA2jjJIH+nIQAjA6BBAFQAfAGBzgSQB1gRBRAGQCBAKB/A8QiVCJiLCCIhuBmg");
	var mask_graphics_192 = new cjs.Graphics().p("AJ7KJIj1jSQBZAGBCgLQAvgGApgSQAQgGAPgIQAhgRAagZQAggeAbgOQBVgjB/AGIHCF5IgCAAgA2jjJIH+nIQAkA5BBAGQAfAFB1gSQB2gRBQAGQCBAJB8A+QiVCJiLCCIhuBmg");
	var mask_graphics_193 = new cjs.Graphics().p("AJ7KJIj1jSQBZAGBCgLQAugHAqgSQAQgGAPgIQAhgRAagZQAggeAbgOQBWgiB+AGIHCF5IgCAAgA2jjJIH+nIQAkA5BDAFQAfAFB2gSQB2gRBQAGQCAAJB6A/QiVCJiLCCIhuBmg");
	var mask_graphics_194 = new cjs.Graphics().p("AJ7KJIj1jSQBZAHBCgNQAugFAqgTQAQgHAPgIQAggSAbgYQAggeAbgOQBWghB+AGIHCF5IgCAAgA2jjJIH+nIQAkA5BEAFQAfAEB4gSQB3gSBPAHQB/AKB4A/QiVCJiLCCIhuBmg");
	var mask_graphics_195 = new cjs.Graphics().p("AJ7KJIj1jSQBZAHBCgNQAtgGAqgTQAQgHAQgIQAggSAbgZQAggcAbgOQBWgiB+AHIHCF5IgCAAgA2jjJIH+nIQAlA5BFAEQAfAEB5gTQB3gRBPAGQB/ALB1BAQiVCJiLCCIhuBmg");
	var mask_graphics_196 = new cjs.Graphics().p("AJ7KJIj1jSQBZAHBCgNQAtgGAqgUQAQgHAQgIQAggSAagYQAhgdAagOQBXgiB+AIIHCF5IgCAAgA2jjJIH+nIQAlA4BGAFQAfAEB7gUQB4gRBOAGQB+ALBzBBQiVCJiLCCIhuBmg");
	var mask_graphics_197 = new cjs.Graphics().p("AJ7KJIj1jSQBZAHBCgNQAsgGArgVQAQgGAPgJQAggRAbgZQAggdAbgOQBYghB9AIIHCF5IgCAAgA2jjJIH+nIQAlA5BHADQAgAFB8gVQB4gSBPAHQB8AMBxBBQiVCJiLCCIhuBmg");
	var mask_graphics_198 = new cjs.Graphics().p("AJ7KJIj1jSQBZAHBCgOQAsgGArgVQAQgGAPgJQAggSAbgYQAggdAbgOQBYghB9AJIHCF5IgCAAgA2jjJIH+nIQAlA4BJAEQAfAEB+gVQB5gSBOAIQB8ALBuBCQiVCJiLCCIhuBmg");
	var mask_graphics_199 = new cjs.Graphics().p("AJ7KJIj1jSQBZAHBCgOQArgHAsgVQAQgHAPgIQAggSAbgYQAggdAbgOQBYggB9AJIHCF5IgCAAgA2jjJIH+nIQAmA4BJAEQAgADB/gVQB5gSBOAIQB7ALBsBDQiVCJiLCCIhuBmg");
	var mask_graphics_200 = new cjs.Graphics().p("AJ7KJIj1jSQBZAIBCgQQArgFAsgXIAfgPQAggSAagYQAhgdAbgOQBYgfB9AJIHCF5IgCAAgA2jjJIH+nIQAmA4BLADQAfAECBgVQB6gUBNAJQB6ALBqBEQiVCJiLCCIhuBmg");
	var mask_graphics_201 = new cjs.Graphics().p("AJ7KJIj1jSQBZAIBCgQQAqgGAsgXQAQgGAPgJQAggSAbgYQAhgcAbgOQBZggB8AKIHCF5IgCAAgA2jjJIH+nIQAmA4BMADQAfADCDgVQB6gUBNAIQB6AMBnBFQiVCJiLCCIhuBmg");
	var mask_graphics_202 = new cjs.Graphics().p("AJ7KJIj1jSQBZAIBCgQQAqgHAsgXIAfgPQAggSAbgYQAhgdAbgNQBZgfB8AKIHCF5IgCAAgA2jjJIH+nIQAnA4BNACQAfADCEgVQB7gUBMAIQB5AMBlBGQiVCJiLCCIhuBmg");
	var mask_graphics_203 = new cjs.Graphics().p("AJ7KJIj1jSQBZAIBCgQQApgHAtgXQAQgIAPgIQAggTAbgXQAggcAcgNQBZgfB8AKIHCF5IgCAAgA2jjJIH+nIQAnA4BOACQAfACCGgVQB7gUBMAIQB5AMBiBHQiVCJiLCCIhuBmg");
	var mask_graphics_204 = new cjs.Graphics().p("AJ7KJIj1jSQBZAIBCgRQApgGAtgYQAPgHAQgJQAfgTAcgXQAggcAcgNQBagfB7ALIHCF5IgCAAgA2jjJIH+nIQAnA4BPABQAgADCIgXQB7gUBMAJQB3ANBgBHQiVCJiLCCIhuBmg");
	var mask_graphics_205 = new cjs.Graphics().p("AJ7KJIj1jSQBZAIBCgRQAogGAugZQAPgHAPgJQAggTAbgXQAhgcAcgNQBageB7ALIHCF5IgCAAgA2jjJIH+nIQAoA3BQACQAfADCKgYQB7gUBMAJQB2AMBeBJQiVCJiLCCIhuBmg");
	var mask_graphics_206 = new cjs.Graphics().p("AJ7KJIj1jSQBZAIBCgRQAogHAugZQAPgHAPgJQAggTAbgXQAhgbAcgNQBagfB7AMIHCF5IgBAAgA2jjJIH+nIQAoA3BRABQAgADCLgYQB8gUBLAJQB2ANBbBJQiVCJiLCCIhuBmg");
	var mask_graphics_207 = new cjs.Graphics().p("AJ7KJIj1jSQBZAJBCgTQAngGAugaQAQgHAPgJQAggTAbgXQAhgbAcgNQBagfB7ANIHCF5IgBAAgA2jjJIH+nIQAoA3BTAAQAfADCNgYQB8gUBLAJQB1ANBZBKQiVCJiLCCIhuBmg");
	var mask_graphics_208 = new cjs.Graphics().p("AJ7KJIj1jSQBZAJBCgTQAngHAugZIAfgRQAfgTAcgXQAggbAdgNQBbgeB6ANIHCF5IgBAAgA2jjJIH+nIQApA3BTAAQAgACCOgYQB9gUBKAJQB0ANBXBLQiVCJiLCCIhuBmg");
	var mask_graphics_209 = new cjs.Graphics().p("AJ7KJIj1jSQBZAJBCgTQAmgHAvgbIAfgQQAfgTAbgXQAhgbAdgNQBbgdB6ANIHCF5IgBAAgA2jjJIH+nIQApA2BVAAQAfADCQgZQB9gUBKAJQB0ANBUBMQiVCJiLCCIhuBmg");
	var mask_graphics_210 = new cjs.Graphics().p("AJ7KJIj1jSQBZAJBCgTQAmgIAvgbQAPgHAPgJQAggTAbgXQAhgbAdgNQBbgcB6ANIHCF5IgBAAgA2jjJIH+nIQApA3BWgBQAfACCSgZQB+gVBJAJQBzAOBSBNQiVCJiLCCIhuBmg");
	var mask_graphics_211 = new cjs.Graphics().p("AJ7KJIj1jSQBZAJBCgUQAlgGAwgdIAegQQAfgUAcgWQAhgbAdgMQBbgdB6AOIHCF5IgBAAgA2jjJIH+nIQApA2BXgBQAgACCTgZQB+gVBKAJQBxAOBQBOQiVCJiLCCIhuBmg");
	var mask_graphics_212 = new cjs.Graphics().p("AJ7KJIj1jSQBZAJBCgUQAlgHAwgcIAegRQAfgUAcgWQAhgaAdgNQBcgcB5AOIHCF5IgBAAgA2jjJIH+nIQAqA2BYgBQAfACCVgaQB/gWBJAKQBxAOBNBPQiVCJiLCCIhuBmg");
	var mask_graphics_213 = new cjs.Graphics().p("AJ7KJIj1jSQBZAJBCgUQAkgHAwgdIAfgRQAfgUAbgWQAigbAdgMQBcgcB5APIHCF5IgBAAgA2jjJIH+nIQAqA2BZgCQAgACCWgaQB/gWBJAKQBwAOBLBQQiVCJiLCCIhuBmg");
	var mask_graphics_214 = new cjs.Graphics().p("AJ8KIIj2jRQBZAJBBgUQAmgIAvgdQAQgIAPgKQAfgTAbgWQAigaAdgNQBdgcB4APIHCF5IAAABgA2jjJIH+nIQAqA2BbgCQAgABCYgbQB/gVBIAKQBwAPBIBQQiVCJiLCCIhuBmg");
	var mask_graphics_215 = new cjs.Graphics().p("AJ8KIIj2jRQBZAJBBgVQAlgHAwgeQAPgIAQgKQAfgTAbgWQAhgaAegMQBdgcB4APIHCF5IAAABgA2jjJIH+nIQArA2BcgCQAfABCZgcQCAgVBIAKQBvAPBGBRQiVCJiLCCIhuBmg");
	var mask_graphics_216 = new cjs.Graphics().p("AJ8KIIj2jRQBZAJBBgVQAkgIAxgeQAPgIAPgKQAggUAbgVQAhgaAegMQBdgcB4AQIHCF5IAAABgA2jjJIH+nIQArA1BdgCQAgABCagcQCAgWBJALQBuAPBDBSQiVCJiLCCIhuBmg");
	var mask_graphics_217 = new cjs.Graphics().p("AJ8KIIj2jRQBZAKBBgWQAkgIAxgfIAegSQAfgUAbgVQAigaAegMQBdgbB4AQIHCF5IAAABgA2jjJIH+nIQArA1BfgCQAfABCdgdQCAgWBIALQBtAPBBBTQiVCJiLCCIhuBmg");
	var mask_graphics_218 = new cjs.Graphics().p("AJ8KIIj2jRQBZAKBBgWQAkgIAwggQAPgIAQgKQAegUAcgVQAigaAegLQBegbB3AQIHCF5IAAABgA2jjJIH+nIQAsA1BegDQAgABCegdQCCgWBHALQBsAPA/BUQiVCJiLCCIhuBmg");
	var mask_graphics_219 = new cjs.Graphics().p("AJ8KIIj2jRQBZAKBBgXQAjgIAxggQAPgIAQgKQAfgUAbgVQAigaAegLQBegbB3ARIHCF5IAAABgA2jjJIH+nIQAsA1BggDQAgAACfgdQCCgWBHALQBrAPA9BVQiVCJiLCCIhuBmg");
	var mask_graphics_220 = new cjs.Graphics().p("AJ8KIIj2jRQBZAKBBgXQAjgIAxggIAegTQAfgUAcgVQAhgZAegMQBfgaB3ARIHCF5IAAABgA2jjJIH+nIQAsA1BhgEQAgABCigeQCBgXBHALQBrAQA6BWQiVCJiLCCIhuBmg");
	var mask_graphics_221 = new cjs.Graphics().p("AJ8KIIj2jRQBZAKBBgXQAigIAyghIAegTQAfgUAbgVQAjgZAdgMQBfgaB3ASIHCF5IAAABgA2jjJIH+nIQAtA1BigEQAfAACjgeQCDgXBGALQBqARA4BWQiVCJiLCCIhuBmg");
	var mask_graphics_222 = new cjs.Graphics().p("AJ8KIIj2jRQBYAKBCgYQAhgIAzghIAegTQAegUAcgVQAigZAegLQBfgaB3ASIHBF5IABABgA2jjJIH+nIQAtA0BjgEQAgAACkgeQCDgXBGALQBpARA2BXQiVCJiLCCIhuBmg");
	var mask_graphics_223 = new cjs.Graphics().p("AJ8KIIj2jRQBYAKBCgYQAhgIAzgiIAdgTQAfgVAcgUQAigZAegLQBfgaB2ATIHCF5IABABgA2jjJIH+nIQAtA0BlgEQAfAACmgfQCEgXBFALQBpARAzBYQiVCJiLCCIhuBmg");
	var mask_graphics_224 = new cjs.Graphics().p("AJ8KIIj2jRQBYALBCgZQAggIAzgjIAegTIA7gpQAigZAegLQBggZB1ATIHCF5IABABgA2jjJIH+nIQAuA0BlgFQAgAACogfQCDgYBGAMQBnARAxBZQiVCJiLCCIhuBmg");
	var mask_graphics_225 = new cjs.Graphics().p("AJ8KJIj2jRQBYAKBCgZQAggIAzgjIAegTQAfgVAbgVQAigYAfgLQBggZB1AUIHCF4IABACgA2jjIIH+nJQAuA0BmgFQAgAACqggQCEgXBFAMQBmARAvBZQiVCJiLCCIhuBmg");
	var mask_graphics_226 = new cjs.Graphics().p("AJ8KJIj2jRQBYALBCgaQAfgIA0gkIAegTIA6gpQAigYAfgLQBggZB1AUIHCF5IABABgA2jjIIH+nIQAuA0BogGQAgAACrggQCEgYBFAMQBmARAsBbQiVCJiLCCIhuBmg");
	var mask_graphics_227 = new cjs.Graphics().p("AJ8KKIj2jRQBYAKBCgZQAfgJA0gkIAdgTIA7gqQAigYAfgKQBhgZB0AVIHCF4IABACgA2jjHIH+nJQAuA0BpgGQAgAACtghQCFgYBEAMQBlASAqBbQiVCJiLCCIhuBmg");
	var mask_graphics_228 = new cjs.Graphics().p("AJ8KKIj2jRQBYALBCgaQAegJA1gkIAdgUIA7gpQAigYAfgLQBhgYB0AVIHCF5IABABgA2jjHIH+nIQAvA0BqgHQAfAACvghQCFgZBEANQBkASAoBcQiVCJiLCCIhuBmg");
	var mask_graphics_229 = new cjs.Graphics().p("AJ8KLIj2jRQBYALBCgbQAegJA1glIAdgTIA7gqQAigXAfgLQBhgYB0AWIHCF4IABACgA2jjGIH+nJQAvA0BrgHQAggBCwghQCGgYBDAMQBkASAlBdQiVCJiLCCIhuBmg");
	var mask_graphics_230 = new cjs.Graphics().p("AJ8KLIj3jRQBZALBCgbQAdgJA1glIAegUIA6gpQAigYAggKQBhgYB0AWIHCF5IABABgA2jjGIH9nIQAwAzBsgHQAggBCyghQCGgZBDANQBjASAjBeQiWCJiKCCIhuBmg");
	var mask_graphics_231 = new cjs.Graphics().p("AJ8KMIj3jRQBZALBCgbQAcgJA2gnIAdgTIA7gqQAigXAggKQBhgYB0AXIHCF4IABACgA2jjFIH9nJQAxA0BtgIQAfgBC0giQCGgZBDANQBiATAhBeQiWCJiKCCIhuBmg");
	var mask_graphics_232 = new cjs.Graphics().p("AJ8KNIj3jRQBZALBCgcQAcgJA2gmIAdgUIA6gpQAjgYAggKQBhgXB0AWIHCF5IABACgA2jjEIH9nJQAxAzBugHQAggBC0gjQCIgZBDANQBhATAeBfQiWCJiKCCIhuBmg");
	var mask_graphics_233 = new cjs.Graphics().p("AJ8KNIj3jRQBZAMBCgcQAcgKA2gnIAdgUIA6gpQAjgXAggKQBigXBzAXIHCF5IABABgA2jjEIH9nIQAxAzBwgIQAfgCC3giQCHgaBCANQBhATAcBhQiWCJiKCCIhuBmg");
	var mask_graphics_234 = new cjs.Graphics().p("AJ8KOIj3jRQBZAMBCgdQAbgJA3goIAdgUQAegXAcgSQAigXAhgKQBigXBzAXIHCF5IABACgA2jjDIH9nJQAxAzBxgIQAggCC4gjQCIgaBCAOQBfATAaBhQiWCJiKCCIhuBmg");
	var mask_graphics_235 = new cjs.Graphics().p("AJ8KOIj3jRQBZAMBCgdQAagJA4gpIAdgUQAegWAcgTQAigXAhgKQBigWBzAYIHCF5IABABgA2jjDIH9nIQAyAyBxgIQAhgCC5gkQCIgZBCANQBeAUAYBiQiWCJiKCCIhuBmg");
	var mask_graphics_236 = new cjs.Graphics().p("AJ8KPIj3jRQBZAMBCgeQAagJA3gpIAdgUQAegXAcgSQAjgXAhgKQBigWBzAYIHCF5IABACgA2jjCIH9nJQAyAzBzgJQAfgCC8gkQCJgaBBAOQBeATAVBjQiWCJiKCCIhuBmg");
	var mask_graphics_237 = new cjs.Graphics().p("AJ8KPIj3jRQBZAMBCgeQAagJA3gpIAdgVQAegXAcgSQAjgWAhgKQBjgWByAZIHCF5IABABgA2jjCIH9nIQAzAyB0gJQAfgCC9glQCJgaBBAOQBeAUASBkQiWCJiKCCIhuBmg");
	var mask_graphics_238 = new cjs.Graphics().p("AJ7KQIj2jRQBYANBDgfQAZgJA4gqIAcgVQAegXAdgSQAjgWAggKQBkgVByAZIHCF4IABACgA2jjBIH9nIQAyAyB2gKQAfgCC/glQCKgaBAAOQBcAUAQBlQiVCJiLCCIhtBmg");
	var mask_graphics_239 = new cjs.Graphics().p("AJ7KRIj2jRQBYAMBDgfQAYgJA4grIAdgVQAegWAdgSQAjgXAggJQBkgVByAZIHCF5IABACgA2jjAIH9nJQAzAyB2gKQAggCDAglQCKgbBAAPQBcAUANBlQiVCJiLCCIhtBmg");
	var mask_graphics_240 = new cjs.Graphics().p("AJ7KRIj2jRQBYANBDgfQAYgKA4grIAdgVQAegXAcgSQAjgWAhgJQBkgVByAaIHCF4IABACgA2jjAIH9nIQAzAyB3gLQAggCDCgmQCLgbA/APQBbAUALBnQiVCJiLCCIhtBmg");
	var mask_graphics_241 = new cjs.Graphics().p("AJ7KSIj2jRQBYANBDggQAXgKA5grIAdgWQAegXAcgRQAjgWAhgKQBlgUBwAaIHDF5IABACgA2ji/IH9nJQAzAyB5gLQAggCDDgmQCLgbBAAOQBZAVAJBnQiVCJiLCCIhtBmg");
	var mask_graphics_242 = new cjs.Graphics().p("AJ7KSIj2jRQBYANBDggQAXgKA5gsIAcgVQAegXAdgSQAjgVAhgKQBlgUBwAbIHDF4IABACgA2ji/IH9nIQA0AxB5gLQAggCDFgnQCMgbA/APQBZAVAGBoQiVCJiLCCIhtBmg");
	var mask_graphics_243 = new cjs.Graphics().p("AJ7KTIj2jRQBYANBDghQAWgKA6gsIAcgWQAegXAdgRQAjgWAhgJQBlgUBwAbIHDF5IABACgA2ji+IH9nJQA0AyB7gMQAggCDGgnQCMgcA/APQBYAVAEBpQiVCJiLCCIhtBmg");
	var mask_graphics_244 = new cjs.Graphics().p("AJ7KUIj2jRQBYANBDghQAWgKA6gtIAcgWQAegXAcgRQAkgWAhgJQBlgUBwAcIHDF5IABACgA2ji9IH9nJQA0AyB8gMQAggDDIgoQCNgbA+APQBXAWACBpQiVCJiLCCIhtBmg");
	var mask_graphics_245 = new cjs.Graphics().p("AJ7KUIj2jRQBYAOBDgiQAVgKA6gtIAdgWQAdgYAdgRQAjgVAigJQBmgTBvAcIHDF4IABACgA2ji9IH9nIQA1AxB9gMQAfgDDKgoQCNgcA+AQQBXAVgBBrQiVCJiLCCIhtBmg");
	var mask_graphics_246 = new cjs.Graphics().p("AJ7KVIj2jRQBYANBCghQAWgLA6guIAcgWQAegXAcgRQAkgVAhgJQBngTBvAcIHDF5IABACgA2ki8IH+nJQA1AxB9gMQAhgDDLgpQCOgcA9AQQBWAWgDBrQiVCJiLCCIhuBmg");
	var mask_graphics_247 = new cjs.Graphics().p("AJ7KVIj2jRQBYAOBCgiQAVgLA7guIAcgWQAegYAcgRQAkgVAhgIQBngTBvAdIHDF4IABACgA2ki8IH+nIQA1AxB/gNQAggDDNgpQCOgcA9APQBVAWgFBtQiVCJiLCCIhuBmg");
	var mask_graphics_248 = new cjs.Graphics().p("AJ7KWIj2jRQBYAOBCgjQAUgKA8gvIAcgXQAegYAcgQQAkgVAhgJQBngSBvAdIHDF5IABACgA2ki7IH+nJQA1AxCBgNQAfgEDPgpQCOgcA+AQQBTAWgHBtQiVCJiLCCIhuBmg");
	var mask_graphics_249 = new cjs.Graphics().p("AJ6KXIj1jRQBYAOBCgjQAZgMBThEQBCg3A9gPQBZgWB/AiIgBAGIHDF0gA2ki6IH+nIQA2AwCBgNQAggEDQgpQCPgdA8AQQBUAWgKBuQiVCJiLCDIhuBlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:144.5,y:67.4}).wait(1).to({graphics:mask_graphics_1,x:144.5,y:67.5}).wait(1).to({graphics:mask_graphics_2,x:144.5,y:67.5}).wait(1).to({graphics:mask_graphics_3,x:144.5,y:67.6}).wait(1).to({graphics:mask_graphics_4,x:144.5,y:67.6}).wait(1).to({graphics:mask_graphics_5,x:144.5,y:67.7}).wait(1).to({graphics:mask_graphics_6,x:144.5,y:67.7}).wait(1).to({graphics:mask_graphics_7,x:144.5,y:67.8}).wait(1).to({graphics:mask_graphics_8,x:144.5,y:67.8}).wait(1).to({graphics:mask_graphics_9,x:144.5,y:67.9}).wait(1).to({graphics:mask_graphics_10,x:144.5,y:67.9}).wait(1).to({graphics:mask_graphics_11,x:144.5,y:68}).wait(1).to({graphics:mask_graphics_12,x:144.5,y:68}).wait(1).to({graphics:mask_graphics_13,x:144.5,y:68}).wait(1).to({graphics:mask_graphics_14,x:144.5,y:68.1}).wait(1).to({graphics:mask_graphics_15,x:144.5,y:68.1}).wait(1).to({graphics:mask_graphics_16,x:144.5,y:68.2}).wait(1).to({graphics:mask_graphics_17,x:144.5,y:68.2}).wait(1).to({graphics:mask_graphics_18,x:144.4,y:68.3}).wait(1).to({graphics:mask_graphics_19,x:144.4,y:68.3}).wait(1).to({graphics:mask_graphics_20,x:144.4,y:68.4}).wait(1).to({graphics:mask_graphics_21,x:144.4,y:68.4}).wait(1).to({graphics:mask_graphics_22,x:144.4,y:68.4}).wait(1).to({graphics:mask_graphics_23,x:144.4,y:68.5}).wait(1).to({graphics:mask_graphics_24,x:144.4,y:68.5}).wait(1).to({graphics:mask_graphics_25,x:144.4,y:68.6}).wait(1).to({graphics:mask_graphics_26,x:144.4,y:68.6}).wait(1).to({graphics:mask_graphics_27,x:144.4,y:68.6}).wait(1).to({graphics:mask_graphics_28,x:144.4,y:68.7}).wait(1).to({graphics:mask_graphics_29,x:144.4,y:68.7}).wait(1).to({graphics:mask_graphics_30,x:144.4,y:68.7}).wait(1).to({graphics:mask_graphics_31,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_32,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_33,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_34,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_35,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_36,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_37,x:144.5,y:69}).wait(1).to({graphics:mask_graphics_38,x:144.5,y:69}).wait(1).to({graphics:mask_graphics_39,x:144.5,y:69}).wait(1).to({graphics:mask_graphics_40,x:144.5,y:69}).wait(1).to({graphics:mask_graphics_41,x:144.5,y:69}).wait(1).to({graphics:mask_graphics_42,x:144.5,y:69}).wait(1).to({graphics:mask_graphics_43,x:144.5,y:69}).wait(1).to({graphics:mask_graphics_44,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_45,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_46,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_47,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_48,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_49,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_50,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_51,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_52,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_53,x:144.5,y:68.9}).wait(1).to({graphics:mask_graphics_54,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_55,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_56,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_57,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_58,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_59,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_60,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_61,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_62,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_63,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_64,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_65,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_66,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_67,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_68,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_69,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_70,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_71,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_72,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_73,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_74,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_75,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_76,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_77,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_78,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_79,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_80,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_81,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_82,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_83,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_84,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_85,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_86,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_87,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_88,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_89,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_90,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_91,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_92,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_93,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_94,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_95,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_96,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_97,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_98,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_99,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_100,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_101,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_102,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_103,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_104,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_105,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_106,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_107,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_108,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_109,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_110,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_111,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_112,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_113,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_114,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_115,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_116,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_117,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_118,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_119,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_120,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_121,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_122,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_123,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_124,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_125,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_126,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_127,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_128,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_129,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_130,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_131,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_132,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_133,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_134,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_135,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_136,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_137,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_138,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_139,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_140,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_141,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_142,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_143,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_144,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_145,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_146,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_147,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_148,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_149,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_150,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_151,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_152,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_153,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_154,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_155,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_156,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_157,x:144.5,y:68.8}).wait(1).to({graphics:mask_graphics_158,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_159,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_160,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_161,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_162,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_163,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_164,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_165,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_166,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_167,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_168,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_169,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_170,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_171,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_172,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_173,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_174,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_175,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_176,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_177,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_178,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_179,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_180,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_181,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_182,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_183,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_184,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_185,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_186,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_187,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_188,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_189,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_190,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_191,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_192,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_193,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_194,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_195,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_196,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_197,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_198,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_199,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_200,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_201,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_202,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_203,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_204,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_205,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_206,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_207,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_208,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_209,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_210,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_211,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_212,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_213,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_214,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_215,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_216,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_217,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_218,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_219,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_220,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_221,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_222,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_223,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_224,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_225,x:144.4,y:68.8}).wait(1).to({graphics:mask_graphics_226,x:144.4,y:68.7}).wait(1).to({graphics:mask_graphics_227,x:144.4,y:68.7}).wait(1).to({graphics:mask_graphics_228,x:144.4,y:68.6}).wait(1).to({graphics:mask_graphics_229,x:144.4,y:68.6}).wait(1).to({graphics:mask_graphics_230,x:144.5,y:68.5}).wait(1).to({graphics:mask_graphics_231,x:144.5,y:68.5}).wait(1).to({graphics:mask_graphics_232,x:144.5,y:68.4}).wait(1).to({graphics:mask_graphics_233,x:144.5,y:68.3}).wait(1).to({graphics:mask_graphics_234,x:144.5,y:68.3}).wait(1).to({graphics:mask_graphics_235,x:144.5,y:68.2}).wait(1).to({graphics:mask_graphics_236,x:144.5,y:68.2}).wait(1).to({graphics:mask_graphics_237,x:144.5,y:68.1}).wait(1).to({graphics:mask_graphics_238,x:144.5,y:68}).wait(1).to({graphics:mask_graphics_239,x:144.5,y:68}).wait(1).to({graphics:mask_graphics_240,x:144.5,y:67.9}).wait(1).to({graphics:mask_graphics_241,x:144.5,y:67.9}).wait(1).to({graphics:mask_graphics_242,x:144.5,y:67.8}).wait(1).to({graphics:mask_graphics_243,x:144.5,y:67.8}).wait(1).to({graphics:mask_graphics_244,x:144.5,y:67.7}).wait(1).to({graphics:mask_graphics_245,x:144.5,y:67.6}).wait(1).to({graphics:mask_graphics_246,x:144.5,y:67.6}).wait(1).to({graphics:mask_graphics_247,x:144.5,y:67.5}).wait(1).to({graphics:mask_graphics_248,x:144.5,y:67.5}).wait(1).to({graphics:mask_graphics_249,x:144.5,y:67.4}).wait(1));

	// Camada 1
	this.instance = new lib.Forma3copiar3();
	this.instance.setTransform(-545,-314);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,289,134.6);


(lib.Forma3copiar2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// Camada 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AJcKXIj1jRQBXAOBBgjQAYgMBPhEQA/g3A8gPQBXgWB/AiIAMAGQG/F0AEAAgA2Gi6IH+nIQA2AwCBgNQAggEDQgpQCPgdA8AQQBUAWgKBuQiVCJiLCDIhuBlg");
	var mask_graphics_1 = new cjs.Graphics().p("AJgKZIj1jRQBXAOBBgjQAZgMBPhDQA+g2A9gPQASgFAUgCQA2gGBEALQAZAFAcAHIASAKQF9E+A5AsgA2Ci4IH+nJIANALQAjAXA8AEQAiACApgFQAUgCBagRICCgZQCOgcA9AQQBGATAFBRQAAAPgCARIkPD7IgRAQIhtBlg");
	var mask_graphics_2 = new cjs.Graphics().p("AJgKYIj1jRQBXAOBBgiQAagMBOhCQA/g1A8gQQATgEATgDQA2gGBEAKQAZAFAcAHQAPAHADACQF6E8A8AugA2Ci5IH+nIIANAKQAiAYA9ADQAhACAqgFQAUgCBZgRICCgYQCOgcA9ARQBHATAFBQQAAAPgCARIkPD6IgRAQIhtBmg");
	var mask_graphics_3 = new cjs.Graphics().p("AJfKYIj0jRQBXANBBghQAagMBOhBQA/g0A9gQQARgFAUgCQA2gHBEAJQAZAEAbAHQAPAHADADQF4E5A/AxgA2Ci5IH9nIIANAJQAiAYA9ADQAhACAqgEQAVgDBZgQICBgZQCNgaA+ARQBGATAHBPQAAAPgDAQIkOD7IgRAQIhuBlg");
	var mask_graphics_4 = new cjs.Graphics().p("AJfKXIj0jRQBWAOBCghQAagMBOhAQA/gzA9gRQASgFAUgCQA1gHBDAJQAaADAbAHQAPAHADACQF1E3BCA0gA2Ci6IH9nHIANAIQAiAYA9AEQAhABApgEQAWgCBYgRICBgYQCNgaA/ARQBGAUAHBOIgDAfIkOD7IgRAQIhuBlg");
	var mask_graphics_5 = new cjs.Graphics().p("AJkKXIgFgBIj0jQQBWANBCggQAbgMBNg/QBAgzA8gQQASgFAUgDQA1gHBDAIQAaADAbAGQAPAHADACQFyE1BFA2gA2Ci6IH9nIIANAJQAhAYA9ADQAhACAqgFQAWgCBYgQICBgYQCMgZA/ARQBGAUAIBNQgBAPgCAQQiMCBiDB6IgRAQIhtBkg");
	var mask_graphics_6 = new cjs.Graphics().p("AJkKWIgFAAIj1jRQBXANBCggQAcgLBMg+QBAgyA9gRQASgFATgCQA1gIBDAHQAaACAbAHQAPAGADADQFvEyBIA5gA2Ci7IH8nHIANAIQAhAYA+ADQAhACAqgFQAWgCBYgQICAgXQCMgZA/ASQBGATAJBNIgEAfIkOD6IgRAQIhfBZIgPAMg");
	var mask_graphics_7 = new cjs.Graphics().p("AJkKVIgFAAIj1jRQBXANBCgfQAcgMBNg9QBAgxA8gRQASgFAUgDQA1gIBCAGQAaACAbAHIASAIQFsEwBLA8gA2Ci8IH8nHIANAIQAhAYA+ADQAgACAqgFQAXgCBXgQICBgXQCLgYBAASQBFAUAKBMQgBAOgDAQIkOD7IgRAQIhgBYIgOAMg");
	var mask_graphics_8 = new cjs.Graphics().p("AJjKVIgEgBIj1jQQBXAMBCgeQAdgMBMg8QBAgwA8gRQASgFATgDQA1gJBDAFQAaACAaAGIASAJQFqEtBOA/gA2Ci8IH8nHIAMAHQAhAZA+ACQAhACApgFQAYgCBWgQICBgWQCKgXBAASQBGAUAKBLIgEAeIkOD7IgRAPIhfBZIgPALg");
	var mask_graphics_9 = new cjs.Graphics().p("AJjKUIgEAAIj1jRQBXANBCgeQAdgMBMg7QBBgvA8gSQARgFAUgDQA1gJBCAEQAaACAaAGQAPAGADACQFnErBRBBgA2Ci9IH8nGIAMAHQAgAYA/ADQAgABAqgEQAYgDBWgPICBgWQCKgXBAATQBFAUALBKQgBAOgEAQIkOD6IgQAQIhgBZIgOALg");
	var mask_graphics_10 = new cjs.Graphics().p("AJjKUIgEgBIj1jQQBWAMBDgeQAegLBLg6QBBgvA8gRQASgFATgEQA0gJBDADQAaABAaAGIASAIQFjEpBVBEgA2Ci9IH8nHIAMAHQAfAZBAACQAfABArgEQAYgCBVgQICBgVQCJgWBBATQBFATAMBKIgFAeIkOD6IgQAQIhgBZIgPAKg");
	var mask_graphics_11 = new cjs.Graphics().p("AJjKTIgFAAIj0jRQBWAMBCgdQAggLBKg5QBBguA9gSQASgFASgDQA1gKBBACQAaABAaAGIATAIQFgEmBYBGgA2Ci+IH7nGIANAGQAfAZA/ACQAgACAqgFQAZgCBVgPICAgVQCJgWBCATQBEAUANBJIgFAeIkOD6IgQAQIhgBYIgPALg");
	var mask_graphics_12 = new cjs.Graphics().p("AJjKTIgFgBIj0jQQBVAMBDgdQAggLBLg4QBAgtA9gSQASgGATgDQA0gKBBACQAaAAAaAFQAQAGADACQFeEkBaBJgA2Ci+IH7nGIAMAFQAfAZBAADQAgABAqgEQAagDBTgPICAgUQCJgVBCATQBFAUANBIIgGAeIkND6IgRAQIhfBYIgPAKg");
	var mask_graphics_13 = new cjs.Graphics().p("AJiKSIgEAAIj0jRQBVAMBDgcQAhgLBKg3QBBgsA8gTQASgFATgEQA0gKBBABQAagBAaAGIASAHQFbEiBeBMgA2Ci/IH6nGIANAGQAeAZBAACQAgABArgEQAZgDBUgOICAgUQCIgVBCAUQBFAUAOBHIgGAeIkOD6IgRAPIhfBZIgPAKg");
	var mask_graphics_14 = new cjs.Graphics().p("AJiKSIgEgBIj0jQQBVALBDgbQAigKBJg2QBBgtA9gSQARgGATgDQA0gLBBAAQAagBAaAFIASAIQFYEfBhBOgA2Ci/IH6nGIANAFQAdAZBBACQAfABArgEQAagCBTgPICAgTQCIgUBCAUQBFAUAPBGIgHAeIkND5IgRAQIhfBZIgPAJg");
	var mask_graphics_15 = new cjs.Graphics().p("AJiKRIgFgBIjzjQQBVAMBDgbQAigKBKg1QBBgsA8gTQASgFATgEQAzgLBBgBQAagBAaAEQAPAGADACQFVEdBkBRgA2CjAIH6nFIANAEQAdAaBAACQAgABArgFQAagCBTgOICAgUQCGgTBEAUQBEAVAQBFQgDAOgEAPIkND6IgRAQIhfBYIgPAJg");
	var mask_graphics_16 = new cjs.Graphics().p("AJiKRIgFgBIjzjQQBVALBDgaQAjgKBJg0QBBgrA9gTQARgGATgEQAzgLBBgCQAagBAaAEIASAHQFSEbBnBTgA2CjAIH6nGIAMAFQAdAZBBACQAfABAsgEQAagDBSgOICAgTQCGgSBEAUQBEAVARBFIgHAcIkOD6IgQAQIhfBYIgPAJg");
	var mask_graphics_17 = new cjs.Graphics().p("AJiKQIgFgBIj0jQQBWALBDgZQAkgKBIgzQBCgrA8gTQASgFASgEQAzgMBBgDQAagCAZAEIATAIQFPEYBqBWgA2CjBIH6nFIAMAEQAcAaBCABQAfABArgEQAbgDBSgOICAgSQCFgSBEAVQBEAUASBFIgIAcIkND6IgRAPIhfBZIgPAIg");
	var mask_graphics_18 = new cjs.Graphics().p("AJiKQIgFgBIj0jQQBVALBDgaQAlgJBIgyQBBgqA9gTQASgGASgEQAzgMBBgEQAagCAZAEQAPAFAEACQFMEVBuBagA2DjBIH6nFIANADQAcAaBBABQAfABAsgEQAbgCBRgOICAgSQCFgRBFAVQBEAUARBEIgHAcIkND5IgRAQIhfBZIgPAIg");
	var mask_graphics_19 = new cjs.Graphics().p("AJiKPIgFgBIj0jQQBVALBDgZQAmgJBHgxQBCgpA9gUQARgGATgEQAygMBBgFQAagCAZADIATAHQFJETBxBcgA2DjCIH6nEIANADQAbAZBCACQAfABArgFQAcgCBRgOIB/gRQCFgRBFAWQBEAUASBDIgIAcIkND5IgQAQIhgBYIgOAIg");
	var mask_graphics_20 = new cjs.Graphics().p("AJiKPIgGgBIjzjQQBUAKBEgYQAmgJBIgwQBCgoA8gUQARgGATgFQAygMBBgGQAagDAZAEIATAHQFGEQB0BfgA2DjCIH5nFIAOADQAaAaBDABQAeABAsgEQAcgDBQgNIB/gRQCFgQBFAVQBEAVATBCQgDANgGAPIkMD5IgRAQIhfBYIgPAIg");
	var mask_graphics_21 = new cjs.Graphics().p("AJhKOIgFgBIjzjQQBUALBEgYQAngJBHgvQBCgoA8gUQASgGASgEQAygNBBgHQAagDAZADIASAHQFEEOB3BigA2DjDIH5nEIANACQAaAaBDABQAfABArgEQAdgDBQgNIB/gQQCDgQBHAWQBDAVAUBBIgJAcIkMD5IgRAPIhfBZIgQAHg");
	var mask_graphics_22 = new cjs.Graphics().p("AJhKOIgFgBIjzjQQBUAKBEgXQAogJBGguQBCgnA9gUQARgGATgFQAxgNBBgIQAagDAZADQAPAEADACQFBEMB6BkgA2DjDIH5nEIANACQAaAaBDABQAeABAsgFQAdgCBPgNIB/gQQCDgPBHAWQBDAVAVBAIgJAcQiLB/iCB6IgQAPIhfBYIgQAIg");
	var mask_graphics_23 = new cjs.Graphics().p("AJhKNIgFgBIjzjQQBUAKBEgWQAogJBGgtQBDgmA8gVIAkgLQAxgNBAgJQAagEAZADQAPAFAEACQE+EJB9BngA2DjEIH5nEIAMACQAaAaBDABQAeABAtgEQAdgDBPgNIB/gPQCCgPBHAXQBDAVAWA/IgKAcIkMD4IgRAQIhfBYIgPAHg");
	var mask_graphics_24 = new cjs.Graphics().p("AJgKNIgEgCIjzjPQBUAKBEgWQApgJBGgsQBCgmA9gUIAjgLQAygOA/gKQAagEAZADIASAGQE8EHCABpgA2DjEIH5nEIAMABQAZAbBEAAQAeACAsgFQAegDBOgMIB/gQQCCgNBHAXQBDAUAXA/IgKAbIkND5IgQAQIhfBYIgQAHg");
	var mask_graphics_25 = new cjs.Graphics().p("AJgKNIgEgCIjzjPQBTAKBEgWQArgJBFgrQBCgkA9gVQARgHATgFQAxgNA/gLQAagFAZADQAPAEADACIG8FwgA2DjEIH4nEIANABQAYAaBEABQAeABAtgEQAfgDBNgMIB/gPQCBgNBHAXQBEAVAXA+IgLAbQiKB/iCB6IgRAPIheBYIgQAHg");
	var mask_graphics_26 = new cjs.Graphics().p("AJgKMIgEgCIjzjPQBTAJBEgVQArgIBFgqQBDgkA9gVQARgHASgFQAxgOA/gMQAagFAYADQAQAEADACIG8FxgA2DjFIH4nEIANABQAYAaBEABQAeABAtgFQAfgCBMgMQA7gIBEgHQCBgMBIAXQBDAVAYA9IgLAbIkMD5IgRAPIheBYIgQAHg");
	var mask_graphics_27 = new cjs.Graphics().p("AJgKMIgEgCIjzjPQBTAJBEgUQAsgJBFgpQBCgjA9gVQARgHASgFQAxgOA/gNQAagGAYADIATAFIG8FygA2DjFIH4nDIAMAAQAYAaBFABQAdAAAtgEQAggDBMgLQA7gIBEgGQCAgMBIAXQBDAWAZA8IgMAbIkMD4IgQAQIhfBYIgQAGg");
	var mask_graphics_28 = new cjs.Graphics().p("AJgKLIgFgBIjzjQQBTAKBFgUQAsgJBFgoQBCgiA9gWIAkgMQAwgOA+gOQAbgGAYACQAQAEADACQEvD9CNB0gA2DjGIH3nDIANAAQAXAbBFAAQAeABAtgFQAggCBLgMIB+gOQCAgLBJAYQBDAVAaA8IgMAaIkMD5IgRAPIheBYIgQAGg");
	var mask_graphics_29 = new cjs.Graphics().p("AJgKLIgFgCIjzjPQBTAJBFgTQAtgJBEgnQBDghA8gXIAkgLQAwgPA+gPQAbgGAYACIATAFQEsD7CQB3gA2DjGIH3nDIANgBQAWAbBFAAQAeABAtgEQAhgDBLgMQA7gHBDgGQB/gLBKAZQBCAVAbA7IgMAaIkMD5IgRAPIhfBYIgPAGg");
	var mask_graphics_30 = new cjs.Graphics().p("AJgKKIgFgBIjzjQQBTAJBFgTQAtgIBEgmQBDghA9gWIAjgMQAwgPA+gQQAbgHAYACIATAFQEpD5CTB6gA2DjHIH3nCIANgBQAWAbBFAAQAdAAAugEQAhgDBKgLQA8gHBCgGQB/gKBKAZQBCAVAcA6IgNAaIkMD4IgQAQIhfBYIgQAFg");
	var mask_graphics_31 = new cjs.Graphics().p("AJgKKIgFgCIjzjPQBTAJBEgTQAwgIBCglQBEggA8gXIAjgMQAwgPA+gRQAbgHAYACQAPADAEACIG8FygA2DjHIH2nDIANgBQAWAbBGAAQAdAAAugEQAhgDBKgLQA8gHBCgFQB+gKBKAZQBCAWAdA5IgOAaIkLD4IgQAQIhfBYIgQAFg");
	var mask_graphics_32 = new cjs.Graphics().p("AJfKKIgFgCIjyjPQBTAJBEgSQAwgIBDgkQBDggA9gXIAjgMQAvgQA+gRQAbgIAYACQAPADADABIG9FzgA2DjHIH2nCIANgCQAWAbBGAAQAdAAAtgEQAigDBJgLQA9gHBBgFQB9gJBLAaQBCAVAeA5IgOAZIkLD5IgRAPIheBYIgQAFg");
	var mask_graphics_33 = new cjs.Graphics().p("AJfKJIgFgCIjyjPQBSAJBFgRQAwgIBDgjQBDgfA9gXIAjgNQAvgQA+gSQAbgIAXABIATAFIG9FzgA2DjIIH2nCIAMgCQAWAbBGAAQAdAAAugEQAigDBJgKQA8gHBCgFQB8gIBMAaQBCAVAeA4IgPAZIkLD4IgQAQIhfBYIgQAEg");
	var mask_graphics_34 = new cjs.Graphics().p("AJfKJIgFgCIjyjPQBSAIBFgRQAxgHBCgiQBEgeA9gYIAigMQAvgRA+gTQAbgIAXABQAPACAEACIG9FzgA2DjIIH2nCIAMgDQAVAcBHAAQAcAAAvgEQAigDBIgLQA9gGBBgFQB8gIBMAaQBCAWAfA3IgPAZIkLD4IgRAQIheBXIgQAFg");
	var mask_graphics_35 = new cjs.Graphics().p("AJeKIIgEgCIjyjPQBSAJBFgRQAygHBBghQBEgeA9gXIAjgNQAugRA+gUQAagJAYABQAPADADABIG+F0gA2DjJIH2nBIAMgDQAUAbBHAAQAdAAAugEQAjgDBIgKQA9gHBBgEQB7gHBMAaQBCAWAgA2IgPAZIkMD4IgQAPIheBYIgRAEg");
	var mask_graphics_36 = new cjs.Graphics().p("AJeKIIgEgCIjyjPQBSAIBFgPQAygIBCggICAg0IAjgNIBsgmQAagKAXABQAQADADABIG+F0gA2DjJIH1nBIANgEQAUAcBHAAQAcAAAvgEQAjgDBHgKQA+gHBAgEQB7gGBNAaQBBAWAhA2IgQAYIkLD4IgQAQIheBXIgRAEg");
	var mask_graphics_37 = new cjs.Graphics().p("AJeKIIgEgCIjyjPQBSAIBFgPQAzgIBBgfICBg0IAigNIBsgnQAagKAXABIATAEIG+F0gA2DjJIH1nBIANgEQATAcBIgBQAcAAAugEQAkgDBHgKQA9gGBAgEQB7gGBNAbQBBAWAiA1IgQAYIkLD4IgRAPIheBYIgQAEg");
	var mask_graphics_38 = new cjs.Graphics().p("AJeKIIgEgCIjyjPQBRAIBGgPQAzgHBBgeICBg0IAjgNIBqgpQAbgKAXABQAQACADABIG/F1gA2EjJIH2nBIAMgFQATAcBIAAQAcAAAvgEQAkgDBGgKQA+gGA/gDQB6gGBOAbQBCAXAhAzIgQAZIkLD3IgQAQIheBXIgRAEg");
	var mask_graphics_39 = new cjs.Graphics().p("AJdKIIgDgDIjzjPQBSAIBGgOQA0gHBBgdICAgzIAjgOIBqgpQAbgLAWABQAQABADACIHAF1gA2EjKIH2nAIAMgFQATAcBHAAQAdAAAugFQAlgDBGgJQA9gGBAgDQB6gFBNAbQBCAXAiAyIgQAZIkLD4IgRAOIhdBYIgRADg");
	var mask_graphics_40 = new cjs.Graphics().p("AJdKIIgDgDIjzjPQBSAIBGgNQA1gIBAgbICBgzIAigNIBqgsQAbgKAWAAIATACIHAF2gA2EjKIH2nAIALgFQASAcBJgBQAcAAAvgEQAlgDBFgJQA+gHA/gBQB5gFBOAcQBCAWAjAzIgQAXIkLD4IgRAPIhdBXIgRADg");
	var mask_graphics_41 = new cjs.Graphics().p("AJdKIIgEgCIjyjPQBRAHBHgNQA2gHA/gbQBFgZA8gZIAigOIBqgsQAbgLAWAAQAQABADACIHAF1gA2EjJIH1nBIAMgFQASAcBJgBQAbAAAwgEQAlgDBFgJQA+gGA/gCQB4gEBPAcQBBAXAkAxIgRAYIkKD3IgRAPIheBYIgRADg");
	var mask_graphics_42 = new cjs.Graphics().p("AJdKIIgEgDIjyjOQBRAHBHgNQA3gGA+gaQBFgZA9gZIAhgOQAugTA8gbQAbgLAWgBQAQACADACIHAF1gA2EjJIH1nAIAMgGQARAcBJgBQAcAAAvgEQAmgDBEgJQA/gGA/gCQB3gDBPAdQBBAWAlAxIgSAXIkKD3IgQAQIheBXIgRACg");
	var mask_graphics_43 = new cjs.Graphics().p("AJdKIIgEgDIjyjOQBRAHBGgMQA4gGA+gZQBFgYA9gaIAigOQAtgTA8gcQAbgMAWgBIATADIHAF2gA2EjJIH0nAIANgGQAQAcBKgBQAbAAAwgFQAmgDBEgIQA+gGA/gBQB3gDBPAdQBBAWAmAwIgSAYIkLD3IgQAPIheBXIgRACg");
	var mask_graphics_44 = new cjs.Graphics().p("AJdKIIgEgDIjyjOQBRAHBGgMQA4gGA/gYQBFgXA8gaIAigOQAtgUA8gcQAbgNAWgBQAPACAEABIHAF3gA2EjJIH0nAIAMgHQARAdBKgBQAbgBAwgEQAmgDBDgIQA/gGA+gBQB3gCBQAdQBAAXAnAvIgTAXIkKD3IgQAPIheBYIgRABg");
	var mask_graphics_45 = new cjs.Graphics().p("AJdKIIgFgDIjxjOQBRAGBGgKQA5gGA+gXQBFgXA9gaIAhgOQAtgUA7geQAcgMAVgCQAQACAEABIHAF3gA2EjJIH0nAIAMgHQAQAdBKgBQAbgBAwgEIBqgLQA/gGA9gBQB2gBBRAdQBAAXAoAuIgTAXIkKD3IgQAQIheBXIgRABg");
	var mask_graphics_46 = new cjs.Graphics().p("AJcKIIgEgCIjxjPQBQAHBHgLQA6gGA9gWQBFgVA9gbIAigPQAsgUA7geQAcgNAVgCIATADIHBF3gA2EjJIH0m/IAMgIQAPAdBLgCQAbAAAwgEQAngDBCgIQBAgGA9AAQB1gBBRAeQBBAXAoAtIgTAXQiKB/iAB4IgRAPIhdBYIgSABg");
	var mask_graphics_47 = new cjs.Graphics().p("AJcKIIgEgCIjxjPQBQAHBHgLQA6gFA9gVQBGgVA9gbIAhgOQAsgVA7gfQAcgOAVgCQAQACADABIHBF3gA2EjJIHzm/IANgIQAPAdBLgCQAaAAAxgEIBpgLQBAgGA8ABQB1AABSAdQBAAXApAtIgUAWIkKD3IgQAPIheBYIgRABg");
	var mask_graphics_48 = new cjs.Graphics().p("AJcKIIgEgCIjyjPQBRAGBGgJQA8gFA9gUQBFgVA9gbIAhgOQAsgVA7ghQAcgOAVgCQAQACADABIHBF3gA2EjJIHzm/IAMgIQAOAdBMgCQAbAAAwgFQAogDBBgHQBAgGA8ABQB1AABRAeQBBAXAqAtIgUAWIkLD2IgQAPIhdBYg");
	var mask_graphics_49 = new cjs.Graphics().p("AJcKIIgFgCIjxjPQBQAGBHgIQA9gGA8gTQBGgUA8gaIAigQQArgVA7ghQAbgPAWgCIATACIHBF4gA2EjJIHzm+IAMgJQAOAdBLgCQAbAAAxgFIBogKQBBgGA8ABQBzACBTAeQBAAXArArIgVAWIkKD3IgQAPIhdBXg");
	var mask_graphics_50 = new cjs.Graphics().p("AJcKIIgFgCIjxjPQBRAGBGgIQA9gGA8gSQBGgSA9gbIAhgQQAsgWA6giQAbgPAWgCIATACIHBF4gA2EjJIHzm+IALgJQAPAdBLgCIBLgFQApgDBAgIQBBgEA7ABQB0ACBTAeQA/AXAsArIgVAVIkKD3IgQAPIhdBYg");
	var mask_graphics_51 = new cjs.Graphics().p("AJcKIIj2jRQBRAGBGgIQA+gFA8gRQBGgTA8gbIAhgPQAsgWA6gkQAbgOAVgDIAUACIHBF4gA2EjJIHzm+IALgJQANAdBNgCQAagBAxgEIBpgLQBAgEA8ABQBzADBTAfQA/AWAtAqIgWAWIkJD3IgRAOIhdBYg");
	var mask_graphics_52 = new cjs.Graphics().p("AJcKIIj2jRQBQAGBHgHQA+gFA8gQQBGgSA8gbIAigQQArgWA5gkQAcgQAVgCIAUABIHBF5gA2EjJIHym+IAMgKQANAeBMgCIBLgFQArgDA+gHQBBgFA7ACQBzADBTAfQBAAXAtApIgWAWIkJD2IgRAPIhdBXg");
	var mask_graphics_53 = new cjs.Graphics().p("AJbKIIgEgDIjxjOQBQAGBHgHQA/gFA7gPQBGgRA9gbIAhgQQArgXA5glQAcgQAVgDIATACIHCF5gA2EjJIHym+IAMgKQAMAeBNgCIBLgGIBpgKQBBgEA6ACQByADBUAgQA/AYAuAoIgWAUIkJD3IgQAPIheBXg");
	var mask_graphics_54 = new cjs.Graphics().p("AJbKIIgEgDIjxjOQBPAFBIgGQBAgEA6gOQBGgQA9gcIAhgRQArgWA5gmQAcgQAUgDQAQAAAEABIHCF5gA2EjJIHxm9IAMgLQAMAeBOgDIBLgFQAqgDA+gGQBBgFA7ACQBxAFBUAfQBAAYAuAnIgWAVIkJD2IgQAPIheBYg");
	var mask_graphics_55 = new cjs.Graphics().p("AJbKIIj1jRQEHAQCuheQArgXA5gnQAqgZAaAHIHCF5gA2EjJIH9nIQAMAeBNgDQAwgBCEgNQEegVCRB2QiVCJiLCCIhtBmg");
	var mask_graphics_56 = new cjs.Graphics().p("AJcKIIj2jRQCIAJBwgVQA2gKAwgSQAugQApgWQArgYA5gmQAqgZAaAHIHCF5gA2EjJIH9nIQAMAeBNgCIASgBQAqgCBTgIIAlgEQBWgGBJAHQCqAOBmBSIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_57 = new cjs.Graphics().p("AJcKIIj2jRQCIAJBwgVQA2gKAwgSQAugRApgWQArgXA5gmQAqgZAaAHIHCF5gA2EjJIH9nIQAMAeBNgCIASgBQAqgCBSgIIAlgDQBWgHBKAHQCqAOBmBSIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_58 = new cjs.Graphics().p("AJcKIIj2jRQCJAJBvgVQA2gKAwgSQAugRApgWQArgXA5gmQAqgZAaAHIHCF5gA2EjJIH9nIQAMAeBNgCIASAAQAqgCBSgJIAlgDQBWgGBKAGQCpAPBnBRIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_59 = new cjs.Graphics().p("AJcKIIj2jRQCJAJBvgVQA2gLAwgRQAugSAogVQArgYA6glQAqgZAaAHIHCF5gA2EjJIH9nIQAMAeBNgCIARAAQArgCBSgIIAlgEQBWgGBJAHQCqAOBnBRIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_60 = new cjs.Graphics().p("AJcKIIj2jRQCJAJBvgVQA2gLAwgSQAugRAogWQArgXA6glQAqgZAaAHIHCF5gA2EjJIH9nIQAMAfBMgCIASgBQAqgCBTgIIAlgDQBWgGBJAGQCpAOBoBRIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_61 = new cjs.Graphics().p("AJcKIIj2jRQCJAJBvgVQA2gLAwgSQAugSAogVQArgYA6glQApgYAbAHIHCF5gA2EjJIH9nIQAMAfBMgCIASAAQAqgCBTgIIAkgEQBXgGBJAGQCpAOBoBRIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_62 = new cjs.Graphics().p("AJcKIIj2jRQCKAJBugWQA2gKAwgSQAtgSApgWQArgXA6glQApgYAbAHIHCF5gA2EjJIH9nIQANAfBLgCIASAAQAqgCBSgIIAlgEQBWgGBKAHQCpAOBoBQIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_63 = new cjs.Graphics().p("AJcKIIj2jRQCKAJBugWQA2gKAwgSQAtgTApgVQArgXA6glQApgYAbAHIHCF5gA2EjJIH9nIQANAfBLgBIASAAQApgCBTgJIAlgDQBWgGBKAGQCoAOBpBQIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_64 = new cjs.Graphics().p("AJcKIIj2jRQCKAJBugWQA2gKAvgTQAugSAogWQArgXA7gkQApgYAbAHIHCF5gA2EjJIH9nIQANAfBLgBIARAAQAqgCBTgIIAlgEQBWgGBJAGQCpAOBpBQIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_65 = new cjs.Graphics().p("AJcKIIj2jRQCKAJBugWQA2gKAvgTQAugTAogVQArgXA7gkQApgYAbAHIHCF5gA2EjJIH9nIQANAfBKgBIASAAQAqgCBTgIIAlgDQBWgHBJAHQCoANBqBQIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_66 = new cjs.Graphics().p("AJcKIIj2jRQCLAJBtgWQA2gKAvgTQAugTAogVQArgXA7gkQApgYAbAHIHCF5gA2EjJIH9nIQANAgBKgBIASAAQApgCBUgIIAkgEQBXgGBJAGQCoAOBqBPIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_67 = new cjs.Graphics().p("AJcKIIj2jRQCLAJBtgWQA2gKAvgTQAugUAogVQArgXA7gjQApgYAbAHIHCF5gA2EjJIH9nIQANAgBKgBIASAAQApgCBTgIIAlgEQBXgGBJAGQCnAOBrBPIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_68 = new cjs.Graphics().p("AJcKIIj2jRQCLAIBtgVQA2gKAvgUQAugTAogVQArgXA7gjQApgYAbAHIHCF5gA2EjJIH9nIQANAgBKgBIASAAQApgBBTgJIAlgDQBWgHBKAHQCnANBrBPIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_69 = new cjs.Graphics().p("AJcKIIj2jRQCLAIBtgVQA2gKAvgUQAugUAngVQAsgXA6gjQApgWAcAGIHCF5gA2EjJIH9nIQANAgBKAAIARAAQAqgCBTgIIAlgEQBWgGBJAGQCnANBsBPIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_70 = new cjs.Graphics().p("AJcKIIj2jRQCMAIBsgVQA2gKAvgUQAugUAngVQArgXA7gjQApgWAcAGIHCF5gA2EjJIH9nIQAOAgBIAAIASAAQApgBBUgJIAkgEQBXgGBJAGQCnAOBsBOIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_71 = new cjs.Graphics().p("AJcKIIj2jRQCMAIBsgVQA2gKAvgUQAtgVAogVQArgWA7gjQApgWAcAGIHCF5gA2EjJIH9nIQAOAgBIAAIASAAQApgBBTgJIAlgDQBXgHBJAHQCmANBtBOIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_72 = new cjs.Graphics().p("AJcKIIj2jRQCMAIBsgVQA2gLAvgUQAtgUAogVQArgXA7giQApgWAcAGIHCF5gA2EjJIH9nIQAOAhBIAAIASAAQApgCBTgIIAlgEQBXgGBJAGQCmANBtBOIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_73 = new cjs.Graphics().p("AJcKIIj2jRQCMAIBsgVQA2gLAvgUQAtgVAogUQArgXA7giQApgWAcAGIHCF5gA2EjJIH9nIQAOAhBIAAIASAAQAogBBUgJIAlgDQBWgHBKAGQClAOBuBNIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_74 = new cjs.Graphics().p("AJcKIIj2jRQCNAIBrgVQA2gLAvgUQAtgVAngVQAsgXA7ghQApgWAcAGIHCF5gA2EjJIH9nIQAOAhBIAAIARAAQApgBBUgIIAlgEQBWgHBJAHQCmANBuBNIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_75 = new cjs.Graphics().p("AJcKIIj2jRQCNAIBrgVQA2gLAugVQAugVAngUQArgXA8ghQApgWAcAGIHCF5gA2EjJIH9nIQAOAhBIAAIARABQApgBBUgJIAkgEQBXgGBJAGQCmANBuBNIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_76 = new cjs.Graphics().p("AJcKIIj2jRQCNAIBrgVQA2gLAugVQAugVAngVIBng3QApgWAcAGIHCF5gA2EjJIH9nIQAOAhBHABIASAAQAogBBUgJIAlgDQBXgHBJAGQClANBvBNIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_77 = new cjs.Graphics().p("AJcKIIj2jRQCNAIBrgVQA2gLAugVQAugWAngUIBng4QAogVAdAGIHCF5gA2EjJIH9nIQAOAhBHABIASAAQAoAABUgJIAlgEQBXgGBJAFQClAOBvBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_78 = new cjs.Graphics().p("AJcKIIj2jRQCOAIBqgVQA2gLAugVQAugWAngVIBng3QAogVAdAGIHCF5gA2EjJIH9nIQAPAhBGABIARABQApgBBUgJIAlgDQBWgHBKAGQCkANBwBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_79 = new cjs.Graphics().p("AJcKIIj2jRQCOAIBqgVQA2gLAugWIBUgqIBog3QAogVAdAGIHCF5gA2EjJIH9nIQAPAiBGABIARAAQApgBBUgIIAkgEQBXgHBJAGQClANBwBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_80 = new cjs.Graphics().p("AJcKIIj2jRQCOAIBqgVQA2gLAugWIBUgqIBog3QAogVAdAGIHCF5gA2EjJIH9nIQAPAiBGABQAHABAKgBQAoAABVgJIAkgEQBXgGBJAFQCkANBxBMIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_81 = new cjs.Graphics().p("AJcKIIj2jRQCOAIBqgVQA2gLAugWIBUgrIBog2QAogVAdAGIHCF5gA2EjJIH9nIQAPAiBFABIASABQAogBBUgJIAlgDQBXgHBJAGQCkANBxBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_82 = new cjs.Graphics().p("AJcKIIj2jRQCPAIBpgVQA2gLAugWIBUgrIBog2QAogVAdAGIHCF5gA2EjJIH9nIQAPAiBFACIASAAQAoAABUgJIAlgEQBXgHBJAGQCjANByBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_83 = new cjs.Graphics().p("AJcKIIj2jRQCPAIBpgVQA2gLAugXIBUgrIBog1QAogVAdAGIHCF5gA2EjJIH9nIQAPAiBFACIARABQAogBBVgJIAkgEQBYgGBJAFQCjANByBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_84 = new cjs.Graphics().p("AJcKIIj2jRQCPAIBpgVQA2gLAugXIBTgrIBpg1QAogVAdAGIHCF5gA2EjJIH9nIQAPAiBFACIARABQAoAABVgJIAkgEQBXgHBJAGQCjAMBzBLIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_85 = new cjs.Graphics().p("AJcKIIj2jRQCPAIBpgVQA2gMAugWIBTgsIBpg1QAngUAeAGIHCF5gA2EjJIH9nIQAPAjBFACIARAAQAoAABVgJIAkgEQBXgHBJAGQCjANBzBKIgBABQiUCIiLCCIgBABIhsBlg");
	var mask_graphics_86 = new cjs.Graphics().p("AJcKIIj2jRQCPAIBpgVQA2gMAtgWIBUgsIBog1QAogTAdAFIHDF5gA2FjJIH+nIQAPAjBEACIASABQAngBBVgJIAlgDQBWgHBJAFQCkANByBJIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_87 = new cjs.Graphics().p("AJcKIIj2jRQCPAIBpgVQA2gMAtgXIBUgrIBog1QAogTAdAFIHDF5gA2FjJIH+nIQAPAjBEACIASABQAnAABVgJIAlgEQBWgHBJAGQCjAMBzBJIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_88 = new cjs.Graphics().p("AJcKIIj2jRQCQAIBogVQA2gMAtgXIBUgsIBog0QAogTAdAFIHDF5gA2FjJIH+nIQAPAjBEACIARABQAoAABVgJIAkgEQBYgHBIAGQCjAMBzBJIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_89 = new cjs.Graphics().p("AJcKIIj2jRQCQAIBogVQA2gMAtgXIBTgsIBpg0QAogTAdAFIHDF5gA2FjJIH+nIQAPAjBEADIARABQAnAABWgJIAkgEQBXgHBJAFQCiANB0BIIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_90 = new cjs.Graphics().p("AJcKIIj2jRQCQAIBogWQA2gLAtgXIBTgtQArgWA+gdQAogTAdAFIHDF5gA2FjJIH+nIQAQAjBDADIARABQAnAABWgJIAkgEQBXgHBJAGQCiAMB0BIIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_91 = new cjs.Graphics().p("AJcKIIj2jRQCQAIBogWQA2gLAtgYIBTgsQArgWA+gdQAogTAdAFIHDF5gA2FjJIH+nIQAQAkBDACIARABQAnAABVgJIAlgDQBXgIBIAGQCiAMB1BIIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_92 = new cjs.Graphics().p("AJcKIIj1jRQCQAIBngWQA2gLAsgYIBUgtQArgWA+gcQAogTAdAFIHDF5gA2FjJIH+nIQAQAkBCADIASABQAnAABVgJIAkgEQBXgHBJAFQCiANB1BHIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_93 = new cjs.Graphics().p("AJcKIIj1jRQCQAIBngWQA2gLAsgYQAugZAmgUQAqgWA/gdQAngSAeAFIHDF5gA2FjJIH+nIQAQAkBCADIARABQAnAABWgJIAkgEQBXgHBJAGQChAMB2BHIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_94 = new cjs.Graphics().p("AJcKIIj1jRQCQAIBngWQA2gLAsgZIBTgsQArgWA/gdQAngSAeAFIHDF5gA2FjJIH+nIQAQAkBCADIARABQAnABBVgKIAlgDQBXgHBJAFQChAMB2BHIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_95 = new cjs.Graphics().p("AJcKIIj1jRQCQAIBngWQA2gLAsgZQAugZAlgUQArgWA+gcQAogSAeAFIHDF5gA2FjJIH+nIQAQAkBCAEIARABQAmAABWgJIAkgEQBYgHBJAFQCgAMB3BHIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_96 = new cjs.Graphics().p("AJcKIIj1jRQCRAIBmgWQA2gLAsgZQAugaAlgTQArgWA+gcQAogSAeAFIHDF5gA2FjJIH+nIQAQAkBCAEIARABQAmABBWgKIAkgEQBYgHBIAGQCgAMB4BGIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_97 = new cjs.Graphics().p("AJcKIIj1jRQCRAIBmgWQA2gLAsgZQAtgaAmgUQArgVA+gcQAogSAeAFIHDF5gA2FjJIH+nIQAQAlBBADIASABQAmABBWgJIAkgEQBXgHBJAFQCgAMB4BGIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_98 = new cjs.Graphics().p("AJcKIIj1jRQCRAIBmgWQA2gMAsgZQAtgaAmgTQArgWA+gbQAogSAeAFIHDF5gA2FjJIH+nIQAQAlBBAEIARABQAmAABXgJIAkgEQBXgHBJAFQCfAMB5BGIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_99 = new cjs.Graphics().p("AJcKIIj1jRQCSAIBlgWQA2gMAsgZQAtgaAlgUQAsgVA+gbQAogSAeAFIHDF5gA2FjJIH+nIQARAlBAAEIARABQAnABBVgKIAkgDQBYgIBJAGQCfALB5BGIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_100 = new cjs.Graphics().p("AJcKIIj1jRQCSAIBlgWQA2gMAsgZQAtgbAlgTQArgWA/gaQAogSAeAFIHDF5gA2FjJIH+nIQARAlBAAEIAQABQAnABBWgJIAkgEQBYgHBJAFQCfAMB5BFIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_101 = new cjs.Graphics().p("AJcKIIj1jRQCTAIBkgWQA2gMAsgZQAtgbAlgTQArgWA/gbQAngRAfAFIHDF5gA2FjJIH+nIQARAlBAAEQAHACAJAAQAmABBXgKIAkgEQBYgHBIAFQCfAMB6BFIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_102 = new cjs.Graphics().p("AJcKIIj1jRQCTAIBkgWQA2gMAsgaQAtgbAkgTQAsgVA/gbQAngRAfAFIHDF5gA2FjJIH+nIQARAlA/AFIARABQAmABBXgJIAkgEQBYgIBIAGQCfALB6BFIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_103 = new cjs.Graphics().p("AJcKIIj1jRQCTAIBkgWQA2gMArgaQAugbAkgTQAsgWA/gaQAngRAfAFIHDF5gA2FjJIH+nIQARAmA/AEIARACQAmABBWgKIAlgEQBXgHBJAFQCeALB7BFIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_104 = new cjs.Graphics().p("AJcKIIj1jRQCTAIBkgWQA2gMArgaQAugcAkgTQArgVBAgaQAngQAfAEIHDF5gA2FjJIH+nIQARAmA/AEQAIACAJAAQAmABBWgKIAkgEQBYgHBJAFQCeAMB7BEIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_105 = new cjs.Graphics().p("AJcKIIj1jRQCUAIBjgWQA2gMArgaQAugcAkgTQArgWBAgZQAngQAfAEIHDF5gA2FjJIH+nIQARAmA+AFIARABQAnABBWgJIAkgEQBYgIBJAGQCdALB8BEIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_106 = new cjs.Graphics().p("AJcKIIj1jRQCUAIBjgWQA2gMArgbQAtgcAlgTQArgVBAgZQAngQAfAEIHDF5gA2FjJIH+nIQARAmA+AFIARACQAmABBXgKIAkgEQBYgHBIAFQCeALB8BEIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_107 = new cjs.Graphics().p("AJcKIIj1jRQCUAIBjgWQA2gMArgbQAtgcAkgTQAsgVBAgZQAngQAfAEIHDF5gA2FjJIH+nIQASAmA9AFQAIACAJAAQAmABBXgJIAkgEQBYgIBIAFQCeALB8BEIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_108 = new cjs.Graphics().p("AJcKIIj1jRQCUAIBjgWQA2gMArgbQAtgdAkgSQAsgWBAgYQAngQAfAEIHDF5gA2FjJIH+nIQASAmA9AGIARABQAmACBWgKIAkgEQBZgIBIAGQCdALB9BDIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_109 = new cjs.Graphics().p("AJcKIIj1jRQCVAIBigWQA2gMArgcQAtgcAkgTQArgVBBgZQAmgPAgAEIHDF5gA2FjJIH+nIQASAnA9AFIARACQAmABBWgKIAkgEQBZgHBIAFQCcALB+BDIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_110 = new cjs.Graphics().p("AJcKIIj1jRQCVAIBigWQA2gMArgcQAsgdAlgSQArgVBBgZQAmgPAgAEIHDF5gA2FjJIH+nIQASAnA8AFQAJACAIAAQAmACBXgKIAkgEQBYgIBJAFQCcALB+BDIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_111 = new cjs.Graphics().p("AJcKIIj1jRQCVAIBigWQA2gNArgbQAsgdAlgTQArgVBBgYQAmgPAgAEIHDF5gA2FjJIH+nIQASAnA8AGIARABQAlACBYgKIAkgEQBYgHBJAFQCcALB+BCIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_112 = new cjs.Graphics().p("AJcKIIj1jRQCVAIBigWQA2gNArgbQAtgeAjgSQAsgVBBgYQAmgPAgAEIHDF5gA2FjJIH+nIQASAnA8AGIARACQAlABBYgKIAkgDQBYgIBJAFQCbALB/BCIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_113 = new cjs.Graphics().p("AJcKIIj1jRQCWAIBhgWQA2gNArgcQAtgdAjgTQArgVBBgXQAngPAgAEIHDF5gA2FjJIH+nIQASAnA8AGIARACQAlACBYgKIAjgEQBZgIBIAFQCcALB/BCIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_114 = new cjs.Graphics().p("AJcKIIj1jRQCWAIBhgWQA2gNAqgcQAugeAjgSQArgVBBgXQAngPAgAEIHDF5gA2FjJIH+nIQASAnA8AGIARACQAlACBYgKIAjgEQBZgHBIAFQCbAKCABCIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_115 = new cjs.Graphics().p("AJcKIIj1jRQCWAIBhgWQA2gNAqgcQAtgeAkgSQArgVBBgXQAngPAgAEIHDF5gA2FjJIH+nIQATAoA7AGIAQACQAlACBZgKIAjgEQBZgIBIAFQCbALCABBIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_116 = new cjs.Graphics().p("AJcKIIj1jRQCWAIBhgWQA2gNAqgcQAtgfAkgSQArgVBBgWQAngPAgAEIHDF5gA2FjJIH+nIQATAoA6AGIARACQAlACBYgKIAkgEQBYgIBJAFQCaALCBBBIAAABQiUCJiLCBIgBABIhsBlIgBABg");
	var mask_graphics_117 = new cjs.Graphics().p("AJcKJIj1jSQCWAHBggVQA2gNArgdQAtgeAjgSQAsgVBBgWQAmgOAhADIHDF5gA2FjJIH+nIQATAoA6AGIARADQAlACBYgKIAkgFQBYgHBJAFQCaALCBBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_118 = new cjs.Graphics().p("AJcKJIj1jSQCWAHBggVQA2gNArgdQAtgeAjgSQArgVBCgWQAmgOAhADIHDF5gA2FjJIH+nIQATAoA6AHIARACQAkACBZgKIAkgEQBXgIBJAFQCbALCBBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_119 = new cjs.Graphics().p("AJcKJIj1jSQCXAHBfgVQA2gNArgdQAsgfAkgSQArgUBCgWQAmgOAhADIHDF5gA2FjJIH+nIQATAoA6AIIAQACQAlACBZgKIAjgFQBZgHBIAEQCaALCCBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_120 = new cjs.Graphics().p("AJcKJIj1jSQCXAHBfgVQA3gNAqgdQAsggAkgRQArgVBCgVQAmgOAhADIHDF5gA2FjJIH+nIQATAoA6AIIAQACQAlACBZgKIAjgEQBZgIBIAFQCaAKCCBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_121 = new cjs.Graphics().p("AJcKJIj1jSQCXAHBfgVQA3gNAqgeQAsgfAkgRQArgVBCgWQAlgNAiADIHDF5gA2FjJIH+nIQAUApA4AHIARACQAlADBYgLIAkgEQBYgIBJAFQCZAKCDBAIAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_122 = new cjs.Graphics().p("AJcKJIj1jSQCXAHBfgVQA3gNAqgeQAsgfAjgSQAsgVBCgVQAlgNAiADIHDF5gA2FjJIH+nIQAUApA4AHQAIACAJABQAlACBYgLIAkgDQBYgIBJAEQCYALCEA/IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_123 = new cjs.Graphics().p("AJcKJIj1jSQCYAHBegVQA3gNAqgeQAsggAjgSQArgUBDgVQAlgNAiADIHDF5gA2FjJIH+nIQAUApA4AIIARACQAkACBZgKIAkgEQBYgIBIAFQCZAKCEA/IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_124 = new cjs.Graphics().p("AJcKJIj1jSQCYAHBegVQA3gNAqgeQAsghAjgRQArgVBDgUQAlgNAiADIHDF5gA2FjJIH+nIQAUApA4AIIARACQAkADBZgLIAjgDQBZgJBIAFQCZAKCEA/IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_125 = new cjs.Graphics().p("AJcKJIj1jSQCYAHBegVQA2gNAqgeQAtghAjgSQAsgUBCgUQAlgNAiADIHDF5gA2FjJIH+nIQAUAqA4AHQAHACAKAAQAkADBZgKIAjgEQBZgIBIAEQCYALCFA+IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_126 = new cjs.Graphics().p("AJcKJIj1jSQCYAHBegVQA2gNAqgfQAtggAjgSQArgVBDgTQAlgNAiADIHDF5gA2FjJIH+nIQAUApA3AJIASACQAjACBZgKIAkgEQBYgIBJAFQCYAKCFA+IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_127 = new cjs.Graphics().p("AJcKJIj1jSQCZAHBdgVQA2gNAqgfQAtghAjgRQArgVBDgTQAlgNAiADIHDF5gA2FjJIH+nIQAVApA2AJQAIACAJAAQAkADBZgLIAkgDQBYgIBJAEQCYAKCFA+IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_128 = new cjs.Graphics().p("AJcKJIj1jSQCZAHBdgVQA2gNAqgfQAsgiAkgRQArgUBDgTQAlgNAiADIHDF5gA2FjJIH+nIQAVAqA2AIQAIACAJAAQAjAEBagLIAjgEQBZgIBIAEQCYALCGA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_129 = new cjs.Graphics().p("AJcKJIj1jSQCaAHBcgVQA2gNAqgfQAsgiAkgRQArgUBDgUQAkgMAjADIHDF5gA2FjJIH+nIQAVAqA2AJIARACQAjADBagLIAjgDQBZgJBIAFQCXAKCHA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_130 = new cjs.Graphics().p("AJcKJIj1jSQCaAHBcgVQA2gOAqgfQAtgiAigRQAsgUBCgTQAmgMAiADIHDF5gA2FjJIH+nIQAVAqA2AJQAHACAKAAQAjADBagKIAjgEQBZgJBIAFQCXAKCHA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_131 = new cjs.Graphics().p("AJcKJIj1jSQCaAIBcgXQA2gNAqgfQAtgiAigRQArgUBDgTQAmgMAiADIHDF5gA2FjJIH+nIQAVArA2AIQAIACAIAAQAjADBagKIAkgEQBYgIBIAFQCYAJCHA9IAAACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_132 = new cjs.Graphics().p("AJdKJIj2jSQCaAIBcgXQA2gNAqgfQAsgjAjgRQArgTBDgTQAmgMAiADIHDF5gA2FjJIH+nIQAVAqA2AJIAQADQAjADBagLIAkgEQBYgIBIAFQCXAKCHA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_133 = new cjs.Graphics().p("AJdKJIj2jSQCbAIBbgXQA2gNAqgfQAsgjAjgRQArgUBDgSQAlgLAjACIHDF5gA2FjJIH+nIQAVAqA2AJIAQADQAjAEBagLIAjgEQBZgIBIAEQCWAKCIA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_134 = new cjs.Graphics().p("AJdKJIj2jSQCbAIBbgXQA2gNAqggQAsgiAjgRQAqgUBEgSQAlgLAjACIHDF5gA2FjJIH+nIQAVArA1AJQAIACAJAAQAiAEBbgKIAjgFQBZgIBIAFQCWAJCIA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_135 = new cjs.Graphics().p("AJdKJIj2jSQCbAIBbgXQA2gNAqggQAsgjAigQQArgVBEgRQAlgLAjACIHDF5gA2FjJIH+nIQAVArA1AJIARADQAiADBagKIAjgFQBagHBHAEQCXAJCIA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_136 = new cjs.Graphics().p("AJdKJIj2jSQCbAIBbgXQA2gOAqgfQAsgjAigRQArgUBEgRQAlgLAjACIHDF5gA2FjJIH+nIQAVArA1AJIAQADQAjAEBagLIAjgEQBagIBHAEQCWAKCJA7IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_137 = new cjs.Graphics().p("AJdKJIj2jSQCcAIBagXQA2gOAqgfQArgkAjgQQArgVBEgRQAlgLAjADIHDF5gA2FjJIH+nIQAWArA0AKQAHACAJAAQAjAEBagKIAjgFQBZgIBIAFQCWAICJA8IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_138 = new cjs.Graphics().p("AJdKJIj2jSQCcAIBagXQA2gOAqggQArgkAjgQQArgUBEgRQAlgLAjADIHDF5gA2FjJIH+nIQAWArA0AKIAQADQAjADBZgKIAkgFQBZgHBIAEQCWAJCJA7IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_139 = new cjs.Graphics().p("AJdKJIj2jSQCcAIBagXQA2gOAqggQArgkAjgQQAqgVBFgQQAkgKAkACIHDF5gA2FjJIH+nIQAWArA0AKIAQAEQAiADBagKIAjgFQBagJBIAFQCVAJCKA7IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_140 = new cjs.Graphics().p("AJdKJIj2jSQCdAIBZgXQA2gNAqgiQAsgjAhgRQArgUBFgQQAkgKAkACIHDF5gA2FjJIH+nIQAWAsAzAKQAIACAJABQAiAEBagLIAjgFQBagIBHAFQCVAJCLA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_141 = new cjs.Graphics().p("AJdKJIj2jSQCdAIBZgXQA2gNAqgiQArgkAigQQArgUBFgQQAkgKAkACIHDF5gA2FjJIH+nIQAWAsAzAKIAQADQAjAEBagLIAjgEQBagJBHAFQCVAJCLA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_142 = new cjs.Graphics().p("AJdKJIj2jSQCdAHBZgWQA2gOApghQAsglAigPQArgVBFgPQAkgKAkACIHDF5gA2FjJIH+nIQAWAsAzAKIAQAEQAjAEBagLIAjgFQBZgIBIAEQCVAJCLA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_143 = new cjs.Graphics().p("AJdKJIj2jSQCdAHBZgWQA2gOApgiQAsgkAigQQArgUBFgPQAkgKAkACIHDF5gA2FjJIH+nIQAWAtAzAJQAHADAJABQAiADBagKIAkgFQBZgIBIAEQCUAKCMA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_144 = new cjs.Graphics().p("AJdKJIj2jSQCeAHBYgWQA2gOApgiQAsgkAigRQAqgTBGgPQAkgKAkACIHDF5gA2FjJIH+nIQAXAsAyALIAPADQAjAEBagLIAjgEQBagJBIAFQCUAICMA6IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_145 = new cjs.Graphics().p("AJdKJIj2jSQCeAHBYgWQA2gOApgiQAsglAhgQQArgUBGgPQAjgJAlACIHDF5gA2FjJIH+nIQAWAtAyAKIAQAEQAjAEBagMIAjgDQBagJBHAEQCUAJCNA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_146 = new cjs.Graphics().p("AJdKJIj2jSQCeAHBYgWQA2gOApgiQAsglAhgRQArgTBGgPQAjgJAlACIHDF5gA2FjJIH+nIQAWAtAyAKQAIADAIABQAiAEBbgLIAjgEQBZgJBIAEQCUAJCNA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_147 = new cjs.Graphics().p("AJdKJIj2jSQCeAHBYgWQA2gOApgjQAsglAggQQAsgUBGgOQAjgJAlACIHDF5gA2FjJIH+nIQAWAtAyALIAQADQAiAFBbgMIAjgEQBZgJBIAFQCTAICOA5IABACQiUCIiLCBIgBABIhsBlIgBABg");
	var mask_graphics_148 = new cjs.Graphics().p("AJdKJIj2jSQCeAHBYgWQA2gOAogjQAsglAhgQQAsgUBFgOQAkgJAlACIHEF5gA2FjJIH+nIQAXAtAwALQAIACAIACQAiAEBbgLIAjgEQBagJBIAEQCTAICOA5IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_149 = new cjs.Graphics().p("AJdKJIj2jSQCeAHBYgWQA2gPAogiQAsgmAhgQQArgUBGgOQAkgHAlABIHEF5gA2FjJIH+nIQAXAtAwAMQAIACAIABQAiAEBbgLIAjgEQBagJBIAEQCSAJCPA4IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_150 = new cjs.Graphics().p("AJdKJIj2jSQCfAHBXgWQA2gPAogiQAsgmAhgQQArgUBGgOQAkgHAlABIHEF5gA2FjJIH+nIQAXAtAwAMIAQADQAiAFBbgMIAjgDQBZgKBIAFQCTAICPA4IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_151 = new cjs.Graphics().p("AJdKJIj2jSQCfAHBXgWQA2gOAogkQAsgmAhgQQArgTBGgOQAkgHAlABIHEF5gA2FjJIH+nIQAXAtAwAMQAHACAJABQAhAFBcgLIAjgEQBZgJBIAEQCSAICQA4IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_152 = new cjs.Graphics().p("AJdKJIj2jSQCfAHBXgWQA2gOAogkQAsgmAggQQAsgUBGgNQAkgHAlABIHEF5gA2FjJIH+nIQAXAuAwAMQAHACAJABQAhAEBcgLIAjgEQBZgIBIADQCSAJCQA3IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_153 = new cjs.Graphics().p("AJdKJIj2jSQCfAHBXgWQA2gPAogjQAsgnAggQQAsgTBGgNQAjgIAmACIHEF5gA2FjJIH+nIQAXAuAvAMIAQADQAiAFBbgMIAjgDQBagJBIAEQCRAICRA3IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_154 = new cjs.Graphics().p("AJdKJIj2jSQCgAHBWgWQA2gPAogjQArgnAhgQQArgTBHgNQAjgIAmACIHEF5gA2FjJIH+nIQAXAuAvAMQAIACAIABQAhAFBcgLIAjgEQBagJBIAEQCRAICRA3IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_155 = new cjs.Graphics().p("AJdKJIj2jSQCgAHBWgWQA2gOAoglQArgmAhgQQArgTBHgNQAjgIAmACIHEF5gA2FjJIH+nIQAXAuAvANQAIACAIABQAhAFBcgMIAjgEQBagIBHADQCRAJCSA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_156 = new cjs.Graphics().p("AJdKJIj2jSQCgAHBWgWQA2gPAogkQArgnAhgPQArgUBHgMQAjgIAmACIHEF5gA2FjJIH+nIQAYAuAuANIAQADQAhAFBcgLIAjgFQBZgIBIAEQCRAICSA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_157 = new cjs.Graphics().p("AJdKJIj2jSQCgAHBWgWQA2gPAogkQArgnAggQQAsgTBHgNQAjgGAmABIHEF5gA2FjJIH+nIQAYAuAuANQAHADAJAAQAhAFBcgKIAigFQBagJBIAEQCQAICTA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_158 = new cjs.Graphics().p("AJdKJIj2jSQChAHBVgXQA2gOAogkQArgoAggPQAsgUBHgMQAjgGAmABIHEF5gA2FjJIH+nIQAYAuAtAOIAQADQAhAFBcgLIAjgFQBagJBIAFQCQAHCTA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_159 = new cjs.Graphics().p("AJdKJIj2jSQChAHBVgXQA2gOAngkQAsgpAggPQArgTBIgMQAjgGAmABIHEF5gA2FjJIH+nIQAYAvAtANIAQADQAhAGBcgMIAjgFQBagIBIAEQCPAHCUA2IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_160 = new cjs.Graphics().p("AJdKJIj2jSQChAHBVgXQA2gOAngkQAsgpAggPQArgUBIgLQAjgGAmABIHEF5gA2FjJIH+nIQAYAvAtANQAIADAIAAQAhAGBcgLIAjgFQBagJBHAEQCQAICUA1IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_161 = new cjs.Graphics().p("AJdKJIj2jSQChAHBVgXQA2gOAnglQAsgpAggOQArgUBIgLQAigGAnABIHEF5gA2FjJIH+nIQAYAvAtANQAHADAJABQAgAFBdgLIAjgFQBZgIBIAEQCQAHCUA1IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_162 = new cjs.Graphics().p("AJdKJIj2jSQCiAHBUgXQA2gOAnglQAsgpAfgPQAsgTBIgLQAigGAnABIHEF5gA2FjJIH+nIQAYAvAtANIAQAEQAgAGBdgLIAigFQBagJBIAEQCPAHCVA1IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_163 = new cjs.Graphics().p("AJdKJIj2jSQCiAHBUgXQA2gOAnglQArgpAggPQAsgTBIgLQAigGAnABIHEF5gA2FjJIH+nIQAYAvAtAOIAPAEQAhAFBcgLIAjgFQBagJBIAEQCPAICVA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_164 = new cjs.Graphics().p("AJdKJIj2jSQCiAHBUgXQA2gOAngmQArgpAggPQArgTBJgKQAigGAnABIHEF5gA2FjJIH+nIQAZAvArAOQAIADAIABQAgAFBdgLIAjgFQBagJBIAFQCOAHCWA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_165 = new cjs.Graphics().p("AJdKJIj2jSQCiAHBUgXQA2gOAngmQArgpAggQQArgSBIgLQAjgEAnAAIHEF5gA2FjJIH+nIQAZAwArANIAQAFQAgAFBdgLIAjgFQBagJBHAEQCPAHCWA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_166 = new cjs.Graphics().p("AJdKJIj1jSQCiAHBTgXQA2gPAnglQArgqAggPQArgTBIgKQAjgEAnAAIHEF5gA2FjJIH+nIQAZAwArAOIAQAEQAgAGBdgMIAigFQBagIBIADQCOAICXAzIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_167 = new cjs.Graphics().p("AJdKJIj1jSQCiAHBTgXQA2gPAnglQArgrAfgPQAsgSBIgKQAjgEAnAAIHEF5gA2FjJIH+nIQAZAwArAOQAHADAJABQAgAGBcgMIAjgEQBagJBIAEQCOAGCXA0IACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_168 = new cjs.Graphics().p("AJdKJIj1jSQCiAHBTgXQA2gOAngnQArgqAfgPQAsgSBIgKQAjgEAnAAIHEF5gA2FjJIH+nIQAZAwArAOIAPAFQAgAFBdgMIAjgEQBagJBIAEQCNAHCYAzIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_169 = new cjs.Graphics().p("AJdKJIj1jSQCiAHBTgXQA2gPAngmQArgqAfgPQAsgTBIgJQAigFAoABIHEF5gA2FjJIH+nIQAZAwAqAOQAIADAIACQAgAFBdgLIAjgEQBagKBIAEQCNAHCYAzIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_170 = new cjs.Graphics().p("AJdKJIj1jSQCjAHBSgXQA2gPAmgmQAsgrAfgPQArgTBJgIQAigFAoABIHEF5gA2FjJIH+nIQAZAwAqAPQAIADAIABQAgAGBdgMIAjgEQBagKBHAEQCNAICZAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_171 = new cjs.Graphics().p("AJdKJIj1jSQCjAHBSgXQA2gPAmgmQAsgsAfgOQArgTBJgIQAigFAoABIHEF5gA2FjJIH+nIQAZAxAqAOIAQAFQAfAGBegMIAigEQBbgKBHADQCNAICZAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_172 = new cjs.Graphics().p("AJdKJIj1jSQCjAHBSgYQA2gOAmgnQArgrAfgPQAsgSBJgIQAigFAoABIHEF5gA2FjJIH+nIQAaAxApAOQAHAEAIABQAgAGBdgMIAjgEQBagKBIAEQCNAHCZAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_173 = new cjs.Graphics().p("AJdKJIj1jSQCjAHBSgYQA2gOAmgnQArgrAfgPQAsgTBJgIQAigDAoAAIHEF5gA2FjJIH+nIQAaAxApAPQAHADAIACQAgAFBdgMIAjgEQBagJBIADQCMAHCaAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_174 = new cjs.Graphics().p("AJdKJIj1jSQCkAHBRgYQA2gOAmgoQArgrAfgOQAsgTBJgIQAigDAoAAIHEF5gA2FjJIH+nIQAaAxAoAPIAQAFQAfAGBegMIAjgEQBagKBIADQCMAICaAxIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_175 = new cjs.Graphics().p("AJdKJIj1jSQCkAHBRgYQA2gPAmgnQArgsAfgNQArgTBKgIQAigDAoAAIHEF5gA2FjJIH+nIQAaAxAoAPQAIAEAIABQAfAGBegMIAigEQBbgKBHAEQCMAGCbAyIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_176 = new cjs.Graphics().p("AJdKJIj1jSQCkAHBRgYQA2gPAmgnQArgsAfgOQArgSBKgIQAigDAoAAIHEF5gA2FjJIH+nIQAaAxAoAQQAIADAIABQAfAGBegMIAigEQBbgJBHADQCMAHCbAxIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_177 = new cjs.Graphics().p("AJdKJIj1jSQCkAHBRgYQA2gPAmgnQArgsAegOQAsgTBKgHQAhgDApAAIHEF5gA2FjJIH+nIQAaAyAoAPQAHADAIABQAgAHBdgMIAjgEQBagKBIADQCLAHCcAxIACABQiVCIiKCCIgBABIhuBmg");
	var mask_graphics_178 = new cjs.Graphics().p("AJdKJIj1jSQClAHBQgYQA2gPAmgoQArgtAfgNQA/gcCDAAIHBF5gA2FjJIH+nIQAfA7AyALQAfAGBegMQBwgOBVAEQCMAGCdAyQiVCJiLCCIhuBmg");
	var mask_graphics_179 = new cjs.Graphics().p("AVeKSIsBgJIgJgHIjsjKQBbADBAgGQA1gEAlgLQASgFAQgIQAhgQAZgaQAggiAagPQBPglCCAAIAKAJIDeC5IDZC3IgTAAIgUAAgA2FjIIH+nJQAgA8AzAKQAfAGBggMQBvgPBVAEQCMAHCaAyQiVCJiLCCIhuBmg");
	var mask_graphics_180 = new cjs.Graphics().p("AVeKSIsAgJIgKgHIjsjKQBbAEBAgHQA1gEAlgMQASgFAQgIQAggQAZgaQAhghAagQQBPgkCCAAIAKAJIDeC5IDZC3IgTAAIgUAAgA2FjIIH+nJQAgA7A0AKQAfAGBhgMQBxgPBUAEQCLAHCYAzQiVCJiLCCIhuBmg");
	var mask_graphics_181 = new cjs.Graphics().p("AVfKSIsBgJIgJgHIjtjKQBbAEBBgHQA0gFAlgMQASgFAQgIQAggQAZgaQAhghAagQQBPgkCCABIAKAJIDeC5IDZC2IgZABIgNAAgA2EjIIH9nJQAhA7A1AKQAfAGBjgNQBxgPBUAEQCJAHCWA0QiVCJiLCCIhtBmg");
	var mask_graphics_182 = new cjs.Graphics().p("AVgKSIsBgJIgKgHIjsjKQBZAEBCgHQA0gFAlgNQASgFAQgIQAggQAZgaQAhghAagQQBPgjCDABIAJAJIDdC5IDaC2IgZABIgMAAgA2EjIIH9nJQAhA7A3AJQAfAGBkgNQBygQBTAFQCJAHCUA1QiWCJiKCCIhuBmg");
	var mask_graphics_183 = new cjs.Graphics().p("AVhKSIsCgJIgJgHIjtjKQBaAEBBgIQAzgEAmgOQASgFAQgIQAggQAZgaQAhghAagPQBQgjCBABIAKAJIDeC5IDZC2IgbABIgJAAgA2EjIIH+nJQAhA7A3AJQAfAGBmgOQBygQBTAFQCJAHCRA2QiVCJiLCCIhuBmg");
	var mask_graphics_184 = new cjs.Graphics().p("AVhKSIsCgJIgJgHIjtjKQBaAEBBgIQAygFAngNQARgGARgIQAfgQAZgaQAhghAbgPQBQgjCBACIAKAJIDdC5IDaC2IgaABIgKAAgA2EjIIH+nJQAhA7A5AIQAfAGBogPQBygPBTAFQCHAICPA2QiVCJiLCCIhuBmg");
	var mask_graphics_185 = new cjs.Graphics().p("AViKSIsCgJIgJgHIjujKQBaAEBBgIQAygFAmgOQASgGAQgIQAggRAZgZQAhggAbgQQBQgiCBACIAKAJIDeC5IDZC1QgNACgPAAIgHAAgA2EjIIH+nJQAhA7A7AIQAfAFBpgPQBzgPBSAFQCGAICNA3QiVCJiLCCIhuBmg");
	var mask_graphics_186 = new cjs.Graphics().p("AVjKSIsDgJIgJgGIjujLQBaAEBBgIQAygFAngPQARgGAQgIQAggRAZgZQAhggAbgPQBRgjCAADIAKAJQBjBTB7BmIDYC1QgMACgOAAIgHAAgA2DjIIH9nJQAiA7A7AHQAfAGBrgQQBzgQBSAGQCGAICKA4QiVCJiLCCIhtBmg");
	var mask_graphics_187 = new cjs.Graphics().p("AVkKSIsEgJIgJgGIjujLQBaAFBBgKQAxgFAngPQASgGAQgIQAggRAZgZQAhggAbgPQBRgiCAADIAJAIQBiBTB8BnIDZC1QgMACgOAAIgGAAgA2DjIIH9nJQAjA6A8AIQAfAFBsgQQB0gQBSAGQCEAICIA5QiVCJiLCCIhtBmg");
	var mask_graphics_188 = new cjs.Graphics().p("AVlKSIsFgJIgJgGIjtjLQBZAFBCgKQAwgFAogQQARgGAQgIQAfgRAagZQAgggAcgPQBRgiCAAEIAKAIIDdC6IDZC1QgMACgOAAIgFAAgA2DjIIH9nJQAjA6A+AHQAeAFBugQQB1gQBRAFQCEAJCGA6QiWCJiKCCIhuBmg");
	var mask_graphics_189 = new cjs.Graphics().p("AVlKSIsEgJIgJgGQhmhWiIh1QBZAFBCgKQAwgFAngRQASgGAQgIQAfgRAagZQAhggAbgOQBRgiCAAEIAJAIQBfBQB/BqIDZC0QgLADgPAAIgFAAgA2DjIIH+nJQAjA6A+AHQAfAFBwgRQB0gQBRAFQCEAJCDA7QiVCJiLCCIhuBmg");
	var mask_graphics_190 = new cjs.Graphics().p("AVmKSIsEgJIgKgGQhjhUiLh3QBaAFBAgKQAxgGAngQQARgGARgJQAfgRAZgZQAigfAbgPQBSgiB+AFIAKAIQBdBPCCBrIDYC0QgLADgPAAIgEAAgA2DjIIH+nJQAjA6BAAGQAfAFBxgRQB1gRBRAGQCCAKCBA7QiVCJiLCCIhuBmg");
	var mask_graphics_191 = new cjs.Graphics().p("AVnKSIsFgJIgKgGQhihSiMh5QBaAFBAgLQAwgFAogRQARgGARgJQAfgRAZgZQAhgfAcgPQBSghB+AFIAKAIQBbBNCEBtIDYC0QgLADgOAAIgEAAgA2DjIIH+nJQAjA6BBAGQAgAFBygSQB1gRBRAGQCCAKB+A8QiVCJiLCCIhuBmg");
	var mask_graphics_192 = new cjs.Graphics().p("AVoKSIsGgJIgKgGQhghRiOh6QBaAFBBgLQAugFApgSQARgGAQgJQAggRAZgZQAhgfAcgPQBSggB+AFIAKAIQBZBMCFBuIDYCzQgKAEgOAAIgDAAgA2CjIIH9nJQAkA6BCAFQAfAFB0gSQB2gRBQAGQCBAKB8A9QiVCJiLCCIhtBmg");
	var mask_graphics_193 = new cjs.Graphics().p("AVoKSIsGgJIgJgGQhfhPiPh8QBZAFBBgLQAugGApgSQARgGAQgJQAfgSAagYQAhgfAbgOQBTghB+AGQAJAGAAACQBZBLCGBvIDYCzQgJAEgOAAIgEAAgA2CjIIH9nJQAlA5BDAGQAeAEB2gSQB3gRBPAGQCBAKB6A+QiWCJiKCCIhuBmg");
	var mask_graphics_194 = new cjs.Graphics().p("AVpKSIsHgJIgJgGQhehOiQh9QBZAGBBgNQAugFAogTQARgGARgJQAfgSAZgYQAigeAbgPQBUggB9AGIAJAIQBXBJCIBxIDYCzQgJAEgOAAIgDAAgA2CjIIH9nJQAlA5BEAFQAfAFB4gTQB3gSBPAHQB/AKB4A/QiWCJiKCCIhuBmg");
	var mask_graphics_195 = new cjs.Graphics().p("AVqKSIsHgJIgKgGQhchMiSh/QBZAGBBgNQAtgFAqgUQARgGAQgJQAfgSAZgYQAigeAcgPQBTggB9AHIAJAIQBVBICKByIDYCzQgJAEgNAAIgDAAgA2CjIIH+nJQAlA5BFAFQAfAEB5gTQB3gSBPAHQB/AKB1BAQiVCJiLCCIhuBmg");
	var mask_graphics_196 = new cjs.Graphics().p("AJkKJIgKgGQhahLiViBQBZAHBBgNQAtgGAqgUQAQgGARgJQAegSAagYQAigeAcgPQBTggB9AIIAKAIQBTBGCLBzIDYCzQgJAFgPAAIsHgJgA2CjJIH+nIQAlA4BGAFQAfAEB8gUQB3gRBPAGQB9ALBzBBQiVCJiLCCIhuBmg");
	var mask_graphics_197 = new cjs.Graphics().p("AJkKJIgKgGQhZhJiWiDQBZAHBCgNQAsgHAqgTQAQgHARgJQAegSAagYQAhgeAdgOQBTggB9AIIAJAIQBSBFCNB0IDXCzQgIAFgOAAIsIgJgA2BjJIH9nIQAmA5BHADQAfAFB9gVQB4gSBOAHQB9AMBwBBQiVCJiLCCIhtBmg");
	var mask_graphics_198 = new cjs.Graphics().p("AJkKJIgKgGQhXhIiYiEQBZAHBBgOQAsgGAqgUQARgHAQgJQAfgTAagXQAhgeAcgOQBUggB9AJIAJAHQBQBECPB2IDXCyQgHAGgPAAIsIgJgA2BjJIH9nIQAmA4BIAEQAgAEB+gVQB4gSBOAIQB8ALBuBCQiVCJiLCCIhtBmg");
	var mask_graphics_199 = new cjs.Graphics().p("AJkKJIgKgGQhVhGiZiGQBYAHBCgOQArgGAqgWQARgGAQgJQAfgTAZgXQAigeAcgOQBUgfB8AJIAKAHQBOBDCRB3IDXCyQgHAGgOAAIsJgJgA2BjJIH9nIQAnA4BJAEQAfADCAgVQB5gSBNAIQB8ALBsBDQiWCJiKCCIhuBmg");
	var mask_graphics_200 = new cjs.Graphics().p("AJlKJIgKgGQhUhFibiHQBZAIBBgQQArgGAqgVQARgHAQgJQAfgTAZgXQAigeAcgOQBVgfB8AJQAIAHABABQBMBCCTB4IDXCyQgGAGgOAAIsJgJgA2BjJIH+nIQAmA4BLADQAfAECBgVQB6gUBNAJQB6ALBqBEQiVCJiLCCIhuBmg");
	var mask_graphics_201 = new cjs.Graphics().p("AJlKJIgJgFQhUhFiciIQBZAIBBgQQAqgGAsgWQAQgHAQgKQAegSAbgXQAggdAegOQBUgfB8AJQAIAHABABQBLBBCUB5IDWCyQgEAGgOAAIsKgJgA2BjJIH+nIQAnA4BLADQAgADCCgVQB7gUBMAIQB6AMBnBFQiVCJiLCCIhuBmg");
	var mask_graphics_202 = new cjs.Graphics().p("AJmKJIgKgFQhShDieiKQBZAIBBgQQAqgGArgXQAQgHAQgKQAfgSAagXQAhgdAegNQBUgfB8AJIAJAIQBJA/CWB7IDWCyQgFAGgNAAIsJgJgA2BjJIH+nIQAnA4BNACQAfADCFgVQB6gUBNAIQB4AMBlBGQiVCJiLCCIhuBmg");
	var mask_graphics_203 = new cjs.Graphics().p("AJmKJIgKgFQhQhBigiMQBZAIBBgQQApgHAsgXQAQgHAQgKQAfgSAagXQAhgdAdgNQBVgfB7AKIAJAHQBIA+CYB9IDWCxQgEAHgNAAIsKgJgA2AjJIH9nIQAnA4BOACQAgACCGgVQB7gUBMAIQB4AMBiBHQiVCJiLCCIhtBmg");
	var mask_graphics_204 = new cjs.Graphics().p("AJmKJIgKgFQhOhAihiNQBYAIBCgRQAogGAsgXQAQgIARgKQAegSAZgXQAigdAdgNQBWgeB6AKIAJAHQBGA9CaB+IDWCxQgEAHgMAAIsLgJgA2AjJIH9nIQAoA4BPABQAfADCJgXQB6gUBMAJQB4ANBgBHQiWCJiKCCIhuBmg");
	var mask_graphics_205 = new cjs.Graphics().p("AJmKJIgKgFQhNg+iiiPQBYAIBCgRQAngGAtgYQAQgIAQgKQAfgSAZgXQAigdAdgNQBWgeB6ALQAIAGABABQBFA8CbB/IDWCxQgDAHgMAAIsMgJgA2AjJIH9nIQApA3BPACQAgADCJgYQB8gUBLAJQB3AMBeBJQiWCJiKCCIhuBmg");
	var mask_graphics_206 = new cjs.Graphics().p("AJnKJIgKgFQhLg9iliQQBYAIBBgRQAogHAtgYQAQgHAQgKQAegUAagWQAigcAdgNQBWgeB6ALQAIAGABABQBDA7CdCAIDWCxQgCAHgMAAIsMgJgA2AjJIH+nIQAoA3BRABQAgADCLgYQB8gUBLAJQB2ANBbBJQiVCJiLCCIhuBmg");
	var mask_graphics_207 = new cjs.Graphics().p("AJnKJIgKgFQhJg7iniSQBYAJBBgTQAogGAtgZQAPgHARgKQAegUAagWQAhgcAegNQBWgeB6AMQAJAGAAABQBBA5CfCCIDVCwQgBAIgLAAIsNgJgA2AjJIH+nIQApA3BSAAQAfADCNgYQB8gUBMAJQB0ANBZBKQiVCJiLCCIhuBmg");
	var mask_graphics_208 = new cjs.Graphics().p("AJoKJIgLgFQhIg6ioiTQBZAJBBgTQAngGAtgaQAQgIAQgJQAegUAagWQAigcAdgNQBXgdB5AMQAIAGABABQBAA4CgCDIDVCwQAAAIgMAAIsMgJgA1/jJIH9nIQApA3BUAAQAfACCOgYQB9gUBLAJQB0ANBWBLQiVCJiLCCIhtBmg");
	var mask_graphics_209 = new cjs.Graphics().p("AJoKJIgLgFQhGg5iqiUQBZAJBBgTQAmgHAtgaQAQgIAQgJQAfgTAZgXQAigcAegNQBXgdB5ANQAIAGAAABQA/A2CiCFIDVCwQAAAIgLAAIsNgJgA1/jJIH9nIQApA2BVAAQAgADCPgZQB+gUBKAJQBzANBUBMQiVCJiLCCIhtBmg");
	var mask_graphics_210 = new cjs.Graphics().p("AJoKJIgKgFQhFg3isiWQBYAJBCgTQAlgHAugbQAQgIAQgKQAegTAagVQAigdAegNQBXgcB4ANIAJAHQA9A1CjCGIDWCvQAAAJgLAAIsNgJgA1/jJIH9nIQAqA3BVgBQAgACCRgZQB+gVBKAJQBzAOBRBNQiVCJiLCCIhtBmg");
	var mask_graphics_211 = new cjs.Graphics().p("AJpKJIgLgEQhDg2itiYQBYAJBBgUQAlgGAugcQAQgHAQgLQAegTAagVQAigcAegNQBXgcB5ANQAIAGAAABQA7A0CmCHIDVCvQABAJgKAAIsOgJgA1/jJIH+nIQApA2BXgBQAgACCTgZQB+gVBKAJQBxAOBQBOQiVCJiLCCIhuBmg");
	var mask_graphics_212 = new cjs.Graphics().p("AJpKJIgLgEQhBg1iviZQBYAJBBgUQAlgGAugdQAQgHAQgLQAegTAagVQAigcAegNQBXgcB4AOQAJAGAAABQA5AyCoCJIDVCvQABAJgKAAIsOgJgA1/jJIH+nIQAqA2BYgBQAfACCVgaQB/gWBJAKQBxAOBNBPQiVCJiLCCIhuBmg");
	var mask_graphics_213 = new cjs.Graphics().p("AJpKJIgLgEQhAgziwibQBYAJBBgUQAkgHAvgdQAPgHAQgLQAegTAagVQAigcAfgNQBXgbB4AOQAIAGABABQA3AwCpCLIDVCvQADAJgKAAIsPgJgA1/jJIH+nIQAqA2BZgCQAgACCWgaQB/gWBJAKQBwAOBLBQQiVCJiLCCIhuBmg");
	var mask_graphics_214 = new cjs.Graphics().p("AV4KSIsPgKIgKgDQg/gyiyicQBYAJBBgUQAkgHAvgdQAPgIAQgLQAegUAagVQAigbAegMQBZgcB3AOQAIAGAAABQA3AwCqCLIDVCvQADAKgJAAIgBAAgA1/jJIH+nIQAqA2BbgCQAfABCYgbQB/gVBJAKQBvAPBJBQQiVCJiLCCIhuBmg");
	var mask_graphics_215 = new cjs.Graphics().p("AV5KSIsQgKIgKgDQg+gwizieQBYAJBBgVQAjgHAvgdQAQgIAQgLQAegUAagVQAigbAegMQBZgbB3AOIAIAHQA1AvCsCMIDUCvQAEAKgIAAIgBAAgA1/jJIH+nIQArA2BbgCQAgABCZgcQCAgVBIAKQBvAPBGBRQiVCJiLCCIhuBmg");
	var mask_graphics_216 = new cjs.Graphics().p("AV5KSIsQgKIgKgDQg8gvi1ifQBYAJBBgVQAjgHAvgeQAPgIAQgLQAegUAagVQAigaAfgNQBZgbB2APQAJAGAAABQAzAtCuCOIDUCuQAEALgIAAIgBAAgA1/jJIH+nIQArA1BdgCQAfABCbgcQCAgWBIALQBuAPBEBSQiVCJiLCCIhuBmg");
	var mask_graphics_217 = new cjs.Graphics().p("AV6KSIsQgKIgLgDQg6gti3ihQBYAKBBgWQAigHAwgfQAPgIAQgLQAegUAagVQAigaAfgMQBZgbB2APQAIAGAAABQAyAsCwCPIDUCuQAFALgIAAIgBAAgA1/jJIH+nIQArA1BegCQAgABCcgdQCBgWBIALQBsAPBCBTQiVCJiLCCIhuBmg");
	var mask_graphics_218 = new cjs.Graphics().p("AV7KSIsRgKIgLgDQg5gsi4iiQBXAKBCgWQAhgIAxgfQAPgIAQgLQAdgUAbgVQAigaAfgMQBZgaB2APQAIAGAAABQAwArCxCQIDUCuQAGALgIAAIAAAAgA1/jJIH+nIQAsA1BegDQAgABCegdQCBgWBIALQBsAPA/BUQiVCJiLCCIhuBmg");
	var mask_graphics_219 = new cjs.Graphics().p("AV7KSIsRgKIgLgDQg3gqi6ikQBXAKBCgXQAhgHAwggQAPgIAQgLQAegUAagVQAigaAfgMQBagaB1AQQAJAGAAABQAuApCzCSIDUCtQAGAMgHAAIgBAAgA1/jJIH+nIQAsA1BggDQAfAACggdQCCgWBHALQBrAPA9BVQiVCJiLCCIhuBmg");
	var mask_graphics_220 = new cjs.Graphics().p("AV8KSIsSgKIgLgDQg1gpi8ilQBXAKBCgXQAggHAxghQAPgIAQgLQAegUAagVQAigaAfgMQBagZB1AQQAIAGAAABQAtAoC1CTIDUCtQAGAMgHAAIAAAAgA1/jJIH+nIQAsA1BhgEQAgABChgeQCCgXBHALQBrAQA6BWQiVCJiLCCIhuBmg");
	var mask_graphics_221 = new cjs.Graphics().p("AV8KSIsSgKIgLgDQg0gni9inQBXAKBCgXQAggIAxggIAfgUQAdgUAagVQAjgZAfgMQBagaB1ARQAIAGAAABQArAmC3CVIDTCtQAHAMgGAAIgBAAgA1/jJIH+nIQAtA1BigEQAfAACjgeQCDgXBGALQBqARA4BWQiVCJiLCCIhuBmg");
	var mask_graphics_222 = new cjs.Graphics().p("AV9KSIsTgKIgLgCQgygnjAioQBYAKBBgYQAggHAxghQAPgJAQgLIA4gpQAigZAfgMQBagZB1ARQAIAGAAABQAqAlC4CWIDTCtQAJAMgHAAIAAAAgA1/jJIH9nIQAtA0BkgEQAfAAClgeQCDgXBGALQBpARA1BXQiVCJiLCCIhtBmg");
	var mask_graphics_223 = new cjs.Graphics().p("AV9KSIsTgKIgLgCQgxgljBiqQBYAKBBgYQAfgHAygiQAPgJAPgLIA4goQAjgaAfgMQBagZB1ASQAIAFAAACQAoAkC6CXIDTCsQAJANgGAAIgBAAgA1/jJIH9nIQAuA0BkgEQAgAACmgfQCDgXBGALQBoARAzBYQiVCJiLCCIhtBmg");
	var mask_graphics_224 = new cjs.Graphics().p("AV+KSIsUgKIgLgCQgvgkjDirQBYALBBgZQAfgIAxgiQAPgJAQgLIA4goQAigaAggLQBbgZB0ASQAIAFAAACQAmAiC8CZIDTCsQAJANgGAAIAAAAgA1/jJIH9nIQAuA0BmgFQAfAACogfQCEgYBFAMQBnARAxBZQiVCJiLCCIhtBmg");
	var mask_graphics_225 = new cjs.Graphics().p("AV+KSIsUgJIgLgDQgtgijFisQBXAKBCgZQAegIAygiIAfgVIA3goQAjgZAfgMQBcgYBzATQAJAFgBABQAlAhC9CbIDTCrQAKANgGAAIAAAAgA1/jIIH9nJQAuA0BngFQAgAACpggQCEgXBFAMQBnARAuBZQiVCJiLCCIhtBmg");
	var mask_graphics_226 = new cjs.Graphics().p("AV+KTIsUgKIgLgCQgsghjGiuQBXALBBgaQAegHAygkQAPgJAQgLIA3goQAjgZAggMQBbgYB0ATQAIAFAAABQAiAgDACcIDTCsQAKANgFAAIgBAAgA2AjIIH+nIQAuA0BogGQAgAACrggQCEgYBFAMQBmARAsBbQiVCJiLCCIhuBmg");
	var mask_graphics_227 = new cjs.Graphics().p("AV/KTIsVgJIgLgCQgrggjHivQBXAKBBgZQAdgIAzgkQAPgJAPgMIA4goQAjgZAggLQBbgYBzAUQAIAFAAABQAiAfDACdIDTCrQALAOgFAAIAAgBgA2AjHIH+nJQAuA0BpgGQAgAACtghQCFgYBEAMQBlASAqBbQiVCJiLCCIhuBmg");
	var mask_graphics_228 = new cjs.Graphics().p("AV/KUIsVgJIgLgCQgqgejJixQBXALBCgbQAcgIAzgkIAfgVIA3goQAjgZAggLQBcgXBzATQAIAGgBABQAgAdDDCeIDSCsQAMANgEAAIgBAAgA2AjGIH9nJQAvA0BqgGQAggBCughQCGgYBEAMQBkASAnBcQiVCJiLCCIhtBmg");
	var mask_graphics_229 = new cjs.Graphics().p("AWAKVIsWgKIgLgCQgogcjLizQBXALBCgaQAcgIAzglIAegVIA4goQAjgZAggLQBcgXByAUQAIAFAAABQAeAcDECgIDTCrQAMAOgEAAIAAAAgA2AjGIH9nIQAwAzBrgGQAfgBCwghQCGgZBEANQBjASAlBdQiVCJiLCCIhtBmg");
	var mask_graphics_230 = new cjs.Graphics().p("AWAKVIsWgJIgLgCQgmgbjNi0QBXALBBgbQAcgIA0gmQAOgJAQgMIA3goQAjgYAggLQBdgXByAUQAIAFAAABQAcAbDGChIDTCrQANAOgFAAIAAAAgA2AjFIH9nJQAwA0BsgHQAggBCxgiQCHgZBDANQBjASAiBeQiVCJiLCCIhtBmg");
	var mask_graphics_231 = new cjs.Graphics().p("AWAKWIsWgKIgLgCQglgZjOi2QBXAMBBgcQAbgIA0gmIAegVIA4goQAigYAhgLQBcgXByAVQAIAFAAABQAbAaDICiIDSCqQAOAPgEAAIgBAAgA2BjFIH+nIQAwAzBtgHQAggBCzgiQCHgZBDANQBhASAhBfQiVCJiLCCIhuBmg");
	var mask_graphics_232 = new cjs.Graphics().p("AJqKNIgLgCQgjgYjQi3QBWALBCgcQAbgIA0gmIAegWIA3goQAjgYAggKQBdgXByAVQAIAFAAABQAZAZDJCjIDSCqQAPAQgEAAIsXgKgA2BjEIH+nJQAwAzBugHQAggBC1gjQCHgZBDANQBhATAeBfQiVCJiLCCIhuBmg");
	var mask_graphics_233 = new cjs.Graphics().p("AJqKNIgMgBQghgXjSi5QBXAMBBgcQAbgJA0gnIAegVIA3goQAjgYAhgLQBdgWBxAWQAIAFAAABQAYAXDLClIDRCqQAQAPgEAAIsXgKgA2BjEIH9nIQAxAzBvgIQAggCC2giQCIgaBCANQBhATAbBhQiVCJiLCCIhtBmg");
	var mask_graphics_234 = new cjs.Graphics().p("AJqKOIgMgCQgggVjTi6QBXAMBBgdQAagJA1gnIAegWIA3goQAjgXAhgLQBdgWBxAWQAIAFAAABQAWAWDMCmIDSCqQAQAQgDAAIsYgKgA2BjDIH9nJQAxAzBxgIQAggCC4gjQCIgaBCAOQBfATAZBhQiVCJiLCCIhtBmg");
	var mask_graphics_235 = new cjs.Graphics().p("AJpKOIgLgBQgegUjVi8QBWAMBCgdQAZgJA1gnIAegWQAcgWAbgSQAjgYAhgKQBegWBwAXQAIAEAAACQAUAUDPCoIDRCpQARAQgDAAIsZgKgA2CjDIH+nIQAxAyBygIQAggCC5gkQCJgZBBANQBfAUAXBiQiVCJiLCCIhuBmg");
	var mask_graphics_236 = new cjs.Graphics().p("AJqKPIgMgCQgdgSjWi9QBWAMBCgeQAYgIA2gpIAdgWQAdgWAbgSQAjgXAhgKQBegWBwAXQAIAFgBABQATATDQCpIDSCpQARARgDAAIsYgKgA2CjCIH+nJQAxAzBzgJQAggCC7gkQCJgaBBAOQBeATAVBjQiVCJiLCCIhuBmg");
	var mask_graphics_237 = new cjs.Graphics().p("AJpKPIgLgBQgcgRjYi/QBXAMBBgeQAYgIA2gpIAdgWQAdgWAbgSQAjgXAhgKQBegWBwAYQAIAEAAABQARASDSCrIDRCpQASAQgCAAIsagKgA2CjCIH9nIQAyAyB0gJQAggCC9glQCJgaBBAOQBdAUASBkQiVCJiLCCIhtBmg");
	var mask_graphics_238 = new cjs.Graphics().p("AJpKQIgLgBQgagPjajBQBXANBBgfQAYgJA2gpIAdgWQAdgWAagSQAjgXAigKQBegVBwAYQAIAEgBABQAQARDUCsIDRCoQASARgCAAIsagKgA2CjBIH9nIQAyAyB2gKQAfgCC/glQCKgaBAAOQBcAUAQBlQiVCJiLCCIhtBmg");
	var mask_graphics_239 = new cjs.Graphics().p("AJpKRIgLgBQgZgOjbjCQBWAMBBgfQAYgIA2gqIAdgXQAdgWAbgSQAjgWAhgKQBfgVBvAYQAIAFgBABQAOAPDWCtIDRCoQATASgCAAIsagKgA2DjAIH+nJQAyAyB2gKQAggCDAglQCLgbBAAPQBbAUAOBlQiVCJiLCCIhuBmg");
	var mask_graphics_240 = new cjs.Graphics().p("AJpKRIgLgBQgXgMjdjEQBWANBBgfQAXgJA3grIAdgWQAcgXAbgRQAjgXAigJQBfgVBvAZQAIAEgBABQANAODXCvIDQCoQAVARgCAAIsbgKgA2DjAIH+nIQAyAyB4gLQAggCDBgmQCLgbBAAPQBbAUALBnQiVCJiLCCIhuBmg");
	var mask_graphics_241 = new cjs.Graphics().p("AJpKSIgMgBQgVgLjfjFQBWANBCggQAWgJA3grIAdgXQAdgWAagRQAjgXAigKQBfgUBvAZQAIAEgBABQALANDZCwIDRCoQAUASgBAAIsbgKgA2Di/IH9nJQAzAyB5gLQAggCDDgmQCLgbBAAOQBZAVAJBnQiVCJiLCCIhtBmg");
	var mask_graphics_242 = new cjs.Graphics().p("AJpKSIgMAAQgUgKjgjHQBWANBBggQAWgJA3grIAdgXQAdgXAagRQAkgWAhgKQBggUBuAZQAIAFgBABQAKALDaCxIDRCoIAUASIsbgKgA2Ei/IH+nIQAzAxB6gLQAggCDEgnQCMgbA/APQBZAVAHBoQiVCJiLCCIhuBmg");
	var mask_graphics_243 = new cjs.Graphics().p("AJpKTIgMgBQgSgIjijIQBWANBBghQAWgJA3gsIAdgXQAcgXAbgQQAjgWAigKQBggUBuAaQAIAEgBABQAIALDcCyIDQCnIAWATIscgKgA2Ei+IH+nJQAzAyB7gMQAggCDGgnQCNgcA+APQBZAVAEBpQiVCJiLCCIhuBmg");
	var mask_graphics_244 = new cjs.Graphics().p("AJoKUIgLgBQgRgHjkjJQBWANBCghQAVgJA3gsIAdgYQAcgXAbgQQAjgWAigKQBhgUBtAbQAIAEgBABQAGAJDeC0IDRCnIAWATIsdgKgA2Ei9IH9nJQA0AyB8gMQAggDDIgoQCNgbA+APQBXAWACBpQiVCJiLCCIhtBmg");
	var mask_graphics_245 = new cjs.Graphics().p("AJpKUIgMAAQgPgGjmjLQBWAOBCgiQAUgJA4gtIAdgXQAcgXAbgRQAjgWAigJQBhgTBtAaQAIAFgBABQAEAHDgC1QCZB8A3ArIAXATIscgKgA2Ei9IH9nIQA1AxB9gMQAfgDDKgoQCNgcA+AQQBXAVgBBrQiVCJiLCCIhtBmg");
	var mask_graphics_246 = new cjs.Graphics().p("AJpKVIgNgBQgNgEjnjMQBWANBBghQAUgKA4gtIAdgYQAcgXAbgQQAkgWAhgJQBigTBsAbQAJAEgCABQAEAGDgC3IDRCnIAXATIscgKgA2Fi8IH+nJQA1AxB9gMQAhgDDLgpQCOgcA9AQQBWAWgDBrQiVCJiLCCIhuBmg");
	var mask_graphics_247 = new cjs.Graphics().p("AJoKVIgLAAQgNgDjojOQBVAOBBgiQAUgKA5guIAcgXQAdgYAagQQAkgVAigJQBhgTBtAbQAHAEAAABQABAGDjC3IDQCnIAZATIsegKgA2Fi8IH9nIQA2AxB+gNQAggDDNgpQCOgcA9APQBWAWgFBtQiWCJiKCCIhuBmg");
	var mask_graphics_248 = new cjs.Graphics().p("AJoKWIgMAAQgKgCjrjPQBWAOBBgjQATgJA5gvIAdgYQAcgXAbgQQAjgVAigKQBigSBsAcQAIAEgBABQAAAEDkC5IDQCmIAaAUIsegKgA2Fi7IH9nJQA1AxCBgNQAggEDOgpQCPgcA9AQQBUAWgIBtQiVCJiLCCIhtBmg");
	var mask_graphics_249 = new cjs.Graphics().p("AJcKXQgJAAjsjRQBWAOBBgjQAXgMBRhEQBAg3A9gPQBYgWB/AiIgDADQAAABAAAAQAAABAAAAQAAAAABAAQAAABABAAQgEgBDnC7QDnC6ADAAIsqgKgA2Gi6IH+nIQA2AwCBgNQAggEDQgpQCPgdA8AQQBUAWgKBuQiVCJiLCDIhuBlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:141.5,y:67.4}).wait(1).to({graphics:mask_graphics_1,x:141.1,y:67.2}).wait(1).to({graphics:mask_graphics_2,x:141.1,y:67.2}).wait(1).to({graphics:mask_graphics_3,x:141.1,y:67.3}).wait(1).to({graphics:mask_graphics_4,x:141.1,y:67.3}).wait(1).to({graphics:mask_graphics_5,x:141.1,y:67.4}).wait(1).to({graphics:mask_graphics_6,x:141.1,y:67.4}).wait(1).to({graphics:mask_graphics_7,x:141.1,y:67.5}).wait(1).to({graphics:mask_graphics_8,x:141.2,y:67.6}).wait(1).to({graphics:mask_graphics_9,x:141.2,y:67.6}).wait(1).to({graphics:mask_graphics_10,x:141.2,y:67.7}).wait(1).to({graphics:mask_graphics_11,x:141.2,y:67.7}).wait(1).to({graphics:mask_graphics_12,x:141.2,y:67.8}).wait(1).to({graphics:mask_graphics_13,x:141.2,y:67.8}).wait(1).to({graphics:mask_graphics_14,x:141.2,y:67.9}).wait(1).to({graphics:mask_graphics_15,x:141.2,y:67.9}).wait(1).to({graphics:mask_graphics_16,x:141.2,y:68}).wait(1).to({graphics:mask_graphics_17,x:141.2,y:68}).wait(1).to({graphics:mask_graphics_18,x:141.2,y:68.1}).wait(1).to({graphics:mask_graphics_19,x:141.2,y:68.1}).wait(1).to({graphics:mask_graphics_20,x:141.2,y:68.2}).wait(1).to({graphics:mask_graphics_21,x:141.2,y:68.2}).wait(1).to({graphics:mask_graphics_22,x:141.2,y:68.3}).wait(1).to({graphics:mask_graphics_23,x:141.2,y:68.3}).wait(1).to({graphics:mask_graphics_24,x:141.2,y:68.4}).wait(1).to({graphics:mask_graphics_25,x:141.2,y:68.4}).wait(1).to({graphics:mask_graphics_26,x:141.2,y:68.5}).wait(1).to({graphics:mask_graphics_27,x:141.2,y:68.5}).wait(1).to({graphics:mask_graphics_28,x:141.3,y:68.5}).wait(1).to({graphics:mask_graphics_29,x:141.3,y:68.6}).wait(1).to({graphics:mask_graphics_30,x:141.3,y:68.6}).wait(1).to({graphics:mask_graphics_31,x:141.3,y:68.7}).wait(1).to({graphics:mask_graphics_32,x:141.3,y:68.7}).wait(1).to({graphics:mask_graphics_33,x:141.3,y:68.7}).wait(1).to({graphics:mask_graphics_34,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_35,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_36,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_37,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_38,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_39,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_40,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_41,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_42,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_43,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_44,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_45,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_46,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_47,x:141.3,y:68.9}).wait(1).to({graphics:mask_graphics_48,x:141.4,y:68.9}).wait(1).to({graphics:mask_graphics_49,x:141.4,y:68.9}).wait(1).to({graphics:mask_graphics_50,x:141.4,y:68.9}).wait(1).to({graphics:mask_graphics_51,x:141.4,y:68.9}).wait(1).to({graphics:mask_graphics_52,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_53,x:141.4,y:68.9}).wait(1).to({graphics:mask_graphics_54,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_55,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_56,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_57,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_58,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_59,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_60,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_61,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_62,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_63,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_64,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_65,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_66,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_67,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_68,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_69,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_70,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_71,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_72,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_73,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_74,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_75,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_76,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_77,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_78,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_79,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_80,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_81,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_82,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_83,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_84,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_85,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_86,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_87,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_88,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_89,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_90,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_91,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_92,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_93,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_94,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_95,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_96,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_97,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_98,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_99,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_100,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_101,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_102,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_103,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_104,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_105,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_106,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_107,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_108,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_109,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_110,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_111,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_112,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_113,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_114,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_115,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_116,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_117,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_118,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_119,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_120,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_121,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_122,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_123,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_124,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_125,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_126,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_127,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_128,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_129,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_130,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_131,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_132,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_133,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_134,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_135,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_136,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_137,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_138,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_139,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_140,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_141,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_142,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_143,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_144,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_145,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_146,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_147,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_148,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_149,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_150,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_151,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_152,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_153,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_154,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_155,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_156,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_157,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_158,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_159,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_160,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_161,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_162,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_163,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_164,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_165,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_166,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_167,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_168,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_169,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_170,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_171,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_172,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_173,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_174,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_175,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_176,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_177,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_178,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_179,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_180,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_181,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_182,x:141.4,y:68.8}).wait(1).to({graphics:mask_graphics_183,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_184,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_185,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_186,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_187,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_188,x:141.3,y:68.8}).wait(1).to({graphics:mask_graphics_189,x:141.2,y:68.8}).wait(1).to({graphics:mask_graphics_190,x:141.2,y:68.8}).wait(1).to({graphics:mask_graphics_191,x:141.2,y:68.8}).wait(1).to({graphics:mask_graphics_192,x:141.2,y:68.8}).wait(1).to({graphics:mask_graphics_193,x:141.2,y:68.8}).wait(1).to({graphics:mask_graphics_194,x:141.2,y:68.8}).wait(1).to({graphics:mask_graphics_195,x:141.1,y:68.8}).wait(1).to({graphics:mask_graphics_196,x:141.1,y:68.8}).wait(1).to({graphics:mask_graphics_197,x:141.1,y:68.8}).wait(1).to({graphics:mask_graphics_198,x:141.1,y:68.8}).wait(1).to({graphics:mask_graphics_199,x:141.1,y:68.8}).wait(1).to({graphics:mask_graphics_200,x:141,y:68.8}).wait(1).to({graphics:mask_graphics_201,x:141,y:68.8}).wait(1).to({graphics:mask_graphics_202,x:141,y:68.8}).wait(1).to({graphics:mask_graphics_203,x:141,y:68.8}).wait(1).to({graphics:mask_graphics_204,x:141,y:68.8}).wait(1).to({graphics:mask_graphics_205,x:141,y:68.8}).wait(1).to({graphics:mask_graphics_206,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_207,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_208,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_209,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_210,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_211,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_212,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_213,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_214,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_215,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_216,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_217,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_218,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_219,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_220,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_221,x:140.8,y:68.8}).wait(1).to({graphics:mask_graphics_222,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_223,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_224,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_225,x:140.9,y:68.8}).wait(1).to({graphics:mask_graphics_226,x:140.9,y:68.7}).wait(1).to({graphics:mask_graphics_227,x:140.9,y:68.7}).wait(1).to({graphics:mask_graphics_228,x:141,y:68.6}).wait(1).to({graphics:mask_graphics_229,x:141,y:68.5}).wait(1).to({graphics:mask_graphics_230,x:141,y:68.5}).wait(1).to({graphics:mask_graphics_231,x:141,y:68.4}).wait(1).to({graphics:mask_graphics_232,x:141,y:68.4}).wait(1).to({graphics:mask_graphics_233,x:141.1,y:68.3}).wait(1).to({graphics:mask_graphics_234,x:141.1,y:68.3}).wait(1).to({graphics:mask_graphics_235,x:141.1,y:68.2}).wait(1).to({graphics:mask_graphics_236,x:141.1,y:68.2}).wait(1).to({graphics:mask_graphics_237,x:141.2,y:68.1}).wait(1).to({graphics:mask_graphics_238,x:141.2,y:68}).wait(1).to({graphics:mask_graphics_239,x:141.2,y:68}).wait(1).to({graphics:mask_graphics_240,x:141.2,y:67.9}).wait(1).to({graphics:mask_graphics_241,x:141.3,y:67.9}).wait(1).to({graphics:mask_graphics_242,x:141.3,y:67.8}).wait(1).to({graphics:mask_graphics_243,x:141.3,y:67.8}).wait(1).to({graphics:mask_graphics_244,x:141.4,y:67.7}).wait(1).to({graphics:mask_graphics_245,x:141.4,y:67.6}).wait(1).to({graphics:mask_graphics_246,x:141.4,y:67.6}).wait(1).to({graphics:mask_graphics_247,x:141.5,y:67.5}).wait(1).to({graphics:mask_graphics_248,x:141.5,y:67.5}).wait(1).to({graphics:mask_graphics_249,x:141.5,y:67.4}).wait(1));

	// Camada 1
	this.instance = new lib.Forma3copiar2();
	this.instance.setTransform(-548,-311);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,283,134.6);


(lib.Forma3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_249 = function() {
		gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(249).call(this.frame_249).wait(1));

	// Camada 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AJ6MFQnImKhoheQBBAPAwgOQAhgJA+gmQBKgtA1gXQBfgpB6gZIMyKmgA2khMILuqaQCMgvBtAJQBRAGBTApQAwAXBWAsQBMAgBLgIIp8JMg");
	var mask_1_graphics_1 = new cjs.Graphics().p("AJ6MEQnKmLhmhdQBAAPAygPQAggJA/glQBLgtA1gXQBegoB5gZIMyKlgA2khNILuqaQCMguBsAJQBQAGBUApQAwAXBWAsQBNAgBLgJIp8JNg");
	var mask_1_graphics_2 = new cjs.Graphics().p("AJ6MEQnLmMhmhcQBAAOAzgPQAhgJA/gkQBMgsA0gXQBegpB3gZIMzKlgA2khNILuqaQCLgtBtAIQBQAGBTApQAwAXBWAsQBNAgBMgJIp8JNg");
	var mask_1_graphics_3 = new cjs.Graphics().p("AJ6MEQnMmNhmhcQBBAOA0gPQAhgIA/glQBMgsA1gWQBdgoB2gbIMzKmgA2khNILuqaQCLgtBsAJQBQAGBUApQAvAXBWAsQBNAfBNgJIp8JMg");
	var mask_1_graphics_4 = new cjs.Graphics().p("AJ6MEQnNmOhlhcQBAANA1gOQAigJA/gjQBMgsA1gWQBdgpB1gaIMzKmgA2khNILuqbQCLgsBsAJQBPAGBUApQAwAXBVAsQBNAfBOgJIp8JMg");
	var mask_1_graphics_5 = new cjs.Graphics().p("AJ6MEQnOmPhmhbQBCAMA1gOQAjgJBAgjQBMgqA1gXQBcgoB0gbIMzKmgA2khNILuqbQCLgsBrAJQBPAHBUApICFBCQBOAfBOgJIp8JMg");
	var mask_1_graphics_6 = new cjs.Graphics().p("AJ6MDQnQmPhkhbQBCALA2gNQAigJBBgjQBNgqA0gWQBcgoBzgcIMzKmgA2khOILuqaQCLgsBrAKQBOAGBUApICFBCQBOAfBPgKIp8JNg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AJ6MDQnQmRhlhaQBDALA2gOQAigIBDgiQBMgqA0gXQBcgnBygdIMzKngA2khOILuqbQCLgrBqAKQBOAGBTApICFBCQBOAeBRgJIp8JMg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AJ6MDQnRmShlhaQBDALA3gOQAkgIBCgiQBMgpA1gXQBbgnBxgdIMzKngA2khOILuqbQCLgrBpAKQBOAHBTApICFBBQBPAeBRgJIp8JMg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AJ6MCQnTmShjhaQBDAKA3gNQAkgJBDghQBNgoA1gXQBagnBwgdIMzKmgA2khPILuqaQCKgrBqAKQBOAHBSApICFBBQBPAeBSgKIp8JNg");
	var mask_1_graphics_10 = new cjs.Graphics().p("AJ6MCQnUmThjhZQBDAJA5gNQAjgJBEggQBNgoA1gXQBbgnBugdIMzKmgA2khPILuqaQCKgqBqAKQBNAGBSApICGBBQBOAeBTgKIp8JNg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AJ6MCQnVmUhjhZQBEAJA5gOQAkgIBEggQBOgnA1gXQBagnBtgeIMzKngA2khPILuqbQCKgpBpAKQBNAHBSAoICGBBQBOAeBUgKIp8JMg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AJ6MCQnWmVhihZQBDAJA6gOQAlgIBFgfQBOgnAzgXQBbgmBsgfIMzKngA2khPILuqbQCKgpBpAKQBLAHBUApICFBAQBPAeBUgKIp8JMg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AJ6MCQnXmWhhhYQBDAIA7gOQAlgIBGgfQBMgmA1gWQBagnBqgfIM0KngA2khPILuqbQCKgpBoALQBMAHBTAoICFBBQBOAdBWgKIp8JMg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AJ6MBQnYmXhhhXQBDAHA8gNQAmgIBGgfQBNglA0gXQBagmBpggIM0KngA2khQILuqaQCJgpBpALQBLAHBTApICEA/QBQAeBWgLIp8JNg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AJ6MBQnamYhghXQBEAHA8gNQAmgIBHgeQBNglA1gXQBZglBoghIM0KngA2khQILuqaQCJgoBoAKQBLAHBTApICEBAQBQAdBXgLIp8JNg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AJ6MBQnbmZhfhXQBDAGA+gMQAlgIBIgeQBOgkA1gXQBYgmBnggIM0KngA2khQILuqbQCJgnBoALQBKAHBSAoQA1AaBQAmQBQAdBYgLIp8JMg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AJ6MAQncmZhfhXQBEAGA+gNQAngIBHgdQBOgkA1gWQBXgmBnghIM0KngA2khRILuqaQCJgnBnALQBKAHBSAoQA1AaBQAlQBQAdBZgLIp8JNg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AJ6MAQndmahfhWQBEAFA/gNQAngIBIgcQBPgkA0gWQBXglBmgiIM0KngA2khRILuqaQCJgnBnALQBJAHBSApQA2AaBQAlQBQAcBZgLIp8JNg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AJ6MAQnembhfhWQBFAFA/gNQAogHBJgdICCg5QBXglBlgiIM0KngA2khRILuqaQCJgnBnAMQBIAHBSApICFA+QBQAcBbgLIp8JNg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AJ6MAQnfmdhfhVQBFAEBAgMQAogIBLgbICCg5QBXglBjgjIM0KogA2khRILuqbQCJgmBmAMQBJAHBRApQA2AaBPAkQBRAcBbgLIp8JMg");
	var mask_1_graphics_21 = new cjs.Graphics().p("AJ6MAQngmehehUQBFADBBgMQAogIBLgbICCg4QBXgkBhgkIM1KogA2khRILuqbQCIglBnALQBHAIBTAoQA2AbBOAjQBRAcBcgLIp8JMg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AJ6L/QnimehdhUQBFADBCgNQApgHBLgbICDg3QBVglBhgkIM1KogA2khSILuqaQCJglBlALQBIAIBSAoQA2AbBOAjQBRAcBdgMIp8JNg");
	var mask_1_graphics_23 = new cjs.Graphics().p("AJ6L/QnimfhehUQBGADBCgNQApgHBMgaICEg3QBUgkBgglIM1KogA2khSILuqaQCIglBmAMQBHAHBSApQA2AbBOAjQBRAbBegMIp8JNg");
	var mask_1_graphics_24 = new cjs.Graphics().p("AJ6L/QnkmghchUQBGACBDgMQApgHBMgaICEg2QBVgkBeglIM1KogA2khSILuqbQCIgkBlAMQBHAIBSAoQA3AbBNAiQBRAcBfgMIp8JMg");
	var mask_1_graphics_25 = new cjs.Graphics().p("AJ6L/QnlmhhbhTQBFABBEgMQApgHBOgZQBPggA0gWQBUgkBeglIM1KogA2khSILuqbQCIgkBlAMQBGAIBRApQA5AbBMAiQBRAbBggMIp8JMg");
	var mask_1_graphics_26 = new cjs.Graphics().p("AJ6L/QnmmihbhTQBFABBFgMQAqgHBOgZQBQgfAzgWICxhKIM1KpgA2khSILuqbQCIgjBkAMQBGAIBRAoQA5AcBMAhQBRAbBhgMIp8JMg");
	var mask_1_graphics_27 = new cjs.Graphics().p("AJ6L+QnnmjhbhSQBHAABEgLQArgHBPgZQBQgeAzgWICvhKIM1KogA2khTILuqaQCIgjBjAMQBGAIBRAoQA5AcBMAhQBSAbBhgNIp8JNg");
	var mask_1_graphics_28 = new cjs.Graphics().p("AJ6L+QnpmjhZhSQBGgBBGgLQAqgHBQgYQBQgeA0gWICshKIM2KogA2khTILuqaQCIgjBjANQBFAHBRApQA6AcBLAgQBSAbBigNIp8JNg");
	var mask_1_graphics_29 = new cjs.Graphics().p("AJ6L+QnqmlhZhRQBGgBBHgMQArgHBQgXQBQgdA0gWQBTgjBYgoIM2KpgA2khTILuqbQCIgiBjANQBEAIBSAoQA5AcBLAgQBSAaBjgMIp8JMg");
	var mask_1_graphics_30 = new cjs.Graphics().p("AJ6L+QnrmmhZhRQBHgBBHgMQAsgHBQgWQBRgdA0gWQBSgjBXgoIM2KpgA2khTILuqbQCHgiBjANQBEAIBSApQA5AcBLAfQBSAbBkgNIp8JMg");
	var mask_1_graphics_31 = new cjs.Graphics().p("AJ6L9QnsmmhYhRQBHgCBIgLQArgHBRgWQBRgcA0gWQBSgjBWgpIM2KpgA2khUILuqaQCHgiBjANQBEAIBRApQA6AcBJAfQBUAaBkgNIp8JNg");
	var mask_1_graphics_32 = new cjs.Graphics().p("AJ6L9QntmnhZhQQBIgDBJgLQAsgHBSgWQBRgbAzgWQBSgiBVgqIM2KpgA2khUILuqaQCHghBiANQBEAIBRAoQA6AdBJAfQBTAZBmgNIp8JNg");
	var mask_1_graphics_33 = new cjs.Graphics().p("AJ6L9QnumphYhPQBHgEBLgKQAsgHBSgVQBRgbA0gWQBRgiBUgqIM2KpgA2khUILuqbQCGghBjAOQBDAIBRAoQA7AeBIAdQBUAaBmgNIp8JMg");
	var mask_1_graphics_34 = new cjs.Graphics().p("AJ6L9QnvmphYhQQBIgEBLgKQAsgHBUgVQBRgaAzgWQBRgiBTgqIM2KpgA2khUILuqbQCHggBhANQBCAJBRAoQA8AdBIAeQBUAZBngNIp8JMg");
	var mask_1_graphics_35 = new cjs.Graphics().p("AJ6L9QnwmqhYhPQBJgFBLgKQAtgHBUgUQBSgaAzgWQBQgiBSgrIM2KqgA2khVILuqaQCGggBiANQBCAJBQApQA8AdBIAdQBUAZBogNIp8JMg");
	var mask_1_graphics_36 = new cjs.Graphics().p("AJ6L8QnymrhWhOQBIgFBNgLQAtgGBUgUQBSgZAzgWQBQgiBQgrIM3KpgA2khVILuqaQCGggBhAOQBCAIBQApQA9AdBIAdQBUAZBogOIp8JNg");
	var mask_1_graphics_37 = new cjs.Graphics().p("AJ6L8QnzmshWhOQBJgGBNgKQAugHBUgTQBSgZA0gVQBPgiBPgsIM3KqgA2khVILuqbQCGgfBhAOQBBAJBQAoQA9AeBIAcQBUAZBpgOIp8JMg");
	var mask_1_graphics_38 = new cjs.Graphics().p("AJ6L8Qn0mthWhOQBJgGBOgKQAugHBVgSQBSgZA0gVQBPghBOgtIM3KqgA2khVILuqbQCGgfBhAPQBAAIBQAoQA9AfBIAbQBUAZBqgOIp8JMg");
	var mask_1_graphics_39 = new cjs.Graphics().p("AJ6L8Qn1muhVhNQBJgHBPgKQAugHBWgSQBSgXAzgWQBPghBNgtIM3KqgA2khVILuqbQCGgeBgAOQBAAJBQAoQA9AeBIAbQBUAZBrgOIp8JMg");
	var mask_1_graphics_40 = new cjs.Graphics().p("AJ6L7Qn2mvhVhMQBKgHBPgLQAvgGBWgSQBSgXA0gVQBOghBMguIM3KqgA2khWILuqaQCGgeBgAOQBAAJBPAoQA+AfBGAaQBVAYBsgOIp8JNg");
	var mask_1_graphics_41 = new cjs.Graphics().p("AJ6L7Qn3mvhUhNQBJgHBQgLQAvgGBYgRQBSgXAzgVQBOghBLguIM3KqgA2khWILuqaQCGgeBfAPQA/AIBQApQA+AeBGAbQBVAYBtgPIp8JNg");
	var mask_1_graphics_42 = new cjs.Graphics().p("AJ6L7Qn4mwhUhMICbgSQAvgHBYgQQBSgWA0gWQBNggBKgvIM3KqgA2khWILuqaQCFgeBgAPQA+AJBQAoQA/AfBFAaQBWAYBtgPIp8JNg");
	var mask_1_graphics_43 = new cjs.Graphics().p("AJ6L7Qn6myhThLICcgTQAvgGBZgQQBTgWAzgVQBNggBIgvIM4KqgA2khWILuqbQCFgdBfAPQA/AJBPAoQA/AgBFAZQBVAXBvgOIp8JMg");
	var mask_1_graphics_44 = new cjs.Graphics().p("AJ6L7Qn7mzhShLICcgTQAwgGBZgQQBTgVAzgVQBNggBHgwIM4KrgA2khWILuqbQCFgcBfAPQA9AJBQAoQA/AfBFAZQBWAXBvgOIp8JMg");
	var mask_1_graphics_45 = new cjs.Graphics().p("AJ6L6Qn8mzhShLQBKgKBTgJQAxgGBZgQQBUgUAzgVQBMggBGgwIM4KqgA2khXILuqaQCFgcBeAPQA+AJBPAoQA/AgBFAYQBWAXBwgPIp8JNg");
	var mask_1_graphics_46 = new cjs.Graphics().p("AJ6L6Qn9m0hShKQBKgLBUgJQAygGBagPQBUgUAygVQBMgfBFgxIM4KqgA2khXILuqaQCFgcBdAPQA+AKBPAoQBAAfBEAYQBWAXBxgPIp8JNg");
	var mask_1_graphics_47 = new cjs.Graphics().p("AJ6L6Qn+m1hShKQBLgLBVgJQAxgGBbgOQBUgTAzgWQBLgfBDgxIM5KqgA2khXILuqaQCFgcBdAQQA9AJBPAoQBAAgBEAYQBWAWBygPIp8JNg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AJ6L6Qn/m2hRhKQBLgLBVgKQAygFBcgOQBTgTA0gVQBLgfBBgyIM5KrgA2khXILuqbQCEgbBeAQQA8AJBPAoQBBAhBDAWQBWAXBzgPIp8JMg");
	var mask_1_graphics_49 = new cjs.Graphics().p("AJ6L6QoAm3hRhJQBLgMBWgKQAzgFBcgOQBUgSAzgVQBLgfBAgyIM5KrgA2khXILuqbQCEgaBdAQQA8AJBPAoQBBAgBDAXQBWAWB0gPIp8JMg");
	var mask_1_graphics_50 = new cjs.Graphics().p("AJ6L5QoBm4hRhIQBMgNBWgJQAzgGBdgNQBVgRAygVQBKgfBAgzIM5KrgA2khYILuqaQCEgaBdAQQA7AJBPAoQBCAhBCAWQBWAWB1gQIp8JNg");
	var mask_1_graphics_51 = new cjs.Graphics().p("AJ6L5QoDm5hPhIQBLgNBYgJICQgSQBVgRAygVQBLgeA+g0IM5KrgA2khYILuqaQCEgaBcAQQA8AKBOAoQBCAgBCAWQBXAWB1gQIp8JNg");
	var mask_1_graphics_52 = new cjs.Graphics().p("AJ6L5QoEm6hPhIQBMgOBYgIICRgSQBWgQAygVQBJgeA+g0IM5KrgA2khYILuqbQCEgZBcAQQA6AKBPAoQBCAhBCAVQBXAWB2gQIp8JMg");
	var mask_1_graphics_53 = new cjs.Graphics().p("AJ6L5QoFm7hOhHQBMgPBYgIICTgRQBVgQAzgVQBIgeA9g0IM5KrgA2khYILuqbQCEgZBbARQA6AJBPAoQBDAiBBAUQBXAWB3gQIp8JMg");
	var mask_1_graphics_54 = new cjs.Graphics().p("AJ6L5QoGm8hOhHQBMgPBagIICTgRQBVgPAzgVQBJgeA6g1IM6KsgA2khYILuqbQCDgYBcAQQA6AKBOAoQBDAhBBAUQBYAWB3gQIp8JMg");
	var mask_1_graphics_55 = new cjs.Graphics().p("AJ6L4QoHm8hOhHQBNgPBagJICVgPQBVgPAzgVQBHgeA6g1IM6KrgA2khZILuqaQCDgYBbAQQA5AKBPAoQBDAiBBATQBXAWB5gRIp8JNg");
	var mask_1_graphics_56 = new cjs.Graphics().p("AJ6L4QoIm9hNhGQBMgQBbgJICWgPQBWgOAygVQBHgdA5g2IM6KrgA2khZILuqaQCDgYBbARQA5AKBOAoQBDAhBBAUQBXAVB6gRIp8JNg");
	var mask_1_graphics_57 = new cjs.Graphics().p("AJ6L4QoJm+hNhGQBNgQBcgJICWgOQBWgOAygUQBHgeA4g2IM6KrgA2khZILuqaQCDgYBbARQA4AKBOAoQBEAiA/ATQBYAVB7gRIp8JNg");
	var mask_1_graphics_58 = new cjs.Graphics().p("AJ6L4QoKnAhNhFQBNgRBdgIICXgOQBXgNAxgVQBIgdA2g3IM6KsgA2khZILuqbQCCgXBbARQA4AKBOAoQBFAiA+ATQBZAUB7gQIp8JMg");
	var mask_1_graphics_59 = new cjs.Graphics().p("AJ6L4QoLnAhNhFQBOgSBdgIICYgNQBXgNAygUQBGgeA2g3IM6KsgA2khZILuqbQCCgWBbARQA3AKBOAoQBFAiA+ASQBZAVB8gRIp8JMg");
	var mask_1_graphics_60 = new cjs.Graphics().p("AJ6L3QoNnBhLhEQBNgSBegJICagMQBWgMAzgVQBGgdA0g4IM6KsgA2khaILuqaQCCgWBaARQA3AKBOAoQBFAjA+ARQBZAUB9gRIp8JNg");
	var mask_1_graphics_61 = new cjs.Graphics().p("AJ6L3QoOnChLhEQBOgTBfgHICagNQBXgLAygVQBFgcA0g5IM6KsgA2khaILuqaQCCgWBaASQA2AKBOAoQBFAiA+ARQBaAUB9gRIp8JNg");
	var mask_1_graphics_62 = new cjs.Graphics().p("AJ6L3QoPnDhLhDQBOgUBhgHQA2gFBlgHQBWgLAygUQBGgdAxg5IM7KsgA2khaILuqaQCCgWBZASQA2AKBOAoQBFAjA/ARQBYAUB/gSIp8JNg");
	var mask_1_graphics_63 = new cjs.Graphics().p("AJ6L3QoQnEhKhDQBOgUBhgIQA3gFBlgGQBWgKAygVQBGgcAwg6IM7KtgA2khaILuqbQCCgVBZASQA2AKBNAoQBGAjA+ARQBYATCAgRIp8JMg");
	var mask_1_graphics_64 = new cjs.Graphics().p("AJ6L3QoRnFhKhDQBOgUBigIQA3gEBmgGQBXgKAygUQBFgcAvg7IM7KtgA2khaILuqbQCBgUBZASQA2AKBNAoQBGAjA+AQQBZATCAgRIp8JMg");
	var mask_1_graphics_65 = new cjs.Graphics().p("AJ6L3QoTnGhJhCQBPgVBjgIQA3gEBmgGQBYgJAxgUQBFgcAug7IM7KtgA2khaILuqbQCBgUBZASQA1ALBNAnQBHAkA9APQBZATCBgRIp8JMg");
	var mask_1_graphics_66 = new cjs.Graphics().p("AJ6L2QoUnGhIhCQBOgWBkgHQA4gFBmgFQBYgIAygUQBEgcAtg7IM7KsgA2khbILuqaQCBgUBYASQA1ALBNAnQBHAkA8APQBaATCCgSIp8JNg");
	var mask_1_graphics_67 = new cjs.Graphics().p("AJ6L2QoUnHhJhCQBPgWBkgHQA4gFBogEQBXgIAzgUQBDgcAsg7IM7KsgA2khbILuqaQCBgUBYATQA0AKBNAoQBIAkA7AOQBbATCCgSIp8JNg");
	var mask_1_graphics_68 = new cjs.Graphics().p("AJ6L2QoWnIhHhBQBPgXBkgHQA5gEBpgEQBXgIAygUQBDgbArg9IM7KtgA2khbILuqaQCBgTBXASQA0ALBNAoQBIAkA7AOQBaASCEgSIp8JNg");
	var mask_1_graphics_69 = new cjs.Graphics().p("AJ6L2QoXnKhHhAQBPgXBmgIQA4gEBqgDQBXgHAygUQBDgbApg9IM8KtgA2khbILuqbQCBgSBXATQAzAKBNAoQBIAkA7AOQBaASCFgSIp8JMg");
	var mask_1_graphics_70 = new cjs.Graphics().p("AJ6L2QoYnLhHhAQBQgYBmgGQA6gFBpgDQBYgGAygUQBCgbAog9IM8KtgA2khbILuqbQCAgSBXATQAzALBNAnQBIAlA7ANQBbASCFgSIp8JMg");
	var mask_1_graphics_71 = new cjs.Graphics().p("AJ6L1QoZnLhGhAQBPgYBngHQA6gEBqgDQBYgFAygUQBCgbAng+IM8KtgA2khcILuqaQCAgSBXATQAyALBNAnQBJAlA6ANQBbASCGgTIp8JNg");
	var mask_1_graphics_72 = new cjs.Graphics().p("AJ6L1QoanMhGg/QBQgZBogHQA5gEBrgCQBZgFAygUQBBgbAmg+IM8KtgA2khcILuqaQCAgSBWAUQAzALBMAnQBJAlA6AMQBbASCHgTIp8JNg");
	var mask_1_graphics_73 = new cjs.Graphics().p("AJ6L1QobnNhGg/QBQgZBpgHQA6gEBrgBQBagFAxgUQBBgaAlg/IM8KtgA2khcILuqaQCAgRBWATQAxALBNAoQBKAlA5ALQBbASCIgTIp8JNg");
	var mask_1_graphics_74 = new cjs.Graphics().p("AJ6L1QodnOhFg+QBRgaBpgHQA7gEBsgBQBZgEAygUQBAgaAkg/IM8KtgA2khcILuqaQCAgRBVAUQAyALBMAnQBKAmA5ALQBbARCJgTIp8JNg");
	var mask_1_graphics_75 = new cjs.Graphics().p("AJ6L1IgigcQn8mzhDg9QA1gRA+gIQAigFAkgDIAjgCQA1gCBPgBQBSgGAogMIARgGQAqgRAeghQAKgLAIgMIAEgFIAGgLIM8KtgA2khcILuqaQCAgRBVAUQAyAKBNAoQBJAlA6AMQBbARCIgTIp8JNg");
	var mask_1_graphics_76 = new cjs.Graphics().p("AJ6L1IghgcQn9mzhDg9QA1gQA+gJQAigFAkgCIAjgDQA1gCBPgBQBSgGAogNIARgGQAqgQAeghQAKgLAIgMIAEgFIAGgLIM8KtgA2khcILuqaQCAgRBWATQAxALBNAoQBKAlA5ALQBbASCIgTIp8JNg");
	var mask_1_graphics_77 = new cjs.Graphics().p("AJ7L1IgigcQn8mzhDg9QA0gQA/gJQAhgEAlgDIAigCQA1gEBPAAQBTgGAogNIAQgGQApgRAfggQAKgLAIgNIAEgEIAGgLIM8KtgA2jhcILtqaQCAgRBWATQAyALBNAnQBJAmA6ALQBbASCHgTIp7JNg");
	var mask_1_graphics_78 = new cjs.Graphics().p("AJ7L2IghgcQn8mzhEg9QA1gQA+gJQAigEAkgDIAigDQA2gDBOgBQBTgGAngNIAQgGQAqgRAfggQAKgLAIgMIAEgFIAGgLIM8KtgA2jhbILtqbQCBgRBWATQAxALBNAoQBJAlA6AMQBbASCHgTIp7JMg");
	var mask_1_graphics_79 = new cjs.Graphics().p("AJ7L2IghgcQn8myhEg+QA1gQA/gIQAhgFAkgDIAjgDQA1gDBOgBQBTgHAngMIAQgGQAqgRAfggQAKgLAIgMIAEgFIAHgLIM7KtgA2jhbILtqbQCBgRBWATQAyALBMAnQBKAmA5AMQBcARCGgSIp7JMg");
	var mask_1_graphics_80 = new cjs.Graphics().p("AJ8L2IgigcQn7myhFg9QA1gQA/gJQAhgFAlgDIAigDQA1gDBOgCQBTgGAngNIAQgGQAqgQAfghQAKgKAIgMIAEgFIAHgKIM7KsgA2jhbILtqbQCBgRBWATQAyALBNAnQBJAlA6AMQBbASCGgSIp7JMg");
	var mask_1_graphics_81 = new cjs.Graphics().p("AJ8L2IgigcQn7mxhEg+QA1gQA+gJIBGgIIAigCQA1gEBOgCQBTgHAngMIAQgGQAqgRAfggQAKgKAJgMIAEgFIAGgKIM7KsgA2jhbILtqbQCBgRBWATQAyAKBNAoQBJAlA6AMQBbASCGgSIp7JMg");
	var mask_1_graphics_82 = new cjs.Graphics().p("AJ8L2IgigbQn6myhFg+QA1gQA+gIQAhgFAlgEIAigCQA2gEBOgCQBSgHAngMIAQgGQAqgRAfggQAKgLAJgMIAEgEIAGgKIM7KsgA2jhbILtqbQCBgSBWATQAzALBNAoQBIAlA7AMQBbASCFgSIp7JMg");
	var mask_1_graphics_83 = new cjs.Graphics().p("AJ9L2IgigbQn6myhGg+QA2gPA+gJIBGgIIAhgDQA2gFBOgBQBTgHAngNIAPgGQAqgQAfggQAKgLAJgMIAEgEIAGgKIM7KsgA2jhbILuqbQCAgSBXATQAyALBOAnQBIAlA6ANQBbASCGgSIp8JMg");
	var mask_1_graphics_84 = new cjs.Graphics().p("AJ9L2IgigbQn6mxhFg/QA1gPA+gJIBGgIIAigDQA1gFBOgBQBTgIAmgMIAQgGQAqgRAfgfQAKgLAJgMIAEgEIAGgKIM7KsgA2jhbILuqbQCAgSBXATQAzALBNAnQBIAlA7ANQBbASCFgSIp8JMg");
	var mask_1_graphics_85 = new cjs.Graphics().p("AJ9L2IgigbQn6mxhFg+QA1gPA+gJQAhgFAlgEIAigDQA2gFBNgCQBTgHAmgMIAQgGQAqgRAfggIATgWIAEgEIAGgKIM7KsIgRABgA2jhbILuqbQCAgSBXATQAzAKBNAoQBJAlA7ANQBaASCFgSIp8JMg");
	var mask_1_graphics_86 = new cjs.Graphics().p("AJ+L2IgjgbQn5mwhGg/QA1gPA+gJIBGgJIAigDQA2gFBNgCQBTgIAmgMIAQgGQAqgRAfgfIATgWIAEgEIAGgKIM7KsIgQABgA2jhbILuqbQCAgSBYASQAzALBMAoQBJAkA7AOQBbASCEgSIp8JMg");
	var mask_1_graphics_87 = new cjs.Graphics().p("AJ+L2IgjgbQn5mwhGg/QA2gPA+gJIBGgIIAigEQA1gFBNgCQBTgIAmgMIAQgGQAqgRAfgfQAKgKAJgMIAEgFIAHgJIM6KsIgQABgA2jhbILuqbQCAgSBYASQAzALBNAnQBIAlA7ANQBbATCEgSIp8JMg");
	var mask_1_graphics_88 = new cjs.Graphics().p("AJ+L2IgjgaQn4mxhGg+QA2gPA9gJIBGgJIAigDQA1gGBNgCQBTgIAmgNIAQgFQAqgRAfgfIATgWIAEgEIAHgKIM6KsIgQABgA2jhbILuqaQCAgUBYAUQAzAKBNAnQBIAlA8ANQBaATCEgSIp8JMg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AJ+L2IgigaQn4mwhHg/QA2gOA+gJIBFgKIAigDQA2gGBMgCQBTgIAmgMIAQgGQAqgRAfgfQAKgKAJgMIAEgEIAHgKIM6KsIgQABgA2jhbILuqaQCBgTBXASQA0ALBNAnQBIAlA7AOQBbASCDgSIp8JNg");
	var mask_1_graphics_90 = new cjs.Graphics().p("AJ/L2IgjgaQn4mvhGhAQA1gOA+gJIBFgJIAigEQA2gGBMgCQBTgJAmgMIAQgGQAqgRAfgeQAKgKAJgMIAEgEIAHgJIM6KrIgQABgA2jhbILuqaQCBgTBXASQA0ALBOAnQBHAkA8AOQBaATCDgSIp8JNg");
	var mask_1_graphics_91 = new cjs.Graphics().p("AJ/L2IgigZQn4mwhHhAQA2gOA9gJIBFgJIAigEQA2gGBMgCQBTgJAmgMIAQgGQAqgRAfgeIATgWIAEgEIAHgJIM6KrIgQABgA2jhbILuqaQCBgUBYATQA0AKBNAoQBHAkA8AOQBaATCDgSIp8JNg");
	var mask_1_graphics_92 = new cjs.Graphics().p("AJ/L2IgigZQn4mwhHg/QA2gOA9gJIBGgKIAigEQA1gGBMgDQBTgJAmgMIAQgGQAqgQAfgfQAKgKAJgLIAEgEIAHgJIM6KrIgQABgA2jhbILuqaQCBgUBYATQA0AKBNAoQBIAkA8AOQBaATCCgSIp8JNg");
	var mask_1_graphics_93 = new cjs.Graphics().p("AJ/L2IgigZQn3mvhHhAQA1gOA+gJIBFgKIAigDQA1gHBMgDQBTgJAmgMIAQgGQAqgRAfgeQAKgKAJgLIAEgEIAHgJIM6KrIgQABgA2jhbILuqaQCBgUBYASQA1ALBNAnQBHAkA8APQBaATCCgSIp8JNg");
	var mask_1_graphics_94 = new cjs.Graphics().p("AKAL2IgjgZQn3mvhHhAQA2gNA9gKIBFgJIAigEQA2gHBLgDQBTgJAmgMIAQgGQAqgRAfgeQAKgKAJgLIAEgEIAHgJIM6KrIgQABgA2jhbILuqaQCBgUBYASQA1ALBNAnQBHAkA9APQBZATCCgSIp8JNg");
	var mask_1_graphics_95 = new cjs.Graphics().p("AKAL3IgigZQn3mvhIhAQA2gNA+gKIBEgKIAigEQA2gHBMgDQBSgJAmgMIAQgGQApgRAggeIAUgVIAEgEIAGgJIM6KrIgPACgA2jhaILuqbQCBgUBYASQA2ALBNAnQBHAkA8APQBaATCBgRIp8JMg");
	var mask_1_graphics_96 = new cjs.Graphics().p("AKBL3IgjgZQn3muhIhBQA3gNA9gJIBFgLIAhgEQA3gHBLgDQBSgKAmgMIAQgGQApgQAggeQAKgKAKgLIAEgEIAGgJIM6KrIgPACgA2jhaILuqbQCBgUBZASQA1ALBNAnQBHAkA9APQBZATCBgRIp8JMg");
	var mask_1_graphics_97 = new cjs.Graphics().p("AKBL3IgjgZQn2muhIhBQA2gNA9gJIBFgKIAhgEQA3gIBLgDQBSgKAmgMIAQgGQApgRAggdQAKgKAKgLIAEgEIAGgJIM6KrIgPACgA2jhaILuqbQCBgUBZASQA2AKBNAoQBGAjA9AQQBaATCAgRIp8JMg");
	var mask_1_graphics_98 = new cjs.Graphics().p("AKBL3IgjgZQn2muhIhBQA2gMA+gKIBEgKIAigEQA2gIBLgEQBSgJAmgMIAQgGQApgRAggeQAKgJAKgLIAEgEIAGgJIM6KrIgPACgA2jhaILuqbQCBgUBaASQA0AKBOAoQBGAjA+AQQBZATCAgRIp8JMg");
	var mask_1_graphics_99 = new cjs.Graphics().p("AKBL3IgigZQn2mthJhBQA2gNA+gJIBFgLIAhgEQA2gIBLgEQBSgKAmgMIAQgGQApgQAggeQAKgJAKgLIAEgEIAGgJIM6KrIgPACgA2jhaILuqbQCBgUBaARQA1ALBNAnQBHAkA9AQQBaATB/gRIp8JMg");
	var mask_1_graphics_100 = new cjs.Graphics().p("AKCL3IgjgZQn1mthJhBQA2gMA9gKIBFgLIAhgEQA2gIBLgEQBSgKAmgMIAQgGQApgRAggdQAKgJAKgLIAEgEIAGgIIM6KqIgPACgA2jhaILuqbQCCgVBZASQA2AKBNAoQBGAjA+ARQBYATCAgRIp8JMg");
	var mask_1_graphics_101 = new cjs.Graphics().p("AKCL3IgjgYQn1mthJhCQA3gMA8gKIBFgKIAigFQA2gIBKgEQBTgLAlgLIAQgHQApgQAggdIAUgUIAEgEIAHgIIM4KqIgNACgA2ihaILtqbQCCgVBZASQA2AKBOAoQBGAjA9AQQBZAUB/gRIp7JMg");
	var mask_1_graphics_102 = new cjs.Graphics().p("AKCL3IgjgYQn0mthJhCQA2gMA9gJIBEgLIAigFQA2gIBKgEQBTgLAlgMIAQgGQApgQAggdQALgKAJgLIAEgDIAHgIIM4KqIgNACgA2ihaILtqbQCCgVBZASQA2AKBOAoQBGAjA+AQQBZAUB+gRIp7JMg");
	var mask_1_graphics_103 = new cjs.Graphics().p("AKCL3IgjgYQn0mshJhCQA2gMA9gJIBFgMIAhgEQA2gJBKgEQBTgLAlgMIAQgGQApgQAggdQALgJAJgLIAEgEIAHgIIM4KqIgNACgA2ihaILtqaQCCgWBaASQA2AKBOAoQBFAjA+ARQBZAUB+gSIp7JNg");
	var mask_1_graphics_104 = new cjs.Graphics().p("AKDL3IgkgXQn0mthJhCQA3gLA8gKIBFgLIAhgFQA2gJBKgEQBTgLAkgMIARgGQApgRAggcQALgKAJgKIAEgEIAHgIIM4KqIgNACgA2ihaILtqaQCCgWBaASQA2AKBOAoQBFAjA+AQQBZAUB+gRIp7JNg");
	var mask_1_graphics_105 = new cjs.Graphics().p("AKDL3IgjgXQn0mshJhDQA2gLA8gKIBFgLIAhgFQA3gJBJgFQBTgLAkgLIARgHQApgQAggdQALgJAJgKIAEgEIAHgIIM4KqIgNACgA2ihaILtqaQCCgWBaASQA3AKBNAnQBGAjA+ARQBZAUB9gRIp7JNg");
	var mask_1_graphics_106 = new cjs.Graphics().p("AKDL3IgjgXQn0mshJhCQA2gMA9gJIBEgMIAigFQA2gJBJgFQBTgLAkgMIARgGQApgQAggdQALgJAJgKIAEgEIAHgIIM4KqIgNACgA2ihaILtqaQCCgWBaARQA3AKBOAoQBFAjA+ARQBZAUB9gRIp7JNg");
	var mask_1_graphics_107 = new cjs.Graphics().p("AKDL3IgigXQn0mshJhCQA2gLA8gKIBEgMIAigFQA2gJBJgFQBTgMAkgLIARgGQApgRAggcQALgJAKgLIADgDIAIgIIM3KqIgMACgA2ihaILuqaQCCgWBZARQA3AKBPAoQBEAjA/ARQBZAUB9gRIp8JNg");
	var mask_1_graphics_108 = new cjs.Graphics().p("AKEL3IgjgXQn0mrhJhDIBzgVIBEgLIAhgGQA2gJBJgFQBTgMAkgMIARgGQApgQAggcQALgJAKgLIAEgDIAHgIIM3KqIgMACgA2ihaILuqaQCCgWBaARQA3AKBOAoQBFAiA/ASQBYAUB9gRIp8JNg");
	var mask_1_graphics_109 = new cjs.Graphics().p("AKEL4IgjgXQnzmrhKhDIBzgVIBEgMIAhgFQA3gKBIgFQBTgMAkgLIAQgHQAqgQAggcQALgJAKgKIAEgEIAHgHIM3KpIgMADgA2ihZILuqbQCCgWBaARQA3AKBOAoQBFAiA/ASQBYAVB9gRIp8JMg");
	var mask_1_graphics_110 = new cjs.Graphics().p("AKFL4IgkgXQnymrhLhDQA3gLA8gJIBEgNIAhgFQA3gKBIgFQBTgMAkgMIAQgGQAqgQAggcQALgJAKgKIAEgEIAHgHIM3KpIgMADgA2ihZILuqbQCCgWBaARQA4AKBOAoQBEAiBAASQBYAVB8gRIp8JMg");
	var mask_1_graphics_111 = new cjs.Graphics().p("AKFL4IgkgXQnymqhKhEIBygUIBEgMIAigGQA2gKBJgFQBSgNAkgLIAQgGQAqgRAggbQALgJAKgKIAEgEIAHgHIM3KpIgMADgA2ihZILuqbQCCgWBaARQA4AKBOAnQBFAjA/ASQBYAVB8gRIp8JMg");
	var mask_1_graphics_112 = new cjs.Graphics().p("AKFL4IgjgXQnymqhLhEIBzgUIBEgMIAhgGQA3gKBIgGQBSgMAkgMIARgGQApgQAhgcQALgIAJgLIAEgDIAHgHIM3KpIgMADgA2ihZILuqbQCCgXBbARQA4AKBOAoQBEAiA/ATQBZAUB7gQIp8JMg");
	var mask_1_graphics_113 = new cjs.Graphics().p("AKFL4IgjgWQnymrhLhEIBzgTIBEgNIAhgFQA3gLBIgGQBSgMAkgMIARgGQApgQAhgcQALgJAJgKIAEgDIAHgHIM3KpIgMADgA2ihZILuqbQCCgXBbARQA4AKBOAoQBEAiBAATQBYAUB7gQIp8JMg");
	var mask_1_graphics_114 = new cjs.Graphics().p("AKGL4IgkgWQnxmqhLhEIBygUIBEgNIAigFQA2gLBIgGQBSgNAkgLIARgGQApgRAhgbQALgJAJgKIAEgDIAHgHIM3KpIgLADgA2ihZILuqbQCCgXBbARQA5AKBOAoQBEAiA/ATQBYAUB7gQIp8JMg");
	var mask_1_graphics_115 = new cjs.Graphics().p("AKGL4IgkgWQnxmphLhFIBzgTIBEgNIAhgGQA2gLBIgGQBSgNAkgLIARgGQApgRAhgbQALgIAJgKIAEgEIAHgGIM3KoIgLADgA2ihZILuqaQCDgYBaARQA5AKBOAoQBEAiBAATQBYAVB6gRIp8JNg");
	var mask_1_graphics_116 = new cjs.Graphics().p("AKGL4IgkgVQnwmqhMhEIBzgUIBEgNIAhgGQA2gLBIgGQBSgNAkgMIAQgGQAqgQAhgbIAUgSIAEgEIAHgGIM3KoIgLADgA2ihZILuqaQCDgYBbARQA4AKBPAoQBDAiBAATQBYAVB6gRIp8JNg");
	var mask_1_graphics_117 = new cjs.Graphics().p("AKGL4IgkgVQnwmqhMhEIBzgUQAfgFAlgIIAhgFQA3gMBHgGQBSgOAkgLIAQgGQAqgQAhgbQALgJAJgKIAEgDIAHgGIM3KoIgLADgA2ihZILuqaQCDgYBbARQA5AKBOAnQBDAiBBAUQBXAVB6gRIp8JNg");
	var mask_1_graphics_118 = new cjs.Graphics().p("AKHL5IgkgWQnwmphMhFIBygTQAggFAkgIIAigGQA2gMBIgGQBSgOAjgLIARgGQApgRAhgaQALgJAJgKIAFgDIAGgGIM3KoIgKADgA2ihZILuqaQCDgYBbARQA5AJBOAoQBEAiBBATQBXAWB5gRIp8JNg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AKHL5IgkgWQnvmphNhFIBzgTIBEgNIAhgGQA2gMBIgHQBSgNAjgMIARgGQApgQAhgbQALgIAJgKIAFgDIAGgGIM3KoIgKADgA2ihZILuqaQCDgYBbAQQA5AKBPAoQBDAiBBATQBXAWB5gRIp8JNg");
	var mask_1_graphics_120 = new cjs.Graphics().p("AKHL5IgkgWQnvmohMhGIBygSIBEgOIAhgGQA2gMBIgHQBSgOAjgLIARgGQApgQAhgbQALgIAJgKIAFgDIAHgGIM2KoIgKADgA2ihZILuqaQCDgZBbARQA6AKBOAoQBDAhBBAUQBYAVB4gQIp8JNg");
	var mask_1_graphics_121 = new cjs.Graphics().p("AKHL5IgkgVQnumohNhGIBzgTQAegFAlgIIAhgGQA3gNBHgHQBSgOAjgLIARgGQApgQAhgbQALgIAJgJIAFgEIAHgFIM2KoIgKADgA2ihYILuqbQCDgYBcAQQA6AKBOAoQBDAhBBAVQBXAVB4gQIp8JMg");
	var mask_1_graphics_122 = new cjs.Graphics().p("AKIL5IglgVQnumohNhGQA3gIA8gKIBDgOIAigGQA2gNBHgHQBSgOAjgLIARgGQApgRAhgaIAVgSIAEgDIAHgFIM2KnIgKAEgA2ihYILuqbQCEgYBbAQQA6AKBOAoQBDAhBBAUQBYAWB3gQIp8JMg");
	var mask_1_graphics_123 = new cjs.Graphics().p("AKIL5IgkgVQnumohNhFQA3gIA7gLQAegFAlgJIAigGQA2gNBHgHQBSgOAjgMIARgGQApgQAhgaQALgIAKgKIAEgDIAHgFIM2KnIgKAEgA2ihYILuqbQCEgZBbARQA6AKBPAnQBDAiBBAUQBXAWB3gQIp8JMg");
	var mask_1_graphics_124 = new cjs.Graphics().p("AKJL5IglgVQnumnhNhGQA4gIA6gLQAfgFAlgJIAhgGQA3gNBGgHQBSgPAjgLIAQgGQApgQAigaQALgIAKgKIAEgDIAHgFIM1KnIgJAEgA2hhYILtqbQCEgZBcARQA6AJBPAoQBCAhBBAVQBXAWB3gQIp7JMg");
	var mask_1_graphics_125 = new cjs.Graphics().p("AKJL5IgkgUQnumohOhGQA4gIA7gKIBDgOIAhgHQA3gNBGgHQBSgPAjgLIAQgHQApgQAigZIAVgSIAEgDIAHgFIM1KnIgJAEgA2hhYILtqbQCEgZBcAQQA6AKBPAoQBCAhBCAVQBXAWB2gQIp7JMg");
	var mask_1_graphics_126 = new cjs.Graphics().p("AKJL5IgkgUQnumnhOhHQA4gHA7gLQAegFAmgJIAggHQA3gNBGgIQBSgPAjgLIAQgGQApgQAigaIAVgRIAEgDIAHgFIM1KnIgJAEgA2hhYILtqbQCEgZBcAQQA7AKBOAoQBCAhBCAVQBXAWB2gQIp7JMg");
	var mask_1_graphics_127 = new cjs.Graphics().p("AKJL6IgkgVQntmnhOhGQA4gHA6gLQAegFAmgJIAggHQA3gOBGgHQBSgQAjgLIAQgGQApgQAigZQALgIAKgKIAEgCIAHgGIM1KoIgIADgA2hhYILtqaQCEgaBcAQQA7AKBPAoQBCAhBCAVQBXAWB1gQIp7JNg");
	var mask_1_graphics_128 = new cjs.Graphics().p("AKKL6IglgUQntmnhOhHQA4gHA6gLQAfgFAlgJIAhgHQA3gOBFgIQBSgPAjgLIAQgGQApgQAigaQALgIAKgJIAEgCIAHgGIM1KoIgIADgA2hhYILtqaQCEgaBdAQQA6AKBPAoQBCAhBCAVQBXAWB1gQIp7JNg");
	var mask_1_graphics_129 = new cjs.Graphics().p("AKKL6IglgUQnsmnhPhHQA4gHA7gKQAegGAlgJIAhgHQA3gOBFgIQBSgPAjgLIAQgHQApgQAigZQALgIAKgJIAEgDIAIgFIM0KnIgIAEgA2hhYILtqaQCEgaBdAQQA7AJBPAoQBBAhBCAWQBXAWB1gQIp7JNg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AKKL6IglgUQnrmmhPhHQA4gHA6gLQAegFAmgKIAggHQA3gOBFgIQBTgQAhgLIASgGQAogQAigZQAMgIAKgJIADgDIAIgFIM0KnIgIAEgA2hhYILuqaQCEgaBcAQQA8AJBOAoQBBAhBDAWQBXAWB1gQIp8JNg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AKKL6IgkgUQnsmmhPhHQA4gHA6gLQAfgFAlgKIAggHQA4gOBEgIQBTgQAhgLIASgGQAogQAigZIAWgRIADgDIAIgEIM0KmIgIAEgA2hhYILuqaQCEgaBdAQQA7AJBPAoQBBAhBDAWQBWAWB1gQIp8JNg");
	var mask_1_graphics_132 = new cjs.Graphics().p("AKLL6IglgTQnrmmhPhHQA4gHA5gLQAfgFAlgKIAggHQA4gPBEgIQBTgQAhgLIARgGQApgQAigZQAMgIAKgJIADgCIAIgFIM0KnIgIAEgA2hhXILuqbQCEgaBdAQQA7AJBPAoQBBAhBDAWQBXAWB0gPIp8JMg");
	var mask_1_graphics_133 = new cjs.Graphics().p("AKLL6IglgTQnrmmhPhHQA4gGA6gLQAegGAmgKIAggHQA3gPBEgIQBTgRAhgLIARgGQApgPAigZQAMgIAKgJIADgCIAIgFIM0KnIgIAEgA2hhXILuqbQCEgaBdAQQA8AJBOAoQBCAgBDAXQBWAWB0gPIp8JMg");
	var mask_1_graphics_134 = new cjs.Graphics().p("AKLL6IglgTQnqmlhQhIQA4gGA6gLQAegGAmgJIAggIQA3gPBEgIQBTgRAhgLIARgGQApgQAigYIAWgRIADgCIAIgFIM0KnIgIAEgA2hhXILuqbQCEgaBdAPQA8AKBPAoQBBAgBDAXQBXAWBzgPIp8JMg");
	var mask_1_graphics_135 = new cjs.Graphics().p("AKLL6IglgTQnqmlhPhIQA4gGA5gLQAegFAmgKIAggIQA3gPBEgJQBTgQAhgLIARgGQApgQAigZIAWgQIAEgCIAHgFIM0KnIgIAEgA2hhXILuqbQCEgbBdAQQA8AJBPAoQBBAhBEAXQBVAWB0gPIp8JMg");
	var mask_1_graphics_136 = new cjs.Graphics().p("AKML6IglgTQnqmkhQhJQA4gFA6gLQAegGAlgKIAhgIQA3gPBEgJQBSgRAhgLIARgGQApgQAigYIAWgQIAEgCIAHgFIM0KmIgHAFgA2hhXILuqbQCEgbBeAQQA8AJBPAoQBBAgBDAXQBWAXBzgPIp8JMg");
	var mask_1_graphics_137 = new cjs.Graphics().p("AKML6IglgSQnqmlhQhIQA5gGA5gLQAegGAlgKIAhgIQA3gPBEgJQBSgRAhgLIARgGQApgQAigYIAWgQIAEgDIAIgEIMzKmIgHAFgA2hhXILuqbQCEgbBeAQQA8AJBQAoQBAAgBDAXQBXAXBygPIp8JMg");
	var mask_1_graphics_138 = new cjs.Graphics().p("AKML7IgkgTQnqmkhRhJQA5gFA6gLQAdgGAmgKIAggIQA3gQBEgJQBSgRAhgLIARgGQApgQAigYIAWgQIAEgCIAIgEIMzKmIgHAEgA2hhXILuqaQCEgcBeAQQA9AJBPAoQBAAgBEAYQBWAWBygPIp8JNg");
	var mask_1_graphics_139 = new cjs.Graphics().p("AKNL7IglgTQnqmkhQhJQA4gFA6gLQAdgFAmgLIAggIQA4gQBDgJQBSgRAhgLIARgGQApgQAigYQAMgHAKgJIAEgCIAIgEIMzKmIgHAEgA2hhXILuqaQCEgcBeAQQA9AJBPAoQBAAgBEAXQBWAXBygPIp8JNg");
	var mask_1_graphics_140 = new cjs.Graphics().p("AKNL7IglgTQnpmjhRhJQA5gFA5gLQAdgGAmgLIAggIQA4gQBDgJQBSgSAhgLIARgGQApgQAigXQAMgHAKgJIAEgCIAIgEIMzKmIgHAEgA2hhXILuqaQCEgcBeAPQA+AKBPAoQBAAfBEAYQBWAXBxgPIp8JNg");
	var mask_1_graphics_141 = new cjs.Graphics().p("AKNL7IglgSQnpmkhRhJQA5gFA5gLQAegGAlgKIAhgJQA3gQBDgJQBSgSAhgLIARgGQApgQAigXIAWgQIAEgCIAIgEIMzKmIgGAEgA2hhXILuqaQCEgcBfAPQA9AJBPAoQBAAgBEAYQBWAXBxgPIp8JNg");
	var mask_1_graphics_142 = new cjs.Graphics().p("AKOL7IglgSQnpmkhShJQA5gEA6gMQAdgFAmgLIAggIQA4gRBDgKQBRgSAigKIAQgHQAogPAkgYQALgHAKgIIAFgCIAHgEIMyKmIgFAEgA2hhXILuqaQCFgcBeAPQA+AJBPAoQA/AgBFAYQBWAXBwgPIp8JNg");
	var mask_1_graphics_143 = new cjs.Graphics().p("AKOL7IglgSQnomjhShKQA5gEA5gLQAdgGAmgLIAggIQA4gRBDgKQBSgSAggLIARgGQAogQAkgXQALgHAKgIIAFgCIAHgEIMyKmIgFAEgA2hhXILuqaQCFgcBfAPQA9AJBPAoQBAAfBFAZQBVAXBwgPIp8JNg");
	var mask_1_graphics_144 = new cjs.Graphics().p("AKOL7IglgSQnomjhRhJQA5gFA4gLQAdgGAmgLIAggIQA4gRBDgKQBSgSAggLIARgGQAogQAkgXIAVgPIAFgCIAHgEIMyKlIgFAFgA2hhXILuqaQCFgdBfAQQA9AJBQAoQA/AfBFAZQBWAXBvgPIp8JNg");
	var mask_1_graphics_145 = new cjs.Graphics().p("AKOL7IglgRQnnmjhShKQA5gEA4gLQAdgGAngLIAfgJQA4gRBDgKQBSgSAggLIARgGQAogQAkgXIAVgPIAFgCIAIgDIMxKlIgFAFgA2hhWILuqbQCFgcBfAPQA9AJBQAoQA/AfBFAZQBWAXBvgOIp8JMg");
	var mask_1_graphics_146 = new cjs.Graphics().p("AKOL7IgkgRQnomihShLQA5gDA5gMQAdgFAmgMIAfgIQA4gSBDgKQBSgTAggKIARgHQAogPAkgXQALgHAKgIIAFgCIAIgDIMxKlIgEAFgA2hhWILuqbQCFgcBfAPQA+AJBPAoQBAAfBEAZQBWAXBvgOIp8JMg");
	var mask_1_graphics_147 = new cjs.Graphics().p("AKPL7IglgRQnnmihThKQA6gEA4gLQAdgGAmgMIAggIQA4gSBCgKQBSgTAggLIARgGQAogQAkgWIAWgPIAEgCIAIgDIMxKlIgEAFgA2ghWILtqbQCFgdBfAPQA/AJBPAoQA/AgBFAZQBWAXBugOIp7JMg");
	var mask_1_graphics_148 = new cjs.Graphics().p("AKPL7IglgRQnnmihShKQA5gEA5gLQAdgGAlgLIAggJQA4gSBCgLQBSgTAggKIARgGQAogQAkgXQALgGALgIIAEgCIAIgDIMxKlIgEAFgA2ghWILtqbQCFgdBgAPQA+AJBQAoQA+AfBGAaQBVAXBugOIp7JMg");
	var mask_1_graphics_149 = new cjs.Graphics().p("AKQL7IgmgRQnmmhhThLQA5gDA5gMQAdgFAmgMIAfgJQA4gSBCgLQBSgTAggLIARgGQAogPAkgXQALgGALgIIAEgCIAIgDIMxKlIgEAFgA2ghWILtqbQCFgdBgAPQA+AJBQAoQA/AfBFAaQBVAXBugOIp7JMg");
	var mask_1_graphics_150 = new cjs.Graphics().p("AKQL8IgmgRQnmmhhThLQA6gDA4gMQAdgGAmgLIAggJQA3gTBCgKQBSgUAggKIARgHQAogPAkgWIAWgPIAEgCIAIgDIMxKlIgEAFgA2ghWILtqaQCFgeBgAPQA/AJBQAoQA+AfBGAaQBVAYBtgPIp7JNg");
	var mask_1_graphics_151 = new cjs.Graphics().p("AKQL8IgmgRQnlmhhThLQA5gDA4gLQAdgGAmgMIAggJQA4gTBBgLQBSgTAggLIARgGQAogPAkgXIAWgOIAEgCIAIgDIMxKlIgEAFgA2ghWILtqaQCGgeBfAPQA/AJBQAoQA+AfBGAaQBVAYBtgPIp7JNg");
	var mask_1_graphics_152 = new cjs.Graphics().p("AKQL8IglgRQnmmhhThLQA5gCA5gMQAcgGAmgMIAggJQA4gTBBgLQBSgUAggKIARgGQAogQAkgWQALgGALgIIAEgCIAIgCIMxKkIgEAFgA2ghWILtqaQCGgeBfAPQBAAIBPApQA+AeBHAbQBUAYBtgPIp7JNg");
	var mask_1_graphics_153 = new cjs.Graphics().p("AKRL8IgmgQQnlmhhUhMQA6gCA4gMQAdgGAlgMIAhgJQA3gTBBgLQBTgUAfgLIARgGQAogPAkgWIAXgOIADgCIAIgCIMxKkIgEAFgA2ghWILuqaQCFgeBgAOQA/AJBQAoQA+AfBHAaQBUAZBtgPIp8JNg");
	var mask_1_graphics_154 = new cjs.Graphics().p("AKRL8IglgQQnlmhhVhLQA7gDA3gLQAdgGAmgNIAggJQA3gTBBgLQBTgUAfgLIARgGQAogQAkgVIAXgOIADgCIAIgCIMxKkIgEAFgA2ghWILuqaQCFgeBgAOQA/AJBQAoQA+AfBHAaQBUAYBtgOIp8JNg");
	var mask_1_graphics_155 = new cjs.Graphics().p("AKSL8IgmgQQnlmghUhMQA5gCA5gMQAcgGAmgMIAggKQA4gTBAgMQBSgUAggKIARgHQAogPAkgWQAMgGALgHIADgCIAIgCIMxKkIgDAFgA2ghWILuqaQCFgeBgAOQBAAJBQAoQA9AeBHAbQBUAYBtgOIp8JNg");
	var mask_1_graphics_156 = new cjs.Graphics().p("AKSL8IgmgPQnlmghUhMQA6gCA4gMQAdgGAlgNIAggJQA4gUBAgLQBTgVAfgKIARgGQAogQAkgVIAXgOIADgCIAIgCIMxKkIgDAGgA2ghVILuqbQCFgeBgAOQBAAJBQAoQA+AfBHAbQBUAYBsgOIp8JMg");
	var mask_1_graphics_157 = new cjs.Graphics().p("AKSL8IgmgPQnkmghVhMQA7gCA3gMQAdgGAlgMIAggKQA5gUA/gMQBTgUAfgLIARgGQAogPAkgWQAMgGALgHIADgCIAIgCIMxKkIgDAGgA2ghVILuqbQCFgeBgAOQBBAJBQAoQA9AeBHAbQBUAZBsgOIp8JMg");
	var mask_1_graphics_158 = new cjs.Graphics().p("AKSL8IgmgPQnkmghUhMQA6gCA3gLQAdgGAlgNIAhgKQA4gUA/gMQBTgVAfgKIARgGQAogPAkgWQAMgGALgHIADgCIAIgCIMxKkIgDAGgA2ghVILuqbQCGgeBgAOQBAAIBQApQA+AeBGAbQBVAZBrgOIp8JMg");
	var mask_1_graphics_159 = new cjs.Graphics().p("AKTL8IgmgPQnkmfhVhNQA6gBA4gMQAcgGAmgNIAggKQA4gUBAgMQBSgVAfgKIARgHQAogPAkgVIAXgNIAEgCIAIgCIMwKkIgDAGgA2ghVILuqbQCGgfBgAPQBBAIBQAoQA9AfBHAbQBUAZBrgOIp8JMg");
	var mask_1_graphics_160 = new cjs.Graphics().p("AKTL8IgmgPQnjmfhVhNQA6gBA3gMQAcgGAmgNIAggKQA4gUBAgMQBSgVAfgLIARgGQAogPAkgVIAXgNIAEgCIAIgCIMwKkIgCAGgA2ghVILuqbQCGgfBgAOQBBAJBQAoQA9AeBIAcQBUAZBqgOIp8JMg");
	var mask_1_graphics_161 = new cjs.Graphics().p("AKTL8IgmgPQnjmehVhNQA6gBA4gMQAcgGAmgOIAfgKQA4gUBAgMQBSgWAfgKIARgGQAogQAkgUIAXgNIAEgCIAIgCIMwKkIgCAGgA2ghVILuqbQCGgfBhAOQBBAJBQAoQA8AeBIAcQBUAZBqgOIp8JMg");
	var mask_1_graphics_162 = new cjs.Graphics().p("AKTL9IgmgPQnjmfhVhNQA6gBA4gMQAcgGAmgNIAfgKQA5gVA/gMQBSgWAegKIARgGQApgPAkgVQAMgGALgHIAEgCIAIgBIMwKjIgCAGgA2ghVILuqaQCGggBhAOQBBAJBQAoQA9AeBHAcQBUAZBqgOIp8JNg");
	var mask_1_graphics_163 = new cjs.Graphics().p("AKUL9IgngPQnimehWhNQA7gBA3gMQAcgGAmgOIAggKQA4gVA/gMQBSgWAegKIARgHQApgPAkgUQAMgGALgHIAEgCIAIgBIMwKjIgCAGgA2ghVILuqaQCGggBhAOQBBAJBRAoQA8AeBIAcQBUAZBpgOIp8JNg");
	var mask_1_graphics_164 = new cjs.Graphics().p("AKUL9IgngPQnimehVhNQA6gBA3gMQAcgGAmgNIAggLQA4gVA/gNQBSgWAegKIARgGQApgPAkgVQAMgFALgHIAEgCIAIgBIMwKjIgCAGgA2ghVILuqaQCGggBhAOQBCAIBQApQA8AdBIAdQBUAZBpgOIp8JNg");
	var mask_1_graphics_165 = new cjs.Graphics().p("AKVL9IgngOQnimehWhOQA6AAA4gNQAbgGAngNIAfgLQA5gVA+gNQBSgWAegKIARgGQApgQAkgUIAXgMIAFgCIAIgBIMuKjIgBAGgA2ghVILuqaQCGggBhAOQBCAIBQAoQA9AeBIAdQBUAZBogOIp8JNg");
	var mask_1_graphics_166 = new cjs.Graphics().p("AKVL9IgngOQnhmdhXhOQA7AAA3gNQAcgGAmgOIAggKQA4gWA+gNQBSgWAegKIARgGQApgPAkgUIAXgNIAFgBIAIgCIMuKjIgBAHgA2ghVILuqaQCGggBiANQBBAJBRApQA8AdBJAdQBTAZBogNIp8JMg");
	var mask_1_graphics_167 = new cjs.Graphics().p("AKVL9IgngOQnhmdhWhOQA6gBA4gLQAbgHAmgOIAggKQA4gWA+gNQBSgXAegJIARgHQApgPAkgUQANgGAKgGIAFgBIAIgCIMuKjIgBAHgA2ghVILuqaQCGggBiANQBCAJBQAoQA8AeBJAdQBUAZBngNIp8JMg");
	var mask_1_graphics_168 = new cjs.Graphics().p("AKVL9IgngNQngmehXhOQA7AAA3gMQAbgGAmgOIAggLQA4gWA+gNQBSgXAegKIARgGQApgPAkgUIAXgMIAFgBIAIgBIMuKiIgBAHgA2ghUILuqbQCHggBhANQBDAJBQAoQA7AeBJAdQBUAZBngNIp8JMg");
	var mask_1_graphics_169 = new cjs.Graphics().p("AKWL9IgogNQngmdhXhPQA7ABA3gNQAbgGAmgOIAggLQA4gWA/gNQBRgXAegKIARgGQApgPAkgUQANgGAKgGIAFgBIAIgBIMuKiIAAAHgA2ghUILuqbQCHggBhANQBDAJBQAoQA8AdBJAeQBTAZBngNIp8JMg");
	var mask_1_graphics_170 = new cjs.Graphics().p("AKWL9IgngNQnhmdhXhOQA8AAA2gMQAbgGAngPIAfgKQA4gXA/gNQBRgXAegKIARgHQApgPAkgTQANgGAKgGIAFgCIAIAAIMuKiIAAAHgA2ghUILuqbQCHggBhANQBDAIBRApQA7AdBJAeQBUAZBmgNIp8JMg");
	var mask_1_graphics_171 = new cjs.Graphics().p("AKWL9IgngNQngmchXhPQA7AAA3gMQAbgGAmgOIAfgLQA5gXA+gOQBSgXAdgKIARgGQAogPAlgUIAYgLIAEgCIAIAAIMuKiIAAAHgA2fhUILtqbQCHghBiAOQBDAIBRAoQA7AeBJAdQBTAaBmgNIp7JMg");
	var mask_1_graphics_172 = new cjs.Graphics().p("AKWL9IgmgNQngmchYhPQA7ABA3gNQAbgGAngOIAfgLQA4gXA+gOQBSgXAdgKIARgGQAogQAlgTQANgFALgHIAEgBIAIAAIMuKiIAAAHgA2fhUILtqbQCHghBiAOQBDAIBRAoQA7AdBJAeQBTAaBmgNIp7JMg");
	var mask_1_graphics_173 = new cjs.Graphics().p("AKXL+IgngNQngmchXhPQA7ABA2gNQAcgGAmgPIAfgLQA5gXA9gOQBSgXAdgKIARgGQAogPAlgUQANgFALgGIAEgBIAIAAIMuKhIAAAHgA2fhUILtqaQCHghBjANQBDAIBQAoQA7AdBKAfQBTAZBlgNIp7JNg");
	var mask_1_graphics_174 = new cjs.Graphics().p("AKXL+IgogNQnfmchXhPQA7ABA2gMQAcgHAlgOIAggLQA5gYA9gOIBvghIARgHQAogPAlgTIAXgLIAFgBIAIAAIMuKhIAAAHgA2ghUILuqaQCHgiBiAOQBEAIBRAoQA6AdBKAeQBTAaBlgNIp8JNg");
	var mask_1_graphics_175 = new cjs.Graphics().p("AKXL+IgngNQnfmbhYhQQA7ACA2gNQAbgGAngPIAfgLQA5gYA9gOQBRgYAdgKIASgGQAogPAlgTIAYgLIAEgBIAIAAIMuKhIAAAHgA2ghUILuqaQCHgiBiANQBEAIBRApQA7AdBJAeQBUAaBkgNIp8JNg");
	var mask_1_graphics_176 = new cjs.Graphics().p("AKXL+IgngNQnembhYhQQA7ACA2gNQAbgGAmgPIAfgLQA5gYA9gOQBRgYAdgKIASgHQAogOAlgTIAYgLIAEgBIAIAAIMuKhIAAAHgA2ghUILuqaQCHgiBjANQBEAIBRApQA5AcBLAfQBSAaBlgNIp8JNg");
	var mask_1_graphics_177 = new cjs.Graphics().p("AKYL+IgogMQnembhYhQQA7ACA2gNQAbgGAmgPIAggMQA4gYA9gOQBRgYAdgKIARgGQAogPAmgTIAYgLIAEgBIAIAAIMtKiIABAHgA2ghTILuqbQCHgiBjANQBEAIBRApQA6AdBLAfQBSAaBkgNIp8JMg");
	var mask_1_graphics_178 = new cjs.Graphics().p("AKXL+IgngMQnembhYhQQA7ACA2gMQAbgHAmgPIAfgLQA5gZA8gOIBvgiIARgHQAogPAmgSIAYgLIAEgBIAIAAIMtKiIACAHgA2ghTILuqbQCHgiBjANQBEAIBRApQA6AcBLAfQBSAbBkgNIp8JMg");
	var mask_1_graphics_179 = new cjs.Graphics().p("AKYL+IgogMQndmahZhRQA7ADA2gNQAbgGAngQIAegLQA5gZA8gOIBvgjIARgGQAogPAmgSIAYgLIAEgBIAIAAIMtKiIACAHgA2ghTILuqbQCHgiBjANQBEAIBRAoQA6AdBLAfQBSAaBkgMIp8JMg");
	var mask_1_graphics_180 = new cjs.Graphics().p("AKYL+IgngLQnembhZhQQA8ACA2gNQAagGAngQIAfgLQA5gZA7gPQBSgYAdgKIARgHQAogOAmgTIAYgKIAEgBIAIAAIMtKhIACAIgA2ghTILuqbQCHgiBjANQBFAIBRAoQA6AdBKAfQBTAaBjgMIp8JMg");
	var mask_1_graphics_181 = new cjs.Graphics().p("AKYL+IgngLQndmahZhRQA7ACA2gMQAbgHAmgPIAfgMQA5gZA7gPQBSgZAdgKIARgGQAogPAmgSIAYgKIAEgBIAIAAIMtKhIACAIgA2ghTILuqbQCHgiBkAMQBEAIBRApQA6AcBLAgQBSAaBjgMIp8JMg");
	var mask_1_graphics_182 = new cjs.Graphics().p("AKYL+IgngLQndmahZhRQA7ADA2gNQAbgGAmgQIAfgMQA5gZA7gPIBvgjIARgGQAogPAmgSQAMgFAMgGIAEAAIAIAAIMtKhIACAIgA2ghTILuqbQCHgiBkAMQBFAIBRApQA5AcBLAgQBTAaBigMIp8JMg");
	var mask_1_graphics_183 = new cjs.Graphics().p("AKZL/IgogLQndmahZhRQA7ADA2gNQAbgHAmgPIAfgMQA5gaA7gPIBvgjIARgGQAngPAmgSIAZgKIADgBIAJABIMtKhIACAHgA2ghTILuqaQCHgjBkANQBFAHBRApQA5AcBLAgQBSAbBjgNIp8JNg");
	var mask_1_graphics_184 = new cjs.Graphics().p("AKZL/IgogLQncmahahRQA8ADA2gNQAagGAmgQIAfgMQA5gaA7gPIBvgjIARgHQAngOAmgSIAZgKIADgBIAJABIMtKhIACAHgA2ghTILuqaQCHgjBkAMQBFAIBSApQA4AcBMAgQBSAbBigNIp8JNg");
	var mask_1_graphics_185 = new cjs.Graphics().p("AKZL/IgogLQncmZhahSQA8AEA2gNQAagHAmgQIAggMQA5gaA6gPQBSgaAdgKIARgGQAngPAmgRIAZgKIADgBIAJABIMtKhIACAHgA2ghTILuqaQCHgjBkAMQBGAIBRAoQA5AcBLAhQBTAbBhgNIp8JNg");
	var mask_1_graphics_186 = new cjs.Graphics().p("AKZL/IgogLQnbmZhbhSQA8AEA2gNQAagGAngRIAfgMQA5gaA6gPIBvgkIARgGQAngPAmgRIAZgKIADgBIAJABIMtKhIACAHgA2ghTILuqaQCHgkBkANQBGAIBRAoQA5AcBMAhQBRAbBigNIp8JNg");
	var mask_1_graphics_187 = new cjs.Graphics().p("AKZL/IgogLQnbmZhahRQA8ADA1gNQAagGAngRIAegMQA6gaA6gQIBugjIARgHQAogOAmgSIAYgKIAEAAIAJABIMsKhIADAHgA2ghTILtqaQCIgkBkANQBGAHBRApQA5AcBMAhQBSAaBggMIp7JNg");
	var mask_1_graphics_188 = new cjs.Graphics().p("AKZL/IgngKQnbmZhbhSQA8AEA1gNQAbgGAmgRIAfgMQA5gbA6gPIBugkIARgHQAogOAmgRIAYgKIAEgBIAJACIMsKgIADAIgA2ghSILtqbQCIgjBlAMQBFAIBSAoQA4AcBMAhQBSAbBggMIp7JMg");
	var mask_1_graphics_189 = new cjs.Graphics().p("AKaL/IgogKQnbmYhbhSQA8AEA1gOQAbgGAmgRIAfgMQA5gbA6gQIBugkIARgGQAogPAmgRQANgEAMgFIAEgBIAIACIMsKgIADAIgA2ghSILtqbQCIgkBlANQBGAHBRApQA4AbBNAiQBRAbBggMIp7JMg");
	var mask_1_graphics_190 = new cjs.Graphics().p("AKaL/IgogKQnamYhbhSQA8AEA1gNQAagHAmgQIAfgNQA5gbA6gQIBugkIARgGQAogPAmgRIAZgJIAEgBIAIACIMsKgIADAIgA2ghSILtqbQCIgkBlAMQBGAIBSApQA4AbBMAiQBSAbBfgMIp7JMg");
	var mask_1_graphics_191 = new cjs.Graphics().p("AKaL/IgogKQnamXhbhTQA8AEA1gNQAagGAngRIAegNQA5gbA6gQIBugkIARgHQAogOAmgRIAZgJIAEgBIAIACIMsKgIADAIgA2ghSILtqbQCIgkBlAMQBHAIBRAoQA4AcBNAiQBRAbBfgMIp7JMg");
	var mask_1_graphics_192 = new cjs.Graphics().p("AKaL/IgogKQnamXhbhTQA8AFA1gNQAagHAngRIAegNQA5gbA6gQIBtglIASgGQAngPAngQQANgEALgGIAFAAIAIACIMsKgIADAIgA2hhSILuqbQCIgkBlAMQBGAIBSAoQA4AbBNAiQBRAcBfgMIp8JMg");
	var mask_1_graphics_193 = new cjs.Graphics().p("AKaL/IgngJQnamYhchTQA8AFA2gNQAZgHAngRIAegNQA5gbA6gQIBtglIASgGIBOgfIAYgKIAFAAIAIACIMsKgIADAIgA2hhSILuqbQCIgkBmAMQBGAHBSApQA4AbBMAiQBRAcBfgMIp8JMg");
	var mask_1_graphics_194 = new cjs.Graphics().p("AKaMAIgngKQnZmXhdhTQA9AFA1gNQAZgHAngRIAegNQA6gcA5gQIBtglIASgGQAngPAngQIAYgJIAFAAIAIACIMrKfIAEAIgA2hhSILuqaQCIglBmAMQBGAIBSAoQA3AbBOAjQBRAbBegMIp8JNg");
	var mask_1_graphics_195 = new cjs.Graphics().p("AKaMAIgngKQnZmWhdhUQA9AFA1gNQAZgGAogSIAdgNQA6gcA5gQIBtglIASgHQAngOAngQIAYgJIAFgBIAJADIMqKfIAEAIgA2hhSILuqaQCIglBmAMQBHAHBSApQA3AbBNAiQBRAcBegMIp8JNg");
	var mask_1_graphics_196 = new cjs.Graphics().p("AKbMAIgogJQnYmXhdhTQA8AFA1gOQAagGAngSIAegNQA5gcA5gRIBtglIASgGQAngPAngQIAYgIIAFgBIAJADIMqKfIAEAIgA2hhSILuqaQCJglBlAMQBHAHBSApQA3AbBNAiQBRAcBegMIp8JNg");
	var mask_1_graphics_197 = new cjs.Graphics().p("AKbMAIgogJQnYmXhdhTQA9AFA0gNQAagHAmgRIAfgOQA5gcA5gRIBtglIARgGIBOgfIAZgJIAEAAIAJADIMrKfIAFAIgA2hhSILuqaQCIglBmALQBHAIBSAoQA3AbBOAjQBRAcBdgMIp8JNg");
	var mask_1_graphics_198 = new cjs.Graphics().p("AKbMAIgogJQnYmWhdhUQA9AGA0gOQAagGAngSIAegOQA6gcA4gRIBtgmIARgGQAogOAmgQQANgEAMgFIAEAAIAJADIMrKfIAFAIgA2hhSILuqaQCIgmBmAMQBIAIBSAoQA2AbBOAjQBRAcBdgMIp8JNg");
	var mask_1_graphics_199 = new cjs.Graphics().p("AKbMAIgogIQnXmWhdhUQA8AGA1gOQAZgHAngRIAegOQA6gcA4gSIBtglIARgHIBOgeIAZgIIAEAAIAJACIMrKfIAFAJgA2hhRILuqbQCIglBmALQBIAIBSAoQA3AbBOAjQBRAcBcgLIp8JMg");
	var mask_1_graphics_200 = new cjs.Graphics().p("AKcMAIgpgIQnXmWhdhUQA9AGA0gOQAZgGAngSIAegOQA6gdA4gRIBtgmIARgGIBOgeIAZgIIAEAAIAJACIMqKfIAGAJgA2hhRILuqbQCIglBmALQBIAHBSApQA3AbBOAjQBRAcBcgLIp8JMg");
	var mask_1_graphics_201 = new cjs.Graphics().p("AKcMAIgogIQnXmVhehVQA9AGA0gNQAagHAmgSIAegOQA6gdA4gRIBsgmIARgHQAogOAngPIAZgIIAEAAIAJACIMqKfIAGAJgA2hhRILuqbQCIgmBmAMQBJAHBRApQA3AaBOAkQBRAcBcgLIp8JMg");
	var mask_1_graphics_202 = new cjs.Graphics().p("AKcMAIgogIQnXmVhehVQA9AHA0gOQAagHAngSIAegOQA5gdA4gRIBsgnIARgGIBPgdIAZgJIAEABIAJACIMqKfIAGAJgA2hhRILuqbQCJgmBlAMQBJAHBSApQA2AaBPAkQBRAcBbgLIp8JMg");
	var mask_1_graphics_203 = new cjs.Graphics().p("AKcMAIgogIQnWmVhehUQA9AGAzgOQAagGAngTIAegNQA5geA4gSIBsgmIARgGIBPgeIAZgIIAEABIAJADIMqKeIAGAJgA2hhRILuqbQCIgmBnALQBIAIBTAoQA1AbBPAkQBRAcBbgLIp8JMg");
	var mask_1_graphics_204 = new cjs.Graphics().p("AKcMBIgogIQnWmVhehVQA9AHAzgOQAagGAngTIAegOQA6gdA3gSIBsgnIARgGIBPgdIAZgIIAEAAIAJADIMqKeIAGAJgA2hhRILuqaQCIgnBnAMQBJAHBSApICEA+QBRAcBbgLIp8JNg");
	var mask_1_graphics_205 = new cjs.Graphics().p("AKcMBIgogIQnWmUhehWQA9AHA0gNQAZgHAngTIAegOQA6gdA3gTIBsgmIARgHIBPgdIAZgHIAEAAIAJADIMqKeIAGAJgA2hhRILuqaQCIgnBnALQBJAIBTAoQA1AbBPAkQBRAcBagLIp8JNg");
	var mask_1_graphics_206 = new cjs.Graphics().p("AKdMBIgpgIQnVmUhfhVQA9AHA0gOQAZgHAngSIAegPQA6geA3gSIBsgnIARgGIBPgdIAZgHIAEAAIAJADIMpKeIAHAJgA2hhRILtqaQCJgnBnALQBJAHBSApICFA/QBRAcBZgLIp7JNg");
	var mask_1_graphics_207 = new cjs.Graphics().p("AKdMBIgpgIQnVmUhfhVQA+AHAzgOQAZgGAngTIAegOQA6gfA3gSIBrgnIASgGIBPgdQANgDAMgFIAEABIAJADIMpKeIAHAJgA2hhRILtqaQCJgnBnALQBKAHBSApICFA/QBQAcBZgLIp7JNg");
	var mask_1_graphics_208 = new cjs.Graphics().p("AKdMBIgpgHQnUmUhfhWQA9AIAzgOQAagHAmgTIAegOQA6gfA3gSIBrgnIASgHIBPgcIAZgIIAEABIAJADIMpKeIAHAJgA2hhRILtqaQCJgnBoALQBJAHBSApICFA/QBQAcBZgLIp7JNg");
	var mask_1_graphics_209 = new cjs.Graphics().p("AKdMCIgogIQnVmThfhWQA9AHA0gNQAZgHAngTIAdgPQA6geA3gTIBrgnIASgHIBPgcIAZgHIAEAAIAJAEIMpKdIAHAKgA2hhQILtqbQCKgnBnALQBJAHBTApQA1AaBQAlQBQAdBYgLIp7JMg");
	var mask_1_graphics_210 = new cjs.Graphics().p("AKeMCIgqgIQnTmThghWQA+AIAygOQAZgHAngTIAfgPQA5geA2gTIBsgoIASgGIBPgcIAZgHIAEAAIAJAEIMpKdIAIAKgA2ihQILuqbQCJgnBnALQBKAHBTApICFA/QBQAdBYgLIp8JMg");
	var mask_1_graphics_211 = new cjs.Graphics().p("AKeMCIgqgHQnTmThfhXQA9AIAzgOQAZgHAmgTIAfgOQA5gfA2gTIBsgoIASgGIBPgcIAZgHIAEAAIAJAEIMpKdIAIAKgA2ihQILuqbQCJgnBoALQBKAHBSAoQA1AaBQAmQBQAdBYgLIp8JMg");
	var mask_1_graphics_212 = new cjs.Graphics().p("AKeMCIgpgHQnUmThfhXQA9AJAzgOQAZgHAngUIAegOQA6ggA1gTIBsgnIASgHIBPgcIAZgHIAEABIAJAEIMpKdIAIAKgA2ihQILuqbQCJgoBoALQBKAHBSApICFBAQBQAcBYgKIp8JMg");
	var mask_1_graphics_213 = new cjs.Graphics().p("AKeMCIgpgHQnTmThghWQA9AIAzgOQAZgHAngTIAegPQA6ggA2gTIBrgoIASgGIBPgcIAZgHIAEABIAJAEIMpKdIAIAKgA2ihQILuqbQCJgoBoALQBLAHBSApICFA/QBQAdBXgKIp8JMg");
	var mask_1_graphics_214 = new cjs.Graphics().p("AKfMCIgqgGQnSmThhhXQA+AJAzgOQAZgHAmgUIAegPQA6gfA2gUIBrgoIASgGIBPgcIAZgGIAEAAIAJAFIMpKdIAIAJgA2ihQILuqaQCJgoBoAKQBLAHBTApICEBAQBQAdBXgLIp8JNg");
	var mask_1_graphics_215 = new cjs.Graphics().p("AKeMCIgpgGQnSmShhhXQA+AIAzgOQAYgHAngUIAegOQA6ggA2gUQBRgfAZgJIASgGQAngPAogNIAagGIAEAAIAJAFIMoKdIAJAJgA2ihQILuqaQCJgpBoALQBLAHBTApICFBAQBPAdBXgLIp8JNg");
	var mask_1_graphics_216 = new cjs.Graphics().p("AKfMCIgqgGQnSmShhhXQA+AJAzgOQAZgHAngUIAdgPQA6ggA2gUIBqgoIASgHIBPgbIAagGIAEAAIAJAFIMoKdIAJAJgA2ihQILuqaQCJgpBpALQBLAHBSApICFA/QBQAeBWgLIp8JNg");
	var mask_1_graphics_217 = new cjs.Graphics().p("AKfMCIgpgGQnSmShhhXQA+AJAygOQAZgHAngUIAdgPQA7ghA1gTIBqgpIASgGIBPgbIAagHIAEABIAJAFIMoKcIAJAKgA2ihQILuqaQCKgpBoALQBLAHBTAoICFBAQBPAeBWgLIp8JNg");
	var mask_1_graphics_218 = new cjs.Graphics().p("AKfMDIgpgGQnSmShhhXQA+AJAzgOQAYgHAngUIAegQQA6ggA1gUIBqgpIASgGQAngOAogNIAagGIAEABIAJAEIMoKdIAJAKgA2ihPILuqbQCKgpBoALQBLAHBTApICFBAQBPAdBWgKIp8JMg");
	var mask_1_graphics_219 = new cjs.Graphics().p("AKfMDIgpgGQnRmRhihYQA+AJAzgOQAYgHAngUIAegPQA6ghA1gUQBRggAZgJIASgGIBPgbIAagGIAEABIAJAEIMoKdIAJAKgA2ihPILuqbQCKgpBoALQBMAHBSAoICGBBQBPAdBVgKIp8JMg");
	var mask_1_graphics_220 = new cjs.Graphics().p("AKgMDIgqgGQnRmRhihYQA/AKAygPQAYgHAngUIAdgPQA7ghA1gUQBRghAYgIIASgHQAogOAogMIAagGIAEAAIAKAFIMmKdIAKAKgA2ihPILuqbQCJgpBpAKQBMAHBSApICFBAQBPAeBWgKIp8JMg");
	var mask_1_graphics_221 = new cjs.Graphics().p("AKgMDIgqgGQnRmQhihZQA/AKAygOQAYgHAogVIAdgPQA6ghA1gVIBpgpIASgGQAogOAogNIAagFIAEAAIAKAFIMmKdIAKAKgA2ihPILuqbQCJgpBqAKQBLAHBTApICFBAQBPAeBVgKIp8JMg");
	var mask_1_graphics_222 = new cjs.Graphics().p("AKgMDIgqgGQnQmQhihYQA+AKAygPQAZgHAngVQAOgGAPgJQA6ghA1gVIBpgpIASgGQAogPAogMIAagGIAEABIAKAFIMmKdIAKAKgA2ihPILuqbQCJgpBqAKQBLAHBTApICFBAQBPAeBVgKIp8JMg");
	var mask_1_graphics_223 = new cjs.Graphics().p("AKgMDIgqgFQnQmRhihYQA/AKAxgOQAZgIAngUIAdgQQA7giA0gUIBpgpIASgHQAngOApgMIAagGIAEABIAKAFIMmKdIAKAKgA2ihPILuqbQCKgpBpAKQBMAHBTAoICFBBQBPAeBUgKIp8JMg");
	var mask_1_graphics_224 = new cjs.Graphics().p("AKgMDIgqgFQnQmQhihZQA/ALAygPQAYgHAngVIAdgPQA7giAzgVQBSghAYgIIASgHQAngOApgMIAagFIAEABIAJAFIMnKcIAKAKgA2ihPILtqaQCLgqBpAKQBMAHBTApICFBAQBPAeBTgKIp7JNg");
	var mask_1_graphics_225 = new cjs.Graphics().p("AKgMDIgpgFQnQmPhjhZQA/AKAygOQAYgHAngVIAdgQQA7giAzgVQBSghAYgJIASgGQAngOApgMIAagFIAEABIAJAFIMnKcIAKAKgA2ihPILtqaQCLgqBpAKQBNAGBTApICFBBQBOAeBTgKIp7JNg");
	var mask_1_graphics_226 = new cjs.Graphics().p("AKhMDIgqgEQnQmQhihZQA+ALAygPQAYgHAngVIAegQQA6giAzgVIBqgqIASgHQAngNApgMIAagFIAEABIAJAFIMnKcIAKAKgA2ihPILtqaQCLgqBpAKQBNAGBTApICFBBQBPAeBSgKIp7JNg");
	var mask_1_graphics_227 = new cjs.Graphics().p("AKhMDIgqgEQnPmQhjhZQA/ALAxgPQAYgHAngVIAegQQA6giAzgVQBSgiAYgIIASgHQAngOApgLIAagGIAEACIAJAFIMnKcIAKAKgA2ihPILtqaQCLgrBpAKQBNAHBTApICGBBQBOAeBSgKIp7JNg");
	var mask_1_graphics_228 = new cjs.Graphics().p("AKhMDIgqgEQnPmPhjhaQA/ALAygOQAYgHAngWIAdgQQA7giAzgWQBRghAYgJIASgGQAngOApgMIAagFIAEACIAJAFIMnKcIAKAKgA2ihPILtqaQCLgrBqAKQBNAHBTApICFBBQBOAeBSgKIp7JNg");
	var mask_1_graphics_229 = new cjs.Graphics().p("AKhMEIgqgFQnOmOhkhaQA/ALAygOQAXgHAogWIAdgQQA7gjAygVQBSgiAYgJIASgGQAmgOAqgLIAagFIAEABIAJAGIMyKmgA2jhOILuqbQCLgqBpAJQBOAHBTApICFBBQBOAeBSgJIp8JMg");
	var mask_1_graphics_230 = new cjs.Graphics().p("AKhMEIgpgEQnPmPhkhaQBAAMAxgPQAXgHAogWIAdgQQA7gjAygWQBSgiAYgIIARgHQAngNAqgMIAagEIAEABIAJAGIMyKmgA2jhOILuqbQCLgrBpAKQBOAHBTApICFBBQBPAeBRgJIp8JMg");
	var mask_1_graphics_231 = new cjs.Graphics().p("AKhMEIgpgEQnPmOhjhbQA+AMAzgPQAXgHAngWIAdgQQA7gjAygWQBSgiAYgIIARgHQAngOAqgLIAagEIAEABIAJAGIMmKbIAMALgA2jhOILuqbQCLgrBqAKQBOAGBTApICFBCQBOAeBRgJIp8JMg");
	var mask_1_graphics_232 = new cjs.Graphics().p("AKiMEIgqgEQnOmOhkhaQA/AMAygPQAXgHAogWIAcgRQA7gjAygWQBSgiAYgJIARgGQAngOApgLQAOgCANgDIAEACIAJAGIMmKbIAMALgA2jhOILuqbQCLgrBqAKQBOAGBTApQAyAYBTAqQBOAeBRgJIp8JMg");
	var mask_1_graphics_233 = new cjs.Graphics().p("AKiMEIgqgDQnOmOhkhbQA/AMAygOQAXgIAngWIAdgQQA7gkAygWQBSgiAXgJIASgGQAngOApgLIAbgEIAEABIAJAGIMyKmgA2jhOILuqaQCLgsBqAKQBOAGBTApICGBCQBOAfBQgKIp8JNg");
	var mask_1_graphics_234 = new cjs.Graphics().p("AKiMEIgqgDQnNmOhkhaQA/AMAxgPQAXgHAngWIAegRQA6gkAygWQBSgjAXgIIASgHQAngNApgLIAbgEIAEABIAJAHIMyKlgA2jhOILuqaQCLgsBqAKQBPAGBTApICFBCQBOAfBQgKIp8JNg");
	var mask_1_graphics_235 = new cjs.Graphics().p("AKiMEIgqgDQnNmNhkhbQA/AMAxgPQAXgHAogWIAdgRQA7gkAxgWQBSgjAXgIIASgHQAmgOAqgKIAbgEIAEABIAJAHIMyKlgA2jhOILuqaQCLgsBqAJQBPAHBTApICGBCQBNAfBQgKIp8JNg");
	var mask_1_graphics_236 = new cjs.Graphics().p("AKjMEIgrgDQnMmNhlhbQA/ANAxgPQAYgIAngWIAdgRQA7gkAxgWQBSgkAXgIIASgGQAmgOAqgKIAbgEIAEABIAJAHIMyKlgA2jhOILuqaQCLgsBrAJQBOAHBUApICFBCQBOAfBPgKIp8JNg");
	var mask_1_graphics_237 = new cjs.Graphics().p("AKjMEIgrgDQnMmNhlhbQBAANAxgPQAXgHAngXIAdgRQA7gkAxgXQBSgjAXgIIASgHQAmgNAqgLIAbgEIAEACIAKAHIMxKlgA2jhOILuqaQCLgsBrAJQBPAGBTApICFBCQBOAfBPgJIp8JNg");
	var mask_1_graphics_238 = new cjs.Graphics().p("AKjMFIgrgDQnMmNhlhbQBAANAwgPQAYgHAngXIAdgRQA7glAxgWQBSgkAWgIIASgHQAngNApgKIAbgEIAFABIAKAHIMxKmgA2jhNILuqbQCLgsBrAJQBPAHBTApQAxAXBUArQBOAfBPgJIp8JMg");
	var mask_1_graphics_239 = new cjs.Graphics().p("AKjMFIgrgDQnLmMhmhcQBAANAxgPQAXgHAngXIAdgRQA8glAwgXQBSgjAWgIIASgHQAngOApgKIAbgDIAFABIAKAHIMxKmgA2jhNILuqbQCLgsBrAJQBPAGBTApQAxAYBVArQBNAfBPgJIp8JMg");
	var mask_1_graphics_240 = new cjs.Graphics().p("AKjMFIgqgDQnMmMhlhcQA/AOAxgPQAXgIAngXIAegRQA7glAwgXQBRgkAXgIIASgGQAngOApgKIAbgDIAFABIAKAHIMxKmgA2jhNILuqbQCLgsBrAJQBQAGBTApQAwAXBVAsQBOAfBOgJIp8JMg");
	var mask_1_graphics_241 = new cjs.Graphics().p("AKjMFIgqgDQnLmLhmhcQA/ANAygPQAWgHAogXIAdgSQA7glAwgXQBSgkAWgIIASgHQAngNApgKIAbgDIAFABIAKAHIMxKmgA2jhNILuqbQCLgsBrAJQBQAGBTApQAxAXBVArQBNAgBOgJIp8JMg");
	var mask_1_graphics_242 = new cjs.Graphics().p("AKkMFIgrgCQnKmMhnhcQBAAOAxgPQAWgIAogXIAdgRQA7gmAxgXQBRgkAWgJIASgGQAngNApgKIAbgEIAFADIAKAGIMxKmgA2jhNILuqaQCLgtBrAJQBRAGBTApQAwAXBVAsQBOAfBNgJIp8JMg");
	var mask_1_graphics_243 = new cjs.Graphics().p("AKkMFIgrgCQnKmLhmhdQA/AOAxgPQAXgHAngYIAdgRQA7gmAwgXQBSgkAWgJIASgGQAmgOAqgJIAcgEIAEADIAJAGIMyKmgA2jhNILtqaQCMgtBsAJQBPAFBUApQAwAXBWAtQBNAfBMgJIp7JMg");
	var mask_1_graphics_244 = new cjs.Graphics().p("AKkMFIgrgCQnKmLhmhcQBAAOAwgQQAXgHAngXIAdgSQA7gmAwgXQBSglAWgIIASgGQAmgOAqgJIAcgDIAEACIAJAHIMyKlgA2jhNILtqaQCMgtBsAIQBQAHBUApQAvAWBWAsQBNAgBMgJIp7JNg");
	var mask_1_graphics_245 = new cjs.Graphics().p("AKkMFIgrgBQnJmLhnhdQBAAOAwgPQAXgIAngXIAdgSQA7gmAwgXQBSglAWgIIASgHQAmgNAqgJIAcgDIAEABIAKAIIMxKlgA2jhNILtqaQCMguBsAJQBQAGBUApQAwAXBVAsQBNAgBMgJIp7JNg");
	var mask_1_graphics_246 = new cjs.Graphics().p("AKlMFIgrgBQnKmLhnhdQBAAPAwgQQAXgHAogYIAcgSQA8gmAvgYQBSglAVgIIASgGQAngOAqgJIAcgCIAEABIAKAIIMxKlgA2jhNILtqaQCMguBsAJQBRAGBTApQAwAXBWAsQBNAgBLgJIp7JNg");
	var mask_1_graphics_247 = new cjs.Graphics().p("AKlMFIgsgBQnJmLhmhdQBAAPAvgPQAXgIAngYIAdgRQA7gnAwgYQBSglAVgIIASgGQAngOAqgJIAcgDIADACIAKAIIMyKlgA2khNILuqaQCMguBsAJQBQAGBUApQAwAWBWAtQBNAgBLgJIp8JNg");
	var mask_1_graphics_248 = new cjs.Graphics().p("AKlMGIgrgBQnJmLhnhdQBAAPAvgQQAYgHAngYIAcgSQA8gnAvgYQBSglAVgIIASgGQAngOAqgJIAcgCIADACIAKAIIMyKlgA2khMILuqbQCMguBtAJQBQAGBUApQAvAXBWAsQBNAgBLgIIp8JMg");
	var mask_1_graphics_249 = new cjs.Graphics().p("AJ6MFQnImKhoheQBAAPAwgPQAfgKA7gnQBIgvA1gZQBAgdAVgIQAvgSA0gKIAcgDQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAIAAACIM8KtgA2khMILuqaQCMgvBtAJQBRAGBTApQAwAXBWAsQBMAgBLgIIp8JMg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_1,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_2,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_3,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_4,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_5,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_6,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_7,x:144.5,y:78.6}).wait(1).to({graphics:mask_1_graphics_8,x:144.5,y:78.6}).wait(1).to({graphics:mask_1_graphics_9,x:144.5,y:78.6}).wait(1).to({graphics:mask_1_graphics_10,x:144.5,y:78.6}).wait(1).to({graphics:mask_1_graphics_11,x:144.5,y:78.7}).wait(1).to({graphics:mask_1_graphics_12,x:144.5,y:78.7}).wait(1).to({graphics:mask_1_graphics_13,x:144.5,y:78.7}).wait(1).to({graphics:mask_1_graphics_14,x:144.5,y:78.7}).wait(1).to({graphics:mask_1_graphics_15,x:144.5,y:78.7}).wait(1).to({graphics:mask_1_graphics_16,x:144.5,y:78.8}).wait(1).to({graphics:mask_1_graphics_17,x:144.5,y:78.8}).wait(1).to({graphics:mask_1_graphics_18,x:144.5,y:78.8}).wait(1).to({graphics:mask_1_graphics_19,x:144.5,y:78.8}).wait(1).to({graphics:mask_1_graphics_20,x:144.5,y:78.9}).wait(1).to({graphics:mask_1_graphics_21,x:144.5,y:78.9}).wait(1).to({graphics:mask_1_graphics_22,x:144.5,y:78.9}).wait(1).to({graphics:mask_1_graphics_23,x:144.5,y:78.9}).wait(1).to({graphics:mask_1_graphics_24,x:144.5,y:79}).wait(1).to({graphics:mask_1_graphics_25,x:144.5,y:79}).wait(1).to({graphics:mask_1_graphics_26,x:144.5,y:79}).wait(1).to({graphics:mask_1_graphics_27,x:144.5,y:79}).wait(1).to({graphics:mask_1_graphics_28,x:144.5,y:79}).wait(1).to({graphics:mask_1_graphics_29,x:144.5,y:79.1}).wait(1).to({graphics:mask_1_graphics_30,x:144.5,y:79.1}).wait(1).to({graphics:mask_1_graphics_31,x:144.5,y:79.1}).wait(1).to({graphics:mask_1_graphics_32,x:144.5,y:79.1}).wait(1).to({graphics:mask_1_graphics_33,x:144.5,y:79.2}).wait(1).to({graphics:mask_1_graphics_34,x:144.5,y:79.2}).wait(1).to({graphics:mask_1_graphics_35,x:144.5,y:79.2}).wait(1).to({graphics:mask_1_graphics_36,x:144.5,y:79.2}).wait(1).to({graphics:mask_1_graphics_37,x:144.5,y:79.3}).wait(1).to({graphics:mask_1_graphics_38,x:144.5,y:79.3}).wait(1).to({graphics:mask_1_graphics_39,x:144.5,y:79.3}).wait(1).to({graphics:mask_1_graphics_40,x:144.5,y:79.3}).wait(1).to({graphics:mask_1_graphics_41,x:144.5,y:79.3}).wait(1).to({graphics:mask_1_graphics_42,x:144.5,y:79.3}).wait(1).to({graphics:mask_1_graphics_43,x:144.5,y:79.4}).wait(1).to({graphics:mask_1_graphics_44,x:144.5,y:79.4}).wait(1).to({graphics:mask_1_graphics_45,x:144.5,y:79.4}).wait(1).to({graphics:mask_1_graphics_46,x:144.5,y:79.4}).wait(1).to({graphics:mask_1_graphics_47,x:144.5,y:79.4}).wait(1).to({graphics:mask_1_graphics_48,x:144.5,y:79.5}).wait(1).to({graphics:mask_1_graphics_49,x:144.5,y:79.5}).wait(1).to({graphics:mask_1_graphics_50,x:144.5,y:79.5}).wait(1).to({graphics:mask_1_graphics_51,x:144.5,y:79.5}).wait(1).to({graphics:mask_1_graphics_52,x:144.5,y:79.6}).wait(1).to({graphics:mask_1_graphics_53,x:144.5,y:79.6}).wait(1).to({graphics:mask_1_graphics_54,x:144.5,y:79.6}).wait(1).to({graphics:mask_1_graphics_55,x:144.5,y:79.6}).wait(1).to({graphics:mask_1_graphics_56,x:144.5,y:79.6}).wait(1).to({graphics:mask_1_graphics_57,x:144.5,y:79.6}).wait(1).to({graphics:mask_1_graphics_58,x:144.5,y:79.7}).wait(1).to({graphics:mask_1_graphics_59,x:144.5,y:79.7}).wait(1).to({graphics:mask_1_graphics_60,x:144.5,y:79.7}).wait(1).to({graphics:mask_1_graphics_61,x:144.5,y:79.7}).wait(1).to({graphics:mask_1_graphics_62,x:144.5,y:79.7}).wait(1).to({graphics:mask_1_graphics_63,x:144.5,y:79.8}).wait(1).to({graphics:mask_1_graphics_64,x:144.5,y:79.8}).wait(1).to({graphics:mask_1_graphics_65,x:144.5,y:79.8}).wait(1).to({graphics:mask_1_graphics_66,x:144.5,y:79.8}).wait(1).to({graphics:mask_1_graphics_67,x:144.5,y:79.8}).wait(1).to({graphics:mask_1_graphics_68,x:144.5,y:79.8}).wait(1).to({graphics:mask_1_graphics_69,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_70,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_71,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_72,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_73,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_74,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_75,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_76,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_77,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_78,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_79,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_80,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_81,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_82,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_83,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_84,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_85,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_86,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_87,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_88,x:144.5,y:79.9}).wait(1).to({graphics:mask_1_graphics_89,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_90,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_91,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_92,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_93,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_94,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_95,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_96,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_97,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_98,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_99,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_100,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_101,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_102,x:144.4,y:79.8}).wait(1).to({graphics:mask_1_graphics_103,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_104,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_105,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_106,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_107,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_108,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_109,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_110,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_111,x:144.4,y:79.7}).wait(1).to({graphics:mask_1_graphics_112,x:144.3,y:79.7}).wait(1).to({graphics:mask_1_graphics_113,x:144.3,y:79.7}).wait(1).to({graphics:mask_1_graphics_114,x:144.3,y:79.7}).wait(1).to({graphics:mask_1_graphics_115,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_116,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_117,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_118,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_119,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_120,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_121,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_122,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_123,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_124,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_125,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_126,x:144.3,y:79.6}).wait(1).to({graphics:mask_1_graphics_127,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_128,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_129,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_130,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_131,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_132,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_133,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_134,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_135,x:144.3,y:79.5}).wait(1).to({graphics:mask_1_graphics_136,x:144.2,y:79.5}).wait(1).to({graphics:mask_1_graphics_137,x:144.2,y:79.5}).wait(1).to({graphics:mask_1_graphics_138,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_139,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_140,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_141,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_142,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_143,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_144,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_145,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_146,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_147,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_148,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_149,x:144.2,y:79.4}).wait(1).to({graphics:mask_1_graphics_150,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_151,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_152,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_153,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_154,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_155,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_156,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_157,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_158,x:144.2,y:79.3}).wait(1).to({graphics:mask_1_graphics_159,x:144.1,y:79.3}).wait(1).to({graphics:mask_1_graphics_160,x:144.1,y:79.3}).wait(1).to({graphics:mask_1_graphics_161,x:144.1,y:79.3}).wait(1).to({graphics:mask_1_graphics_162,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_163,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_164,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_165,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_166,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_167,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_168,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_169,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_170,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_171,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_172,x:144.1,y:79.2}).wait(1).to({graphics:mask_1_graphics_173,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_174,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_175,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_176,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_177,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_178,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_179,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_180,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_181,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_182,x:144.1,y:79.1}).wait(1).to({graphics:mask_1_graphics_183,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_184,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_185,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_186,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_187,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_188,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_189,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_190,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_191,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_192,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_193,x:144.2,y:79}).wait(1).to({graphics:mask_1_graphics_194,x:144.2,y:78.9}).wait(1).to({graphics:mask_1_graphics_195,x:144.2,y:78.9}).wait(1).to({graphics:mask_1_graphics_196,x:144.2,y:78.9}).wait(1).to({graphics:mask_1_graphics_197,x:144.2,y:78.9}).wait(1).to({graphics:mask_1_graphics_198,x:144.2,y:78.9}).wait(1).to({graphics:mask_1_graphics_199,x:144.2,y:78.9}).wait(1).to({graphics:mask_1_graphics_200,x:144.2,y:78.9}).wait(1).to({graphics:mask_1_graphics_201,x:144.3,y:78.9}).wait(1).to({graphics:mask_1_graphics_202,x:144.3,y:78.9}).wait(1).to({graphics:mask_1_graphics_203,x:144.3,y:78.9}).wait(1).to({graphics:mask_1_graphics_204,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_205,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_206,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_207,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_208,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_209,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_210,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_211,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_212,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_213,x:144.3,y:78.8}).wait(1).to({graphics:mask_1_graphics_214,x:144.3,y:78.7}).wait(1).to({graphics:mask_1_graphics_215,x:144.3,y:78.7}).wait(1).to({graphics:mask_1_graphics_216,x:144.3,y:78.7}).wait(1).to({graphics:mask_1_graphics_217,x:144.3,y:78.7}).wait(1).to({graphics:mask_1_graphics_218,x:144.3,y:78.7}).wait(1).to({graphics:mask_1_graphics_219,x:144.3,y:78.7}).wait(1).to({graphics:mask_1_graphics_220,x:144.4,y:78.7}).wait(1).to({graphics:mask_1_graphics_221,x:144.4,y:78.7}).wait(1).to({graphics:mask_1_graphics_222,x:144.4,y:78.7}).wait(1).to({graphics:mask_1_graphics_223,x:144.4,y:78.7}).wait(1).to({graphics:mask_1_graphics_224,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_225,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_226,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_227,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_228,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_229,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_230,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_231,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_232,x:144.4,y:78.6}).wait(1).to({graphics:mask_1_graphics_233,x:144.4,y:78.5}).wait(1).to({graphics:mask_1_graphics_234,x:144.4,y:78.5}).wait(1).to({graphics:mask_1_graphics_235,x:144.4,y:78.5}).wait(1).to({graphics:mask_1_graphics_236,x:144.4,y:78.5}).wait(1).to({graphics:mask_1_graphics_237,x:144.4,y:78.5}).wait(1).to({graphics:mask_1_graphics_238,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_239,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_240,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_241,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_242,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_243,x:144.5,y:78.5}).wait(1).to({graphics:mask_1_graphics_244,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_245,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_246,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_247,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_248,x:144.5,y:78.4}).wait(1).to({graphics:mask_1_graphics_249,x:144.5,y:78.4}).wait(1));

	// Camada 1
	this.instance_1 = new lib.Forma3();
	this.instance_1.setTransform(-545,-282.5);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(250));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.1,289,156.6);


(lib.Forma2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AJ6gJIMqAJI2oS0gA2ktaIDmjNQBhhWBsgdQBYgYB7AKQAQABDYAcQCZAVB2gEIlSE1IPKNKg");
	mask_1.setTransform(144.5,120.5);

	// Camada 1
	this.instance_1 = new lib.Forma2();
	this.instance_1.setTransform(-545,-328);

	this.instance_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.8,289,240.2);


(lib.Logocopiar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Forma 3 copiar
	this.instance = new lib.Forma3copiar_1();
	this.instance.setTransform(138,219,1,1,0,0,0,138,105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Forma 3
	this.instance_1 = new lib.Forma3_2();
	this.instance_1.setTransform(138,219,1,1,0,0,0,28,23);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Forma 2 copiar
	this.instance_2 = new lib.Forma2copiar_1();
	this.instance_2.setTransform(138,219,1,1,0,0,0,138,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Forma 2
	this.instance_3 = new lib.Forma2_2();
	this.instance_3.setTransform(138,219,1,1,0,0,0,27,135);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-545,-165,1366,768);


(lib.Logocopiar2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Forma 3 copiar 3
	this.instance = new lib.Forma3copiar3_1();
	this.instance.setTransform(138,92,1,1,0,0,0,138,70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Forma 3 copiar 2
	this.instance_1 = new lib.Forma3copiar2_1();
	this.instance_1.setTransform(138,92,1,1,0,0,0,135,73);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Forma 3
	this.instance_2 = new lib.Forma3_3();
	this.instance_2.setTransform(138,92,1,1,0,0,0,138,92);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Forma 2
	this.instance_3 = new lib.Forma2_3();
	this.instance_3.setTransform(138,92,1,1,0,0,0,138,56);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-545,-292,1366,777.5);


(lib.Prancheta1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo copiar 2
	this.instance = new lib.Logocopiar2();
	this.instance.setTransform(713,402,1,1,0,0,0,138,92);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Logo copiar
	this.instance_1 = new lib.Logocopiar();
	this.instance_1.setTransform(713,402,1,1,0,0,0,138,219);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30,18,1366,777.5);


// stage content:
(lib.logo_animado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Prancheta 1
	this.instance = new lib.Prancheta1();
	this.instance.setTransform(159,13.2,0.836,0.895,0,0,0,574.9,183.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,65.4,1142,695.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;