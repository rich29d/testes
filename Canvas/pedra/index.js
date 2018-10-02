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



// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Camada 14
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4D7D1").s().p("AgSAEIAkgdIABAzg");
	this.shape.setTransform(309.7,210.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CDC3C1").s().p("AgOhnICeBQIkfB/g");
	this.shape_1.setTransform(310.4,218.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B6AEB1").s().p("AgxjBIE/BqIoaEZg");
	this.shape_2.setTransform(311.1,226.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F9AA1").s().p("AhUkaIHeCEIsTGxg");
	this.shape_3.setTransform(311.8,235.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9F9AA1").s().p("AAFjSIHeEjIvFCCg");
	this.shape_4.setTransform(303.9,224.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9F9AA1").s().p("Ao6A0IKZkVIHcHDg");
	this.shape_5.setTransform(295.9,221.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},21).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(24));

	// Camada 13
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E4D7D1").s().p("AgSAEIAkgdIABAzg");
	this.shape_6.setTransform(368.2,176.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3CACB").s().p("AghiHIBDDzIgqAcg");
	this.shape_7.setTransform(367.9,188.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C2BDC4").s().p("AgvkEIBfIGIhVADg");
	this.shape_8.setTransform(367.7,198.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_6}]},24).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).wait(22));

	// Camada 12
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E4D7D1").s().p("AgTAEIAmgdIABAzg");
	this.shape_9.setTransform(358.7,175.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DCD0CD").s().p("AglhjIBHAeIAECpg");
	this.shape_10.setTransform(357.7,179.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D4C9C9").s().p("Ag2i8IBoBcIAFEeg");
	this.shape_11.setTransform(356.7,182.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CCC2C4").s().p("AhIkWICJCaIAIGTg");
	this.shape_12.setTransform(355.7,185.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4BBC0").s().p("AhalvICrDXIAKIIg");
	this.shape_13.setTransform(354.7,187.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9}]},21).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_13}]},1).wait(23));

	// Camada 11
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E4D7D1").s().p("AgTAEIAmgdIABAzg");
	this.shape_14.setTransform(354.2,173.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DCD0CC").s().p("AAFAwIgqiUIBKDJg");
	this.shape_15.setTransform(354.4,178.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D4C9C7").s().p("AgHCJIgwlIIBvF/g");
	this.shape_16.setTransform(354.5,181.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CCC2C1").s().p("AgUDkIg1n+ICTI1g");
	this.shape_17.setTransform(354.7,185.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4BBBC").s().p("AgiE+Ig5qyIC3Lpg");
	this.shape_18.setTransform(354.8,188.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C4BBBC").s().p("AgxlIIBaIaIAJB3g");
	this.shape_19.setTransform(353.5,202);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C4BBBC").s().p("AhbnQIC3LpIhsC4g");
	this.shape_20.setTransform(354.8,197.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14}]},19).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(25));

	// Camada 10
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E4D7D1").s().p("AgSAEIAlgdIAAAzg");
	this.shape_21.setTransform(330.2,158.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E6D9D3").s().p("AhLgNICMhCIALCeg");
	this.shape_22.setTransform(327.8,162.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E7DBD5").s().p("AiDgiID0hiIATEJg");
	this.shape_23.setTransform(325.3,167.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E9DDD8").s().p("Ai7g1IFaiEIAdFzg");
	this.shape_24.setTransform(322.9,171.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EADEDA").s().p("Aj0hJIHBilIAoHdg");
	this.shape_25.setTransform(320.5,176.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#EBE0DC").s().p("AkshdIIpjHIAwJIg");
	this.shape_26.setTransform(318,181.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#EDE2DE").s().p("AlkhwIKPjpIA6Kzg");
	this.shape_27.setTransform(315.6,185.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDE2DE").s().p("AlniYIKPjoIBAMCg");
	this.shape_28.setTransform(315.9,189.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EDE2DE").s().p("AlqjAIKQjoIBFNRg");
	this.shape_29.setTransform(316.1,193.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EDE2DE").s().p("AltjoIKQjoIBLOhg");
	this.shape_30.setTransform(316.4,197.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_21}]},12).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).wait(29));

	// Camada 8
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E4D7D1").s().p("AgSAEIAkgdIABAzg");
	this.shape_31.setTransform(284,175.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E5D8D3").s().p("AAohgIBPCPIjtAyg");
	this.shape_32.setTransform(279.8,183.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E5DAD5").s().p("AA9izICeDqIm0B9g");
	this.shape_33.setTransform(275.6,191.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E6DBD7").s().p("ABTkFIDrFGIp7DFg");
	this.shape_34.setTransform(271.4,200.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E6DBD7").s().p("ABAkFIEUElIqnDmg");
	this.shape_35.setTransform(273.4,200.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E6DBD7").s().p("AAtkFIE9EFIrTEGg");
	this.shape_36.setTransform(275.3,200.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E6DBD7").s().p("AAakFIFlDmIr9Elg");
	this.shape_37.setTransform(277.2,200.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},17).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).wait(27));

	// Camada 6
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E4D7D1").s().p("AgTAEIAmgdIABAzg");
	this.shape_38.setTransform(275.5,136.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E7DBD6").s().p("AimhWIFNA+IjZBug");
	this.shape_39.setTransform(283.4,142);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EADEDB").s().p("Ak5iiIJzCZIm0Csg");
	this.shape_40.setTransform(291.3,146.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EDE2E0").s().p("AnNjtIObDzIqPDog");
	this.shape_41.setTransform(299.3,150.4);
	this.shape_41._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_38}]},10).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(13).to({_off:false},0).wait(37));

	// Camada 5
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E4D7D1").s().p("AgTAEIAlgdIABAzg");
	this.shape_42.setTransform(216.7,131.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#DBCFCB").s().p("AgthQIgfCJICXhnIAlAKIjfB1g");
	this.shape_43.setTransform(218.8,135.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E3D7D2").s().p("Ah/A8IgdgEIDgh0IgmgLIAlgZIBaDBg");
	this.shape_44.setTransform(223.3,137.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BDB4B1").s().p("AAkhnIB6AiIiZBnIAfiJIhAChIAcAEIgCALIibAfg");
	this.shape_45.setTransform(210.5,137.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#969092").s().p("ACvi/IhfEjIAPACIgBAGIkMBUg");
	this.shape_46.setTransform(192.3,144.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#D2C7C4").s().p("Ah3iLIEkAgIAXACImHD1g");
	this.shape_47.setTransform(221.9,139.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E3D7D4").s().p("AkWB2IgPgBIBekkIhMEYIGHj1IgXgDIAXgPICyFOg");
	this.shape_48.setTransform(229.9,143.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E2D7D5").s().p("AmvChIJUmOIELHbg");
	this.shape_49.setTransform(236.6,150.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#6F6D72").s().p("AD9kYIh6GnIl/CKg");
	this.shape_50.setTransform(180.2,152.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C9BFBE").s().p("AivjTIHZAZIpTGOg");
	this.shape_51.setTransform(223.2,145.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E2D7D5").s().p("AlrgaIGcA7IhkiCICTjKIEMHcIrIB7g");
	this.shape_52.setTransform(243.4,156.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#6F6D72").s().p("AkLD5IH6owIAIC0IhaBnIBgAOIAPFGg");
	this.shape_53.setTransform(181.6,155.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C9BFBE").s().p("AieBxIhfgOIBahlICWisIClDYIBmCFg");
	this.shape_54.setTransform(222.9,142.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E2D7D5").s().p("Ai2CGIBmCFIgflEIB8lWIELHbIovFEg");
	this.shape_55.setTransform(251.7,166.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#6F6D72").s().p("AlXCVIH6oxIAZB2IhCAYIBlCEIB5Ing");
	this.shape_56.setTransform(189.2,165.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#C9BFBE").s().p("AhsiSIhliFIBDgXIEhhmIAgFfIAfFEIhliFIhiEKg");
	this.shape_57.setTransform(222.5,166.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E2D7D5").s().p("Ag9nzIEKHdImZILg");
	this.shape_58.setTransform(259.3,176.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#6F6D72").s().p("AmiAxIH5oxIFMQBg");
	this.shape_59.setTransform(196.8,175.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#C9BFBE").s().p("AjsoAIHZAZIiPPog");
	this.shape_60.setTransform(229.3,175.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_42}]},8).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},1).wait(36));

	// Camada 4
	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E4D7D1").s().p("AgTAEIAmgdIABAzg");
	this.shape_61.setTransform(261.4,115);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E0D3CE").s().p("AhfAKIC/gqIgsBBg");
	this.shape_62.setTransform(255.6,116.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#DBCFCC").s().p("AirAQIFXg3IhYBPg");
	this.shape_63.setTransform(249.8,118.1);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D7CAC9").s().p("Aj4AWIHxhDIiFBbg");
	this.shape_64.setTransform(244,119.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#D2C6C6").s().p("AlFAcIKLhQIiyBpg");
	this.shape_65.setTransform(238.2,121.1);
	this.shape_65._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_61}]},5).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_65}]},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(9).to({_off:false},0).wait(41));

	// Camada 3
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#E4D7D1").s().p("AgTAEIAmgdIABAzg");
	this.shape_66.setTransform(275.5,115);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E3D7D4").s().p("ABogiIh6AwIhVAVg");
	this.shape_67.setTransform(277.2,115.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E1D7D7").s().p("Ag6gIID4guIl7Bsg");
	this.shape_68.setTransform(278.9,117.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#E0D7DA").s().p("AhhgfIF1gqIonCUg");
	this.shape_69.setTransform(280.7,119);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E0D7DA").s().p("AkSAdIFrh+IC6DDg");
	this.shape_70.setTransform(280.6,123.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E0D7DA").s().p("AnNhDICyhsILpFfg");
	this.shape_71.setTransform(299.3,133.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_66}]},3).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).wait(42));

	// Camada 15
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#32516E").s().p("Eg6HAqMMAAAhUXMB0QAAAMAAABUXg");
	this.shape_72.setTransform(352.1,194);

	this.timeline.addTween(cjs.Tween.get(this.shape_72).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(255,124,744.2,540.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;