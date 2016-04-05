var w = window.innerWidth, h = window.innerHeight;

var svg = d3.select("body").append("svg")
	.attr("width", w)
	.attr("height", h)
	.style("background", "white");

	var buildingColor = "orange";
	var deviceColor = "gray";
	var Dur = 570;
	
	var BGopacity = 0.33700005;
	var thumbOpacity = 0.5;

	// backgrounds
	var deviceBG = {
		x: 21.324184,
		y: 178.39192,
		width: 1130.7183,
		height: 704.79163,
		ry: 29.163792
		};

	var roomBG = {
		x: 413.47556,
		y: 27,
		width: 743.55707,
		height: 863.49524,
		ry: 35.730835
		};

	// paths
	
	// matrices
		var CampusMapGthumbMatrix = "matrix(0.1642203,0,0,0.1642203,0,0)";
		var SFgThumbMatrix = "matrix(0.16425702,0,0,0.16425702,170.08221,0.714847)";
		var floorGthumbMatrix = "matrix(0.16477916,0,0,0.16477916,230,0)";
		var roomGthumbMatrix = "matrix(0.16488074,0,0,0.16488074,380,23)";
		var deviceGthumbMatrix = "matrix(0.09436181,0,0,0.09436181,40,161.55854)";

		var roomDeviceMatrix = "matrix(0.2258128,0,0,0.2258128,531.70261,287.10811)";
		var deviceMatrix = "matrix(1.157551,0,0,1.0770259,79.525472,254.61494)";

	// Campus Map
	var CampusMap = svg.append("g")
		.attr("id", "CampusMap")
		.attr("transform", "matrix(1,0,0,1,-190,-137)");

		var CampusMapBG = CampusMap.append("rect")
			.attr("id", "CampusMapBG")
			.attr("width", 1135.4667)
			.attr("height", 864.26593)
			.attr("x", 231.31741)
			.attr("y", 165.85028)
			.attr("ry", 35.762733)
			.attr("fill", "gray")
			.attr("fill-opacity", BGopacity)
			.on("click", function(){
				CMtoFull();
			});

		var CMtoThumb = function(){
			d3.select("#CampusMap")
				.transition()
				.duration(Dur)
				.attr("transform", CampusMapGthumbMatrix)
			d3.selectAll(".MAPbuilding")
				.transition()
				.duration(Dur)
				.attr("fill-opacity", 0.5)
			d3.selectAll(".MAPlabel")
				.transition()
				.duration(Dur)
				.attr("fill-opacity", 0.3);
			};

		var CMtoFull = function(){
			d3.select("#CampusMap")
				.transition()
				.duration(Dur)
				.attr("transform", "matrix(1,0,0,1,-190,-137)")
			d3.selectAll(".MAPbuilding")
				.transition()
				.duration(Dur)
				.attr("fill-opacity", 1)
			d3.selectAll(".MAPlabel")
				.transition()
				.duration(Dur)
				.attr("fill-opacity", 1)
			d3.selectAll(".SFg")
				.transition()
				.duration(Dur)
				.attr("transform", SFgThumbMatrix)
			d3.selectAll(".floorG")
				.transition()
				.duration(Dur)
				.attr("transform", floorGthumbMatrix)
			d3.selectAll(".roomG")
				.transition()
				.duration(Dur)
				.attr("transform", roomGthumbMatrix)
			d3.selectAll(".deviceG")
				.transition()
				.duration(Dur)
				.attr("transform", deviceGthumbMatrix)
			d3.selectAll(".background")
				.transition()
				.duration(Dur)
				.attr("fill-opacity", 0)
			d3.selectAll(".SFelement")
				.transition()
				.duration(Dur)
				.attr("fill-opacity", 0)
			d3.selectAll(".floorElement, .roomElement, .deviceElement")
				.transition()
				.duration(Dur)
				.attr("stroke-opacity", 0)
				.attr("fill-opacity", 0)
			d3.selectAll(".deviceInfo")
				.transition()
				.duration(Dur)
				.attr("opacity", 0);
			};

		var MAPHAg = CampusMap.append("g")
			.attr("id", "MAPHAg");

			var MAPHApath = "m 573.84831,303.30519 52.76971,-9.38805 5.62896,35.93913 94.93428,-13.37276 1.67548,12.11134 14.34496,-2.47245 7.92618,44.19776 -101.72387,19.57303 7.16646,44.53623 -52.57522,9.46966 -15.45632,-90.93037 -6.8088,1.39944 z";

				var MAPHA = MAPHAg.append("path")
					.attr("d", MAPHApath)
					.attr("id", "MAPHA")
					.attr("class", "MAPbuilding")
					.attr("fill", buildingColor)
					.attr("fill-opacity", 1)
					.on("click", function(){
						return CMtoThumb();
					});

			var MAPHAlabel = MAPHAg.append("text")
				.text("HA")
				.attr("class", "MAPlabel")
				.attr("id", "MAPHAlabel")
				.attr("pointer-events", "none")
				.attr("x", 625.55328)
				.attr("y", 371.35052)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPRCg = CampusMap.append("g")
			.attr("id", "MAPRCg");

			var MAPRCpath = "m 782.99179,243.9834 70.19128,46.5431 -10.09189,15.81562 3.16311,1.65688 -13.55624,18.97874 10.54377,7.8325 3.31374,12.95374 -9.03752,14.15876 -14.76124,3.31374 -8.43497,-5.12125 -11.44754,2.10876 3.31377,13.25499 -51.21246,10.2425 -12.6525,-62.65998 16.26749,-3.0125 19.58123,-29.22124 -18.37624,-11.89938 z";

				var MAPRC = MAPRCg.append("path")
					.attr("d", MAPRCpath)
					.attr("id", "MAPRC")
					.attr("class", "MAPbuilding")
					.attr("fill", buildingColor)
					.attr("fill-opacity", 1)
					.on("click", function(){
						return CMtoThumb();
					});

			var MAPRClabel = MAPRCg.append("text")
				.text("RC")
				.attr("class", "MAPlabel")
				.attr("id", "MAPRClabel")
				.attr("pointer-events", "none")
				.attr("x", 768.71338)
				.attr("y", 342.33542)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPBTg = CampusMap.append("g")
			.attr("id", "MAPBTg");

			var MAPBTpath = "m 1231.3226,417.09407 1.7407,18.71156 8.7031,-1.74061 11.749,70.05969 -24.8036,3.9164 7.1799,35.90013 11.314,-1.08787 8.0504,45.03836 -9.1382,3.26364 1.0878,12.18429 25.8917,-4.35151 9.1382,52.65357 -14.7953,3.48121 0.4353,12.40187 -54.8294,6.52728 -4.3515,-23.71586 -14.3601,1.74064 -1.7406,-4.35158 -73.5409,11.31403 -6.0922,-23.49829 -40.034,10.22612 -5.657,-16.75341 -1.9582,-14.57764 -1.0879,-9.79095 40.9044,-8.2679 -4.3515,-26.54437 78.7628,-17.40614 1.7406,7.61519 13.2722,-3.26368 -6.3098,-39.59893 -11.7491,2.17577 -12.1843,-67.44874 3.9164,-2.17578 -5.2219,-22.62799 z";

			var MAPBT = MAPBTg.append("path")
				.attr("d", MAPBTpath)
				.attr("id", "MAPBT")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				.on("click", function(){
					CMtoThumb()
					d3.select("#SFBTg")
						.transition()
						.duration(Dur)
						.attr("transform", "matrix(1,0,0,1,-187,-136)")
					d3.select("#SFBTBG")
						.transition()
						.duration(Dur)
						.attr("fill-opacity", BGopacity)
					d3.select("#SFBTg").selectAll(".SFelement")
						.transition()
						.duration(Dur)
						.attr("fill-opacity", 1);
				});

			var MAPBTlabel = MAPBTg.append("text")
				.text("BT")
				.attr("class", "MAPlabel")
				.attr("id", "MAPBTlabel")
				.attr("pointer-events", "none")
				.attr("x", 1141)
				.attr("y", 617)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPOHg = CampusMap.append("g")
			.attr("id", "MAPOHg");

			var MAPOHpath = "m 860.26241,339.4043 -13.48093,0.22594 c 0,0 -0.2343,-7.61108 0.82845,-10.54374 1.10196,-3.0401 5.03339,-7.63406 7.68187,-9.48938 3.47845,-2.43673 8.96221,-4.74468 8.96221,-4.74468 l 94.74305,-20.25906 2.25936,14.15875 75.61368,-12.20062 11.4475,67.17871 -100.84333,16.49343 c 0,0 -5.25456,9.24648 -16.87004,11.82406 -4.84087,1.07425 -18.07806,1.88597 -27.26308,0.52719 -10.15079,-1.50165 -12.8031,-6.85342 -12.8031,-6.85342 l -30.27561,2.40997 -0.75314,-7.07933 -4.06687,0.0754 -0.0754,-13.48093 4.21749,-0.37661 z";
			
			var MAPOH = MAPOHg.append("path")
				.attr("d", MAPOHpath)
				.attr("id", "MAPOH")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPOHlabel = MAPOHg.append("text")
				.text("OH")
				.attr("class", "MAPlabel")
				.attr("id", "MAPOHlabel")
				.attr("pointer-events", "none")
				.attr("x", 913.69702)
				.attr("y", 358.03427)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPGSg = CampusMap.append("g")
			
			.attr("id", "MAPGSg");

			var MAPGSpath = "m 788.9893,752.37966 20.23463,86.70435 -17.40612,4.46031 6.63609,30.24315 -59.72479,13.59853 -5.54821,-25.8916 35.57378,-8.26792 -0.43516,-4.13397 -81.91761,18.7116 -20.01706,-87.13942 z";
			
			var MAPGS = MAPGSg.append("path")
				.attr("d", MAPGSpath)
				.attr("id", "MAPGS")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPGSlabel = MAPGSg.append("text")
				.text("GS")
				.attr("class", "MAPlabel")
				.attr("id", "MAPGSlabel")
				.attr("pointer-events", "none")
				.attr("x", 710.53534)
				.attr("y", 826.22955

					)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPPEg = CampusMap.append("g")
			
			.attr("id", "MAPPEg");

			var MAPPEpath = "m 446.72418,439.9444 89.08683,-20.90494 1.84621,6.4617 22.49941,-2.76929 22.42476,92.30995 -8.48813,2.55172 0.57809,8.40123 19.60265,-3.87585 10.46178,49.53968 -9.23098,4.00011 18.39055,83.98338 -50.39134,11.71128 2.57039,8.34523 -8.72437,2.11655 -3.69241,-8.00019 -33.03265,7.51223 1.12196,8.37936 -9.62882,1.6473 -1.89895,-7.71117 -36.88987,7.69571 -24.21816,-104.36629 15.82013,-4.94182 -5.99241,-25.62921 8.96066,-3.27592 -2.51441,-7.9661 -6.19134,1.35829 z";
			
			var MAPPE = MAPPEg.append("path")
				.attr("d", MAPPEpath)
				.attr("id", "MAPPE")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPPElabel = MAPPEg.append("text")
				.text("PE")
				.attr("class", "MAPlabel")
				.attr("id", "MAPPElabel")
				.attr("pointer-events", "none")
				.attr("x", 496.29202)
				.attr("y", 582.43561)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPLBg = CampusMap.append("g")
			
			.attr("id", "MAPLBg");

			var MAPLBpath = "m 664.78414,524.24695 c 30.32036,-6.82547 41.49247,25.0428 41.49247,25.0428 l 5.64692,24.30626 37.31869,-7.36554 9.32967,10.31173 1.71864,12.27592 4.66481,-0.98209 4.66483,16.94073 -3.92831,2.20967 5.15589,24.30622 -19.64141,5.64692 0.73658,4.41933 4.91033,-0.73658 9.5752,39.28283 -5.15586,2.20968 2.70069,13.25794 -62.36151,14.48552 3.19176,16.69523 -5.64689,1.96411 -4.17383,-15.95863 -25.04279,5.15588 -32.89939,-153.44854 c 0,0 -2.57687,-33.19393 27.74351,-40.01939 z";
			
			var MAPLB = MAPLBg.append("path")
				.attr("d", MAPLBpath)
				.attr("id", "MAPLB")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPLBlabel = MAPLBg.append("text")
				.text("LB")
				.attr("class", "MAPlabel")
				.attr("id", "MAPLBlabel")
				.attr("pointer-events", "none")
				.attr("x", 679.13763)
				.attr("y", 636.9198)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPCMg = CampusMap.append("g")
			
			.attr("id", "MAPCMg");

			var MAPCMpath = "m 1012.5205,877.84634 2.8594,12.12003 -29.40399,6.86728 9.64749,43.03291 57.8367,-14.0641 -8.0981,-35.52065 5.5836,-1.32092 -4.9231,-19.12246 z";
			
			var MAPCM = MAPCMg.append("path")
				.attr("d", MAPCMpath)
				.attr("id", "MAPCM")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPCMlabel = MAPCMg.append("text")
				.text("CM")
				.attr("class", "MAPlabel")
				.attr("id", "MAPCMlabel")
				.attr("pointer-events", "none")
				.attr("x", 994.54071)
				.attr("y", 920.18665

					)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPHUg = CampusMap.append("g")
			
			.attr("id", "MAPHUg");

			var MAPHUpath = "m 959.78702,613.13062 9.13819,46.34385 96.60409,-18.71161 -1.5232,-10.00853 3.0462,-0.8703 -2.1758,-15.01277 -3.6988,1.30544 -4.7867,-21.75766 z";
			
			var MAPHU = MAPHUg.append("path")
				.attr("d", MAPHUpath)
				.attr("id", "MAPHU")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPHUlabel = MAPHUg.append("text")
				.text("HU")
				.attr("class", "MAPlabel")
				.attr("id", "MAPHUlabel")
				.attr("pointer-events", "none")
				.attr("x", 981.10968)
				.attr("y", 640.61371)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPLABg = CampusMap.append("g")
			
			.attr("id", "MAPLABg");

			var MAPLABpath = "m 364.27967,708.6468 49.3899,-14.36007 8.05035,28.72011 -15.88311,5.00428 3.26364,11.53156 16.10068,-4.78671 11.74913,38.72866 -11.31397,3.48122 7.61519,23.71586 -28.0674,8.70306 -3.04608,-7.39762 -75.06394,22.19285 -13.70733,-46.99659 64.83784,-19.79947 z";
			
			var MAPLAB = MAPLABg.append("path")
				.attr("d", MAPLABpath)
				.attr("id", "MAPLAB")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPLABlabel = MAPLABg.append("text")
				.text("LAB")
				.attr("class", "MAPlabel")
				.attr("id", "MAPLABlabel")
				.attr("pointer-events", "none")
				.attr("x", 348.54675)
				.attr("y", 793.90851)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPHOg = CampusMap.append("g")
			.attr("id", "MAPHOg");

			var MAPHOpath = "m 1009.0799,420.36521 3.7656,23.19621 46.6938,-7.22995 12.5019,66.12432 45.6393,-8.73623 -2.1088,-12.20065 15.0625,-3.9162 -4.2175,-22.44312 -10.6943,2.1087 -6.3263,-39.46372 -17.6232,2.86188 -2.2593,-13.25497 z";
			
			var MAPHO = MAPHOg.append("path")
				.attr("d", MAPHOpath)
				.attr("id", "MAPHO")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPHOlabel = MAPHOg.append("text")
				.text("HO")
				.attr("class", "MAPlabel")
				.attr("id", "MAPHOlabel")
				.attr("pointer-events", "none")
				.attr("x", 1065.0154)
				.attr("y", 470.80042)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPDVg = CampusMap.append("g")
			.attr("id", "MAPDVg");

			var MAPDVpath = "m 1064.2855,510.27249 18.539,-3.38468 8.6156,47.77038 -18.6159,3.53854 z";
			
			var MAPDV = MAPDVg.append("path")
				.attr("d", MAPDVpath)
				.attr("id", "MAPDV")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPDVlabel = MAPDVg.append("text")
				.text("DV")
				.attr("class", "MAPlabel")
				.attr("id", "MAPDVlabel")
				.attr("pointer-events", "none")
				.attr("x", 1052.8064)
				.attr("y", 543.65021)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

		var MAPMOg = CampusMap.append("g")
			.attr("id", "MAPMOg");

			var MAPMOpath = "m 834.26705,615.39042 c 1.26681,-1.11234 3.79723,-2.37418 6.11959,-2.78561 0.87312,-0.15457 13.49679,-1.74365 13.49679,-1.74365 l -0.27213,-15.71586 21.39638,-0.85207 0.0946,15.34901 47.14762,-2.13018 1.25442,28.34311 -10.02357,0.57987 0.85206,16.10637 -24.30754,1.86988 0.639,17.89334 -37.32524,2.53253 -0.63903,-7.02953 -21.22809,0.6667 c 0,0 -1.11443,-45.36907 -1.0975,-45.77794 0.1428,-3.45323 2.62584,-6.19364 3.89263,-7.30597 z";
			
			var MAPMO = MAPMOg.append("path")
				.attr("d", MAPMOpath)
				.attr("id", "MAPMO")
				.attr("class", "MAPbuilding")
				.attr("fill", buildingColor)
				.attr("fill-opacity", 1)
				
				.on("click", function(){
					return CMtoThumb();
				});

			var MAPMOlabel = MAPMOg.append("text")
				.text("MO")
				.attr("class", "MAPlabel")
				.attr("id", "MAPMOlabel")
				.attr("pointer-events", "none")
				.attr("x", 839.35431)
				.attr("y", 647.11249)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("fill", "black")
				.attr("fill-opacity", 1);

	// Stack of FLoors
	var SFBTg = svg.append("g")
		.attr("id", "SFBTg")
		.attr("class", "SFg")
		.attr("transform", SFgThumbMatrix);

		var SFBTBG = SFBTg.append("rect")
			.attr("id", "SFBTBG")
			.attr("class", "background")
			.attr("width", 344.09805)
			.attr("height", 863.18353)
			.attr("x", 426.793)
			.attr("y", 165.85027)
			.attr("ry", 35.717941)
			.attr("fill", "gray")
			.attr("fill-opacity", 0)
			.on("click", function(){
				// SFBTg to full
				// 
			});

		var SFBT01 = SFBTg.append("path")
			.attr("id", "SFBT01")
			.attr("class", "SFelement")
			.attr("d", "m 653.01207,739.68849 1.714,18.42514 8.56986,-1.71395 11.56916,68.98705 -24.42395,3.85648 7.07006,35.35046 11.14076,-1.07123 7.92712,44.34885 -8.9983,3.21367 1.07118,11.99777 25.49525,-4.28493 8.99836,51.84745 -14.56875,3.42795 0.42852,12.21198 -53.98988,6.42733 -4.28494,-23.35277 -14.14017,1.714 -1.71396,-4.28493 -72.415,11.1408 -5.99893,-23.13854 -39.42106,10.06958 -5.57048,-16.49695 -1.92824,-14.35445 -1.07118,-9.64109 40.27817,-8.14129 -4.28498,-26.13795 77.55695,-17.13968 1.71395,7.4986 13.069,-3.21366 -6.21313,-38.99271 -11.56925,2.1425 -11.99777,-66.41612 3.85644,-2.14248 -5.1419,-22.28156 z")
			.attr("fill", buildingColor)
			.attr("fill-opacity", 0);

		var SFBT02 = SFBTg.append("path")
			.attr("class", "SFelement")
			.attr("d", "m 653.01207,472.90807 1.714,18.42506 8.56986,-1.71391 11.56916,68.98704 -24.42395,3.85645 7.07006,35.35045 11.14076,-1.07118 7.92712,44.34885 -8.9983,3.21366 1.07118,11.99778 25.49525,-4.28494 8.99836,51.84742 -14.56875,3.42799 0.42852,12.21193 -53.98988,6.42742 -4.28494,-23.35277 -14.14017,1.71395 -1.71396,-4.28497 -72.415,11.14084 -5.99893,-23.13856 -39.42106,10.06956 -5.57048,-16.4969 -1.92824,-14.35446 -1.07118,-9.64109 40.27817,-8.14129 -4.28498,-26.13798 77.55695,-17.13964 1.71395,7.49855 13.069,-3.21366 -6.21313,-38.9927 -11.56925,2.14248 -11.99777,-66.41611 3.85644,-2.14244 -5.1419,-22.28155 z")
			.attr("fill", buildingColor)
			.attr("fill-opacity", 0)
			.on("click", function(){
				console.log("hi")
				d3.select("#BT2g")
					.transition()
					.duration(Dur)
					.attr("transform", "matrix(1,0,0,1,-180,-140)")
				d3.select("#BT2BG")
					.transition()
					.duration(Dur)
					.attr("fill-opacity", BGopacity)
				d3.select("#BT2g").selectAll(".floorRoom")
					.transition()
					.duration(Dur)
					.attr("fill-opacity", 0.3)
					.attr("stroke-opacity", 0.6)
				d3.select("#BT2g").selectAll(".floorElement")
					.transition()
					.duration(Dur)
					.attr("stroke-opacity", 1)
					.attr("fill-opacity", 1)
				d3.select("#SFBTg")
					.transition()
					.duration(Dur)
					.attr("transform", SFgThumbMatrix)
				d3.select("#SFBTg").selectAll(".SFelement")
					.transition()
					.duration(Dur)
					.attr("fill-opacity", thumbOpacity)
				;
			});

		var SFBT03 = SFBTg.append("path")
			.attr("class", "SFelement")
			.attr("d", "m 653.01207,206.49098 1.714,18.42511 8.56986,-1.71396 11.56916,68.98705 -24.42395,3.85644 7.07006,35.35054 11.14076,-1.07121 7.92712,44.3488 -8.9983,3.21367 1.07118,11.99781 25.49525,-4.28497 8.99836,51.84744 -14.56875,3.42791 0.42852,12.21202 -53.98988,6.42738 -4.28494,-23.35281 -14.14017,1.71399 -1.71396,-4.28493 -72.415,11.14079 -5.99893,-23.13852 -39.42106,10.06954 -5.57048,-16.49691 -1.92824,-14.35447 -1.07118,-9.64103 40.27817,-8.1413 -4.28498,-26.13798 77.55695,-17.13965 1.71395,7.49857 13.069,-3.21368 -6.21313,-38.99269 -11.56925,2.14245 -11.99777,-66.41612 3.85644,-2.14245 -5.1419,-22.28154 z")
			.attr("fill", buildingColor)
			.attr("fill-opacity", 0);

	// floors
	var BT2g = svg.append("g")
		.attr("id", "BT2g")
		.attr("class", "floorG")
		.attr("transform", "matrix(0.16477916,0,0,0.16477916,230,0)");

		var BT2BG = BT2g.append("rect")
			.attr("id", "BT2BG")
			.attr("class", "background")
			.attr("width", 746.11609)
			.attr("height", 863.18353)
			.attr("x", 492.79297)
			.attr("y", 165.85027)
			.attr("ry", 35.717941)
			.attr("fill", "gray")
			.attr("fill-opacity", 0);

		var BT2 = BT2g.append("path")
			.attr("id", "BT2")
			.attr("class", "floorElement")
			.attr("d", "m 1024.9483,245.04354 4.7653,51.22695 23.8267,-4.76524 32.1655,191.80318 -67.9053,10.72195 19.6567,98.28416 30.9744,-2.97821 22.0397,123.30213 -25.0178,8.93486 2.9781,33.35716 70.884,-11.91331 25.0179,144.15024 -40.5052,9.53072 1.1913,33.95267 -150.10681,17.8699 -11.91332,-64.92729 -39.31356,4.76536 -4.76536,-11.91331 -201.33379,30.97451 -16.67868,-64.33156 -109.60153,27.99613 -15.48744,-45.86603 -5.36098,-39.90932 -2.97821,-26.80482 111.98444,-22.63509 -11.91331,-72.67092 215.6298,-47.65294 4.76518,20.84817 36.33549,-8.93492 -17.27428,-108.41055 -32.16551,5.95671 -33.35734,-184.65523 10.72189,-5.95665 -14.29578,-61.94891 z")
			.attr("fill", buildingColor)
			.attr("fill-opacity", 0);

		var BT253FloorRoom = BT2g.append("path")
			.attr("id", "BT253floorRoom")
			.attr("class", "floorElement")
			.attr("d", "m 995.21894,385.3672 9.49116,50.16733 65.7599,-11.86389 -8.1353,-49.82839 z")
			.attr("fill", buildingColor)
			.attr("fill-opacity", 0)
			.attr("stroke", "black")
			.attr("stroke-width", 6)
			.attr("stroke-opacity", 0)
			.on("click", function(){
				d3.select("#BT253g")
					.transition()
					.duration(Dur)
					.attr("transform", "matrix(1,0,0,1,34,0)")
				d3.select("#BT253g").selectAll(".roomElement")
					.transition()
					.duration(Dur)
					.attr("fill-opacity", 1)
					.attr("stroke-opacity", 1)
				d3.select("#BT253g").select(".background")
					.transition()
					.duration(Dur)
					.attr("fill-opacity", BGopacity)
				d3.select("#BT2g")
					.transition()
					.duration(Dur)
					.attr("transform", "matrix(0.16477916,0,0,0.16477916,230,0)")
				d3.select("#BT2g").selectAll(".floorElement")
					.transition()
					.duration(Dur)
					.attr("fill-opacity", thumbOpacity)
				d3.select("#BT2g").selectAll(".floorRoom")
					.transition()
					.duration(Dur)
					.attr("fill-opacity", 0)
					.attr("stroke-opacity", 0);
			});

	// rooms
	var BT253g = svg.append("g")
		.attr("id", "BT253g")
		.attr("class", "roomG")
		.attr("transform", roomGthumbMatrix);

		var BT253BG = BT253g.append("rect")
			.attr("id", "BT253BG")
			.attr("class", "background")
			.attr("width", roomBG.width)
			.attr("height", roomBG.height)
			.attr("x", roomBG.x)
			.attr("y", roomBG.y)
			.attr("ry", roomBG.ry)
			.attr("fill", "gray")
			.attr("fill-opacity", 0)
			.on("click", function(){
				console.log("hi3")
			});

		var BT253 = BT253g.append("path")
			.attr("id", "BT253")
			.attr("class", "roomElement")
			.attr("d", "m 466.2171,273.85405 80.47767,425.38248 557.59633,-100.5971 -68.9812,-422.50848 z")
			.attr("fill", buildingColor)
			.attr("fill-opacity", 0);


		var BT253device = BT253g.append("g")
			.attr("id", "IBT0253D53684")
			.attr("transform", roomDeviceMatrix);

			var BT253devicePath1 = BT253device.append("path")
				.attr("class", "roomElement")
				.attr("d", "m 42.589392,125.25705 1.53339,326.61276 119.604678,0 78.20305,-67.4693 1.53339,-338.879904 -118.07127,1.5334 z")
				.attr("fill", "none")
				.attr("stroke", "black")
				.attr("stroke-opacity", 0)
				.attr("stroke-width", 1);
			var BT253devicePath2 = BT253device.append("path")
				.attr("class", "roomElement")
				.attr("d", "m 44.996412,358.54448 c -10e-4,-50.81282 -0.45611,-123.78681 -1.01135,-162.16443 l -1.00951,-69.77748 41.67148,-39.391357 41.671478,-39.391347 57.86037,-0.46878 c 31.82321,-0.25783 57.89834,-0.46878 57.94472,-0.46878 0.0465,0 -0.20152,75.733884 -0.5509,168.297524 l -0.63526,168.29751 -39.08558,33.72705 -39.08557,33.72703 -58.88403,0 -58.884028,0 -0.002,-92.38694 z")
				.attr("fill", "#999999")
				.attr("fill-opacity", 0)
				.on("click", function(){
					d3.select("#IBT0253D53684g")
						.transition()
						.duration(Dur)
						.attr("transform", "matrix(1,0,0,1,18,7)")
					d3.select("#IBT0253D53684g").selectAll(".background")
						.transition()
						.duration(Dur)
						.attr("fill-opacity", BGopacity)
					d3.select("#IBT0253D53684g").selectAll("path")
						.transition()
						.duration(Dur)
						.attr("fill-opacity", 1)
						.attr("stroke-opacity", 1)
					d3.select("#IBT0253D53684g").selectAll("text")
						.transition()
						.duration(Dur)
						.attr("opacity", 1)
					d3.select("#BT253g")
						.transition()
						.duration(Dur)
						.attr("transform", roomGthumbMatrix)
					d3.select("#BT253g").selectAll("path")
						.transition()
						.duration(Dur)
						.attr("fill-opacity", thumbOpacity);
				});
			var BT253devicePath3 = BT253device.append("path")
				.attr("class", "roomElement")
				.attr("d", "m 43.370912,125.85113 123.064958,2.16855 74.27268,-79.694044 -73.73054,79.151914 -2.71069,323.11327")
				.attr("fill", "none")
				.attr("stroke", "black")
				.attr("stroke-opacity", 0)
				.attr("stroke-width", 1);
			var BT253devicePath6 = BT253device.append("path")
				.attr("class", "roomElement")
				.attr("d", "m 56.382192,195.78672 95.958128,0")
				.attr("fill", "none")
				.attr("stroke", "black")
				.attr("stroke-opacity", 0)
				.attr("stroke-width", 1);

	// devices
	var IBT0253D53684g = svg.append("g")
		.attr("id", "IBT0253D53684g")
		.attr("class", "deviceG")
		.attr("transform", deviceGthumbMatrix);

		var IBT0253D53684BG = IBT0253D53684g.append("rect")
			.attr("id", "IBT0253D53684BG")
			.attr("class", "background")
			.attr("width", deviceBG.width)
			.attr("height", deviceBG.height)
			.attr("x", deviceBG.x)
			.attr("y", deviceBG.y)
			.attr("ry", deviceBG.ry)
			.attr("fill", "gray")
			.attr("fill-opacity", 0);

		var device = IBT0253D53684g.append("g")
			.attr("id", "IBT0253D53684")
			.attr("transform", deviceMatrix);

			var devicePath1 = device.append("path")
				.attr("class", "deviceElement")
				.attr("d", "m 42.589392,125.25705 1.53339,326.61276 119.604678,0 78.20305,-67.4693 1.53339,-338.879904 -118.07127,1.5334 z")
				.attr("fill", "none")
				.attr("stroke", "black")
				.attr("stroke-opacity", 0)
				.attr("stroke-width", 1);
			var devicePath2 = device.append("path")
				.attr("class", "deviceElement")
				.attr("d", "m 44.996412,358.54448 c -10e-4,-50.81282 -0.45611,-123.78681 -1.01135,-162.16443 l -1.00951,-69.77748 41.67148,-39.391357 41.671478,-39.391347 57.86037,-0.46878 c 31.82321,-0.25783 57.89834,-0.46878 57.94472,-0.46878 0.0465,0 -0.20152,75.733884 -0.5509,168.297524 l -0.63526,168.29751 -39.08558,33.72705 -39.08557,33.72703 -58.88403,0 -58.884028,0 -0.002,-92.38694 z")
				.attr("fill", "#999999")
				.attr("fill-opacity", 0);
			var devicePath3 = device.append("path")
				.attr("class", "deviceElement")
				.attr("d", "m 43.370912,125.85113 123.064958,2.16855 74.27268,-79.694044 -73.73054,79.151914 -2.71069,323.11327")
				.attr("fill", "none")
				.attr("stroke", "black")
				.attr("stroke-opacity", 0)
				.attr("stroke-width", 1);
			var devicePath6 = device.append("path")
				.attr("class", "deviceElement")
				.attr("d", "m 56.382192,195.78672 95.958128,0")
				.attr("fill", "none")
				.attr("stroke", "black")
				.attr("stroke-opacity", 0)
				.attr("stroke-width", 1);

		var deviceName = IBT0253D53684g.append("text")
				.text("I-BT0253-D53684")
				.attr("class", "deviceInfo")
				.attr("id", "deviceNameText")
				.attr("pointer-events", "none")
				.attr("x", 422.03802)
				.attr("y", 338.13852)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("opacity", 0);

		var deviceModelOS = IBT0253D53684g.append("text")
				.text("7010 Windows 7")
				.attr("class", "deviceInfo")
				.attr("id", "deviceModelText")
				.attr("pointer-events", "none")
				.attr("x", 422.03802)
				.attr("y", 390)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("opacity", 0);

		var issues = IBT0253D53684g.append("text")
				.text("Issues:")
				.attr("class", "deviceInfo")
				.attr("id", "deviceIssuesText")
				.attr("pointer-events", "none")
				.attr("x", 422.03802)
				.attr("y", 462.13852)
				.attr("font-family", "sans-serif")
				.attr("font-size", "40px")
				.attr("font-weight", "bold")
				.attr("font-style", "italic")
				.attr("opacity", 0);