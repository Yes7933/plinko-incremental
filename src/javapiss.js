var ballamount,
	xposdespawn,
	despawn,
	mutesfx,
	sscreen,
	specialpegchance,
	specialpegtouch,
	specialpegunlocked,
	balldropunlocked,
	balldropcooldown,
	disableautodrop,
	load,
	cooldown;
//todo: asset time, testing
//taskspeed is found by searching for "tasktime.forEach("
//good luck to anyone modding this o7
//test savefile:
document.addEventListener("DOMContentLoaded", function () {
	"use strict";
	var savefile,
		fps,
		fps1,
		fps2,
		pupgradeprice,
		mutemusic,
		pupgrade,
		boxvalues,
		str,
		xp,
		autosavetimer,
		level,
		xpgain,
		pupgradelist,
		pcaplist,
		musictrack,
		levelreq,
		boxifyresets,
		boxpoints,
		timelaston,
		bupgrade,
		spupgrade,
		qolupgrade,
		boxpointgain,
		specialpegs,
		specialpeggain,
		rollpointreq,
		m,
		ballpointgain,
		ballpoints,
		bupgradelist,
		bcaplist,
		bupgradeprice,
		spupgradelist,
		spcaplist,
		spupgradeprice,
		qolupgradelist,
		qolupgradeprice,
		qolcaplist,
		rollpoints,
		rotations,
		rollresets,
		rupgrade,
		rotationgain,
		rupgradelist,
		rupgradeprice,
		rcaplist,
		revolutions,
		revstreak,
		revgain,
		revupgradelist,
		revupgradeprice,
		revcaplist,
		revupgrade,
		gearangle,
		gearangletotal,
		disableautoplinko,
		disableautoboxify,
		revimgrotation,
		revrotationallow,
		revstreakeffect,
		cap,
		version,
		revselectlist,
		maxrevselect,
		ballcap,
		ballcomp,
		totaljumps,
		z,
		ballpointgaindisplay,
		xpgaindisplay,
		popup,
		popupid,
		bounceresets,
		bounceresettime,
		jumps,
		jumpgain,
		boupgradelist,
		boupgradeprice,
		bocaplist,
		templist,
		irev,
		respec,
		energy,
		energygain,
		tasks,
		taskprice,
		tasktime,
		taskprogress,
		bobuttons,
		bobutton,
		bodescriptionlist,
		botitlelist,
		irevreq,
		tasktime2,
		challengelist,
		electricity,
		batteries,
		chargeamount,
		electricitygain,
		transferresets,
		challengecap,
		challengetitles,
		challengedesc,
		challengegoal,
		activechallenge,
		bgmusic,
		burnoutfunctionality,
		price,
		dropdowntoggle,
		strikeresets,
		hits,
		hitreq,
		annihilationresets,
		annihilationreq,
		particles,
		condenseresets,
		ultrapegs,
		ultrapegsgain,
		packageresets,
		packagepoints,
		particleupgradelist,
		particlecaplist,
		particledescriptionlist,
		particletitlelist,
		particlepricelist,
		ballamount2,
		disablerollauto,
		particleid,
		upupgrade,
		upupgradelist,
		upcaplist,
		upupgradeprice,
		upswitch,
		ppswitch,
		batterygain,
		ppupgrade,
		packagepointsgain,
		ppupgradelist,
		ppcaplist,
		ppupgradeprice,
		screenname,
		precision,
		notation,
		notationlist,
		carti,
		textrunning,
		timelastondisplay;
	//other variable setups
	sscreen = -1;
	load = 0;
	despawn = 0;
	autosavetimer = 0;
	xposdespawn = 0;
	pupgrade = 1;
	bupgrade = 1;
	specialpegtouch = 0;
	spupgrade = 1;
	qolupgrade = 1;
	rupgrade = 1;
	revupgrade = 1;
	specialpegunlocked = 0;
	balldropunlocked = 0;
	balldropcooldown = new Decimal("0");
	gearangletotal = 0;
	gearangle = 0;
	version = "1.5";
	revimgrotation = 0;
	revrotationallow = 1;
	revstreak = 0;
	revstreakeffect = 1;
	revselectlist = [];
	ballcap = 10;
	ballcomp = 1;
	popupid = 0;
	respec = 1;
	upupgrade = 1;
	ppupgrade = 1;
	upswitch = false;
	ppswitch = false;
	tasktime2 = [new Decimal("0"), new Decimal("0"), new Decimal("0")];
	precision = 3;
	notation = 0;
	carti = 0;
	textrunning = false;
	//when comparing temp notation do NOT use === fuck js
	function decimalToString(num) {
		str = "";
		let tempnotation = notation;
		if (tempnotation == 9) {
			tempnotation = Math.floor(Math.random() * 10);
			if (tempnotation === 10) {
				tempnotation = 9;
			}
		}
		if (tempnotation <= 1) {
			if (Math.abs(num.exponent) >= 6) {
				let tempstr = num.mantissa;
				if (num.exponent % 3 !== 0 && tempnotation == 1) {
					tempstr = tempstr * Math.pow(10, num.exponent % 3);
				}
				str = tempstr.toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
				if (num.exponent % 3 !== 0 && tempnotation == 1) {
					str = str + "e" + (num.exponent - (num.exponent % 3)).toString();
				} else {
					str = str + "e" + num.exponent.toString();
				}
			} else {
				str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
			}
		} else if (tempnotation == 2) {
			if (Math.abs(num.exponent) >= 6) {
				str = num.mantissa.toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
				let letters = [
					"a",
					"b",
					"c",
					"d",
					"e",
					"f",
					"g",
					"h",
					"i",
					"j",
					"k",
					"l",
					"m",
					"n",
					"o",
					"p",
					"q",
					"r",
					"s",
					"t",
					"u",
					"v",
					"w",
					"x",
					"y",
					"z",
				];
				let tracker = num.exponent;
				for (let i = Math.floor(Math.log(num.exponent) / Math.log(26)); i >= 0; i--) {
					str = str + letters[Math.floor(tracker / Math.pow(26, i))];
					tracker = tracker - Math.floor(tracker / Math.pow(26, i)) * Math.pow(26, i);
				}
			} else {
				str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
			}
		} else if (tempnotation <= 4) {
			if (Math.abs(num.exponent) >= 6) {
				str = (num.mantissa * Math.pow(10, num.exponent % 3)).toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
				let letters1 = [
					"B",
					"T",
					"Qa",
					"Qt",
					"Sx",
					"Sp",
					"Oc",
					"No",
					"Dc",
					"UDc",
					"DDc",
					"TDc",
					"QaDc",
					"QtDc",
					"SxDc",
					"SpDc",
					"ODc",
					"NDc",
					"Vg",
					"UVg",
					"DVg",
					"TVg",
					"QaVg",
					"QtVg",
					"SxVg",
					"SpVg",
					"OVg",
					"NVg",
					"Tg",
					"UTg",
					"DTg",
					"TTg",
					"QaTg",
					"QtTg",
					"SxTg",
					"SpTg",
					"OTg",
					"NTg",
					"Qd",
					"UQd",
					"DQd",
					"TQd",
					"QaQd",
					"QtQd",
					"SxQd",
					"SpQd",
					"OQd",
					"NQd",
					"Qi",
					"UQi",
					"DQi",
					"TQi",
					"QaQi",
					"QtQi",
					"SxQi",
					"SpQi",
					"OQi",
					"NQi",
					"Se",
					"USe",
					"DSe",
					"TSe",
					"QaSe",
					"QtSe",
					"SxSe",
					"SpSe",
					"OSe",
					"NSe",
					"St",
					"USt",
					"DSt",
					"TSt",
					"QaSt",
					"QtSt",
					"SxSt",
					"SpSt",
					"OSt",
					"NSt",
					"Og",
					"UOg",
					"DOg",
					"TOg",
					"QaOg",
					"QtOg",
					"SxOg",
					"SpOg",
					"OOg",
					"NOg",
					"Nn",
					"UNn",
					"DNn",
					"TNn",
					"QaNn",
					"QtNn",
					"SxNn",
					"SpNn",
					"ONn",
					"NNn",
					"Ce",
				];
				let lettersa = ["", "U", "D", "T", "Qa", "Qt", "Sx", "Sp", "O", "N"];
				let lettersb = ["", "Dc", "Vg", "Tg", "Qd", "Qi", "Se", "St", "Og", "Nn"];
				let lettersc = ["", "Ce", "Dn", "Tc", "Qe", "Qu", "Sc", "Si", "Oe", "Ne"];
				let lettersd = ["", "MI-", "MC-", "NA-", "PC-", "FM-"];
				let tracker = Math.floor((num.exponent - 6) / 3) + 1;
				if (tempnotation == 4) {
					if (tracker % 2 === 0) {
						str += "K";
					}
					tracker = Math.floor((num.exponent - 6) / 6) + 2;
				}
				if (tracker > 999) {
					let tracker2 = Math.floor(tracker / Math.pow(1000, Math.floor(Math.floor(Math.log10(tracker)) / 3)));
					str += lettersa[Math.floor(tracker2 / 100)];
					str += lettersb[Math.floor(tracker2 / 10) - Math.floor(tracker2 / 100) * 10];
					str += lettersc[tracker2 - Math.floor(tracker2 / 10) * 10];
					str += lettersd[Math.floor(Math.floor(Math.log10(tracker)) / 3)];
				}
				if (tracker > 100) {
					let tracker2 = tracker / 1000 - Math.floor(tracker / 1000);
					tracker2 = Math.floor(tracker2 * 1000);
					str += lettersa[Math.floor(tracker2 / 100)];
					str += lettersb[Math.floor(tracker2 / 10) - Math.floor(tracker2 / 100) * 10];
					str += lettersc[tracker2 - Math.floor(tracker2 / 10) * 10];
				} else if (tracker >= 2) {
					str += letters1[Math.floor(tracker - 2)];
				}
			} else {
				str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
			}
		} else if (tempnotation == 5) {
			if (Math.abs(num.exponent) >= 6) {
				str = "e" + num.log10().toFixed(precision);
				if (Math.floor(Math.log10(num.log10())) >= 6) {
					str = "ee" + Math.log10(num.log10()).toFixed(precision);
				}
			} else {
				str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
			}
		} else if (tempnotation == 6) {
			if (Math.abs(num.exponent) >= 6) {
				str = "10 ↑ " + num.log10().toFixed(precision);
				if (Math.floor(Math.log10(num.log10())) >= 6) {
					str = "10 ↑ (10 ↑ " + Math.log10(num.log10()).toFixed(precision) + ")";
				}
			} else {
				str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
			}
		} else if (tempnotation == 7) {
			if (Math.abs(num.exponent) >= 6) {
				str = "E" + num.log10().toFixed(precision);
				if (Math.floor(Math.log10(num.log10())) >= 6) {
					str = "E" + Math.log10(num.log10()).toFixed(precision) + "#2";
				}
			} else {
				str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(precision).toString();
				for (z = 1; z <= precision + 1; z = z + 1) {
					if (str.slice(-1) === "0" || str.slice(-1) === ".") {
						str = str.slice(0, -1);
					}
					if (str.slice(-1) === ".") {
						str = str.slice(0, -1);
						break;
					}
				}
			}
		}
		return str;
	}
	function decimalToString2(num) {
		str = "";
		if (Math.abs(num.exponent) >= 6) {
			str = num.mantissa.toFixed(3).toString();
			for (z = 1; z <= 4; z = z + 1) {
				if (str.slice(-1) === "0" || str.slice(-1) === ".") {
					str = str.slice(0, -1);
				}
			}
			str = str + "e" + num.exponent.toString();
		} else {
			str = (num.mantissa * Math.pow(10, num.exponent)).toFixed(3).toString();
			for (z = 1; z <= 4; z = z + 1) {
				if (str.slice(-1) === "0" || str.slice(-1) === ".") {
					str = str.slice(0, -1);
				}
			}
		}
		return str;
	}
	function compare2(a, b) {
		return a.compare(b) == -1 ? 0 : a.compare(b);
	}
	function sumlist(list) {
		let sum = new Decimal(0);
		for (let i = 0; i <= list.length; i += 1) {
			sum = sum.add(list[i]);
		}
		return sum;
	}
	function opacity(element, start, end, time) {
		let interval = (end - start) / time;
		start = start + interval;
		element.style.opacity = start.toString();
		if (start !== end) {
			setTimeout(opacity, 1, element, start, end, time - 1);
		}
	}
	function move(element, start, end, time) {
		let interval = (end - start) / time;
		start = start + interval;
		element.style.top = start.toString() + "%";
		if (start !== end) {
			setTimeout(move, 1, element, start, end, time - 1);
		}
	}
	function extend(element, start, end, time, easing) {
		function easingfunc(x) {
			return ((start - end) / 2) * Math.cos(((Math.PI * 2) / (2 * time)) * x) + (start + end) / 2;
		}
		element.style.left = easingfunc(easing).toString() + "%";
		if (easingfunc(easing) !== end) {
			setTimeout(extend, 1, element, start, end, time, easing + 1);
		}
	}
	function newentry(text) {
		if (!textrunning && sscreen === 1) {
			textrunning = true;
			let consoletext = document.getElementById("consoletext");
			consoletext.innerHTML += "<br> > ";
			let i = 0;
			for (let i = 0; i <= text.length; i++) {
				setTimeout(function redo() {
					if (sscreen === 1) {
						consoletext.innerHTML += text.substring(i - 1, i);
						if (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
							while (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
								consoletext.innerHTML = consoletext.innerHTML.substring(consoletext.innerHTML.indexOf("<br>") + 4);
							}
						}
					}
				}, 30 * i);
			}
			setTimeout(() => {
				textrunning = false;
			}, 30 * (text.length + 2));
		} else if (!textrunning && sscreen !== 1) {
			let consoletext = document.getElementById("consoletext");
			consoletext.innerHTML += "<br> > " + text;
		} else if (textrunning) {
			setTimeout(newentry, 1, text);
		}
	}
	function missingvar() {
		if (savefile.version == undefined) {
			savefile.bupgrade9 = "0";
			savefile.bupgrade10 = "0";
			savefile.qolupgrade3 = "0";
			savefile.qolupgrade4 = "0";
			savefile.rollpoints = "0";
			savefile.rotations = "0";
			savefile.rollresets = "0";
			savefile.rupgrade1 = "0";
			savefile.rupgrade2 = "0";
			savefile.rupgrade3 = "0";
			savefile.rupgrade4 = "0";
			savefile.rupgrade5 = "0";
			savefile.rupgrade6 = "0";
			savefile.rupgrade7 = "0";
			savefile.rupgrade8 = "0";
			savefile.rupgrade9 = "0";
			savefile.revolutions = "0";
			savefile.revupgrade1 = "0";
			savefile.spupgrade8 = "0";
			savefile.spupgrade9 = "0";
			savefile.spupgrade10 = "0";
			savefile.disableautodrop = "0";
			savefile.disableautoplinko = "0";
			savefile.ballcap = "10";
			bupgradelist[8] = new Decimal("0");
			rollpoints = new Decimal("0");
			rotations = new Decimal("0");
			rollresets = new Decimal("0");
			rupgradelist[0] = new Decimal("0");
			rupgradelist[1] = new Decimal("0");
			rupgradelist[2] = new Decimal("0");
			rupgradelist[3] = new Decimal("0");
			rupgradelist[4] = new Decimal("0");
			rupgradelist[5] = new Decimal("0");
			rupgradelist[6] = new Decimal("0");
			rupgradelist[7] = new Decimal("0");
			rupgradelist[8] = new Decimal("0");
			bupgradelist[9] = new Decimal("0");
			qolupgradelist[2] = new Decimal("0");
			qolupgradelist[3] = new Decimal("0");
			spupgradelist[7] = new Decimal("0");
			spupgradelist[8] = new Decimal("0");
			spupgradelist[9] = new Decimal("0");
			revupgradelist[0] = new Decimal("0");
			disableautodrop = new Decimal("0");
			disableautoplinko = new Decimal("0");
			ballcap = 10;
			savefile.version = "1.2";
		}
		if (savefile.version === "1.2") {
			savefile.bounceresets = "0";
			savefile.bounceresettime = "0";
			savefile.jumps = "0";
			savefile.boupgradelist = "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]";
			savefile.energy = "0";
			savefile.task1 = "0";
			savefile.task2 = "0";
			savefile.task3 = "0";
			savefile.taskprogress1 = "0";
			savefile.taskprogress2 = "0";
			savefile.taskprogress3 = "0";
			savefile.revupgrade2 = "0";
			savefile.revupgrade3 = "0";
			savefile.revupgrade4 = "0";
			savefile.revupgrade5 = "0";
			savefile.disableautoboxify = "0";
			bounceresets = new Decimal("0");
			bounceresettime = new Decimal("0");
			jumps = new Decimal("0");
			boupgradelist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			energy = new Decimal("0");
			tasks = [new Decimal("0"), new Decimal("0"), new Decimal("0")];
			taskprogress = [new Decimal("0"), new Decimal("0"), new Decimal("0")];
			revupgradelist[1] = new Decimal("0");
			revupgradelist[2] = new Decimal("0");
			revupgradelist[3] = new Decimal("0");
			revupgradelist[4] = new Decimal("0");
			irev = new Decimal("0");
			totaljumps = new Decimal("0");
			disableautoboxify = new Decimal("0");
			savefile.version = "1.3";
		}
		if (savefile.version === "1.3") {
			savefile.challengelist = "[0,0,0,0,0,0,0,0]";
			savefile.activechallenge = "0";
			savefile.electricity = "0";
			savefile.batteries = "0";
			savefile.chargeamount = "0";
			savefile.transferresets = "0";
			challengelist = [0, 0, 0, 0, 0, 0, 0, 0];
			activechallenge = 0;
			electricity = new Decimal("0");
			batteries = new Decimal("0");
			chargeamount = 0;
			transferresets = new Decimal("0");
			savefile.version = "1.4";
		}
		if (savefile.version === "1.4") {
			savefile.strikeresets = "0";
			savefile.hits = "0";
			savefile.annihilationresets = "0";
			savefile.particles = "0";
			savefile.condenseresets = "0";
			savefile.ultrapegs = "0";
			savefile.packageresets = "0";
			savefile.packagepoints = "0";
			savefile.disablerollauto = "0";
			savefile.particleupgradelist = "[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]";
			savefile.upupgrade1 = "0";
			savefile.upupgrade2 = "0";
			savefile.upupgrade3 = "0";
			savefile.upupgrade4 = "0";
			savefile.upupgrade5 = "0";
			savefile.upupgrade6 = "0";
			savefile.bupgrade11 = "0";
			savefile.bupgrade12 = "0";
			savefile.ppupgrade1 = "0";
			savefile.ppupgrade2 = "0";
			savefile.ppupgrade3 = "0";
			savefile.ppupgrade4 = "0";
			savefile.ppupgrade5 = "0";
			savefile.ppupgrade6 = "0";
			savefile.ppupgrade7 = "0";
			savefile.ppupgrade8 = "0";
			savefile.ppupgrade9 = "0";
			savefile.rupgrade10 = "0";
			savefile.rupgrade11 = "0";
			savefile.rupgrade12 = "0";
			savefile.precision = "3";
			savefile.notation = "0";
			savefile.boupgradelist = savefile.boupgradelist.slice(0, -1) + ",0,0,0,0,0]";
			savefile.version = version;
			strikeresets = 0;
			hits = new Decimal("0");
			annihilationresets = 0;
			particles = new Decimal("0");
			condenseresets = 0;
			ultrapegs = new Decimal("0");
			packageresets = 0;
			packagepoints = new Decimal("0");
			disablerollauto = 0;
			particleupgradelist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			upupgradelist = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)];
			ppupgradelist = [
				new Decimal(0),
				new Decimal(0),
				new Decimal(0),
				new Decimal(0),
				new Decimal(0),
				new Decimal(0),
				new Decimal(0),
				new Decimal(0),
				new Decimal(0),
			];
			bupgradelist[10] = new Decimal("0");
			bupgradelist[11] = new Decimal("0");
			rupgradelist[9] = new Decimal("0");
			rupgradelist[10] = new Decimal("0");
			rupgradelist[11] = new Decimal("0");
			boupgradelist[25] = 0;
			boupgradelist[26] = 0;
			boupgradelist[27] = 0;
			boupgradelist[28] = 0;
			boupgradelist[29] = 0;
			precision = 3;
			notation = 0;
		}
	}

	function save() {
		timelaston = new Date().getTime();
		timelaston = Math.floor(timelaston / 1000);
		savefile = {
			timelaston: timelaston.toString(),
			version: version,
			ballpoints: decimalToString2(ballpoints),
			xp: decimalToString2(xp),
			level: decimalToString2(level),
			pupgrade1: decimalToString2(pupgradelist[0]),
			pupgrade2: decimalToString2(pupgradelist[1]),
			pupgrade3: decimalToString2(pupgradelist[2]),
			pupgrade4: decimalToString2(pupgradelist[3]),
			pupgrade5: decimalToString2(pupgradelist[4]),
			mutemusic: decimalToString2(mutemusic),
			mutesfx: decimalToString2(mutesfx),
			boxifyresets: boxifyresets,
			boxpoints: boxpoints,
			specialpegs: specialpegs,
			bupgrade1: decimalToString2(bupgradelist[0]),
			bupgrade2: decimalToString2(bupgradelist[1]),
			bupgrade3: decimalToString2(bupgradelist[2]),
			bupgrade4: decimalToString2(bupgradelist[3]),
			bupgrade5: decimalToString2(bupgradelist[4]),
			bupgrade6: decimalToString2(bupgradelist[5]),
			bupgrade7: decimalToString2(bupgradelist[6]),
			bupgrade8: decimalToString2(bupgradelist[7]),
			bupgrade9: decimalToString2(bupgradelist[8]),
			bupgrade10: decimalToString2(bupgradelist[9]),
			bupgrade11: decimalToString2(bupgradelist[10]),
			bupgrade12: decimalToString2(bupgradelist[11]),
			spupgrade1: decimalToString2(spupgradelist[0]),
			spupgrade2: decimalToString2(spupgradelist[1]),
			spupgrade3: decimalToString2(spupgradelist[2]),
			spupgrade4: decimalToString2(spupgradelist[3]),
			spupgrade5: decimalToString2(spupgradelist[4]),
			spupgrade6: decimalToString2(spupgradelist[5]),
			spupgrade7: decimalToString2(spupgradelist[6]),
			spupgrade8: decimalToString2(spupgradelist[7]),
			spupgrade9: decimalToString2(spupgradelist[8]),
			spupgrade10: decimalToString2(spupgradelist[9]),
			qolupgrade1: decimalToString2(qolupgradelist[0]),
			qolupgrade2: decimalToString2(qolupgradelist[1]),
			qolupgrade3: decimalToString2(qolupgradelist[2]),
			qolupgrade4: decimalToString2(qolupgradelist[3]),
			rotations: decimalToString2(rotations),
			rollpoints: decimalToString2(rollpoints),
			rollresets: decimalToString2(rollresets),
			rupgrade1: decimalToString2(rupgradelist[0]),
			rupgrade2: decimalToString2(rupgradelist[1]),
			rupgrade3: decimalToString2(rupgradelist[2]),
			rupgrade4: decimalToString2(rupgradelist[3]),
			rupgrade5: decimalToString2(rupgradelist[4]),
			rupgrade6: decimalToString2(rupgradelist[5]),
			rupgrade7: decimalToString2(rupgradelist[6]),
			rupgrade8: decimalToString2(rupgradelist[7]),
			rupgrade9: decimalToString2(rupgradelist[8]),
			rupgrade10: decimalToString2(rupgradelist[9]),
			rupgrade11: decimalToString2(rupgradelist[10]),
			rupgrade12: decimalToString2(rupgradelist[11]),
			revolutions: decimalToString2(revolutions),
			revupgrade1: decimalToString2(revupgradelist[0]),
			disableautodrop: decimalToString2(disableautodrop),
			disableautoplinko: decimalToString2(disableautoplinko),
			ballcap: ballcap.toString(),
			bounceresets: decimalToString2(bounceresets),
			bounceresettime: decimalToString2(bounceresettime),
			jumps: decimalToString2(jumps),
			boupgradelist: JSON.stringify(boupgradelist),
			energy: decimalToString2(energy),
			task1: decimalToString2(tasks[0]),
			task2: decimalToString2(tasks[1]),
			task3: decimalToString2(tasks[2]),
			taskprogress1: decimalToString2(taskprogress[0]),
			taskprogress2: decimalToString2(taskprogress[1]),
			taskprogress3: decimalToString2(taskprogress[2]),
			revupgrade2: decimalToString2(revupgradelist[1]),
			revupgrade3: decimalToString2(revupgradelist[2]),
			revupgrade4: decimalToString2(revupgradelist[3]),
			revupgrade5: decimalToString2(revupgradelist[4]),
			irev: decimalToString2(irev),
			totaljumps: decimalToString2(totaljumps),
			disableautoboxify: decimalToString2(disableautoboxify),
			challengelist: JSON.stringify(challengelist),
			activechallenge: activechallenge.toString(),
			electricity: decimalToString2(electricity),
			batteries: decimalToString2(batteries),
			chargeamount: chargeamount.toString(),
			transferresets: decimalToString2(transferresets),
			strikeresets: strikeresets.toString(),
			hits: decimalToString2(hits),
			annihilationresets: annihilationresets.toString(),
			particles: decimalToString2(particles),
			condenseresets: condenseresets.toString(),
			ultrapegs: decimalToString2(ultrapegs),
			packageresets: packageresets.toString(),
			packagepoints: decimalToString2(packagepoints),
			disablerollauto: disablerollauto.toString(),
			particleupgradelist: JSON.stringify(particleupgradelist),
			upupgrade1: decimalToString2(upupgradelist[0]),
			upupgrade2: decimalToString2(upupgradelist[1]),
			upupgrade3: decimalToString2(upupgradelist[2]),
			upupgrade4: decimalToString2(upupgradelist[3]),
			upupgrade5: decimalToString2(upupgradelist[4]),
			upupgrade6: decimalToString2(upupgradelist[5]),
			ppupgrade1: decimalToString2(upupgradelist[0]),
			ppupgrade2: decimalToString2(upupgradelist[1]),
			ppupgrade3: decimalToString2(upupgradelist[2]),
			ppupgrade4: decimalToString2(upupgradelist[3]),
			ppupgrade5: decimalToString2(upupgradelist[4]),
			ppupgrade6: decimalToString2(upupgradelist[5]),
			ppupgrade7: decimalToString2(upupgradelist[0]),
			ppupgrade8: decimalToString2(upupgradelist[1]),
			ppupgrade9: decimalToString2(upupgradelist[2]),
			precision: precision.toString(),
			notation: notation.toString(),
		};
	}

	function burnout() {
		if (activechallenge == 4) {
			ballpoints = ballpoints.minus(new Decimal("0.01").times(new Decimal("1").plus(new Decimal(challengelist[3]))).times(ballpoints));
			xp = xp.minus(new Decimal("0.01").times(new Decimal("1").plus(new Decimal(challengelist[3]))).times(xp));
			boxpoints = boxpoints.minus(new Decimal("0.01").times(new Decimal("1").plus(new Decimal(challengelist[3]))).times(boxpoints));
			specialpegs = specialpegs.minus(new Decimal("0.01").times(new Decimal("1").plus(new Decimal(challengelist[3]))).times(specialpegs));
			rotations = rotations.minus(new Decimal("0.01").times(new Decimal("1").plus(new Decimal(challengelist[3]))).times(rotations));
			revolutions = revolutions.minus(new Decimal("0.01").times(new Decimal("1").plus(new Decimal(challengelist[3]))).times(revolutions));
		}
	}
	function persecond() {
		rotations = rotations.plus(rotationgain);
		if (qolupgradelist[3].compare(new Decimal("1")) === 0 && disableautoplinko.compare("1") === 0) {
			for (m = 1; m <= pupgradelist.length; m = m + 1) {
				price = pupgradeprice[m - 1];
				cap = pcaplist[m - 1];
				if (
					ballpoints.compare(price) >= 0 &&
					pupgradelist[m - 1].compare(cap) < 0 &&
					sumlist(pupgradelist)
						.times(new Decimal(parseFloat(new Number(activechallenge === 6))))
						.compare(10) < 0 &&
					activechallenge !== 7
				) {
					pupgradelist[m - 1] = pupgradelist[m - 1].add(new Decimal("1"));
					pupgradeprice = [
						new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
					];
					document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
					document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
						decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
				}
			}
		}
		if (boupgradelist[5] >= 1) {
			boxpoints = boxpoints.add(boxpointgain.times(new Decimal("0.1").plus(new Decimal(0.99).times(comparemath(hits, 5)))));
		}
		if (boupgradelist[8] >= 1 && disableautoboxify.compare("1") === 0) {
			for (m = 1; m <= bupgradelist.length; m = m + 1) {
				price = bupgradeprice[m - 1];
				cap = bcaplist[m - 1];

				if (
					boxpoints.compare(price) >= 0 &&
					bupgradelist[m - 1].compare(cap) < 0 &&
					sumlist(bupgradelist)
						.times(new Decimal(parseFloat(new Number(activechallenge === 6))))
						.compare(10) < 0 &&
					activechallenge !== 7
				) {
					if (boupgradelist[6] < 1) {
						boxpoints = boxpoints.minus(price);
					}
					bupgradelist[m - 1] = bupgradelist[m - 1].add(new Decimal("1"));
					bupgradeprice = [
						new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
						new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
						new Decimal("2.5e75"),
					];
					document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
					document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
						decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
				}
			}
			bounceresettime = bounceresettime.add(1);
		}
		if (revrotationallow < 0) {
			revrotationallow = revrotationallow + 1;
		} else if (revrotationallow === 0) {
			revrotationallow = 1;
			document.getElementById("revolutionline").style.backgroundColor = "skyblue";
			document.getElementById("revbutton").innerHTML = "Stop!";
			revimgrotation = Math.floor(Math.random() * 360);
			document.getElementById("revolutioncircle").style.transform = "rotate(" + revimgrotation.toString() + "deg)";
		}
		for (m = 0; m < tasks.length; m = m + 1) {
			if (taskprogress[m].compare(0) > 0) {
				taskprogress[m] = taskprogress[m].minus(1);
				if (taskprogress[m].compare(0) <= 0) {
					tasks[m] = tasks[m].add(1);
				}
			}
		}
		if (level.compare(rollpointreq) >= 0 && hits.compare(1) >= 0) {
			rollpoints = rollpoints.plus(1);
			rollresets = rollresets.plus(1);
		}
		if (hits.compare(18) >= 0) {
			energy = energy.plus(energygain.times(new Decimal(0.01).plus(new Decimal(0.99).times(comparemath(hits, 22)))));
		}
		if (hits.compare(27) >= 0) {
			electricity = electricity.plus(electricitygain.times(0.01));
		}
	}
	function persecond2() {
		if (autosavetimer >= 60) {
			newentry("Autosave activated.");
			save();
			if (JSON.stringify(savefile) !== "[object Object]") {
				localStorage.setItem("save", JSON.stringify(savefile));
				autosavetimer = 0;
			} else {
				alert("save failed!");
			}
		} else {
			autosavetimer = autosavetimer + 1;
		}
		//great wall of stats
		let effectlist = [
			new Decimal(ballcomp).divideBy(new Decimal(ballamount)),
			new Decimal(level.plus(new Decimal(3)).divideBy(new Decimal("3"))),
			new Decimal("1").plus(new Decimal("1.25").times(pupgradelist[0])),
			new Decimal("2").pow(pupgradelist[0].divideBy(20).floor()),
			new Decimal("1").plus(
				new Decimal("1.15")
					.times(pupgradelist[2])
					.times(
						new Decimal(
							new Decimal("1")
								.add(ballpointgain)
								.plus(1)
								.log(new Decimal(10).minus(boupgradelist[1]).minus(2 * boupgradelist[25]))
						)
							.times(new Decimal("1").plus(boupgradelist[1] * 0.75).plus(boupgradelist[25] * 0.75))
							.divideBy(new Decimal("2").minus(0.25 * boupgradelist[1]).minus(0.25 * boupgradelist[25]))
							.plus(new Decimal("1"))
					)
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			),
			new Decimal("1").plus(new Decimal("1.5").times(bupgradelist[4])),
			new Decimal("1").plus(new Decimal("1").times(spupgradelist[2])),
			new Decimal("1").plus(new Decimal("1").times(rupgradelist[0]).times(rotations.pow(new Decimal(0.15)))),
			new Decimal("1").plus(
				new Decimal("1.38")
					.times(revolutions.pow(new Decimal("0.58")))
					.times(Number(revselectlist.includes(1)))
					.times(irev.pow(new Decimal("1.25")).plus(1))
			),
			new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))),
			new Decimal("1").add(new Decimal("0.1").times(challengelist[3])),
			new Decimal("1")
				.add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							.plus(1)
					)
				),
			new Decimal("1.15").pow(ppupgradelist[4]),
			new Decimal(0.05).times(new Number(activechallenge === 5 || activechallenge === 8)),
		];
		let titlelist = [
			"<br>Ball Compaction: x",
			"<br>Level Bonus: x",
			"<br>Ball Value: x",
			"<br>Ball Value [Effect 2]: x",
			"<br>Point Synergy: x",
			"<br>Ball Value II: x",
			"<br>Ball Value III: x",
			"<br>Rotated BallPoints: x",
			"<br>Revolutions Effect 1: x",
			"<br>Progression V: x",
			"<br>Burnout Reward: x",
			"<br>Terminal Boost: x",
			"<br>Ball Value IV: x",
			"Final I/II Nerf: ^",
		];
		let tempstring = "BallPoints <br><br> Base Gain: +1";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		document.getElementById("ballpointstats").innerHTML = tempstring + "<br><br> Gain: " + decimalToString(ballpointgain);
		effectlist = [
			new Decimal(ballcomp).divideBy(new Decimal(ballamount)),
			new Decimal("1").plus(new Decimal("1.25").times(pupgradelist[0])),
			new Decimal("2").pow(pupgradelist[1].divideBy(25).floor()),
			new Decimal("1")
				.plus(new Decimal("1.15").times(pupgradelist[4]).times(new Decimal(level.log(new Decimal("6"))).plus(new Decimal("1"))))
				.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28]))),
			new Decimal("1").plus(new Decimal("1.5").times(bupgradelist[5])),
			new Decimal("1").plus(new Decimal("1").times(spupgradelist[1])),
			new Decimal("1").plus(
				new Decimal("1")
					.times(rupgradelist[1])
					.times(rotations.pow(new Decimal(0.15)))
					.times(new Decimal("0.6666666"))
			),
			new Decimal("1").plus(
				new Decimal("1.25")
					.times(revolutions.pow(new Decimal("0.64")))
					.times(Number(revselectlist.includes(2)))
					.times(irev.pow(new Decimal("1.25")).plus(1))
			),
			new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))),
			new Decimal("1").add(
				new Decimal("3")
					.times(jumps.plus(new Decimal("1").plus(1).log10()))
					.times(boupgradelist[18])
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			),
			new Decimal("1").add(new Decimal("0.1").times(challengelist[3])),
			new Decimal("1")
				.add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
							.plus(1)
					)
				),
			new Decimal("1").plus(
				level
					.minus(150)
					.pow(1.2)
					.times(comparemath(level, 150).times(comparemath(hits, 8)))
			),
			new Decimal("1.2").pow(ppupgradelist[5]),
			new Decimal(0.05).times(new Number(activechallenge === 5 || activechallenge === 8)),
		];
		titlelist = [
			"<br>Ball Compaction: x",
			"<br>XP Value: x",
			"<br>XP Value [Effect 2]: x",
			"<br>Level-XP Synergy: x",
			"<br>XP Value II: x",
			"<br>XP Value III: x",
			"<br>Rotated XP: x",
			"<br>Revolutions Effect 2: x",
			"<br>Progression III: x",
			"<br>Synergy IV: x",
			"<br>Burnout Reward: x",
			"<br>Terminal Boost: x",
			"<br>Milestone 8: x",
			"<br>XP Value IV: x",
			"<br>Final I/II Nerf: ^",
		];
		tempstring = "XP <br><br> Base Gain: +1";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		document.getElementById("xpstats").innerHTML = tempstring + "<br><br> Gain: " + decimalToString(xpgain);
		document.getElementById("levelreqstats").innerHTML =
			"Level Requirement <br><br> Current: " + decimalToString(levelreq) + "<br> Scaling at level 80/200.";
		effectlist = [
			spupgradelist[9].times(new Decimal("1").plus(new Decimal("1").plus(new Decimal("2").times(boupgradelist[25])).times(boupgradelist[2]))),
			revupgradelist[4],
			upupgradelist[4],
		];
		titlelist = ["<br>More Balls I: +", "<br>More Balls II: +", "<br>More Balls III: +"];
		tempstring = "Ball Amount <br><br> Base: 1";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		document.getElementById("ballamountstats").innerHTML = tempstring + "<br><br> Total Balls: " + ballamount2;
		effectlist = [
			new Decimal("1").plus(new Decimal("1").times(spupgradelist[0])),
			new Decimal("1").plus(
				new Decimal("1")
					.times(rupgradelist[2])
					.times(rotations.pow(new Decimal(0.15)))
					.times(new Decimal("0.8"))
			),
			new Decimal("1").plus(
				new Decimal("1.13")
					.times(revolutions.pow(new Decimal("0.59")))
					.times(Number(revselectlist.includes(3)))
					.times(irev.pow(new Decimal("1.25")).plus(1))
			),
			new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))),
			new Decimal("1").add(
				new Decimal("2")
					.times(new Decimal(specialpegs.add(1).plus(1).log10()))
					.times(new Decimal(boupgradelist[19]))
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			),
			new Decimal("1").add(new Decimal("1.5").times(new Decimal(bounceresettime.add(1).plus(1).log10())).times(new Decimal(boupgradelist[20]))),
			new Decimal("1").plus(new Decimal("1.5").times(revupgradelist[2])),
			new Decimal("2").pow(revupgradelist[2].divideBy(5).floor()),
			new Decimal("1").plus(new Decimal("0.0005").times(challengelist[2])),
			new Decimal("1").add(new Decimal("0.1").times(challengelist[3])),
			new Decimal("1")
				.add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							.plus(1)
					)
				),
			new Decimal(1.25).pow(new Decimal(electricity.plus(1).log10()).times(particleupgradelist[10])),
			new Decimal("1").minus(0.999999999 * new Number(activechallenge === 3)),
			new Decimal(0.05).times(new Number(activechallenge === 5 || activechallenge === 8)),
		];
		titlelist = [
			"<br>BP Gain: x",
			"<br>Rotated BP: x",
			"<br>Revolution Effect 3: x",
			"<br>Progression V: x",
			"<br>Synergy V: x",
			"<br>Other I: x",
			"<br>BP II: x",
			"<br>BP II [Effect 2]: x",
			"<br>No Boxes Reward: ^",
			"<br>Burnout Reward: x",
			"<br>Terminal Boost: x",
			"<br>BP-Electricity Synergy: x",
			"<br>No Boxes Nerf: x",
			"<br>Final I/II Nerf: ^",
		];
		tempstring =
			"BoxPoints <br><br> Base: +" +
			decimalToString(
				new Decimal(2.5)
					.times(new Decimal("1.275").pow(level.minus(new Decimal("10"))))
					.times(new Decimal("3").pow(level.minus("16").divideBy(10).floor()))
			);
		if (boupgradelist[0] >= 1 && boupgradelist[25] >= 1) {
			tempstring =
				"BoxPoints <br><br> Base: +" +
				decimalToString(new Decimal("1.45").pow(level.minus(new Decimal("10"))).times(new Decimal("4.25").pow(level.minus("10").divideBy(10).floor())));
		} else if (boupgradelist[0] >= 1) {
			tempstring =
				"BoxPoints <br><br> Base: +" +
				decimalToString(new Decimal("1.325").pow(level.minus(new Decimal("15"))).times(new Decimal("3.5").pow(level.minus("15").divideBy(10).floor())));
		}
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		document.getElementById("boxpointstats").innerHTML = tempstring + "<br><br> Gain: " + decimalToString(boxpointgain);
		effectlist = [
			bupgradelist[6],
			new Decimal("1").plus(
				new Decimal("2")
					.times(revolutions.pow(new Decimal("0.62")))
					.times(Number(revselectlist.includes(4)))
					.times(irev.pow(new Decimal("1.25")).plus(1))
			),
			new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))),
			new Decimal("1").plus(new Decimal("1.25").times(revupgradelist[1])),
			new Decimal("3").pow(revupgradelist[1].divideBy(10).floor()),
			new Decimal("1").add(new Decimal("0.1").times(challengelist[3])),
			new Decimal("1")
				.add(
					new Decimal("1")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("1")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							.plus(1)
					)
				),
			new Decimal("1").plus(new Decimal(revolutions.plus(1).log10()).times(particleupgradelist[2])),
			new Decimal("1").plus(new Decimal(ultrapegs.plus(1).log10()).pow(1.05).times(particleupgradelist[6])),
			new Decimal("1.15").pow(ppupgradelist[6]),
			new Decimal(0.05).times(new Number(activechallenge === 5 || activechallenge === 8)),
		];
		titlelist = [
			"<br>Special Peg I: x",
			"<br>Revolution Effect 4: x",
			"<br>Progression V: x",
			"<br>Special Peg II: x",
			"<br>Special Peg II [Effect 2]: x",
			"<br>Burnout Reward: x",
			"<br>Terminal Boost: x",
			"<br>Revolution-SP Synergy: x",
			"<br>SP-UP Synergy: x",
			"<br>Special Peg III: x",
			"<br>Final I/II Nerf: ^",
		];
		tempstring = "Special Pegs <br><br> Base: +1";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (boxifyresets.compare(1) >= 0) {
			document.getElementById("specialpegstats").innerHTML = tempstring + "<br><br> Gain: " + decimalToString(specialpeggain);
		}
		effectlist = [
			new Decimal("2").pow(bupgradelist[6].divideBy(25).floor()),
			new Decimal("1")
				.plus(
					new Decimal(Math.pow(electricity.times(batteries).plus(1).log(10), 0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.times(comparemath(hits, 13))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal(Math.pow(electricity.times(batteries).plus(1).log(10), 0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							.times(comparemath(hits, 13))
							.plus(1)
					)
				),
			new Decimal("0.02").plus(ppupgradelist[6].divideBy(30).floor()),
		];
		titlelist = ["<br>Special Peg I [Effect 2]: x", "<br>Terminal Boost: x", "<br>Special Peg III [Effect 2]: +"];
		tempstring = "Special Peg Chance <br><br> Base: 0.005 (0.5%)";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (boxifyresets.compare(1) >= 0) {
			document.getElementById("specialpegchancestats").innerHTML =
				tempstring +
				"<br><br> Chance: " +
				decimalToString(specialpegchance) +
				" (" +
				decimalToString(specialpegchance.times(100)) +
				"%)" +
				"<br>Average time between SP spawn: " +
				decimalToString(new Decimal(1).divideBy(specialpegchance)) +
				"s";
		}
		templist = boupgradelist.slice(5, 10);
		templist = templist.filter(function (a) {
			return a != 0;
		});
		effectlist = [
			new Decimal(boxpoints.plus(new Decimal("1")).plus(1).log10())
				.floor()
				.times(bupgradelist[8])
				.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28]))),
			new Decimal(templist.length)
				.times(new Decimal("2"))
				.times(boupgradelist[2] + boupgradelist[25])
				.times(new Decimal("1").plus(new Decimal("0.5").plus(new Decimal("1.5").times(boupgradelist[25])).times(new Decimal(boupgradelist[3]))))
				.times(new Decimal("1").plus(new Decimal("1").plus(new Decimal("1").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
				.floor(),
			new Decimal("0.25")
				.times(new Decimal(ballpoints.plus(new Decimal("1")).plus(1).log10()))
				.times(new Decimal(boupgradelist[17]))
				.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28]))),
			new Decimal(jumps.plus(1).log10()).pow(new Decimal("1.15")).times(particleupgradelist[0]),
			new Decimal(new Decimal("3").times(rollpointreq.plus(1).log10()).times(upupgradelist[0])),
		];
		titlelist = ["<br>BP-RP Synergy: -", "<br>Progression II: -", "<br>Synergy III: -", "<br>Bounce-Roll Synergy: -", "<br>RP Gain: -"];
		tempstring =
			"RollPoint Requirement <br><br> Base: " + decimalToString(new Decimal(new Decimal("30").times(new Decimal("1.1").pow(rollpoints)).floor()));
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (rollpointreq.compare(1) >= 0) {
			document.getElementById("rollreqstats").innerHTML = tempstring + "<br><br>Requirement: " + decimalToString(rollpointreq);
		}
		effectlist = [
			new Decimal("1").plus(new Decimal("1").times(rupgradelist[4])),
			new Decimal("1").plus(rupgradelist[7].times(new Decimal("1.3").pow(rollpoints))),
			new Decimal("1").plus(
				new Decimal("3")
					.times(revolutions.pow(new Decimal("0.61")))
					.times(Number(revselectlist.includes(5)))
					.times(irev.pow(new Decimal("1.25")).plus(1))
			),
			new Decimal("1").plus(new Decimal("2").times(spupgradelist[7])),
			new Decimal("1").plus(new Decimal("1").plus(new Decimal("2").times(boupgradelist[25])).times(boupgradelist[2])),
			new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))),
			new Decimal("1").add(
				new Decimal("1.5")
					.times(revolutions.pow(new Decimal("0.5")))
					.times(new Decimal(boupgradelist[16]))
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			),
			new Decimal("1").add(new Decimal("1.25").times(new Decimal(bounceresettime.add(1).plus(1).log10())).times(new Decimal(boupgradelist[23]))),
			new Decimal("1.5")
				.plus(new Decimal("0.1").times(particleupgradelist[3]))
				.pow(tasks[0])
				.times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7)))),
			new Decimal("1").plus(new Decimal("2.25").times(revupgradelist[3])),
			new Decimal("5").pow(revupgradelist[3].divideBy(5).floor()),
			new Decimal("1.5").pow(challengelist[0]),
			new Decimal("1").add(new Decimal("0.1").times(challengelist[3])),
			new Decimal("1")
				.add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
							.plus(1)
					),
					new Decimal("1.25").pow(new Decimal(energy.plus(1).log10()).times(upupgradelist[2]))
				),
			new Decimal(0.5).times(new Number(activechallenge === 1)),
			new Decimal(0.05).times(new Number(activechallenge === 5 || activechallenge === 8)),
		];
		titlelist = [
			"<br>Rotation Boost: x",
			"<br>Rotated Rotations: x",
			"<br>Revolutions Effect 5: x",
			"<br>Rotations Boost II: x",
			"<br>Progression III: x",
			"<br>Progression V: x",
			"<br>Synergy II: x",
			"<br>Other IV: x",
			"<br>Oiling The Gear: x",
			"<br>Rotations I: x",
			"<br>Rotations I [Effect 2]: x",
			"<br>Broken Gear Reward: x",
			"<br>Burnout Reward: x",
			"<br>Terminal Boost: x",
			"<br>Broken Gear Nerf: ^",
			"<br>Final I/II Nerf: ^",
		];
		tempstring = "Rotations <br><br> Base: +" + decimalToString(rollpoints);
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (rollresets.compare(1) >= 0) {
			document.getElementById("rotationstats").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(rotationgain);
		}
		effectlist = [
			new Decimal("1").plus(new Decimal("1").plus(new Decimal("2").times(boupgradelist[25])).times(boupgradelist[2])),
			new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))),
			new Decimal("1").add(
				new Decimal("0.2")
					.times(level)
					.times(new Decimal(boupgradelist[15]))
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			),
			new Decimal("1.5")
				.plus(new Decimal("0.1").times(particleupgradelist[3]))
				.pow(tasks[2])
				.times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7)))),
			new Decimal("1").plus(new Decimal("2").times(new Decimal("1.2").pow(challengelist[1])).minus(2)),
			new Decimal("1").add(new Decimal("0.1").times(challengelist[3])),
			new Decimal("1")
				.add(
					new Decimal("2")
						.plus(new Decimal("0.5").times(upupgradelist[3]))
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
							.plus(1)
					)
				),
			new Decimal("1").plus(new Decimal("1.5").times(new Decimal(specialpegs.plus(1).log10()).times(particleupgradelist[2]))),
			new Decimal(revstreakeffect),
		];
		titlelist = [
			"<br>Progression III: x",
			"<br>Progression V: x",
			"<br>Synergy V: x",
			"<br>Spin the Circle Faster: x",
			"<br>Revolving Hell Reward: x",
			"<br>Burnout Reward: x",
			"<br>Terminal Boost: x",
			"<br>SP-Rev Synergy: x",
			"<br>Streak Effect: x",
		];
		tempstring = "Revolutions <br><br> Base: +1";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (rupgradelist[8].compare(1) >= 0) {
			document.getElementById("revolutionstats").innerHTML = tempstring + "<br><br>Gain [Disabled on Revolving Hell]: " + decimalToString(revgain);
		}
		templist = boupgradelist;
		templist = templist.filter(function (a) {
			return a != 0;
		});
		effectlist = [
			new Decimal("1").plus(
				new Decimal("1.25")
					.pow(new Decimal(jumps.times(new Decimal("2")).plus(new Decimal("1")).plus(1).log10()))
					.times(boupgradelist[10])
					.times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27])))
			),
			new Decimal("1")
				.plus(new Decimal("1.05").pow(new Decimal(templist.length)).times(boupgradelist[12]))
				.times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27]))),
			new Decimal("1").plus(
				new Decimal("1")
					.times(revolutions.pow(new Decimal("0.5")).divideBy("10"))
					.times(Number(revselectlist.includes(6)))
					.times(irev.pow(new Decimal("1.25")).plus(1))
			),
			new Decimal("1").plus(
				new Decimal("1")
					.times(new Decimal("2"))
					.times(bounceresets.pow(new Decimal("0.5")))
					.times(new Decimal(boupgradelist[14]).times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27]))))
			),
			new Decimal("1")
				.add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
							.plus(1)
					)
				),
			new Decimal("1").plus(new Decimal("1.5").times(hits.pow(0.5)).times(comparemath(hits, 3))),
		];
		titlelist = ["<br>Jump I: x", "<br>Jump III: x", "<br>Revolution Effect 6: x", "<br>Jump V: x", "<br>Terminal Boost: x", "<br>Hit Milestone 3: x"];
		tempstring =
			"Jumps <br><br> Base: +" +
			decimalToString(
				new Decimal("1").times(
					new Decimal("1.25").pow(rollpoints.minus(new Decimal("10"))).times(rollpoints.minus(new Decimal("10")).pow(1.25).times(new Decimal("2")))
				)
			);
		if (boupgradelist[11] >= 1) {
			tempstring =
				"Jumps <br><br> Base: +" +
				decimalToString(
					new Decimal("1").plus(
						new Decimal("1").times(
							new Decimal("1.35")
								.pow(rollpoints.minus(new Decimal("5")))
								.times(rollpoints.minus(new Decimal("10")).pow(1.35).times(new Decimal("2")))
								.times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27])))
						)
					)
				);
		}
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (bounceresets.compare(1) >= 0) {
			document.getElementById("jumpstats").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(jumpgain);
		}
		effectlist = [];
		titlelist = [];
		tempstring =
			"Imaginary Revolutions Requirement <br><br> Base: " +
			decimalToString(new Decimal("2.5").pow(irev).divideBy(new Decimal(1).plus(batteries.pow(0.75).times(rupgradelist[9]))));
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (boupgradelist[21] >= 1) {
			document.getElementById("irevstats").innerHTML = tempstring + "<br><br>Requirement: " + decimalToString(irevreq);
		}
		effectlist = [
			new Decimal("1.1").pow(challengelist[6]),
			new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10()).times(new Number(revselectlist.includes(7)).valueOf())),
			new Decimal("1.05").pow(new Decimal(rotations.plus(1).log10()).times(rupgradelist[10])),
			new Decimal("1.25").pow(new Decimal(1.3).times(electricity.plus(1).log10()).times(particleupgradelist[16])),
			new Decimal("0.05").times(new Number(activechallenge === 8)),
		];
		titlelist = [
			"<br>No Upgrades Reward: x",
			"<br>Revolutions Effect 7: x",
			"<br>Energy I: x",
			"<br>Electricity-Energy Synergy: x",
			"<br>Final II Nerf: ^",
		];
		tempstring =
			"Energy <br><br> Base: " +
			decimalToString(
				new Decimal("2")
					.pow(new Decimal(rotations.plus(new Decimal("1")).plus(1).log10()))
					.times(new Decimal("1.2").times(new Decimal(rotations.plus(new Decimal("1")).plus(1).log10())))
			);
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (boupgradelist[21] >= 1) {
			document.getElementById("energystats").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(energygain);
		}
		effectlist = [
			new Decimal("1")
				.divideBy(
					new Decimal("1")
						.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.times(comparemath(hits, 14))
						.plus(1)
				)
				.times(
					new Decimal("1").add(
						new Decimal("1")
							.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							.times(comparemath(hits, 14))
					)
				),
		];
		titlelist = ["<br>Terminal Boost: x"];
		tempstring = "Task Time <br><br> Base: x1s";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (boupgradelist[21] >= 1) {
			document.getElementById("tasktimestats").innerHTML =
				tempstring +
				"<br><br>Time: x" +
				decimalToString(
					new Decimal("1")
						.times(
							new Decimal("1").divideBy(
								new Decimal("1")
									.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
									.times(Math.abs(chargeamount / 100))
									.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
									.times(comparemath(hits, 14))
									.plus(1)
							)
						)
						.times(
							new Decimal("1").add(
								new Decimal("1")
									.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
									.times(Math.abs(chargeamount / 100))
									.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
									.times(comparemath(hits, 14))
							)
						)
				) +
				"s";
		}
		effectlist = [
			new Decimal(1.05).pow(electricity.plus(1).log10() * particleupgradelist[7]),
			new Decimal(1.5).pow(batteries.plus(1).log10() * particleupgradelist[11]),
			new Decimal(1.1).pow(bounceresettime.plus(1).log10() * particleupgradelist[15]),
		];
		titlelist = ["<br>Electricity-Battery Synergy: x", "<br>Battery-Self Synergy: x", "<br>Battery Boost: x"];
		tempstring = "Batteries <br><br> Base: +1";
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (challengelist[4] >= 1) {
			document.getElementById("batterystats").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(batterygain);
		}
		effectlist = [
			new Decimal(1.1).pow(challengelist[6]),
			new Decimal(1.4).pow(new Decimal(revolutions.plus(1).log10()).times(new Number(revselectlist.includes(8)).valueOf())),
			new Decimal(1).plus(new Decimal(2).times(batteries.pow(0.5)).times(particleupgradelist[7])),
			new Decimal(1).plus(new Decimal(2.5).times(new Decimal("2").times(boxpoints.plus(1).log10()).pow(0.5)).times(particleupgradelist[10])),
		];
		titlelist = ["<br>No Upgrades Reward: x", "<br>Revolutions Effect 8: x", "<br>Electricity-Battery Synergy: x", "<br>BP-Electricity Synergy: x"];
		tempstring = "Electricity <br><br> Base: " + decimalToString(energy.pow(0.5));
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (transferresets >= 1) {
			document.getElementById("electricitystats").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(electricitygain);
		}
		effectlist = [
			new Decimal(Math.floor(boxpoints.plus(1).log10() ** 0.5)).times(bupgradelist[11]),
			new Decimal(Math.floor(packagepoints.plus(1).log10() / 2))
				.times(ppupgradelist[8])
				.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28]))),
			new Decimal(Math.floor(revolutions.plus(1).log10())).times(rupgradelist[11]),
			new Decimal(2).times(upupgradelist[5]),
			new Decimal(10).times(boupgradelist[29]),
			new Decimal("1.5").pow(annihilationreq.log10() * compare2(hits, 23)),
		];
		titlelist = [
			"<br>Strike Boost II: -",
			"<br>PP-Strike Synergy: -",
			"<br>Strike Boost III: -",
			"<br>Strike Boost I: -",
			"<br>Other VI: -",
			"<br>Hit Milestone 23: -",
		];
		tempstring =
			"Strike Requirement <br><br> Base: " + decimalToString(new Decimal("201").plus(new Decimal(4).times(comparemath(hits, 10)).times(hits.minus(9))));
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (strikeresets >= 1) {
			document.getElementById("strikereqstats").innerHTML = tempstring + "<br><br>Requirement: " + decimalToString(hitreq);
		}
		effectlist = [new Decimal("3").pow(hitreq.plus(1).log10() * compare2(hits, 17)), new Decimal(10).times(boupgradelist[29])];
		titlelist = ["<br>Hit Milestone 17: -", "<br>Other VI: -"];
		tempstring = "Annihilation Requirement <br><br> Base: " + decimalToString(new Decimal("200").times(new Decimal(1.2).pow(particles)));
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (strikeresets >= 1) {
			document.getElementById("annihilationstats").innerHTML = tempstring + "<br><br>Requirement: " + decimalToString(annihilationreq);
		}
		effectlist = [
			new Decimal(1).plus(new Decimal(5).times(particleupgradelist[4])),
			new Decimal(1.25).pow(bupgradelist[10]),
			new Decimal("1").plus(new Decimal(specialpegs.plus(1).log10()).pow(0.6).times(particleupgradelist[6])),
			new Decimal("1").plus(
				new Decimal(specialpeggain.log(5))
					.pow(0.5)
					.times(comparemath(ppupgradelist[7], 1).times(new Decimal(0.6).plus(new Decimal(0.4).times(ppupgradelist[7]))))
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			),
			new Decimal(1.23).pow(packagepoints.plus(1).log10() * particleupgradelist[13]),
		];
		titlelist = ["<br>Ultra Pegs Boost: x", "<br>Ultra Pegs I: x", "<br>SP-UP Synergy: x", "<br>SP-UP Synergy II: x", "<br>UP-PP Synergy: x"];
		tempstring = "Ultra Pegs <br><br> Base: " + decimalToString(new Decimal("1.3").pow(specialpegs.divideBy(new Decimal("1e20")).plus(1).log10()));
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (condenseresets >= 1) {
			document.getElementById("ultrapegstats").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(ultrapegsgain);
		}
		effectlist = [
			new Decimal(1.35).pow(packagepoints.plus(1).log10() * particleupgradelist[12]),
			new Decimal(1.23).pow(ultrapegs.plus(1).log10() * particleupgradelist[13]),
			new Decimal(1.2)
				.times(batteries.pow(0.5).pow(0.5))
				.plus(new Decimal(1.01).pow(batteries.plus(1).log10()))
				.times(particleupgradelist[17]),
		];
		titlelist = ["<br>PP Boost: x", "<br>UP-PP Synergy: x", "<br>Battery-PP Synergy: x"];
		tempstring =
			"Package Points <br><br> Base: " + decimalToString(new Decimal(1.1).pow(boxpoints.plus(1).log10() - 70).times(1.2 ** ballpoints.plus(1).log10()));
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (packageresets >= 1) {
			document.getElementById("packagedpointstats").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(packagepointsgain);
		}
		tempstring =
			"Misc Stats<br><br>Bounce Reset Time: " +
			decimalToString(bounceresettime) +
			"s<br>Average Box Value: x" +
			decimalToString(
				boxvalues[0]
					.times(new Decimal("2"))
					.add(boxvalues[1].times(new Decimal("2")).add(boxvalues[2].times(new Decimal("2")).add(boxvalues[3])))
					.divideBy(new Decimal("7"))
			) +
			"<br>Gear Rotation Speed: " +
			(gearangle / (fps / 1000)).toFixed(3) +
			"&deg;/s (" +
			(gearangle / (fps / 1000) / 6).toFixed(3) +
			" RPM) [";
		let rpm = (gearangle / (fps / 1000) / 6).toFixed(3);
		if (rpm < 6) {
			tempstring += "can stand on]";
		} else if (rpm < 400) {
			tempstring += "ceiling fan]";
		} else if (rpm < 700) {
			tempstring += "car wheel]";
		} else if (rpm < 1500) {
			tempstring += "idle car engine]";
		} else if (rpm < 3000) {
			tempstring += "normal car engine]";
		} else if (rpm < 10000) {
			tempstring += "large jet engine]";
		} else if (rpm < 15000) {
			tempstring += "centrifuge]";
		} else if (rpm < 150000) {
			tempstring += "ultracentrifuge]";
		} else if (rpm < 500000) {
			tempstring += "dentist drill]";
		} else if (rpm < 1000000) {
			tempstring += "highest machine rpm]";
		} else if (rpm < 477134515) {
			tempstring += "faster than light [12m diameter]]";
		} else if (rpm < 300000000000) {
			tempstring += "highest manmade rpm]";
		} else {
			tempstring += "way too fast]";
		}
		tempstring += "<br>Random Number: " + Math.random().toString();
		if (hits.compare(21) >= 0) {
			tempstring +=
				"<br>Pending Hugs: " +
				decimalToString(
					new Decimal("1")
						.plus(comparemath(hits, 26) * 4)
						.times(ballpoints.plus(1).log10() * comparemath(hits, 28))
						.times(xp.plus(1).log10() * comparemath(hits, 29))
				);
		}
		tempstring += "<br>Next Save: " + (60 - autosavetimer).toString() + "s";
		document.getElementById("miscstats").innerHTML = tempstring;
	}
	/* stat screen framework (ctrl c+v simulator)
		effectlist = [

		];
		titlelist = [

		];
		tempstring =
			"name <br><br> Base: " +
			decimalToString();
		for (let i = 0; i < effectlist.length; i++) {
			if (effectlist[i].compare(1) !== 0 && effectlist[i].compare(0) !== 0) {
				tempstring += titlelist[i] + decimalToString(effectlist[i]);
			}
		}
		if (req >= 1) {
			document.getElementById("element").innerHTML = tempstring + "<br><br>Gain: " + decimalToString(gain);
		}
	*/
	function comparemath(decimal, decimal2) {
		return new Decimal(decimal.compare(decimal2)).plus(1).divideBy(2).ceil();
	}
	function gaincalc() {
		cooldown = 5000 / Math.pow(2, pupgradelist[3]);
		ballamount = new Decimal("1")
			.plus(spupgradelist[9].times(new Decimal("1").plus(new Decimal("1").plus(new Decimal("2").times(boupgradelist[25])).times(boupgradelist[2]))))
			.plus(revupgradelist[4])
			.plus(upupgradelist[4]);
		ballamount2 = ballamount;
		if (ballamount.compare(ballcap) >= 0) {
			ballcomp = ballamount - ballcap;
			ballamount = ballcap;
		}
		if (ballcomp < 1) {
			ballcomp = 1;
		}
		ballpointgain = new Decimal("1")
			.times(new Decimal(ballcomp).divideBy(new Decimal(ballamount)))
			.times(level.plus(new Decimal("3")).divideBy(new Decimal("3")))
			.times(new Decimal("1").plus(new Decimal("1.25").times(pupgradelist[0])))
			.times(new Decimal("2").pow(pupgradelist[0].divideBy(20).floor()))
			.times(
				new Decimal("1").plus(
					new Decimal("1.15")
						.times(pupgradelist[2])
						.times(
							new Decimal(
								new Decimal("1")
									.add(ballpointgain)
									.plus(1)
									.log(new Decimal(10).minus(boupgradelist[1]).minus(2 * boupgradelist[25]))
							)
								.times(new Decimal("1").plus(boupgradelist[1] * 0.75).plus(boupgradelist[25] * 0.75))
								.divideBy(new Decimal("2").minus(0.25 * boupgradelist[1]).minus(0.25 * boupgradelist[25]))
								.plus(new Decimal("1"))
						)
						.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
				)
			)
			.times(new Decimal("1").plus(new Decimal("1.5").times(bupgradelist[4])))
			.times(new Decimal("1").plus(new Decimal("1").times(spupgradelist[2])))
			.times(new Decimal("1").plus(new Decimal("1").times(rupgradelist[0]).times(rotations.pow(new Decimal(0.15)))))
			.times(
				new Decimal("1").plus(
					new Decimal("1.38")
						.times(revolutions.pow(new Decimal("0.58")))
						.times(Number(revselectlist.includes(1)))
						.times(irev.pow(new Decimal("1.25")).plus(1))
				)
			)
			.times(new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
			.times(new Decimal("1").add(new Decimal("0.1").times(challengelist[3])))
			.times(
				new Decimal("1").add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
				)
			)
			.times(
				new Decimal("1").divideBy(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
						.plus(1)
				)
			)
			.times(new Decimal("1.15").pow(ppupgradelist[4]));
		if (activechallenge === 5 || activechallenge === 8) {
			ballpointgain = ballpointgain.pow(0.05);
		}
		xpgain = new Decimal("1")
			.times(new Decimal(ballcomp).divideBy(new Decimal(ballamount)))
			.times(new Decimal("1").plus(new Decimal("1.25").times(pupgradelist[1])))
			.times(new Decimal("2").pow(pupgradelist[1].divideBy(25).floor()))
			.times(
				new Decimal("1")
					.plus(new Decimal("1.15").times(pupgradelist[4]).times(new Decimal(level.log(new Decimal("6"))).plus(new Decimal("1"))))
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			)
			.times(new Decimal("1").plus(new Decimal("1.5").times(bupgradelist[5])))
			.times(new Decimal("1").plus(new Decimal("1").times(spupgradelist[1])))
			.times(
				new Decimal("1").plus(
					new Decimal("1")
						.times(rupgradelist[1])
						.times(rotations.pow(new Decimal(0.15)))
						.times(new Decimal("0.6666666"))
				)
			)
			.times(
				new Decimal("1").plus(
					new Decimal("1.25")
						.times(revolutions.pow(new Decimal("0.64")))
						.times(Number(revselectlist.includes(2)))
						.times(irev.pow(new Decimal("1.25")).plus(1))
				)
			)
			.times(new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
			.times(
				new Decimal("1").add(
					new Decimal("3")
						.times(jumps.plus(new Decimal("1").plus(1).log10()))
						.times(boupgradelist[18])
						.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
				)
			)
			.times(new Decimal("1").add(new Decimal("0.1").times(challengelist[3])))
			.times(
				new Decimal("1").add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
			)
			.times(
				new Decimal("1").divideBy(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.plus(1)
				)
			)
			.times(
				new Decimal("1").plus(
					level
						.minus(150)
						.pow(1.2)
						.times(comparemath(level, 150).times(comparemath(hits, 8)))
				)
			)
			.times(new Decimal("1.2").pow(ppupgradelist[5]));
		if (activechallenge === 5) {
			xpgain = xpgain.pow(0.05);
		}
		if (activechallenge !== 3) {
			boxpointgain = new Decimal(2.5)
				.times(new Decimal("1.275").pow(level.minus(new Decimal("10"))))
				.times(new Decimal("3").pow(level.minus("16").divideBy(10).floor()));
			if (boupgradelist[0] >= 1 && boupgradelist[25] >= 1) {
				boxpointgain = new Decimal("1.45").pow(level.minus(new Decimal("10"))).times(new Decimal("4.25").pow(level.minus("10").divideBy(10).floor()));
			} else if (boupgradelist[0] >= 1) {
				boxpointgain = new Decimal("1.325").pow(level.minus(new Decimal("15"))).times(new Decimal("3.5").pow(level.minus("15").divideBy(10).floor()));
			}
			boxpointgain = boxpointgain
				.times(new Decimal("1").plus(new Decimal("1").times(spupgradelist[0])))
				.times(
					new Decimal("1").plus(
						new Decimal("1")
							.times(rupgradelist[2])
							.times(rotations.pow(new Decimal(0.15)))
							.times(new Decimal("0.8"))
					)
				)
				.times(
					new Decimal("1").plus(
						new Decimal("1.13")
							.times(revolutions.pow(new Decimal("0.59")))
							.times(Number(revselectlist.includes(3)))
							.times(irev.pow(new Decimal("1.25")).plus(1))
					)
				)
				.times(new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
				.times(
					new Decimal("1").add(
						new Decimal("2")
							.times(new Decimal(specialpegs.add(1).plus(1).log10()))
							.times(new Decimal(boupgradelist[19]))
							.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
					)
				)
				.times(
					new Decimal("1").add(new Decimal("1.5").times(new Decimal(bounceresettime.add(1).plus(1).log10())).times(new Decimal(boupgradelist[20])))
				)
				.times(new Decimal("1").plus(new Decimal("1.5").times(revupgradelist[2])))
				.times(new Decimal("2").pow(revupgradelist[2].divideBy(5).floor()))
				.pow(new Decimal("1").plus(new Decimal("0.0005").times(challengelist[2])))
				.times(new Decimal("1").add(new Decimal("0.1").times(challengelist[3])))
				.times(
					new Decimal("1").add(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
					)
				)
				.times(
					new Decimal("1").divideBy(
						new Decimal("2")
							.times(electricity.times(batteries).pow(0.5))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							.plus(1)
					)
				)
				.times(new Decimal(1.25).pow(new Decimal(electricity.plus(1).log10()).times(particleupgradelist[10])));
		} else {
			boxpointgain = new Decimal("0");
		}
		if (activechallenge === 5 || activechallenge === 8) {
			boxpointgain = boxpointgain.pow(0.05);
		}
		levelreq = new Decimal("1.25").pow(level).times(new Decimal("1.65").pow(level.divideBy(new Decimal("10")).floor()));
		if (level > 80) {
			levelreq = new Decimal("1.4").pow(level).times(new Decimal("3").pow(level.divideBy(new Decimal("10")).floor()));
			if (boupgradelist[4] >= 1) {
				levelreq = new Decimal("1.35").pow(level).times(new Decimal("2.75").pow(level.divideBy(new Decimal("10")).floor()));
				if (boupgradelist[25] >= 1) {
					levelreq = new Decimal("1.3").pow(level).times(new Decimal("2.6").pow(level.divideBy(new Decimal("10")).floor()));
				}
			}
		}
		if (level > 200) {
			levelreq = new Decimal("1.5")
				.pow(level)
				.times(new Decimal("3.5").pow(level.divideBy(new Decimal("10")).floor()))
				.divideBy(new Decimal("1").plus(xp.pow(0.15).times(comparemath(hits, 9))))
				.times(new Decimal("5").pow(level.minus(201).times(comparemath(level, 201))));
		}
		hitreq = new Decimal("201")
			.plus(new Decimal(4).times(comparemath(hits, 10)).times(hits.minus(9)))
			.minus(new Decimal(Math.floor(boxpoints.plus(1).log10() ** 0.5)).times(bupgradelist[11]))
			.minus(
				new Decimal(Math.floor(packagepoints.plus(1).log10() / 2))
					.times(ppupgradelist[8])
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			)
			.minus(new Decimal(Math.floor(revolutions.plus(1).log10())).times(rupgradelist[11]))
			.minus(new Decimal(2).times(upupgradelist[5]))
			.minus(new Decimal(10).times(boupgradelist[29]))
			.floor();
		annihilationreq = new Decimal("200")
			.times(new Decimal(1.2).pow(particles))
			.minus(new Decimal("3").pow(hitreq.plus(1).log10() * compare2(hits, 17)))
			.minus(new Decimal(10).times(boupgradelist[29]))
			.floor();
		hitreq = hitreq.minus(new Decimal("1.5").pow(annihilationreq.log10() * compare2(hits, 23))).floor();
		if (hitreq.compare(0) <= 0) {
			hitreq = new Decimal("1");
		}
		if (annihilationreq.compare(0) <= 0) {
			annihilationreq = new Decimal("1");
		}
		boxvalues = [
			new Decimal("1")
				.times(new Decimal("1").plus(new Decimal("1").times(bupgradelist[1])))
				.times(new Decimal("1").plus(new Decimal("1").times(spupgradelist[4])))
				.times(new Decimal("1.25").pow(ppupgradelist[1])),
			new Decimal("1.5")
				.times(new Decimal("1").plus(new Decimal("1").times(bupgradelist[2])))
				.times(new Decimal("1").plus(new Decimal("1").times(spupgradelist[5])))
				.times(new Decimal("1.25").pow(ppupgradelist[2])),
			new Decimal("0.5")
				.times(new Decimal("1").plus(new Decimal("1").times(bupgradelist[0])))
				.times(new Decimal("1").plus(new Decimal("1").times(spupgradelist[3])))
				.times(new Decimal("1.25").pow(ppupgradelist[0])),
			new Decimal("5")
				.times(new Decimal("1").plus(new Decimal("1").times(bupgradelist[3])))
				.times(new Decimal("1").plus(new Decimal("1").times(spupgradelist[6])))
				.times(new Decimal("1.25").pow(ppupgradelist[3])),
		];
		for (m = 0; m < boxvalues.length; m = m + 1) {
			boxvalues[m] = boxvalues[m]
				.times(
					new Decimal("1").plus(
						new Decimal("1.02")
							.times(bupgradelist[7])
							.times(new Decimal(new Decimal("1").add(boxpoints).plus(1).log10()).divideBy(new Decimal("3")))
							.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
							.times(
								new Decimal("1").plus(
									new Decimal(0.5)
										.times(boxvalues[0].plus(1).log10())
										.times(upupgradelist[1])
										.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
								)
							)
					)
				)
				.times(
					new Decimal("1")
						.plus(rollpoints.divideBy(new Decimal("2")).times(bupgradelist[9]))
						.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
				)
				.times(new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
				.times(
					new Decimal("1.25")
						.plus(new Decimal("0.1").times(particleupgradelist[3]))
						.pow(tasks[1])
						.times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7))))
				);
			if (m !== 3 && chargeamount !== 0) {
				boxvalues[m] = boxvalues[m]
					.times(
						new Decimal("1").add(
							new Decimal("4").times(
								new Decimal(electricity.times(batteries).log(new Decimal("10")))
									.times(Math.abs(chargeamount / 100))
									.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							)
						)
					)
					.times(
						new Decimal("1").divideBy(
							new Decimal("4").times(
								new Decimal(electricity.times(batteries).log(new Decimal("10")))
									.times(Math.abs(chargeamount / 100))
									.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
									.plus(1)
							)
						)
					);
			} else if (chargeamount !== 0) {
				boxvalues[m] = boxvalues[m]
					.times(
						new Decimal("1").add(
							new Decimal("4").times(
								new Decimal(electricity.times(batteries).log(new Decimal("10")))
									.times(Math.abs(chargeamount / 100))
									.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
							)
						)
					)
					.times(
						new Decimal("1").divideBy(
							new Decimal("4").times(
								new Decimal(electricity.times(batteries).log(new Decimal("10")))
									.times(Math.abs(chargeamount / 100))
									.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
									.plus(1)
							)
						)
					);
			}
			if (activechallenge === 5 || activechallenge === 8) {
				boxvalues[m] = boxvalues[m].pow(0.05);
			}
		}
		rotationgain = new Decimal("1")
			.times(rollpoints)
			.times(new Decimal("1").plus(new Decimal("1").times(rupgradelist[4])))
			.times(new Decimal("1").plus(rupgradelist[7].times(new Decimal("1.3").pow(rollpoints))))
			.times(
				new Decimal("1").plus(
					new Decimal("3")
						.times(revolutions.pow(new Decimal("0.61")))
						.times(Number(revselectlist.includes(5)))
						.times(irev.pow(new Decimal("1.25")).plus(1))
				)
			)
			.times(new Decimal("1").plus(new Decimal("2").times(spupgradelist[7])))
			.times(new Decimal("1").plus(new Decimal("1").plus(new Decimal("2").times(boupgradelist[25])).times(boupgradelist[2])))
			.times(new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
			.times(
				new Decimal("1").add(
					new Decimal("1.5")
						.times(revolutions.pow(new Decimal("0.5")))
						.times(new Decimal(boupgradelist[16]))
						.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
				)
			)
			.times(new Decimal("1").add(new Decimal("1.25").times(new Decimal(bounceresettime.add(1).plus(1).log10())).times(new Decimal(boupgradelist[23]))))
			.times(
				new Decimal("1.5")
					.plus(new Decimal("0.1").times(particleupgradelist[3]))
					.pow(tasks[0])
					.times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7))))
			)
			.times(new Decimal("1").plus(new Decimal("2.25").times(revupgradelist[3])))
			.times(new Decimal("5").pow(revupgradelist[3].divideBy(5).floor()))
			.times(new Decimal("1.5").pow(challengelist[0]))
			.times(new Decimal("1").add(new Decimal("0.1").times(challengelist[3])))
			.times(
				new Decimal("1").add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
			)
			.times(
				new Decimal("1").divideBy(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.plus(1)
				)
			)
			.times(new Decimal("1.25").pow(new Decimal(energy.plus(1).log10()).times(upupgradelist[2])));
		if (activechallenge === 1) {
			rotationgain = rotationgain.pow(0.5);
		}
		if (activechallenge === 5 || activechallenge === 8) {
			rotationgain = rotationgain.pow(0.05);
		}
		specialpeggain = new Decimal("1")
			.add(bupgradelist[6])
			.times(
				new Decimal("1").plus(
					new Decimal("2")
						.times(revolutions.pow(new Decimal("0.62")))
						.times(Number(revselectlist.includes(4)))
						.times(irev.pow(new Decimal("1.25")).plus(1))
				)
			)
			.times(new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
			.times(new Decimal("1").plus(new Decimal("1.25").times(revupgradelist[1])))
			.times(new Decimal("3").pow(revupgradelist[1].divideBy(10).floor()))
			.times(new Decimal("1").add(new Decimal("0.1").times(challengelist[3])))
			.times(
				new Decimal("1").add(
					new Decimal("1")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
				)
			)
			.times(
				new Decimal("1").divideBy(
					new Decimal("1")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
						.plus(1)
				)
			)
			.times(new Decimal("1").plus(new Decimal(revolutions.plus(1).log10()).times(particleupgradelist[2])))
			.times(new Decimal("1").plus(new Decimal(ultrapegs.plus(1).log10()).pow(1.05).times(particleupgradelist[6])))
			.times(new Decimal("1.15").pow(ppupgradelist[6]));
		if (activechallenge === 5 || activechallenge === 8) {
			specialpeggain = specialpeggain.pow(0.05);
		}
		specialpegchance = new Decimal("0.005")
			.times(new Decimal("2").pow(bupgradelist[6].divideBy(25).floor()))
			.times(
				new Decimal("1").plus(
					new Decimal(Math.pow(electricity.times(batteries).plus(1).log(10), 0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.times(comparemath(hits, 13))
				)
			)
			.times(
				new Decimal("1").divideBy(
					new Decimal(Math.pow(electricity.times(batteries).plus(1).log(10), 0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
						.times(comparemath(hits, 13))
						.plus(1)
				)
			)
			.plus(new Decimal("0.02").plus(ppupgradelist[6].divideBy(30).floor()));
		templist = boupgradelist.slice(5, 10);
		templist = templist.filter(function (a) {
			return a != 0;
		});
		rollpointreq = new Decimal(new Decimal("30").times(new Decimal("1.1").pow(rollpoints)).floor())
			.minus(
				new Decimal(boxpoints.plus(new Decimal("1")).plus(1).log10())
					.floor()
					.times(bupgradelist[8])
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			)
			.minus(
				new Decimal(templist.length)
					.times(new Decimal("2"))
					.times(boupgradelist[2] + boupgradelist[25])
					.times(new Decimal("1").plus(new Decimal("0.5").plus(new Decimal("1.5").times(boupgradelist[25])).times(new Decimal(boupgradelist[3]))))
					.times(new Decimal("1").plus(new Decimal("1").plus(new Decimal("1").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
					.floor()
			)
			.minus(
				new Decimal("0.25")
					.times(new Decimal(ballpoints.plus(new Decimal("1")).plus(1).log10()))
					.times(new Decimal(boupgradelist[17]))
					.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
			)
			.minus(new Decimal(jumps.plus(1).log10()).pow(new Decimal("1.15")).times(particleupgradelist[0]))
			.floor();
		if (rollpointreq.compare(0) <= 0) {
			rollpointreq = new Decimal(0);
		}
		if (upupgradelist[0] >= 1) {
			rollpointreq = rollpointreq.minus(new Decimal("3").times(rollpointreq.plus(1).log10()));
		}
		if (rollpointreq.compare(0) <= 0) {
			rollpointreq = new Decimal(0);
		}
		revgain = new Decimal("1")
			.times(new Decimal("1").plus(new Decimal("1").plus(new Decimal("2").times(boupgradelist[25])).times(boupgradelist[2])))
			.times(new Decimal("1").add(new Decimal("4").plus(new Decimal("20").times(boupgradelist[25])).times(new Decimal(boupgradelist[4]))))
			.times(
				new Decimal("1").add(
					new Decimal("0.2")
						.times(level)
						.times(new Decimal(boupgradelist[15]))
						.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
				)
			)
			.times(
				new Decimal("1.5")
					.plus(new Decimal("0.1").times(particleupgradelist[3]))
					.pow(tasks[2])
					.times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7))))
			)
			.times(new Decimal("1").plus(new Decimal("2").times(new Decimal("1.2").pow(challengelist[1])).minus(2)))
			.times(new Decimal("1").add(new Decimal("0.1").times(challengelist[3])))
			.times(
				new Decimal("1").add(
					new Decimal("2")
						.plus(new Decimal("0.5").times(upupgradelist[3]))
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
			)
			.times(
				new Decimal("1").divideBy(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.plus(1)
				)
			)
			.times(new Decimal("1").plus(new Decimal("1.5").times(new Decimal(specialpegs.plus(1).log10()).times(particleupgradelist[2]))));
		if (activechallenge === 2) {
			revgain = new Decimal("1");
		}
		if (activechallenge === 5 || activechallenge === 8) {
			revgain = revgain.pow(0.05);
		}
		maxrevselect = new Decimal("1")
			.plus(new Decimal("1").times(hits.minus(11)).times(comparemath(hits, 11)))
			.minus(hits.minus(16).times(comparemath(hits, 16)));
		jumpgain = new Decimal("5").plus(
			new Decimal("1").times(
				new Decimal("1.25").pow(rollpoints.minus(new Decimal("10"))).times(rollpoints.minus(new Decimal("10")).pow(1.25).times(new Decimal("2")))
			)
		);
		if (boupgradelist[11] >= 1) {
			jumpgain = new Decimal("1").plus(
				new Decimal("1").times(
					new Decimal("1.35")
						.pow(rollpoints.minus(new Decimal("5")))
						.times(rollpoints.minus(new Decimal("10")).pow(1.35).times(new Decimal("2")))
						.times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27])))
				)
			);
		}
		templist = boupgradelist;
		templist = templist.filter(function (a) {
			return a != 0;
		});
		jumpgain = jumpgain
			.times(
				new Decimal("1").plus(
					new Decimal("1.25")
						.pow(new Decimal(jumps.times(new Decimal("2")).plus(new Decimal("1")).plus(1).log10()))
						.times(boupgradelist[10])
						.times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27])))
				)
			)
			.times(
				new Decimal("1")
					.plus(new Decimal("1.05").pow(new Decimal(templist.length)).times(boupgradelist[12]))
					.times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27])))
			)
			.times(
				new Decimal("1").plus(
					new Decimal("1")
						.times(revolutions.pow(new Decimal("0.5")).divideBy("10"))
						.times(Number(revselectlist.includes(6)))
						.times(irev.pow(new Decimal("1.25")).plus(1))
				)
			)
			.times(
				new Decimal("1").plus(
					new Decimal("1")
						.times(new Decimal("2"))
						.times(bounceresets.pow(new Decimal("0.5")))
						.times(new Decimal(boupgradelist[14]).times(new Decimal("1").plus(new Decimal("1").times(boupgradelist[27]))))
				)
			)
			.times(
				new Decimal("1").add(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
				)
			)
			.times(
				new Decimal("1").divideBy(
					new Decimal("2")
						.times(electricity.times(batteries).pow(0.5))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.plus(1)
				)
			)
			.times(new Decimal("1").plus(new Decimal("1.5").times(hits.pow(0.5)).times(comparemath(hits, 3))));
		energygain = new Decimal("2")
			.pow(new Decimal(rotations.plus(new Decimal("1")).plus(1).log10()))
			.times(new Decimal("1.2").times(new Decimal(rotations.plus(new Decimal("1")).plus(1).log10())))
			.times(new Decimal(1.1).pow(challengelist[6]))
			.times(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10()).times(new Number(revselectlist.includes(7)).valueOf())))
			.times(new Decimal(1.05).pow(rotations.times(rupgradelist[10])))
			.times(new Decimal(1.25).pow(new Decimal(1.3).times(electricity.plus(1).log10()).times(particleupgradelist[16])));
		if (activechallenge === 8) {
			energygain = energygain.pow(0.05);
		}
		irevreq = new Decimal("2.5").pow(irev).divideBy(new Decimal(1).plus(batteries.pow(0.75).times(rupgradelist[9])));
		electricitygain = new Decimal(1)
			.times(energy.pow(0.5))
			.times(new Decimal(1.1).pow(challengelist[6]))
			.times(new Decimal(1.4).pow(new Decimal(revolutions.plus(1).log10()).times(new Number(revselectlist.includes(8)).valueOf())))
			.times(new Decimal(1).plus(new Decimal(2).times(batteries.pow(0.5)).times(particleupgradelist[7])))
			.times(new Decimal(1).plus(new Decimal(2.5).times(new Decimal("2").times(boxpoints.plus(1).log10()).pow(0.5)).times(particleupgradelist[10])));
		ultrapegsgain = new Decimal("1.3")
			.pow(specialpegs.divideBy(new Decimal("1e20")).plus(1).log10())
			.times(new Decimal("1.2").times(specialpegs.divideBy(new Decimal("1e20")).plus(1).log10()))
			.times(new Decimal(1).plus(new Decimal(5).times(particleupgradelist[4])))
			.times(new Decimal(1.25).pow(bupgradelist[10]))
			.times(new Decimal("1").plus(new Decimal(specialpegs.plus(1).log10()).pow(0.6).times(particleupgradelist[6])))
			.times(
				new Decimal("1").plus(
					new Decimal(specialpeggain.log(5))
						.pow(0.5)
						.times(comparemath(ppupgradelist[7], 1).times(new Decimal(0.6).plus(new Decimal(0.4).times(ppupgradelist[7]))))
						.times(new Decimal("1").plus(new Decimal("1.25").times(boupgradelist[28])))
				)
			)
			.times(new Decimal(1.23).pow(packagepoints.plus(1).log10() * particleupgradelist[13]));
		batterygain = new Decimal(1)
			.times(new Decimal(1.05).pow(electricity.plus(1).log10() * particleupgradelist[7]))
			.times(new Decimal(1.5).pow(batteries.plus(1).log10() * particleupgradelist[11]))
			.times(new Decimal(1.1).pow(bounceresettime.plus(1).log10() * particleupgradelist[15]));
		packagepointsgain = new Decimal(1.1)
			.pow(boxpoints.plus(1).log10() - 70)
			.times(1.2 ** ballpoints.plus(1).log10())
			.times(new Decimal(1.35).pow(packagepoints.plus(1).log10() * particleupgradelist[12]))
			.times(new Decimal(1.23).pow(ultrapegs.plus(1).log10() * particleupgradelist[13]))
			.times(
				new Decimal(1.2)
					.times(batteries.pow(0.5).pow(0.5))
					.plus(new Decimal(1.01).pow(batteries.plus(1).log10()))
					.times(particleupgradelist[17])
			);
	}

	function despawnpopuptext(a) {
		document.getElementById("pegs").removeChild(document.getElementById("popup" + a.toString()));
	}

	function spawnpopuptext(bpdisplay, xpdisplay, b) {
		popupid = popupid + 1;
		popup = document.createElement("p");
		document.getElementById("pegs").appendChild(popup);
		popup.setAttribute("id", "popup" + popupid.toString());
		popup.setAttribute("class", "popuptext");
		popup.style.left = b.toString() + "%";
		popup.style.top = (80 - 5 * Math.random()).toString() + "%";
		popup.innerHTML = "+" + decimalToString(bpdisplay) + " BallPoints, +" + decimalToString(xpdisplay) + " XP";
		setTimeout(despawnpopuptext, 1000, popupid);
	}
	function boxparticles(b) {
		for (let i = 1; i <= 50; i++) {
			let boxpos;
			let particle = document.createElement("div");
			document.getElementById("board").appendChild(particle);
			particle.setAttribute("class", "boxparticles");
			if (b / 100 <= 1 / 7) {
				particle.style.backgroundColor = "#eba834";
				boxpos = 0;
			}
			if (b / 100 > 6 / 7) {
				particle.style.backgroundColor = "#eba834";
				boxpos = 6;
			}
			if (b / 100 > 1 / 7 && b / 100 <= 2 / 7) {
				particle.style.backgroundColor = "#d9e317";
				boxpos = 1;
			}
			if (b / 100 > 5 / 7 && b / 100 <= 6 / 7) {
				particle.style.backgroundColor = "#d9e317";
				boxpos = 5;
			}
			if (b / 100 > 2 / 7 && b / 100 <= 3 / 7) {
				particle.style.backgroundColor = "#f7432f";
				boxpos = 2;
			}
			if (b / 100 > 4 / 7 && b / 100 <= 5 / 7) {
				particle.style.backgroundColor = "#f7432f";
				boxpos = 4;
			}
			if (b / 100 > 3 / 7 && b / 100 <= 4 / 7) {
				particle.style.backgroundColor = "#91d47d";
				boxpos = 3;
			}
			particle.style.rotate = (Math.random() * 360).toString() + "deg";
			particle.style.left = "calc(" + ((Math.random() * 100) / 7 + (boxpos * 100) / 7).toString() + "% - 0.5vmin)";
			particle.style.bottom = Math.random() * 10 + "%";
			let animationlength = Math.random() + 0.1;
			particle.style.animation = animationlength.toString() + "s ease-in forwards 1 shootup, 0.25s linear 0s infinite rotate";
			setTimeout(
				(element) => {
					element.remove();
				},
				animationlength * 1000,
				particle
			);
		}
	}
	//new save setup
	timelaston = new Date().getTime();
	timelaston = Math.floor(timelaston / 1000);
	ballpoints = new Decimal("0");
	xp = new Decimal("0");
	level = new Decimal("1");
	pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
	mutemusic = new Decimal("0");
	mutesfx = new Decimal("0");
	boxifyresets = new Decimal("0");
	boxpoints = new Decimal("0");
	specialpegs = new Decimal("0");
	bupgradelist = [
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
	];
	spupgradelist = [
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
	];
	qolupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
	rupgradelist = [
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
		new Decimal("0"),
	];
	rotations = new Decimal("0");
	rollpoints = new Decimal("0");
	rollresets = new Decimal("0");
	revolutions = new Decimal("0");
	revupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
	disableautodrop = new Decimal("1");
	disableautoplinko = new Decimal("1");
	disableautoboxify = new Decimal("1");
	bounceresets = new Decimal("0");
	bounceresettime = new Decimal("0");
	jumps = new Decimal("0");
	boupgradelist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	energy = new Decimal("0");
	tasks = [new Decimal("0"), new Decimal("0"), new Decimal("0")];
	taskprogress = [new Decimal("0"), new Decimal("0"), new Decimal("0")];
	irev = new Decimal("0");
	ballcap = 10;
	totaljumps = new Decimal("0");
	challengelist = [0, 0, 0, 0, 0, 0, 0, 0];
	activechallenge = 0;
	electricity = new Decimal("0");
	batteries = new Decimal("0");
	chargeamount = 0;
	transferresets = new Decimal("0");
	strikeresets = 0;
	hits = new Decimal("0");
	annihilationresets = 0;
	particles = new Decimal("0");
	condenseresets = 0;
	ultrapegs = new Decimal("0");
	packageresets = 0;
	packagepoints = new Decimal("0");
	disablerollauto = 0;
	particleupgradelist = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	upupgradelist = [new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0), new Decimal(0)];
	ppupgradelist = [
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
		new Decimal(0),
	];
	precision = 3;
	notation = 0;
	//save loading!!!
	if (localStorage.getItem("save") !== null) {
		savefile = JSON.parse(localStorage.getItem("save"));
		missingvar();
		timelaston = savefile.timelaston;
		ballpoints = new Decimal(savefile.ballpoints);
		xp = new Decimal(savefile.xp);
		level = new Decimal(savefile.level);
		pupgradelist = [
			new Decimal(savefile.pupgrade1),
			new Decimal(savefile.pupgrade2),
			new Decimal(savefile.pupgrade3),
			new Decimal(savefile.pupgrade4),
			new Decimal(savefile.pupgrade5),
		];
		mutemusic = new Decimal(savefile.mutemusic);
		mutesfx = new Decimal(savefile.mutesfx);
		boxifyresets = new Decimal(savefile.boxifyresets);
		boxpoints = new Decimal(savefile.boxpoints);
		specialpegs = new Decimal(savefile.specialpegs);
		bupgradelist = [
			new Decimal(savefile.bupgrade1),
			new Decimal(savefile.bupgrade2),
			new Decimal(savefile.bupgrade3),
			new Decimal(savefile.bupgrade4),
			new Decimal(savefile.bupgrade5),
			new Decimal(savefile.bupgrade6),
			new Decimal(savefile.bupgrade7),
			new Decimal(savefile.bupgrade8),
			new Decimal(savefile.bupgrade9),
			new Decimal(savefile.bupgrade10),
			new Decimal(savefile.bupgrade11),
			new Decimal(savefile.bupgrade12),
		];
		spupgradelist = [
			new Decimal(savefile.spupgrade1),
			new Decimal(savefile.spupgrade2),
			new Decimal(savefile.spupgrade3),
			new Decimal(savefile.spupgrade4),
			new Decimal(savefile.spupgrade5),
			new Decimal(savefile.spupgrade6),
			new Decimal(savefile.spupgrade7),
			new Decimal(savefile.spupgrade8),
			new Decimal(savefile.spupgrade9),
			new Decimal(savefile.spupgrade10),
		];
		qolupgradelist = [
			new Decimal(savefile.qolupgrade1),
			new Decimal(savefile.qolupgrade2),
			new Decimal(savefile.qolupgrade3),
			new Decimal(savefile.qolupgrade4),
		];
		rotations = new Decimal(savefile.rotations);
		rollpoints = new Decimal(savefile.rollpoints);
		rollresets = new Decimal(savefile.rollresets);
		revolutions = new Decimal(savefile.revolutions);
		rupgradelist = [
			new Decimal(savefile.rupgrade1),
			new Decimal(savefile.rupgrade2),
			new Decimal(savefile.rupgrade3),
			new Decimal(savefile.rupgrade4),
			new Decimal(savefile.rupgrade5),
			new Decimal(savefile.rupgrade6),
			new Decimal(savefile.rupgrade7),
			new Decimal(savefile.rupgrade8),
			new Decimal(savefile.rupgrade9),
			new Decimal(savefile.rupgrade10),
			new Decimal(savefile.rupgrade11),
			new Decimal(savefile.rupgrade12),
		];
		revupgradelist = [new Decimal(savefile.revupgrade1)];
		disableautodrop = new Decimal(savefile.disableautodrop);
		disableautoplinko = new Decimal(savefile.disableautoplinko);
		ballcap = savefile.ballcap;
		bounceresets = new Decimal(savefile.bounceresets);
		bounceresettime = new Decimal(savefile.bounceresettime);
		jumps = new Decimal(savefile.jumps);
		energy = new Decimal(savefile.energy);
		boupgradelist = JSON.parse(savefile.boupgradelist);
		tasks = [new Decimal(savefile.task1), new Decimal(savefile.task2), new Decimal(savefile.task3)];
		taskprogress = [new Decimal(savefile.taskprogress1), new Decimal(savefile.taskprogress2), new Decimal(savefile.taskprogress3)];
		revupgradelist[1] = new Decimal(savefile.revupgrade2);
		revupgradelist[2] = new Decimal(savefile.revupgrade3);
		revupgradelist[3] = new Decimal(savefile.revupgrade4);
		revupgradelist[4] = new Decimal(savefile.revupgrade5);
		irev = new Decimal(savefile.irev);
		totaljumps = new Decimal(savefile.totaljumps);
		challengelist = JSON.parse(savefile.challengelist);
		activechallenge = JSON.parse(savefile.activechallenge);
		electricity = new Decimal(savefile.electricity);
		batteries = new Decimal(savefile.batteries);
		chargeamount = JSON.parse(savefile.chargeamount);
		transferresets = new Decimal(savefile.transferresets);
		strikeresets = JSON.parse(savefile.strikeresets);
		hits = new Decimal(savefile.hits);
		annihilationresets = JSON.parse(savefile.annihilationresets);
		particles = new Decimal(savefile.particles);
		condenseresets = JSON.parse(savefile.condenseresets);
		ultrapegs = new Decimal(savefile.ultrapegs);
		packageresets = JSON.parse(savefile.packageresets);
		packagepoints = new Decimal(savefile.packagepoints);
		disablerollauto = JSON.parse(savefile.disablerollauto);
		particleupgradelist = JSON.parse(savefile.particleupgradelist);
		upupgradelist = [
			new Decimal(savefile.upupgrade1),
			new Decimal(savefile.upupgrade2),
			new Decimal(savefile.upupgrade3),
			new Decimal(savefile.upupgrade4),
			new Decimal(savefile.upupgrade5),
			new Decimal(savefile.upupgrade6),
		];
		ppupgradelist = [
			new Decimal(savefile.ppupgrade1),
			new Decimal(savefile.ppupgrade2),
			new Decimal(savefile.ppupgrade3),
			new Decimal(savefile.ppupgrade4),
			new Decimal(savefile.ppupgrade5),
			new Decimal(savefile.ppupgrade6),
			new Decimal(savefile.ppupgrade7),
			new Decimal(savefile.ppupgrade8),
			new Decimal(savefile.ppupgrade9),
		];
		precision = savefile.precision;
		notation = savefile.notation;
		savefile.version = version;
		if ((qolupgradelist[0].compare(1) >= 0 || rollresets.compare(1) >= 0) && timelaston <= Math.floor(new Date().getTime() / 1000)) {
			//offline prog
			timelaston = Math.floor(new Date().getTime() / 1000) - timelaston;
			timelaston = Math.floor(timelaston / 20);
			timelastondisplay = timelaston;
			gaincalc();
			ballpoints = ballpoints.add(
				ballpointgain
					.times(
						boxvalues[0]
							.times(new Decimal("2"))
							.add(boxvalues[1].times(new Decimal("2")).add(boxvalues[2].times(new Decimal("2")).add(boxvalues[3])))
							.divideBy(new Decimal("7"))
					)
					.times(new Decimal(timelaston))
			);
			xp = xp.add(
				xpgain
					.times(
						boxvalues[0]
							.times(new Decimal("2"))
							.add(boxvalues[1].times(new Decimal("2")).add(boxvalues[2].times(new Decimal("2")).add(boxvalues[3])))
							.divideBy(new Decimal("7"))
					)
					.times(new Decimal(timelaston))
			);
			if (activechallenge !== 1) {
				rotations = rotations.add(rotationgain);
			}
			if (bounceresets.compare(1) >= 0) {
				bounceresettime = bounceresettime.add(new Decimal(timelaston));
			}
			if (boupgradelist[5] >= 1) {
				boxpoints = boxpoints.add(
					boxpointgain.times(new Decimal("0.1").plus(new Decimal(0.99).times(comparemath(hits, 5)))).times(new Decimal(timelaston))
				);
			}
			if (hits.compare(16) >= 0) {
				energy = energy.add(energygain.times(new Decimal("0.01").plus(new Decimal(0.99).times(comparemath(hits, 22)))).times(new Decimal(timelaston)));
			}
			if (hits.compare(27)) {
				electricity = electricity.plus(electricitygain.times(0.01).times(new Decimal(timelaston)));
			}
			for (m = 0; m < tasks.length; m = m + 1) {
				if (taskprogress[m].compare(0) > 0) {
					taskprogress[m] = taskprogress[m].minus(new Decimal(timelaston));
					if (taskprogress[m].compare(0) <= 0) {
						tasks[m] = tasks[m].add(1);
						taskprice = [
							new Decimal("10").times(new Decimal("1.25").pow(tasks[0])),
							new Decimal("25").times(new Decimal("1.65").pow(tasks[1])),
							new Decimal("50").times(new Decimal("1.75").pow(tasks[2])),
						];
						tasktime = [
							new Decimal("1.25").pow(tasks[0]),
							new Decimal("5").times(new Decimal("1.3").pow(tasks[1])),
							new Decimal("7.5").times(new Decimal("1.35").pow(tasks[2])),
						];
						tasktime.forEach((v, i) => {
							tasktime[i] = tasktime[i]
								.times(
									new Decimal("1").divideBy(
										new Decimal("1")
											.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
											.times(Math.abs(chargeamount / 100))
											.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
											.times(comparemath(hits, 14))
											.plus(1)
									)
								)
								.times(
									new Decimal("1").add(
										new Decimal("1")
											.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
											.times(Math.abs(chargeamount / 100))
											.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
											.times(comparemath(hits, 14))
									)
								);
							if (tasktime[i].compare(1) <= 0) {
								tasktime[i] = new Decimal("1");
							}
						});
					}
				}
			}
			if (activechallenge === 4) {
				burnoutfunctionality = setInterval(burnout, 1000);
			}
		}
	}
	save();
	if (JSON.stringify(savefile) !== "[object Object]") {
		localStorage.setItem("save", JSON.stringify(savefile));
	} else {
		alert("save failed!");
	}
	//price/cap setups
	pcaplist = [new Decimal("400"), new Decimal("400"), new Decimal("25"), new Decimal("4"), new Decimal("25")];
	spcaplist = [
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1.79e308"),
	];
	bcaplist = [
		new Decimal("999"),
		new Decimal("999"),
		new Decimal("999"),
		new Decimal("999"),
		new Decimal("400"),
		new Decimal("400"),
		new Decimal("25"),
		new Decimal("50"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal(15),
		new Decimal(1),
	];
	qolcaplist = [new Decimal("7"), new Decimal("1"), new Decimal("1"), new Decimal("1")];
	rcaplist = [
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
	];
	revcaplist = [new Decimal("1"), new Decimal("20"), new Decimal("25"), new Decimal("25"), new Decimal("1.79e308")];
	bocaplist = [
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
	];
	challengecap = [10, 25, 10, 100, 1, 10, 5, 1];
	challengegoal = [
		1000 * 3 ** challengelist[0],
		20 * 2 ** challengelist[1] * (1 - comparemath(hits, 25) * 0.6),
		challengelist[2] + 1,
		120 + 2 * challengelist[3],
		20,
		100 + 2 * challengelist[5],
		95 + 2 * challengelist[6],
		20,
	];
	pupgradeprice = [
		new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
	];
	bupgradeprice = [
		new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
		new Decimal("2.5e75"),
	];
	spupgradeprice = [
		new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
	];
	qolupgradeprice = [
		new Decimal("10").times(new Decimal("5").pow(qolupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("5000").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("10000").times(new Decimal(0.99).pow(challengelist[5])),
	];
	rupgradeprice = [
		new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1e40"),
		new Decimal("1e45"),
		new Decimal("1e50"),
	];
	revupgradeprice = [
		new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
		new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
	];
	boupgradeprice = [
		new Decimal("1"),
		new Decimal("2"),
		new Decimal("20"),
		new Decimal("200"),
		new Decimal("2000"),
		new Decimal("1"),
		new Decimal("2"),
		new Decimal("20"),
		new Decimal("200"),
		new Decimal("2000"),
		new Decimal("1"),
		new Decimal("2"),
		new Decimal("20"),
		new Decimal("200"),
		new Decimal("2000"),
		new Decimal("1"),
		new Decimal("2"),
		new Decimal("20"),
		new Decimal("200"),
		new Decimal("2000"),
		new Decimal("10"),
		new Decimal("100"),
		new Decimal("500"),
		new Decimal("10000"),
		new Decimal("1000000"),
		new Decimal("1e27"),
		new Decimal("1e27"),
		new Decimal("1e27"),
		new Decimal("1e27"),
		new Decimal("1e27"),
	];
	taskprice = [
		new Decimal("10").times(new Decimal("1.25").pow(tasks[0])),
		new Decimal("25").times(new Decimal("1.65").pow(tasks[1])),
		new Decimal("50").times(new Decimal("1.75").pow(tasks[2])),
	];
	tasktime = [
		new Decimal("1.25").pow(tasks[0]),
		new Decimal("5").times(new Decimal("1.3").pow(tasks[1])),
		new Decimal("7.5").times(new Decimal("1.35").pow(tasks[2])),
	];
	tasktime.forEach((v, i) => {
		tasktime[i] = tasktime[i]
			.times(
				new Decimal("1").divideBy(
					new Decimal("1")
						.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
						.times(comparemath(hits, 14))
						.plus(1)
				)
			)
			.times(
				new Decimal("1").add(
					new Decimal("1")
						.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
						.times(Math.abs(chargeamount / 100))
						.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
						.times(comparemath(hits, 14))
				)
			);
		if (tasktime[i].compare(1) <= 0) {
			tasktime[i] = new Decimal("1");
		}
	});
	screenname = [
		"Statistics",
		"Settings",
		"Plinko Machine",
		"Boxify Area",
		"Roll Area",
		"Bounce Area",
		"Bounce-Extension Area",
		"Challenge Area",
		"Strike Area",
	];
	notationlist = [
		"Scientific [1.79e308]",
		"Engineering [179e306]",
		"Letters [1.79kw]",
		"Standard-Short [1.79UCe]",
		"Standard-Long [1.79UQiQa]",
		"Logarithmic [e308.252]",
		"Arrow [10 ↑ 308.252]",
		"Hyper-E [E308.252]",
		"Blind [ ]",
		"Random [randomly cycles through]",
	];
	botitlelist = [
		"Progression",
		"QoL",
		"Jump",
		"Synergy",
		"Other",
		"V",
		"I",
		"II",
		"III",
		"IV",
		"Progression VI",
		"QoL VI",
		"Jump VI",
		"Synergy VI",
		"Other VI",
	];
	bodescriptionlist = [
		"Boxify's equation is better.",
		"Point Synergy’s equation is better. Also every automation upgrade lowers Roll requirement by 2.",
		"Double Rotations and Revolutions gain. Also doubles the effect of “More Balls”.",
		"Level scaling is weaker. +50% Progression II’s second effect.",
		"x5 everything below bounce (except for RP). This includes: Points, XP, BP, Boxes, SP, Rotations, and Revolutions. Post-80 Level scaling is weakened. +100% Progression II’s second effect.",
		"Gain 1% of BP per second.",
		"Boxify upgrades spend nothing.",
		"Boxify doesn’t reset point upgrades.",
		"Automates BP Upgrades.",
		"Rotation upgrades don’t spend Rotations. Keep all point upgrades on Roll.",
		"Jumps boost Jumps.",
		"Jump formula is better.",
		"Bounce upgrades boost Jumps.",
		"Unlock a new revolutions effect.",
		"Jumps are boosted by number of Bounce resets.",
		"Level boosts Revolution gain.",
		"Revolutions boost Rotations.",
		"BallPoints lower Roll requirement.",
		"Jumps boost XP gain.",
		"Special Pegs boost BP.",
		"Boost BP gain based on time since bounce reset.",
		"Unlock Imaginary Revolutions. They add to the revolution and streak effect.",
		"Unlocks Energy.",
		"Boost Rotation gain based on time since bounce reset.",
		"Unlock Challenges.",
		"Progression I-V upgrade effects are better.",
		"Keep Roll Upgrades on all resets below Strike/Annihilation (including them).",
		"Jump I-V upgrade effects are multiplied by 2.",
		"All Pre-Strike/Annihilation Synergy Upgrades (ones labeled Synergy) are boosted.",
		"Lower Strike requirement by 10 and Annihilation requirement by 100.",
	];
	challengetitles = ["Broken Gear", "Revolving Hell", "No Boxes", "Burnout", "Final I", "Upgrade Drought", "No Upgrades", "Final II"];
	challengedesc = [
		'"not my fault it is not centered" <br> Square root rotation gain. Rotations can not be gained by offline progress. <br> Reward: x1.5^(completions) rotation gain. New challenge unlocked at first completion.',
		'"i dont like rhythm games tbh" <br> Revolution gain is set to 1. Revolution speed is higher. <br> Reward: x2(1.2^(completions)) revolutions. Unlock a new challenge at 2 completions.',
		'"boxify was useless anyway" <br> Boxify is removed. You can not gain any BoxPoints. <br> Reward: ^(1+0.0005(completions)) BP gain. Unlock a new challenge at 1 completion.',
		'"meowfest simulator" <br> You lose 0.1 * (completions + 1)% of BallPoints, XP, BoxPoints, Special Pegs, Rotations and Revolutions per second. <br> Reward: x(1+(completions * 0.1)) currencies that the challenge affects. Unlock a new challenge at 10 completions.',
		'"why is there a I at the end of the final challenge" <br> Raise BallPoints, XP, BP, RP, Rotations, Revolutions, Special Pegs and Box Value to the 0.05th power. <br> Reward: New Reset!',
		'"who needs these anyway lol" <br> You can buy only 10 upgrades per upgrade building (except for QoL). <br> Reward: x0.99^(completions) upgrade prices for all upgrades before bounce.',
		'"who ACTUALLY needs them lmao" <br> You cannot buy upgrades (except QoL). <br> Reward: x1.1^(completions) energy and electricity.',
		'"there is no way a third one exists" <br> Applies Final I but you cannot buy bounce upgrades. Forces a respec as well as adding energy to the Final I nerf. <br> Reward: ???',
	];
	particlecaplist = [
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
	];
	particledescriptionlist = [
		"Lowers Roll requirement based on Jumps.",
		"Unlocks Condense.",
		"Revolutions and Special Pegs boost each other.",
		"Task equations are changed.",
		"Increase Ultra Peg gain.",
		"Adds two new Boxify upgrades.",
		"Special Pegs and Ultra Pegs boost each other.",
		"Batteries and Electricity boost each other.",
		"Unlocks Packaging.",
		"Adds three new Roll upgrades.",
		"BoxPoints and Electricity boost each other.",
		"Batteries gained per Bounce is boosted by Batteries.",
		"Packaged Points boost themselves.",
		"Ultra Pegs and Packaged Points boost each other.",
		"Unlocks a new set of bounce upgrades.",
		"Boost Battery gain per bounce based on time since Bounce reset.",
		"Boost Energy gain based on Electricity.",
		"Boost Packaged Points based on batteries.",
		"TBD (endgame)",
	];
	particletitlelist = [
		"Bounce-Roll Synergy",
		"Layer+",
		"Revolution-SP Synergy",
		"Energy+",
		"Ultra Peg Boost",
		"Boxify++",
		"SP-UP Synergy",
		"Battery-Electricity Synergy",
		"Layer++",
		"Roll++",
		"BP-Electricity Synergy",
		"Battery Self-Synergy",
		"PP Boost",
		"UP-PP Synergy",
		"Bounce+",
		"Battery Boost",
		"Energy-Electricity Synergy",
		"PP-Battery Synergy",
		"Layer+++",
	];
	particlepricelist = [
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("1"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("2"),
		new Decimal("3"),
	];
	upupgradeprice = [
		new Decimal("5"),
		new Decimal("150"),
		new Decimal("250"),
		new Decimal("500"),
		new Decimal("2000").times(new Decimal("1.3").pow(upupgradelist[4])),
		new Decimal("10000"),
	];
	upcaplist = [new Decimal("1"), new Decimal("1"), new Decimal("1"), new Decimal("1"), new Decimal("1.79e308"), new Decimal("1")];
	ppupgradeprice = [
		new Decimal("1.75").pow(ppupgradelist[0]),
		new Decimal("1.75").pow(ppupgradelist[1]),
		new Decimal("1.75").pow(ppupgradelist[2]),
		new Decimal("1.75").pow(ppupgradelist[3]),
		new Decimal("25").times(new Decimal(1.7).pow(ppupgradelist[4])),
		new Decimal("45").times(new Decimal(1.75).pow(ppupgradelist[5])),
		new Decimal("950").times(new Decimal(1.55).pow(ppupgradelist[6])),
		new Decimal("3e4").times(new Decimal(3.5).pow(ppupgradelist[7])),
		new Decimal("1e6"),
	];
	ppcaplist = [
		new Decimal("999"),
		new Decimal("999"),
		new Decimal("999"),
		new Decimal("999"),
		new Decimal("300"),
		new Decimal("300"),
		new Decimal("30"),
		new Decimal("10"),
		new Decimal("1"),
	];
	//displays
	function display() {
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
		for (m = 1; m <= qolupgradelist.length; m = m + 1) {
			document.getElementById("qolupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(qolupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("qolupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(qolupgradelist[m - 1]) + "/" + decimalToString(qolcaplist[m - 1]);
		}
		for (m = 1; m <= rupgradelist.length; m = m + 1) {
			document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
			document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
		}
		for (m = 1; m <= revupgradelist.length; m = m + 1) {
			document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
			document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
		}
		for (m = 1; m <= upupgradelist.length; m = m + 1) {
			document.getElementById("upupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(upupgradeprice[m - 1]) + " Ultra Pegs";
			document.getElementById("upupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(upupgradelist[m - 1]) + "/" + decimalToString(upcaplist[m - 1]);
		}
		for (m = 1; m <= ppupgradelist.length; m = m + 1) {
			document.getElementById("ppupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(ppupgradeprice[m - 1]) + " Packaged Points";
			document.getElementById("ppupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(ppupgradelist[m - 1]) + "/" + decimalToString(ppcaplist[m - 1]);
		}
		if (mutesfx.compare(new Decimal("0")) === 0) {
			document.getElementById("mutesfx").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("mutesfx").style.backgroundColor = "#f27777";
		}
		if (mutemusic.compare(new Decimal("0")) === 0) {
			document.getElementById("mutemusic").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("mutemusic").style.backgroundColor = "#f27777";
		}
		if (disableautodrop.compare(new Decimal("0")) === 0) {
			document.getElementById("disableautodrop").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("disableautodrop").style.backgroundColor = "#f27777";
		}
		if (disableautoplinko.compare(new Decimal("0")) === 0) {
			document.getElementById("disableplinkoauto").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("disableplinkoauto").style.backgroundColor = "#f27777";
		}
		if (disableautoboxify.compare(new Decimal("0")) === 0) {
			document.getElementById("disableboxifyauto").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("disableboxifyauto").style.backgroundColor = "#f27777";
		}
		if (boupgradelist[22] >= 1) {
			document.getElementById("energyreset").style.display = "inline";
			document.getElementById("tasks").style.display = "flex";
			document.getElementById("tasks2").style.display = "flex";
			document.getElementById("energydisplay").innerHTML = "You have " + decimalToString(energy) + " Energy!";
			document.getElementById("energydisplay").style.display = "flex";
		} else {
			document.getElementById("energyreset").style.display = "none";
			document.getElementById("tasks").style.display = "none";
			document.getElementById("tasks2").style.display = "none";
			document.getElementById("energydisplay").style.display = "none";
		}
		if (boupgradelist[21] >= 1) {
			document.getElementById("irevinfo").style.display = "inline";
		}
		document.getElementById("ballcompdisplay").innerHTML = "Ball Compaction Start: " + ballcap.toString() + " Balls";
		document.getElementById("ballcomp").value = ballcap;
		document.getElementById("precisiondisplay").innerHTML = "Digit Precision: " + precision.toString() + " Places";
		document.getElementById("precision").value = precision;
		document.getElementById("notationdisplay").innerHTML = "Number Notation: " + notationlist[notation];
		document.getElementById("notation").value = notation;
		for (m = 1; m < 5; m = m + 1) {
			if (revselectlist.includes(m)) {
				document.getElementById("reveffect" + m.toString()).style.backgroundColor = "yellowgreen";
			} else {
				document.getElementById("reveffect" + m.toString()).style.backgroundColor = "salmon";
			}
		}
		for (m = 1; m <= parseFloat(decimalToString2(hits)); m++) {
			document.getElementById("hitmilestone" + m.toString()).style.backgroundColor = "#2cd459";
		}
		for (m = 1; m <= challengelist.length; m = m + 1) {
			document.getElementById("challenge" + m.toString()).innerHTML = challengetitles[m - 1] + " " + challengelist[m - 1] + "/" + challengecap[m - 1];
		}
		if (activechallenge !== 0) {
			document.getElementById("challengestart").innerHTML = "Exit!";
			document.body.style.backgroundColor = "rgb(167, 167, 167)";
		}
		if (challengelist[0] >= 1) {
			document.getElementById("challenge2").style.display = "block";
		}
		if (challengelist[1] >= 2) {
			document.getElementById("challenge3").style.display = "block";
		}
		if (challengelist[2] >= 1) {
			document.getElementById("challenge4").style.display = "block";
		}
		if (challengelist[3] >= 10) {
			document.getElementById("challenge5").style.display = "block";
		}
		if (batteries.compare(10) >= 0) {
			document.getElementById("challenge6").style.display = "block";
			document.getElementById("challenge7").style.display = "block";
			document.getElementById("challenge8").style.display = "block";
		}
	}
	display();
	//actual program time!!!
	let challengegoalcurr = ["Rotations", "Revolutions", "RollPoints", "Levels", "Levels", "Levels", "Levels", "Levels"];
	if (activechallenge !== 0) {
		document.getElementById("challengeinfo").innerHTML =
			challengedesc[activechallenge - 1] + "<br> Goal: " + challengegoal[activechallenge - 1] + " " + challengegoalcurr[activechallenge - 1];
	}
	document.getElementById("transferamount").innerHTML = "Current Setting: " + chargeamount.toString();
	document.getElementById("transferslider").value = chargeamount;
	fps1 = new Date();

	function tick() {
		gaincalc();
		if (notation == 9) {
			display();
		}
		document.getElementById("ballcompactionmeter").innerHTML =
			"Ball Compaction (extra balls contribute as a BallPoint + XP multipier): x" + ballcomp.toString();
		//more displays...
		taskprice = [
			new Decimal("10").times(new Decimal("1.25").pow(tasks[0])),
			new Decimal("25").times(new Decimal("1.65").pow(tasks[1])),
			new Decimal("50").times(new Decimal("1.75").pow(tasks[2])),
		];
		tasktime = [
			new Decimal("1.25").pow(tasks[0]),
			new Decimal("5").times(new Decimal("1.3").pow(tasks[1])),
			new Decimal("7.5").times(new Decimal("1.35").pow(tasks[2])),
		];
		tasktime.forEach((v, i) => {
			tasktime[i] = tasktime[i]
				.times(
					new Decimal("1").divideBy(
						new Decimal("1")
							.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
							.times(comparemath(hits, 14))
							.plus(1)
					)
				)
				.times(
					new Decimal("1").add(
						new Decimal("1")
							.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
							.times(Math.abs(chargeamount / 100))
							.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
							.times(comparemath(hits, 14))
					)
				);
			if (tasktime[i].compare(1) <= 0) {
				tasktime[i] = new Decimal("1");
			}
		});
		if (rupgradelist[3].compare(new Decimal("1")) >= 0) {
			pcaplist[2] = new Decimal("35");
			for (m = 1; m <= pupgradelist.length; m = m + 1) {
				document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
				document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
			}
		}
		if (rupgradelist[3].compare(new Decimal("1")) >= 0) {
			pcaplist[4] = new Decimal("35");
			for (m = 1; m <= pupgradelist.length; m = m + 1) {
				document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
				document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
			}
		}
		document.getElementById("orangedisplay").innerHTML = "x" + decimalToString(boxvalues[0]);
		document.getElementById("orangedisplay2").innerHTML = "x" + decimalToString(boxvalues[0]);
		document.getElementById("yellowdisplay").innerHTML = "x" + decimalToString(boxvalues[1]);
		document.getElementById("yellowdisplay2").innerHTML = "x" + decimalToString(boxvalues[1]);
		document.getElementById("reddisplay").innerHTML = "x" + decimalToString(boxvalues[2]);
		document.getElementById("reddisplay2").innerHTML = "x" + decimalToString(boxvalues[2]);
		document.getElementById("greendisplay").innerHTML = "x" + decimalToString(boxvalues[3]);
		document.getElementById("ballpointsdisplay").innerHTML = "You have " + decimalToString(ballpoints) + " BallPoints!";
		if (xp.divideBy(levelreq) >= 1) {
			document.getElementById("levelbar").style.width = "100%";
		} else {
			document.getElementById("levelbar").style.width = decimalToString(xp.divideBy(levelreq).times(new Decimal("100"))) + "%";
		}
		document.getElementById("leveldisplay").innerHTML = "Level: " + decimalToString(level);
		document.getElementById("leveldisplayxp").innerHTML = "XP: " + decimalToString(xp) + " / " + decimalToString(levelreq);
		if (boxifyresets.compare(1) >= 0) {
			document.getElementById("boxifyupgradebuilding").style.display = "inline";
			document.getElementById("specialpegbuilding").style.display = "inline";
			document.getElementById("qolbuilding").style.display = "inline";
			document.getElementById("newsticker").style.display = "inline";
			document.getElementById("specialpegdisplay").innerHTML = "You have " + decimalToString(specialpegs) + " Special Pegs!";
			document.getElementById("specialpegdisplay").style.display = "flex";
			specialpegunlocked = 1;
		} else {
			specialpegunlocked = 0;
		}
		if (rollresets.compare(1) >= 0) {
			document.getElementById("rollupgradebuilding").style.display = "inline";
			document.getElementById("rotationdisplay").innerHTML = "You have " + decimalToString(rotations) + " Rotations!";
			document.getElementById("rollpointdisplay").innerHTML = "You have " + decimalToString(rollpoints) + " RollPoints!";
			document.getElementById("rotationdisplay").style.display = "flex";
			document.getElementById("rollpointdisplay").style.display = "flex";
		}
		if (rupgradelist[8].compare(1) === 0) {
			document.getElementById("revolutionsbuilding").style.display = "inline";
			document.getElementById("revolutiondisplay").innerHTML = "You have " + decimalToString(revolutions) + " Revolutions!";
			document.getElementById("revolutiondisplay").style.display = "flex";
			document.getElementById("revolutionsselect").style.display = "flex";
			document.getElementById("reveffect1").innerHTML =
				"BallPoints boost: +x" + decimalToString(new Decimal("1.38").times(revolutions.pow(new Decimal("0.58"))));
			document.getElementById("reveffect2").innerHTML = "XP boost: +x" + decimalToString(new Decimal("1.25").times(revolutions.pow(new Decimal("0.64"))));
			document.getElementById("reveffect3").innerHTML =
				"BoxPoints boost: +x" + decimalToString(new Decimal("1.13").times(revolutions.pow(new Decimal("0.59"))));
			document.getElementById("reveffect4").innerHTML =
				"Special Peg boost: +x" + decimalToString(new Decimal("2").times(revolutions.pow(new Decimal("0.62"))));
			document.getElementById("reveffect5").innerHTML =
				"Rotation boost: +x" + decimalToString(new Decimal("3").times(revolutions.pow(new Decimal("0.61"))));
			document.getElementById("reveffect6").innerHTML =
				"Jumps boost: +x" + decimalToString(new Decimal("0.1").times(revolutions.pow(new Decimal("0.5"))));
			document.getElementById("reveffect7").innerHTML =
				"Energy boost: +x" + decimalToString(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10())));
			document.getElementById("reveffect8").innerHTML =
				"Electricity boost: +x" + decimalToString(new Decimal("1.4").pow(new Decimal(revolutions.plus(1).log10())));
			document.getElementById("revupgradebuilding").style.display = "inline";
		} else {
			document.getElementById("revolutionsbuilding").style.display = "none";
			document.getElementById("revolutiondisplay").style.display = "none";
			document.getElementById("revolutionsselect").style.display = "none";
		}
		document.getElementById("boxpointdisplay").innerHTML = "You have " + decimalToString(boxpoints) + " BoxPoints!";
		if (bounceresets.compare(new Decimal("1")) >= 0) {
			document.getElementById("bouncewall").style.display = "inline";
			document.getElementById("bounceupgradebuilding").style.display = "inline";
			document.getElementById("bounceinforespec").style.display = "inline";
			document.getElementById("jumpdisplay").innerHTML = "You have " + decimalToString(jumps) + " Jumps!";
			document.getElementById("jumpdisplay").style.display = "flex";
		}
		if (challengelist[7] === 0 && strikeresets === 0) {
			document.getElementById("strikebuilding").style.display = "none";
			document.getElementById("hitmilestonebuilding").style.display = "none";
			document.getElementById("hitdisplay").style.display = "none";
		} else {
			document.getElementById("strikebuilding").style.display = "block";
			document.getElementById("hitmilestonebuilding").style.display = "flex";
			document.getElementById("hitdisplay").style.display = "flex";
			document.getElementById("hitdisplay").innerHTML = "You have " + decimalToString(hits) + " Hits!";
		}
		if (hits.compare(15) < 0) {
			document.getElementById("annihilationbuilding").style.display = "none";
		} else {
			document.getElementById("annihilationbuilding").style.display = "block";
		}
		if (annihilationresets >= 1) {
			document.getElementById("particletree").style.display = "block";
			document.getElementById("particleupgradebuilding").style.display = "block";
			document.getElementById("particledisplay").style.display = "flex";
			document.getElementById("particledisplay").innerHTML = "You have " + decimalToString(particles) + " Particles!";
		} else {
			document.getElementById("particletree").style.display = "none";
			document.getElementById("particleupgradebuilding").style.display = "none";
			document.getElementById("particledisplay").style.display = "none";
		}
		document.getElementById("task1").innerHTML =
			"Oil the Gear ~ boosting Rotation gain by x" +
			decimalToString(
				new Decimal("1.5").pow(tasks[0]).times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7))))
			) +
			". Costs: " +
			decimalToString(taskprice[0]) +
			" Energy and " +
			decimalToString(tasktime[0]) +
			" seconds.";
		document.getElementById("task2").innerHTML =
			"Fix the Boxes ~ boosting Boxes by x" +
			decimalToString(
				new Decimal("1.25").pow(tasks[1]).times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7))))
			) +
			". Costs: " +
			decimalToString(taskprice[1]) +
			" Energy and " +
			decimalToString(tasktime[1]) +
			" seconds.";
		document.getElementById("task3").innerHTML =
			"Spin the Circle Faster ~ boosting Revolution gain by x" +
			decimalToString(
				new Decimal("1.5").pow(tasks[2]).times(new Decimal(1).plus(new Decimal("1.2").pow(batteries.pow(0.5)).times(comparemath(hits, 7))))
			) +
			". Costs: " +
			decimalToString(taskprice[2]) +
			" Energy and " +
			decimalToString(tasktime[2]) +
			" seconds.";
		if (taskprogress[0].compare(0) > 0) {
			document.getElementById("task1").innerHTML = "Time remaining: " + decimalToString(taskprogress[0]) + " seconds...";
			document.getElementById("task1bar").style.width =
				decimalToString(taskprogress[0].divide(tasktime2[0]).times(new Decimal("100").minus(new Decimal("20")))) + "%";
		} else {
			document.getElementById("task1bar").style.width = "0px";
		}
		if (taskprogress[1].compare(0) > 0) {
			document.getElementById("task2").innerHTML = "Time remaining: " + decimalToString(taskprogress[1]) + " seconds...";
			document.getElementById("task2bar").style.width =
				decimalToString(taskprogress[1].divide(tasktime2[1]).times(new Decimal("100").minus(new Decimal("20")))) + "%";
		} else {
			document.getElementById("task2bar").style.width = "0px";
		}
		if (taskprogress[2].compare(0) > 0) {
			document.getElementById("task3").innerHTML = "Time remaining: " + decimalToString(taskprogress[2]) + " seconds...";
			document.getElementById("task3bar").style.width =
				decimalToString(taskprogress[2].divide(tasktime2[2]).times(new Decimal("100").minus(new Decimal("20")))) + "%";
		} else {
			document.getElementById("task3bar").style.width = "0px";
		}
		if (boupgradelist[24] === 1) {
			document.getElementById("challengebuilding").style.display = "flex";
			document.getElementById("challengeselector").style.display = "block";
		} else {
			document.getElementById("challengebuilding").style.display = "none";
			document.getElementById("challengeselector").style.display = "none";
		}
		if (challengelist[4] > 0) {
			document.getElementById("transferbuilding").style.display = "block";
			document.getElementById("transferreset").style.display = "block";
			document.getElementById("electricitydisplay").innerHTML = "You have " + decimalToString(electricity) + " Electricity!";
			document.getElementById("batterydisplay").innerHTML = "You have " + decimalToString(batteries) + " Batteries!";
			document.getElementById("electricitydisplay").style.display = "flex";
			document.getElementById("batterydisplay").style.display = "flex";
		} else {
			document.getElementById("transferbuilding").style.display = "none";
			document.getElementById("transferreset").style.display = "none";
			document.getElementById("electricitydisplay").style.display = "none";
			document.getElementById("batterydisplay").style.display = "none";
		}
		if (batteries.compare(10) >= 0) {
			document.getElementById("challenge6").style.display = "block";
		}
		if (boupgradelist[22] >= 1) {
			document.getElementById("energyreset").style.display = "inline";
			document.getElementById("tasks").style.display = "flex";
			document.getElementById("tasks2").style.display = "flex";
			document.getElementById("energydisplay").innerHTML = "You have " + decimalToString(energy) + " Energy!";
			document.getElementById("energydisplay").style.display = "flex";
		} else {
			document.getElementById("energyreset").style.display = "none";
			document.getElementById("tasks").style.display = "none";
			document.getElementById("tasks2").style.display = "none";
			document.getElementById("energydisplay").style.display = "none";
		}
		//the great particle wall
		if (particleupgradelist[0] === 1) {
			document.getElementById("particleupgrade2").style.display = "block";
			document.getElementById("particleupgrade3").style.display = "block";
			document.getElementById("particleupgrade4").style.display = "block";
		}
		if (particleupgradelist[1] === 1) {
			document.getElementById("particleupgrade5").style.display = "block";
			document.getElementById("particleupgrade6").style.display = "block";
			if (particleupgradelist[2] === 1) {
				document.getElementById("particleupgrade7").style.display = "block";
			}
		}
		if (particleupgradelist[2] === 1 && particleupgradelist[3] === 1) {
			document.getElementById("particleupgrade8").style.display = "block";
		}
		if (particleupgradelist[4] === 1) {
			document.getElementById("particleupgrade9").style.display = "block";
		}
		if (particleupgradelist[5] === 1) {
			document.getElementById("particleupgrade10").style.display = "block";
		}
		if (particleupgradelist[6] === 1) {
			document.getElementById("particleupgrade12").style.display = "block";
			if (particleupgradelist[5] === 1) {
				document.getElementById("particleupgrade11").style.display = "block";
			}
		}
		if (particleupgradelist[8] === 1) {
			document.getElementById("particleupgrade13").style.display = "block";
			if (particleupgradelist[10] === 1) {
				document.getElementById("particleupgrade14").style.display = "block";
			}
		}
		if (particleupgradelist[9] === 1) {
			document.getElementById("particleupgrade15").style.display = "block";
		}
		if (particleupgradelist[11] === 1) {
			document.getElementById("particleupgrade16").style.display = "block";
			document.getElementById("particleupgrade17").style.display = "block";
			if (particleupgradelist[10] === 1) {
				document.getElementById("particleupgrade18").style.display = "block";
			}
		}
		if (
			particleupgradelist[12] === 1 &&
			particleupgradelist[13] === 1 &&
			particleupgradelist[14] === 1 &&
			particleupgradelist[15] === 1 &&
			particleupgradelist[16] === 1 &&
			particleupgradelist[17] === 1
		) {
			document.getElementById("particleupgrade19").style.display = "block";
		}
		if (particleupgradelist[14] === 1) {
			document.getElementById("bounceextension").style.display = "block";
		} else {
			document.getElementById("bounceextension").style.display = "none";
		}
		resize();
		//ball desapwn code
		if (despawn === 1) {
			xposdespawn = xposdespawn / 100;
			if (xposdespawn <= 1 / 7 || xposdespawn > 6 / 7) {
				ballpoints = ballpointgain.times(boxvalues[0]).plus(ballpoints);
				xp = xpgain.times(boxvalues[0]).plus(xp);
				ballpointgaindisplay = ballpointgain.times(boxvalues[0]);
				xpgaindisplay = xpgain.times(boxvalues[0]);
			}
			if ((xposdespawn > 1 / 7 && xposdespawn <= 2 / 7) || (xposdespawn > 5 / 7 && xposdespawn <= 6 / 7)) {
				ballpoints = ballpointgain.times(boxvalues[1]).plus(ballpoints);
				xp = xpgain.times(boxvalues[1]).plus(xp);
				ballpointgaindisplay = ballpointgain.times(boxvalues[1]);
				xpgaindisplay = xpgain.times(boxvalues[1]);
			}
			if ((xposdespawn > 2 / 7 && xposdespawn <= 3 / 7) || (xposdespawn > 4 / 7 && xposdespawn <= 5 / 7)) {
				ballpoints = ballpointgain.times(boxvalues[2]).plus(ballpoints);
				xp = xpgain.times(boxvalues[2]).plus(xp);
				ballpointgaindisplay = ballpointgain.times(boxvalues[2]);
				xpgaindisplay = xpgain.times(boxvalues[2]);
			}
			if (xposdespawn > 3 / 7 && xposdespawn <= 4 / 7) {
				ballpoints = ballpointgain.times(boxvalues[3]).plus(ballpoints);
				xp = xpgain.times(boxvalues[3]).plus(xp);
				ballpointgaindisplay = ballpointgain.times(boxvalues[3]);
				xpgaindisplay = xpgain.times(boxvalues[3]);
			}
			spawnpopuptext(ballpointgaindisplay, xpgaindisplay, xposdespawn * 100);
			boxparticles(xposdespawn * 100);
			despawn = 0;
			xposdespawn = 0;
		}
		//various features
		if (specialpegtouch === 1) {
			specialpegs = specialpegs.add(specialpeggain);
			specialpegtouch = 0;
		}
		if (qolupgradelist[0].compare(1) >= 0) {
			balldropcooldown = new Decimal("6").minus(new Decimal("1").plus(new Decimal("0.5").times(qolupgradelist[0])));
			balldropunlocked = 1;
		} else {
			balldropunlocked = 0;
		}
		if (xp.compare(levelreq) >= 0) {
			xp = xp.minus(levelreq);
			level = level.plus(new Decimal("1"));
		}
		if (rotations.compare(irevreq) >= 0 && boupgradelist[21] >= 1) {
			irev = irev.plus(1);
		}
		if (level.compare(new Decimal("16")) >= 0) {
			document.getElementById("boxifyresetbutton").innerHTML = "Boxify!";
			document.getElementById("boxifyresettext").innerHTML =
				"Boxify for " +
				decimalToString(boxpointgain) +
				" BoxPoints and reset Level, XP, BallPoints, and all Plinko Upgrades. You need level 16 to reset. Resetting for the first time unlocks 3 new features.";
		} else {
			document.getElementById("boxifyresetbutton").innerHTML = "Locked...";
			document.getElementById("boxifyresettext").innerHTML = "Reach level 16 to Boxify.";
		}
		if (level.compare(rollpointreq) >= 0) {
			document.getElementById("rollresetbutton").innerHTML = "Roll!";
			document.getElementById("rollresettext").innerHTML =
				"Roll for 1 RollPoint and reset all Boxify content and previous features. In return you get a RollPoint, which generates Rotations passively. Those rotations can be spent on upgrades. The requirement increases based on your current amount of RollPoints. Rolling for the first time unlocks offline progress if you have not unlocked it yet as well.";
		} else {
			document.getElementById("rollresetbutton").innerHTML = "Locked...";
			document.getElementById("rollresettext").innerHTML =
				"Reach level " + decimalToString(rollpointreq) + " to Roll. <br> You currently have " + decimalToString(rollpoints) + " RollPoints.";
		}
		if (rollpoints.compare(new Decimal("10")) >= 0) {
			document.getElementById("bounceresetbutton").innerHTML = "Bounce!";
			document.getElementById("bounceresettext").innerHTML =
				"Bounce for " +
				decimalToString(jumpgain) +
				" Jumps. Bouncing for the first time unlocks a massive upgrade board where upgrades scale based on the amount purchaced in each row. Reseting resets everything (except QoL upgrades, your welcome) up to this point, in exchange for jumps.";
		} else {
			document.getElementById("bounceresetbutton").innerHTML = "Locked...";
			document.getElementById("bounceresettext").innerHTML = "You need at least 10 RollPoints to Bounce.";
		}
		if (boupgradelist[13] >= 1) {
			document.getElementById("reveffect6").style.display = "inline";
		}
		if (hits.compare(11) >= 0) {
			document.getElementById("reveffect7").style.display = "inline";
			document.getElementById("reveffect8").style.display = "inline";
		}
		if (rollpoints.compare(new Decimal("1")) >= 0) {
			document.getElementById("energyresetbutton").innerHTML = "Energize!";
			document.getElementById("energyresettext").innerHTML =
				"-- Energy --<br><br>Energize for " +
				decimalToString(energygain) +
				" Energy. Spend Energy and time on tasks to get buffs. Energizing resets Level, XP, BallPoints, Point Upgrades, Box Upgrades, Special Peg Upgrades, Special Pegs and BoxPoints and Roll content.";
		} else {
			document.getElementById("energyresetbutton").innerHTML = "Locked...";
			document.getElementById("energyresettext").innerHTML = "-- Energy --<br><br>You need at least 1 RollPoint to Energize.";
		}
		if (boupgradelist[21] >= 1) {
			document.getElementById("irevtext").innerHTML =
				"You currently have " +
				decimalToString(irev) +
				" Imaginary Revolutions. Earn your next one at " +
				decimalToString(irevreq) +
				" Rotations. Currently boosting all revolution effects by x" +
				decimalToString(irev.pow(1.25)) +
				", and boosting revolution streak bonus by x" +
				decimalToString(irev.pow(1.35)) +
				".";
		} else {
			document.getElementById("irevtext").innerHTML = "Locked...";
			irev = new Decimal(0);
		}
		if (challengelist[4] > 0) {
			document.getElementById("transfertext").innerHTML =
				"Reset Level, XP, BallPoints, Point Upgrades, Boxify content, Roll content and Energy content for " +
				decimalToString(electricitygain) +
				" Electricity. Read the bottom of the slider for more information.";
			const transfereffectlist = ["Green Box, SP, BP and BallPoints", "Red/Orange/Yellow Boxes, Revolutions, Rotations, XP and Jumps"];
			if (chargeamount == 0) {
				document.getElementById("transfereffect").innerHTML = "Doing nothing...";
			} else {
				document.getElementById("transfereffect").innerHTML =
					"Currently boosting: " +
					transfereffectlist[new Number(chargeamount < 0)] +
					" and nerfing: " +
					transfereffectlist[new Number(chargeamount > 0)];
			}
		}
		if (level.compare(hitreq) >= 0) {
			document.getElementById("striketext").innerHTML =
				"Reset all current progress (except QoL upgrades/bounce QoL) for 1 Hit. Resetting unlocks milestones that give rewards based on how many hits you have. These help you progress through the game and unlock new features. Strike does not scale until 10 hits due to the level scaling.";
		} else {
			document.getElementById("striketext").innerHTML = "Locked... (reach level " + decimalToString(hitreq) + ")";
		}
		if (new Decimal(ballamount2).compare(annihilationreq) >= 0) {
			document.getElementById("annihilationtext").innerHTML =
				"Reset everything strike did (before milestones) and gain 1 particle. Particles can be spent on an upgrade tree and unlock new stuff. Particles are based on your current max ball amount.";
		} else {
			document.getElementById("annihilationtext").innerHTML =
				"Locked... (reach " + decimalToString(annihilationreq) + " total ball amount to annihilate)";
		}
		if (specialpegs.compare(new Decimal("1e20")) >= 0) {
			document.getElementById("upresetbutton").innerHTML = "Condense!";
			document.getElementById("upresettext").innerHTML =
				"Condense for " + decimalToString(ultrapegsgain) + " Ultra Pegs and reset all content below Roll.";
		} else {
			document.getElementById("upresetbutton").innerHTML = "Locked...";
			document.getElementById("upresettext").innerHTML = "Reach 1e20 Special Pegs to Condense.";
		}
		if (boxpoints.compare(new Decimal("1e70")) >= 0) {
			document.getElementById("ppresetbutton").innerHTML = "Pack!";
			document.getElementById("ppresettext").innerHTML =
				"Package for " + decimalToString(packagepointsgain) + " Package Points and reset all content below Roll.";
		} else {
			document.getElementById("ppresetbutton").innerHTML = "Locked...";
			document.getElementById("ppresettext").innerHTML = "Reach 1e70 BoxPoints to reset...";
		}
		if (particleupgradelist[1] === 1) {
			document.getElementById("upswitcher").style.display = "block";
			document.getElementById("ultrapegdisplay").style.display = "flex";
			document.getElementById("ultrapegdisplay").innerHTML = "You have " + decimalToString(ultrapegs) + " Ultra Pegs!";
		} else {
			document.getElementById("upswitcher").style.display = "none";
			document.getElementById("ultrapegdisplay").style.display = "none";
		}
		if (particleupgradelist[8] === 1) {
			document.getElementById("ppswitcher").style.display = "block";
			document.getElementById("packagedpointdisplay").style.display = "flex";
			document.getElementById("packagedpointdisplay").innerHTML = "You have " + decimalToString(packagepoints) + " Packaged Points!";
		} else {
			document.getElementById("ppswitcher").style.display = "none";
			document.getElementById("packagedpointdisplay").style.display = "none";
		}
		gearangle = rotationgain.plus(1).log(10);
		gearangletotal = gearangle + gearangletotal;
		document.getElementById("rotationgear").style.transform = "rotate(" + gearangletotal.toString() + "deg)";
		if (revrotationallow === 1) {
			revimgrotation = revimgrotation + 1.5 + revstreak * 0.25 + new Number(activechallenge === 2) * 3;
			if (revimgrotation >= 360) {
				revimgrotation = revimgrotation - 360;
			}
			document.getElementById("revolutioncircle").style.transform = "rotate(" + revimgrotation.toString() + "deg)";
		}
		document.getElementById("map1/-1").style.display = "block";
		document.getElementById("map1/0").style.display = "block";
		document.getElementById("map1/1").style.display = "block";
		document.getElementById("map1/2").style.display = "block";
		document.getElementById("map1/3").style.display = "block";
		if (rollresets.compare(1) >= 0 || boupgradelist[24] === 1 || strikeresets > 0) {
			document.getElementById("map1/4").style.display = "block";
			document.getElementById("map1/5").style.display = "block";
		}
		if (boupgradelist[24] === 1 || strikeresets > 0) {
			document.getElementById("map1/6").style.display = "block";
		}
		if (strikeresets > 0) {
			document.getElementById("map1/7").style.display = "block";
		}
		//fps cap
		fps2 = new Date();
		fps = fps2 - fps1;
		fps1 = fps2;
		if (fps <= 16.7) {
			fps = 16.7;
			window.setTimeout(tick, fps);
		} else {
			window.requestAnimationFrame(tick);
		}
	}
	window.requestAnimationFrame(tick);
	//reset related functions and buttons
	function boxifyreset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Boxify reset triggered. Gain: " + decimalToString(boxpointgain) + " BP");
		boxpoints = boxpoints.plus(boxpointgain);
		boxifyresets = boxifyresets.plus(new Decimal("1"));
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		if (qolupgradelist[2].compare(1) === 0 && boupgradelist[7] < 1) {
			pupgradelist = [
				pupgradelist[0].divideBy(2).floor(),
				pupgradelist[1].divideBy(2).floor(),
				pupgradelist[2].divideBy(2).floor(),
				pupgradelist[3].divideBy(2).floor(),
				pupgradelist[4].divideBy(2).floor(),
			];
			pupgradeprice = [
				new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			];
			for (m = 1; m <= pupgradelist.length; m = m + 1) {
				document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
				document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
			}
		} else if (qolupgradelist[1].compare(1) === 0 && boupgradelist[7] < 1) {
			pupgradelist = [
				pupgradelist[0].divideBy(4).floor(),
				pupgradelist[1].divideBy(4).floor(),
				pupgradelist[2].divideBy(4).floor(),
				pupgradelist[3].divideBy(4).floor(),
				pupgradelist[4].divideBy(4).floor(),
			];
			pupgradeprice = [
				new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			];
			for (m = 1; m <= pupgradelist.length; m = m + 1) {
				document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
				document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
			}
		} else if (boupgradelist[7] < 1) {
			pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
			pupgradeprice = [
				new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			];
		}
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
	}

	function rollreset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Roll reset triggered. Gain: " + decimalToString(new Decimal(1)) + " RP");
		rollpoints = rollpoints.plus(new Decimal("1"));
		rollresets = rollresets.plus(new Decimal("1"));
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		bupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		if (hits.compare(16) < 0) {
			specialpegs = new Decimal("0");
			spupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
		if (bounceresets.compare(1) <= 0 && revolutions.compare(50) <= 0) {
			qolupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
			qolupgradeprice = [
				new Decimal("10").times(new Decimal("5").pow(qolupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10000").times(new Decimal(0.99).pow(challengelist[5])),
			];
		}
		for (m = 1; m <= qolupgradelist.length; m = m + 1) {
			document.getElementById("qolupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(qolupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("qolupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(qolupgradelist[m - 1]) + "/" + decimalToString(qolcaplist[m - 1]);
		}
		if (qolupgradelist[2].compare(1) === 0 && boupgradelist[9] < 1) {
			pupgradelist = [
				pupgradelist[0].divideBy(4).floor(),
				pupgradelist[1].divideBy(4).floor(),
				pupgradelist[2].divideBy(4).floor(),
				pupgradelist[3].divideBy(4).floor(),
				pupgradelist[4].divideBy(4).floor(),
			];
			pupgradeprice = [
				new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			];
			for (m = 1; m <= pupgradelist.length; m = m + 1) {
				document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
				document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
			}
		} else if (boupgradelist[9] < 1) {
			pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		}
	}

	function bouncereset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		if (bounceresets.compare(1) < 0) {
			qolupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		}
		if (transferresets.compare(1) >= 0) {
			newentry("Battery gain: " + decimalToString(batterygain) + " batteries");
			batteries = batteries.plus(batterygain);
		}
		if (respec === 1) {
			newentry("Bounce reset triggered. Gain: " + decimalToString(jumpgain) + " J");
			bounceresets = bounceresets.plus(new Decimal("1"));
			bounceresettime = new Decimal("0");
			jumps = jumps.add(jumpgain);
			totaljumps = totaljumps.add(jumpgain);
		} else {
			newentry("Bounce Respec triggered. All bounce upgrades have been refunded.");
		}
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		if (hits.compare(16) < 0) {
			specialpegs = new Decimal("0");
		}
		rotations = new Decimal("0");
		rollpoints = new Decimal("0");
		if (hits.compare(10) < 0) {
			pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
			bupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
			spupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
			pupgradeprice = [
				new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			];
			bupgradeprice = [
				new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
				new Decimal("2.5e75"),
			];
			spupgradeprice = [
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
			];
			if (boupgradelist[26] < 1) {
				rupgradelist = [
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
					new Decimal("0"),
				];
			}
			if (hits.compare(6) >= 0) {
				rupgradelist[8] = new Decimal("1");
			}
			rupgradeprice = [
				new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1e40"),
				new Decimal("1e45"),
				new Decimal("1e50"),
			];
			if (hits.compare(6) < 0) {
				revolutions = new Decimal("0");
				revupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
				revupgradeprice = [
					new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
					new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
					new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
					new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
					new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
				];
			}
			for (m = 1; m <= pupgradelist.length; m = m + 1) {
				document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
				document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
			}
			for (m = 1; m <= bupgradelist.length; m = m + 1) {
				document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
				document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
			}
			for (m = 1; m <= spupgradelist.length; m = m + 1) {
				document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
				document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
			}
			for (m = 1; m <= rupgradelist.length; m = m + 1) {
				document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
				document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
			}
			for (m = 1; m <= revupgradelist.length; m = m + 1) {
				document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
				document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
					decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
			}
			document.getElementById("revolutionstitle").innerHTML = "Revolutions Building";
			document.getElementById("reveffect1").innerHTML =
				"BallPoints boost: +x" + decimalToString(new Decimal("1.38").times(revolutions.pow(new Decimal("0.58"))));
			document.getElementById("reveffect2").innerHTML = "XP boost: +x" + decimalToString(new Decimal("1.25").times(revolutions.pow(new Decimal("0.64"))));
			document.getElementById("reveffect3").innerHTML =
				"BoxPoints boost: +x" + decimalToString(new Decimal("1.13").times(revolutions.pow(new Decimal("0.59"))));
			document.getElementById("reveffect4").innerHTML =
				"Special Peg boost: +x" + decimalToString(new Decimal("2").times(revolutions.pow(new Decimal("0.62"))));
			document.getElementById("reveffect5").innerHTML =
				"Rotation boost: +x" + decimalToString(new Decimal("3").times(revolutions.pow(new Decimal("0.61"))));
			document.getElementById("reveffect6").innerHTML =
				"Jumps boost: +x" + decimalToString(new Decimal("0.1").times(revolutions.pow(new Decimal("0.5"))));
			document.getElementById("reveffect7").innerHTML =
				"Energy boost: +x" + decimalToString(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10())));
			document.getElementById("reveffect8").innerHTML =
				"Electricity boost: +x" + decimalToString(new Decimal("1.4").pow(new Decimal(revolutions.plus(1).log10())));
		}
	}
	function energyreset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Energy reset triggered. Gain: " + decimalToString(energy) + " energy");
		energy = energy.plus(energygain);
		if (hits.compare(24) < 0) {
			ballpoints = new Decimal("0");
			xp = new Decimal("0");
			level = new Decimal("1");
			boxpoints = new Decimal("0");
			pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
			bupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
			rollpoints = new Decimal("0");
			revolutions = new Decimal("0");
			revupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		}
		if (hits.compare(16) < 0) {
			specialpegs = new Decimal("0");
			spupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		if (boupgradelist[26] < 1) {
			rupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				rupgradelist[8],
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		rupgradeprice = [
			new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e40"),
			new Decimal("1e45"),
			new Decimal("1e50"),
		];
		rotations = new Decimal("0");
		revupgradeprice = [
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
		for (m = 1; m <= rupgradelist.length; m = m + 1) {
			document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
			document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
		}
		for (m = 1; m <= revupgradelist.length; m = m + 1) {
			document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
			document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
		}
		document.getElementById("revolutionstitle").innerHTML = "Revolutions Building";
		document.getElementById("reveffect1").innerHTML =
			"BallPoints boost: +x" + decimalToString(new Decimal("1.38").times(revolutions.pow(new Decimal("0.58"))));
		document.getElementById("reveffect2").innerHTML = "XP boost: +x" + decimalToString(new Decimal("1.25").times(revolutions.pow(new Decimal("0.64"))));
		document.getElementById("reveffect3").innerHTML =
			"BoxPoints boost: +x" + decimalToString(new Decimal("1.13").times(revolutions.pow(new Decimal("0.59"))));
		document.getElementById("reveffect4").innerHTML =
			"Special Peg boost: +x" + decimalToString(new Decimal("2").times(revolutions.pow(new Decimal("0.62"))));
		document.getElementById("reveffect5").innerHTML = "Rotation boost: +x" + decimalToString(new Decimal("3").times(revolutions.pow(new Decimal("0.61"))));
		document.getElementById("reveffect6").innerHTML = "Jumps boost: +x" + decimalToString(new Decimal("0.1").times(revolutions.pow(new Decimal("0.5"))));
		document.getElementById("reveffect7").innerHTML =
			"Energy boost: +x" + decimalToString(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10())));
		document.getElementById("reveffect8").innerHTML =
			"Electricity boost: +x" + decimalToString(new Decimal("1.4").pow(new Decimal(revolutions.plus(1).log10())));
	}
	function challengereset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Challenge #" + activechallenge.toString() + " activated.");
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		bupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		if (hits.compare(16) < 0) {
			specialpegs = new Decimal("0");
			spupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		if (boupgradelist[26] < 1) {
			rupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		rupgradeprice = [
			new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e40"),
			new Decimal("1e45"),
			new Decimal("1e50"),
		];
		rotations = new Decimal("0");
		rollpoints = new Decimal("0");
		revolutions = new Decimal("0");
		revupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		revupgradeprice = [
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		energy = new Decimal("0");
		tasks = [new Decimal("0"), new Decimal("0"), new Decimal("0")];
		taskprogress = [new Decimal("0"), new Decimal("0"), new Decimal("0")];
		irev = new Decimal("0");

		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
		for (m = 1; m <= rupgradelist.length; m = m + 1) {
			document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
			document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
		}
		for (m = 1; m <= revupgradelist.length; m = m + 1) {
			document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
			document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
		}
		document.getElementById("revolutionstitle").innerHTML = "Revolutions Building";
		document.getElementById("reveffect1").innerHTML =
			"BallPoints boost: +x" + decimalToString(new Decimal("1.38").times(revolutions.pow(new Decimal("0.58"))));
		document.getElementById("reveffect2").innerHTML = "XP boost: +x" + decimalToString(new Decimal("1.25").times(revolutions.pow(new Decimal("0.64"))));
		document.getElementById("reveffect3").innerHTML =
			"BoxPoints boost: +x" + decimalToString(new Decimal("1.13").times(revolutions.pow(new Decimal("0.59"))));
		document.getElementById("reveffect4").innerHTML =
			"Special Peg boost: +x" + decimalToString(new Decimal("2").times(revolutions.pow(new Decimal("0.62"))));
		document.getElementById("reveffect5").innerHTML = "Rotation boost: +x" + decimalToString(new Decimal("3").times(revolutions.pow(new Decimal("0.61"))));
		document.getElementById("reveffect6").innerHTML = "Jumps boost: +x" + decimalToString(new Decimal("0.1").times(revolutions.pow(new Decimal("0.5"))));
		document.getElementById("reveffect7").innerHTML =
			"Energy boost: +x" + decimalToString(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10())));
		document.getElementById("reveffect8").innerHTML =
			"Electricity boost: +x" + decimalToString(new Decimal("1.4").pow(new Decimal(revolutions.plus(1).log10())));
	}
	function transferreset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Electricity reset triggered. Gain: " + decimalToString(electricitygain) + " El");
		electricity = electricity.plus(electricitygain);
		transferresets = transferresets.plus(1);
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		bupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		if (hits.compare(16) < 0) {
			specialpegs = new Decimal("0");
			spupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		if (boupgradelist[26] < 1) {
			rupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				rupgradelist[8],
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		rupgradeprice = [
			new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e40"),
			new Decimal("1e45"),
			new Decimal("1e50"),
		];
		rotations = new Decimal("0");
		rollpoints = new Decimal("0");
		energy = new Decimal("0");
		tasks = [new Decimal(0), new Decimal(0), new Decimal(0)];
		taskprogress = [new Decimal(0), new Decimal(0), new Decimal(0)];
		revolutions = new Decimal("0");
		revupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		revupgradeprice = [
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
		for (m = 1; m <= rupgradelist.length; m = m + 1) {
			document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
			document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
		}
		for (m = 1; m <= revupgradelist.length; m = m + 1) {
			document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
			document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
		}
		document.getElementById("revolutionstitle").innerHTML = "Revolutions Building";
		document.getElementById("reveffect1").innerHTML =
			"BallPoints boost: +x" + decimalToString(new Decimal("1.38").times(revolutions.pow(new Decimal("0.58"))));
		document.getElementById("reveffect2").innerHTML = "XP boost: +x" + decimalToString(new Decimal("1.25").times(revolutions.pow(new Decimal("0.64"))));
		document.getElementById("reveffect3").innerHTML =
			"BoxPoints boost: +x" + decimalToString(new Decimal("1.13").times(revolutions.pow(new Decimal("0.59"))));
		document.getElementById("reveffect4").innerHTML =
			"Special Peg boost: +x" + decimalToString(new Decimal("2").times(revolutions.pow(new Decimal("0.62"))));
		document.getElementById("reveffect5").innerHTML = "Rotation boost: +x" + decimalToString(new Decimal("3").times(revolutions.pow(new Decimal("0.61"))));
		document.getElementById("reveffect6").innerHTML = "Jumps boost: +x" + decimalToString(new Decimal("0.1").times(revolutions.pow(new Decimal("0.5"))));
		document.getElementById("reveffect7").innerHTML =
			"Energy boost: +x" + decimalToString(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10())));
		document.getElementById("reveffect8").innerHTML =
			"Electricity boost: +x" + decimalToString(new Decimal("1.4").pow(new Decimal(revolutions.plus(1).log10())));
	}
	function strikereset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Strike reset triggered. Gain: " + decimalToString(new Decimal(1)) + " H");
		hits = hits.plus(1);
		strikeresets++;
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		specialpegs = new Decimal("0");
		bounceresettime = new Decimal("0");
		jumps = new Decimal("0");
		totaljumps = new Decimal("0");
		batteries = new Decimal("0");
		electricity = new Decimal("0");
		if (hits.compare(12) >= 0) {
			electricity = new Decimal("1");
		}
		chargeamount = 0;
		challengelist = [0, 0, 0, 0, 0, 0, 0, 0];
		boupgradelist = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		activechallenge = 0;
		for (let i = 1; i < 9; i++) {
			challengegoal = [
				1000 * 3 ** challengelist[0],
				20 * 2 ** challengelist[1] * (1 - comparemath(hits, 25) * 0.6),
				challengelist[2] + 1,
				120 + 2 * challengelist[3],
				20,
				100 + 2 * challengelist[5],
				95 + 2 * challengelist[6],
				20,
			];
			document.body.style.backgroundColor = "rgb(212, 212, 212)";
			if (mutemusic === 1) {
				musictrack.pause();
				bgmusic = "assets/audio/real.mp3";
				if (carti === 1) {
					bgmusic = "assets/audio/carti.mp3";
				}
				musictrack = new Audio(bgmusic);
				musictrack.setAttribute("src", bgmusic);
				musictrack.play();
				musictrack.addEventListener(
					"ended",
					() => {
						this.currentTime = 0;
						this.play();
					},
					false
				);
			}
			challengegoalcurr = ["rotations", "revolutions", "rollpoints", "level", "level", "level", "level", "level"];
			document.getElementById("challenge" + i.toString()).innerHTML = challengetitles[i - 1] + " " + challengelist[i - 1] + "/" + challengecap[i - 1];
			challengegoalcurr = ["Rotations", "Revolutions", "RollPoints", "Levels", "Levels", "Levels", "Levels", "Levels"];
			challengegoal.forEach((c, d) => {
				challengegoal[d] = challengegoal[d].toString();
				challengegoal[d] += " " + challengegoalcurr[d];
			});
			document.getElementById("challengeinfo").innerHTML =
				"No challenges are selected. Select one and start it to apply it's debuffs. Finishing a challenge gives rewards to help you progress. All challenges force a bounce reset (only QoL is kept) with no reward unless specified. If you are stuck in a challenge just press the button below.";
			activechallenge = 0;
			challengeid = undefined;
			document.getElementById("challengestart").innerHTML = "Start!";
			if (challengelist[0] >= 1) {
				document.getElementById("challenge2").style.display = "block";
			}
			if (challengelist[1] >= 2) {
				document.getElementById("challenge3").style.display = "block";
			}
			if (challengelist[2] >= 1) {
				document.getElementById("challenge4").style.display = "block";
			}
			if (challengelist[3] >= 10) {
				document.getElementById("challenge5").style.display = "block";
			}
			clearInterval(burnoutfunctionality);
		}
		pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		bupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		spupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		if (boupgradelist[26] < 1) {
			rupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		rupgradeprice = [
			new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e40"),
			new Decimal("1e45"),
			new Decimal("1e50"),
		];
		rotations = new Decimal("0");
		rollpoints = new Decimal("0");
		energy = new Decimal("0");
		tasks = [new Decimal(0), new Decimal(0), new Decimal(0)];
		taskprogress = [new Decimal(0), new Decimal(0), new Decimal(0)];
		revolutions = new Decimal("0");
		revupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		revupgradeprice = [
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
		for (m = 1; m <= rupgradelist.length; m = m + 1) {
			document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
			document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
		}
		for (m = 1; m <= revupgradelist.length; m = m + 1) {
			document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
			document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
		}
		document.getElementById("revolutionstitle").innerHTML = "Revolutions Building";
		document.getElementById("reveffect1").innerHTML =
			"BallPoints boost: +x" + decimalToString(new Decimal("1.38").times(revolutions.pow(new Decimal("0.58"))));
		document.getElementById("reveffect2").innerHTML = "XP boost: +x" + decimalToString(new Decimal("1.25").times(revolutions.pow(new Decimal("0.64"))));
		document.getElementById("reveffect3").innerHTML =
			"BoxPoints boost: +x" + decimalToString(new Decimal("1.13").times(revolutions.pow(new Decimal("0.59"))));
		document.getElementById("reveffect4").innerHTML =
			"Special Peg boost: +x" + decimalToString(new Decimal("2").times(revolutions.pow(new Decimal("0.62"))));
		document.getElementById("reveffect5").innerHTML = "Rotation boost: +x" + decimalToString(new Decimal("3").times(revolutions.pow(new Decimal("0.61"))));
		document.getElementById("reveffect6").innerHTML = "Jumps boost: +x" + decimalToString(new Decimal("0.1").times(revolutions.pow(new Decimal("0.5"))));
		document.getElementById("reveffect7").innerHTML =
			"Energy boost: +x" + decimalToString(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10())));
		document.getElementById("reveffect8").innerHTML =
			"Electricity boost: +x" + decimalToString(new Decimal("1.4").pow(new Decimal(revolutions.plus(1).log10())));
	}
	function annihilationreset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Annihilation reset triggered. Gain: " + decimalToString(new Decimal(1)) + " P");
		particles = particles.plus(1);
		annihilationresets++;
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		specialpegs = new Decimal("0");
		bounceresettime = new Decimal("0");
		jumps = new Decimal("0");
		totaljumps = new Decimal("0");
		batteries = new Decimal("0");
		electricity = new Decimal("0");
		chargeamount = 0;
		challengelist = [0, 0, 0, 0, 0, 0, 0, 0];
		boupgradelist = [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
		activechallenge = 0;
		for (let i = 1; i < 9; i++) {
			challengegoal = [
				1000 * 3 ** challengelist[0],
				20 * 2 ** challengelist[1] * (1 - comparemath(hits, 25) * 0.6),
				challengelist[2] + 1,
				120 + 2 * challengelist[3],
				20,
				100 + 2 * challengelist[5],
				95 + 2 * challengelist[6],
				20,
			];
			document.body.style.backgroundColor = "rgb(212, 212, 212)";
			if (mutemusic === 1) {
				musictrack.pause();
				bgmusic = "assets/audio/real.mp3";
				if (carti === 1) {
					bgmusic = "assets/audio/carti.mp3";
				}
				musictrack = new Audio(bgmusic);
				musictrack.setAttribute("src", bgmusic);
				musictrack.play();
				musictrack.addEventListener(
					"ended",
					() => {
						this.currentTime = 0;
						this.play();
					},
					false
				);
			}
			challengegoalcurr = ["rotations", "revolutions", "rollpoints", "level", "level", "level", "level", "level"];
			document.getElementById("challenge" + i.toString()).innerHTML = challengetitles[i - 1] + " " + challengelist[i - 1] + "/" + challengecap[i - 1];
			challengegoalcurr = ["Rotations", "Revolutions", "RollPoints", "Levels", "Levels", "Levels", "Levels", "Levels"];
			challengegoal.forEach((c, d) => {
				challengegoal[d] = challengegoal[d].toString();
				challengegoal[d] += " " + challengegoalcurr[d];
			});
			document.getElementById("challengeinfo").innerHTML =
				"No challenges are selected. Select one and start it to apply it's debuffs. Finishing a challenge gives rewards to help you progress. All challenges force a bounce reset (only QoL is kept) with no reward unless specified. If you are stuck in a challenge just press the button below.";
			activechallenge = 0;
			challengeid = undefined;
			document.getElementById("challengestart").innerHTML = "Start!";
			if (challengelist[0] >= 1) {
				document.getElementById("challenge2").style.display = "block";
			}
			if (challengelist[1] >= 2) {
				document.getElementById("challenge3").style.display = "block";
			}
			if (challengelist[2] >= 1) {
				document.getElementById("challenge4").style.display = "block";
			}
			if (challengelist[3] >= 10) {
				document.getElementById("challenge5").style.display = "block";
			}
			clearInterval(burnoutfunctionality);
		}
		pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		bupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		spupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		if (boupgradelist[26] < 1) {
			rupgradelist = [
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
				new Decimal("0"),
			];
		}
		rupgradeprice = [
			new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e40"),
			new Decimal("1e45"),
			new Decimal("1e50"),
		];
		rotations = new Decimal("0");
		rollpoints = new Decimal("0");
		energy = new Decimal("0");
		tasks = [new Decimal(0), new Decimal(0), new Decimal(0)];
		taskprogress = [new Decimal(0), new Decimal(0), new Decimal(0)];
		revolutions = new Decimal("0");
		revupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		revupgradeprice = [
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
		for (m = 1; m <= rupgradelist.length; m = m + 1) {
			document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
			document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
		}
		for (m = 1; m <= revupgradelist.length; m = m + 1) {
			document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
			document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
		}
		document.getElementById("revolutionstitle").innerHTML = "Revolutions Building";
		document.getElementById("reveffect1").innerHTML =
			"BallPoints boost: +x" + decimalToString(new Decimal("1.38").times(revolutions.pow(new Decimal("0.58"))));
		document.getElementById("reveffect2").innerHTML = "XP boost: +x" + decimalToString(new Decimal("1.25").times(revolutions.pow(new Decimal("0.64"))));
		document.getElementById("reveffect3").innerHTML =
			"BoxPoints boost: +x" + decimalToString(new Decimal("1.13").times(revolutions.pow(new Decimal("0.59"))));
		document.getElementById("reveffect4").innerHTML =
			"Special Peg boost: +x" + decimalToString(new Decimal("2").times(revolutions.pow(new Decimal("0.62"))));
		document.getElementById("reveffect5").innerHTML = "Rotation boost: +x" + decimalToString(new Decimal("3").times(revolutions.pow(new Decimal("0.61"))));
		document.getElementById("reveffect6").innerHTML = "Jumps boost: +x" + decimalToString(new Decimal("0.1").times(revolutions.pow(new Decimal("0.5"))));
		document.getElementById("reveffect7").innerHTML =
			"Energy boost: +x" + decimalToString(new Decimal("1.45").pow(new Decimal(revolutions.plus(1).log10())));
		document.getElementById("reveffect8").innerHTML =
			"Electricity boost: +x" + decimalToString(new Decimal("1.4").pow(new Decimal(revolutions.plus(1).log10())));
	}
	function condensereset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Condense reset triggered. Gain: " + decimalToString(ultrapegsgain) + " UP");
		ultrapegs = ultrapegs.plus(ultrapegsgain);
		condenseresets++;
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		bupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		specialpegs = new Decimal("0");
		spupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
	}
	function packagereset() {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			localStorage.setItem("save", JSON.stringify(savefile));
		} else {
			window.console.log("reset saving failed");
		}
		newentry("Package reset triggered. Gain: " + decimalToString(packagepointsgain) + " packages");
		packagepoints = packagepoints.plus(packagepointsgain);
		packageresets++;
		ballpoints = new Decimal("0");
		xp = new Decimal("0");
		level = new Decimal("1");
		boxpoints = new Decimal("0");
		pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
		bupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		specialpegs = new Decimal("0");
		spupgradelist = [
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
			new Decimal("0"),
		];
		pupgradeprice = [
			new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		bupgradeprice = [
			new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
			new Decimal("2.5e75"),
		];
		spupgradeprice = [
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
			new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
		];
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
	}
	document.getElementById("parrow1").addEventListener("click", function () {
		if (pupgrade > 1) {
			document.getElementById("pupgrade" + pupgrade.toString()).style.display = "none";
			pupgrade = pupgrade - 1;
			document.getElementById("pupgrade" + pupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("parrow2").addEventListener("click", function () {
		if (pupgrade < 5) {
			document.getElementById("pupgrade" + pupgrade.toString()).style.display = "none";
			pupgrade = pupgrade + 1;
			document.getElementById("pupgrade" + pupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("pupgradebutton1").addEventListener("click", function () {
		price = pupgradeprice[pupgrade - 1];
		cap = pcaplist[pupgrade - 1];
		if (
			ballpoints.compare(price) >= 0 &&
			pupgradelist[pupgrade - 1].compare(cap) < 0 &&
			sumlist(pupgradelist)
				.times(new Decimal(parseFloat(new Number(activechallenge === 6))))
				.compare(10) < 0 &&
			activechallenge !== 7
		) {
			ballpoints = ballpoints.minus(price);
			pupgradelist[pupgrade - 1] = pupgradelist[pupgrade - 1].add(new Decimal("1"));
			pupgradeprice = [
				new Decimal("5").times(new Decimal("1.55").pow(pupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10").times(new Decimal("1.6").pow(pupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("50").times(new Decimal("2.75").pow(pupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal("10").pow(pupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("2.8").pow(pupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			];
		}
		for (m = 1; m <= pupgradelist.length; m = m + 1) {
			document.getElementById("pupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(pupgradeprice[m - 1]) + " BallPoints";
			document.getElementById("pupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(pupgradelist[m - 1]) + "/" + decimalToString(pcaplist[m - 1]);
		}
	});

	document.getElementById("import").addEventListener("click", function () {
		save();
		if (JSON.stringify(savefile) !== "[object Object]") {
			navigator.clipboard
				.writeText(btoa(JSON.stringify(savefile)))
				.then(function () {
					alert("Copied to clipboard!");
				})
				.catch(function () {
					alert("clipboard copying failed...");
				});
		} else {
			alert("Save failed... Try again!");
		}
	});
	document.getElementById("export").addEventListener("click", function () {
		savefile = window.prompt("Paste your save here:", "save file entering box");
		if (savefile == "13") {
			carti = 1;
			bgmusic = "assets/audio/real.mp3";
			if (activechallenge !== 0) {
				bgmusic = "assets/audio/challenge.mp3";
			}
			if (carti === 1) {
				newentry("teehee :3");
				bgmusic = "assets/audio/carti.mp3";
			}
			musictrack.pause();
			musictrack = new Audio(bgmusic);
			musictrack.setAttribute("src", bgmusic);
			musictrack.play();
			musictrack.addEventListener(
				"ended",
				function () {
					this.currentTime = 0;
					this.play();
				},
				false
			);
		} else {
			try {
				window.atob(savefile);
			} catch (e) {
				alert("invalid save :(");
			}
			if (JSON.stringify(JSON.parse(atob(savefile))) !== "[object Object]") {
				savefile = JSON.parse(atob(savefile));
				missingvar();
				localStorage.setItem("save", JSON.stringify(savefile));
				alert("save file loaded!");
				location.reload();
			} else {
				alert("save failed!");
			}
		}
	});
	document.getElementById("deletesave").addEventListener("click", function () {
		if (window.confirm("are you sure?")) {
			localStorage.removeItem("save");
			ballpoints = new Decimal("0");
			xp = new Decimal("0");
			level = new Decimal("1");
			pupgradelist = [new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0"), new Decimal("0")];
			alert("save wiped!");
			location.reload();
		}
	});
	function resize() {
		if (
			document.getElementById("peg2").getBoundingClientRect().left - document.getElementById("peg1").getBoundingClientRect().right <
			document.getElementById("peg1").getBoundingClientRect().width - 2
		) {
			document.querySelectorAll(".peg").forEach((b) => {
				if (b.offsetWidth >= 0) {
					b.style.width = (b.getBoundingClientRect().width - 1).toString() + "px";
					b.style.height = b.getBoundingClientRect().width.toString() + "px";
				}
				if (document.getElementById("peg1").getBoundingClientRect().width >= 500) {
					b.style.width = "10px";
					b.style.height = "10px";
				}
			});
			setTimeout(resize, 1);
		}
		if (
			document.getElementById("peg2").getBoundingClientRect().left - document.getElementById("peg1").getBoundingClientRect().right >
			document.getElementById("peg1").getBoundingClientRect().width + 2
		) {
			document.querySelectorAll(".peg").forEach((b) => {
				if (b.offsetWidth >= 0) {
					b.style.width = (b.getBoundingClientRect().width + 1).toString() + "px";
					b.style.height = b.getBoundingClientRect().width.toString() + "px";
				}
				if (document.getElementById("peg1").getBoundingClientRect().width >= 500) {
					b.style.width = "10px";
					b.style.height = "10px";
				}
			});
			setTimeout(resize, 1);
		}
		document.querySelectorAll(".ball").forEach((b) => {
			if (b.offsetWidth >= 0) {
				b.style.width = (document.getElementById("peg1").getBoundingClientRect().width / 3).toFixed(0) + "px";
				b.style.height = b.getBoundingClientRect().width.toString() + "px";
			}
		});
	}
	function bouncerespec() {
		boupgradelist.forEach(function (a, b, c) {
			jumps = totaljumps;
			boupgradelist[b] = 0;
			if (hits.compare(1) >= 0 && b <= 9 && b >= 5) {
				boupgradelist[b] = 1;
			}
			if (
				(b <= 5 && hits.compare(4) >= 0) ||
				(b <= 10 && hits.compare(5) >= 0) ||
				(b <= 15 && hits.compare(6) >= 0) ||
				(b <= 20 && hits.compare(7) >= 0) ||
				(b <= 25 && hits.compare(8) >= 0)
			) {
				boupgradelist[b] = 1;
			}
			if (activechallenge === 8) boupgradelist[24] = 1;
		});
		respec = 0;
		bouncereset();
	}
	document.getElementById("loadingbutton").addEventListener("click", function () {
		sscreen = 1;
		load = 1;
		setInterval(persecond, 1000);
		setInterval(persecond2, 1000);
		if (mutemusic.compare(new Decimal("0")) === 0) {
			bgmusic = "assets/audio/real.mp3";
			if (activechallenge !== 0) {
				bgmusic = "assets/audio/challenge.mp3";
				if (carti === 1) {
					bgmusic = "assets/audio/carti.mp3";
				}
			}
			musictrack = new Audio(bgmusic);
			musictrack.setAttribute("src", bgmusic);
			musictrack.play();
			musictrack.addEventListener(
				"ended",
				function () {
					this.currentTime = 0;
					this.play();
				},
				false
			);
		}
		if (timelastondisplay > 0) {
			newentry("Offline Progress: " + timelastondisplay.toString() + " Simulated Seconds (seconds/20)");
		}
		document.getElementById("loading").style.display = "none";
		document.getElementById("screen" + sscreen.toString()).style.display = "inline";
		document.getElementById("dropdown").style.display = "inline";
		document.getElementById("dropdown2").style.display = "inline";
	});
	document.getElementById("loadingbuttonmute").addEventListener("click", function () {
		sscreen = 1;
		load = 1;
		setInterval(persecond, 1000);
		setInterval(persecond2, 1000);
		mutemusic = new Decimal("1");
		mutesfx = new Decimal("1");
		document.getElementById("loading").style.display = "none";
		document.getElementById("screen" + sscreen.toString()).style.display = "inline";
		document.getElementById("dropdown").style.display = "inline";
		document.getElementById("dropdown2").style.display = "inline";
		if (mutesfx.compare(new Decimal("0")) === 0) {
			document.getElementById("mutesfx").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("mutesfx").style.backgroundColor = "#f27777";
		}
		if (mutemusic.compare(new Decimal("0")) === 0) {
			document.getElementById("mutemusic").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("mutemusic").style.backgroundColor = "#f27777";
		}
	});
	document.getElementById("mutemusic").addEventListener("click", function () {
		mutemusic = new Decimal("1").minus(mutemusic);
		if (mutemusic.compare(new Decimal("0")) === 0) {
			document.getElementById("mutemusic").style.backgroundColor = "#b4f277";
			bgmusic = "assets/audio/real.mp3";
			if (activechallenge !== 0) {
				bgmusic = "assets/audio/challenge.mp3";
				if (carti === 1) {
					bgmusic = "assets/audio/carti.mp3";
				}
			}
			musictrack = new Audio(bgmusic);
			musictrack.setAttribute("src", bgmusic);
			musictrack.play();
			musictrack.addEventListener(
				"ended",
				function () {
					this.currentTime = 0;
					this.play();
				},
				false
			);
		} else {
			document.getElementById("mutemusic").style.backgroundColor = "#f27777";
			musictrack.pause();
		}
	});
	document.getElementById("mutesfx").addEventListener("click", function () {
		mutesfx = new Decimal("1").minus(mutesfx);
		if (mutesfx.compare(new Decimal("0")) === 0) {
			document.getElementById("mutesfx").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("mutesfx").style.backgroundColor = "#f27777";
		}
	});
	document.getElementById("boxifyresetbutton").addEventListener("click", function () {
		if (level.compare(new Decimal("16")) >= 0) {
			boxifyreset();
		}
	});
	document.getElementById("barrow1").addEventListener("click", function () {
		if (bupgrade > 1) {
			document.getElementById("bupgrade" + bupgrade.toString()).style.display = "none";
			bupgrade = bupgrade - 1;
			document.getElementById("bupgrade" + bupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("barrow2").addEventListener("click", function () {
		if (bupgrade < 8 || (bupgrade < 10 && rupgradelist[6].compare(new Decimal("1")) === 0) || (bupgrade < 12 && particleupgradelist[5]) === 1) {
			document.getElementById("bupgrade" + bupgrade.toString()).style.display = "none";
			bupgrade = bupgrade + 1;
			document.getElementById("bupgrade" + bupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("bupgradebutton1").addEventListener("click", function () {
		price = bupgradeprice[bupgrade - 1];
		cap = bcaplist[bupgrade - 1];
		if (
			boxpoints.compare(price) >= 0 &&
			bupgradelist[bupgrade - 1].compare(cap) < 0 &&
			sumlist(bupgradelist)
				.times(new Decimal(parseFloat(new Number(activechallenge === 6))))
				.compare(10) < 0 &&
			activechallenge !== 7
		) {
			if (boupgradelist[6] < 1) {
				boxpoints = boxpoints.minus(price);
			}
			bupgradelist[bupgrade - 1] = bupgradelist[bupgrade - 1].add(new Decimal("1"));
			bupgradeprice = [
				new Decimal("1.5").pow(bupgradelist[0]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.5").pow(bupgradelist[1]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.5").pow(bupgradelist[2]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.5").pow(bupgradelist[3]).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("20").times(new Decimal("1.75").pow(bupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("40").times(new Decimal("1.8").pow(bupgradelist[5])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("1.6").pow(bupgradelist[6])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1e4").times(new Decimal("1.975").pow(bupgradelist[7])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("150").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1.6e65").times(new Decimal(6).pow(bupgradelist[10])),
				new Decimal("2.5e75"),
			];
		}
		for (m = 1; m <= bupgradelist.length; m = m + 1) {
			document.getElementById("bupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(bupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("bupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(bupgradelist[m - 1]) + "/" + decimalToString(bcaplist[m - 1]);
		}
	});
	document.getElementById("sparrow1").addEventListener("click", function () {
		if (spupgrade > 1) {
			document.getElementById("spupgrade" + spupgrade.toString()).style.display = "none";
			spupgrade = spupgrade - 1;
			document.getElementById("spupgrade" + spupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("sparrow2").addEventListener("click", function () {
		if (spupgrade < 7 || (spupgrade < 10 && revupgradelist[0].compare(1) === 0)) {
			document.getElementById("spupgrade" + spupgrade.toString()).style.display = "none";
			spupgrade = spupgrade + 1;
			document.getElementById("spupgrade" + spupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("spupgradebutton1").addEventListener("click", function () {
		price = spupgradeprice[spupgrade - 1];
		cap = spcaplist[spupgrade - 1];
		if (
			specialpegs.compare(price) >= 0 &&
			spupgradelist[spupgrade - 1].compare(cap) < 0 &&
			sumlist(spupgradelist)
				.times(new Decimal(parseFloat(new Number(activechallenge === 6))))
				.compare(10) < 0 &&
			activechallenge !== 7
		) {
			specialpegs = specialpegs.minus(price);
			spupgradelist[spupgrade - 1] = spupgradelist[spupgrade - 1].add(new Decimal("1"));
			spupgradeprice = [
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("15").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("25").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("25").times(new Decimal("1.1").pow(spupgradelist[9])).times(new Decimal(0.99).pow(challengelist[5])),
			];
		}
		for (m = 1; m <= spupgradelist.length; m = m + 1) {
			document.getElementById("spupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(spupgradeprice[m - 1]) + " Special Pegs";
			document.getElementById("spupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(spupgradelist[m - 1]) + "/" + decimalToString(spcaplist[m - 1]);
		}
	});
	document.getElementById("qolarrow1").addEventListener("click", function () {
		if (qolupgrade > 1) {
			document.getElementById("qolupgrade" + qolupgrade.toString()).style.display = "none";
			qolupgrade = qolupgrade - 1;
			document.getElementById("qolupgrade" + qolupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("qolarrow2").addEventListener("click", function () {
		if (qolupgrade < 2 || (qolupgrade < 4 && rupgradelist[5].compare(new Decimal("1")) === 0)) {
			document.getElementById("qolupgrade" + qolupgrade.toString()).style.display = "none";
			qolupgrade = qolupgrade + 1;
			document.getElementById("qolupgrade" + qolupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("qolupgradebutton1").addEventListener("click", function () {
		price = qolupgradeprice[qolupgrade - 1];
		cap = qolcaplist[qolupgrade - 1];
		if (boxpoints.compare(price) >= 0 && qolupgradelist[qolupgrade - 1].compare(cap) < 0) {
			boxpoints = boxpoints.minus(price);
			qolupgradelist[qolupgrade - 1] = qolupgradelist[qolupgrade - 1].add(new Decimal("1"));
			qolupgradeprice = [
				new Decimal("10").times(new Decimal("5").pow(qolupgradelist[0])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("10000").times(new Decimal(0.99).pow(challengelist[5])),
			];
		}
		for (m = 1; m <= qolupgradelist.length; m = m + 1) {
			document.getElementById("qolupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(qolupgradeprice[m - 1]) + " BoxPoints";
			document.getElementById("qolupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(qolupgradelist[m - 1]) + "/" + decimalToString(qolcaplist[m - 1]);
		}
	});
	document.getElementById("rollresetbutton").addEventListener("click", function () {
		if (level.compare(rollpointreq) >= 0) {
			rollreset();
		}
	});
	document.getElementById("rarrow1").addEventListener("click", function () {
		if (rupgrade > 1) {
			document.getElementById("rupgrade" + rupgrade.toString()).style.display = "none";
			rupgrade = rupgrade - 1;
			document.getElementById("rupgrade" + rupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("rarrow2").addEventListener("click", function () {
		if (rupgrade < 9 || (rupgrade < 12 && particleupgradelist[9] === 1)) {
			document.getElementById("rupgrade" + rupgrade.toString()).style.display = "none";
			rupgrade = rupgrade + 1;
			document.getElementById("rupgrade" + rupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("rupgradebutton1").addEventListener("click", function () {
		price = rupgradeprice[rupgrade - 1];
		cap = rcaplist[rupgrade - 1];
		if (
			rotations.compare(price) >= 0 &&
			rupgradelist[rupgrade - 1].compare(cap) < 0 &&
			sumlist(rupgradelist)
				.times(new Decimal(parseFloat(new Number(activechallenge === 6))))
				.compare(10) < 0 &&
			activechallenge !== 7
		) {
			if (boupgradelist[9] < 1) {
				rotations = rotations.minus(price);
			}
			rupgradelist[rupgrade - 1] = rupgradelist[rupgrade - 1].add(new Decimal("1"));
			rupgradeprice = [
				new Decimal("1").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("5").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("20").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("200").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("250").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("500").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("3000").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1e40"),
				new Decimal("1e45"),
				new Decimal("1e50"),
			];
		}
		for (m = 1; m <= rupgradelist.length; m = m + 1) {
			document.getElementById("rupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(rupgradeprice[m - 1]) + " Rotations";
			document.getElementById("rupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(rupgradelist[m - 1]) + "/" + decimalToString(rcaplist[m - 1]);
		}
	});
	document.getElementById("disableplinkoauto").addEventListener("click", function () {
		disableautoplinko = new Decimal("1").minus(disableautoplinko);
		if (disableautoplinko.compare(new Decimal("0")) === 0) {
			document.getElementById("disableplinkoauto").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("disableplinkoauto").style.backgroundColor = "#f27777";
		}
	});
	document.getElementById("disableautodrop").addEventListener("click", function () {
		disableautodrop = new Decimal("1").minus(disableautodrop);
		if (disableautodrop.compare(new Decimal("0")) === 0) {
			document.getElementById("disableautodrop").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("disableautodrop").style.backgroundColor = "#f27777";
		}
	});
	document.getElementById("revbutton").addEventListener("click", function () {
		if (revrotationallow === 1) {
			revrotationallow = -4;
			if (revimgrotation >= 350 || revimgrotation <= 10) {
				document.getElementById("revolutionline").style.backgroundColor = "green";
				document.getElementById("revbutton").innerHTML = "You Won!";
				if (activechallenge === 2) {
					revolutions = revolutions.plus(1);
				} else {
					revolutions = revolutions.plus(revgain.times(new Decimal(revstreakeffect)));
				}
				revstreak = revstreak + 1;
				revstreakeffect = (Math.pow(1.15, revstreak) * (Math.pow(parseFloat(decimalToString2(irev)), 1.35) + 1)).toFixed(2);
				if (revstreak >= 10) {
					revstreakeffect = (Math.pow(1.15, 10) * (Math.pow(parseFloat(decimalToString2(irev)), 1.35) + 1)).toFixed(2);
				}
				document.getElementById("revpowertext").innerHTML = "Streak: " + revstreak.toString() + "<br> Boost: x" + revstreakeffect.toString();
				document.getElementById("revpowerbar2").style.height = (35 - revstreak * 3.5).toString() + "%";
			} else {
				document.getElementById("revolutionline").style.backgroundColor = "red";
				document.getElementById("revbutton").innerHTML = "You Missed...";
				revstreak = 0;
				revstreakeffect = Math.pow(1.15, revstreak);
				document.getElementById("revpowertext").innerHTML = "Streak: " + revstreak.toString() + "<br> Boost: x" + revstreakeffect.toString();
				document.getElementById("revpowerbar2").style.height = (35 - revstreak * 3.5).toString() + "%";
			}
		}
	});
	document.getElementById("reveffect1").addEventListener("click", function () {
		if (revselectlist.includes(1)) {
			document.getElementById("reveffect1").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 1) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect1").style.backgroundColor = "yellowgreen";
			revselectlist.push(1);
		}
	});
	document.getElementById("reveffect2").addEventListener("click", function () {
		if (revselectlist.includes(2)) {
			document.getElementById("reveffect2").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 2) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect2").style.backgroundColor = "yellowgreen";
			revselectlist.push(2);
		}
	});
	document.getElementById("reveffect3").addEventListener("click", function () {
		if (revselectlist.includes(3)) {
			document.getElementById("reveffect3").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 3) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect3").style.backgroundColor = "yellowgreen";
			revselectlist.push(3);
		}
	});
	document.getElementById("reveffect4").addEventListener("click", function () {
		if (revselectlist.includes(4)) {
			document.getElementById("reveffect4").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 4) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect4").style.backgroundColor = "yellowgreen";
			revselectlist.push(4);
		}
	});
	document.getElementById("reveffect5").addEventListener("click", function () {
		if (revselectlist.includes(5)) {
			document.getElementById("reveffect5").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 5) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect5").style.backgroundColor = "yellowgreen";
			revselectlist.push(5);
		}
	});
	document.getElementById("reveffect6").addEventListener("click", function () {
		if (revselectlist.includes(6)) {
			document.getElementById("reveffect6").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 6) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect6").style.backgroundColor = "yellowgreen";
			revselectlist.push(6);
		}
	});
	document.getElementById("reveffect7").addEventListener("click", function () {
		if (revselectlist.includes(7)) {
			document.getElementById("reveffect7").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 7) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect7").style.backgroundColor = "yellowgreen";
			revselectlist.push(7);
		}
	});
	document.getElementById("reveffect8").addEventListener("click", function () {
		if (revselectlist.includes(8)) {
			document.getElementById("reveffect8").style.backgroundColor = "salmon";
			for (m = 0; m < revselectlist.length; m = m + 1) {
				if (revselectlist[m] === 8) {
					revselectlist.splice(m, 1);
				}
			}
		} else if (maxrevselect.compare(revselectlist.length)) {
			document.getElementById("reveffect8").style.backgroundColor = "yellowgreen";
			revselectlist.push(8);
		}
	});
	document.getElementById("revarrow1").addEventListener("click", function () {
		if (revupgrade > 1) {
			document.getElementById("revupgrade" + revupgrade.toString()).style.display = "none";
			revupgrade = revupgrade - 1;
			document.getElementById("revupgrade" + revupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("revarrow2").addEventListener("click", function () {
		if (revupgrade < 1 || (boupgradelist[21] >= 0 && revupgrade < 5)) {
			document.getElementById("revupgrade" + revupgrade.toString()).style.display = "none";
			revupgrade = revupgrade + 1;
			document.getElementById("revupgrade" + revupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("revupgradebutton1").addEventListener("click", function () {
		price = revupgradeprice[revupgrade - 1];
		cap = revcaplist[revupgrade - 1];
		if (
			revolutions.compare(price) >= 0 &&
			revupgradelist[revupgrade - 1].compare(cap) < 0 &&
			sumlist(revupgradelist)
				.times(new Decimal(parseFloat(new Number(activechallenge === 6))))
				.compare(10) < 0 &&
			activechallenge !== 7
		) {
			revolutions = revolutions.minus(price);
			revupgradelist[revupgrade - 1] = revupgradelist[revupgrade - 1].add(new Decimal("1"));
			revupgradeprice = [
				new Decimal("100").times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("200").times(new Decimal("3.16").pow(revupgradelist[1])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("250").times(new Decimal("3.21").pow(revupgradelist[2])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("350").times(new Decimal("3.36").pow(revupgradelist[3])).times(new Decimal(0.99).pow(challengelist[5])),
				new Decimal("1000").times(new Decimal("2.25").pow(revupgradelist[4])).times(new Decimal(0.99).pow(challengelist[5])),
			];
		}
		for (m = 1; m <= revupgradelist.length; m = m + 1) {
			document.getElementById("revupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(revupgradeprice[m - 1]) + " Revolutions";
			document.getElementById("revupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(revupgradelist[m - 1]) + "/" + decimalToString(revcaplist[m - 1]);
		}
	});
	document.getElementById("bounceresetbutton").addEventListener("click", function () {
		if (rollpoints.compare(new Decimal("10")) >= 0) {
			bouncereset();
		}
	});
	bobuttons = document.querySelectorAll(".boupgradeicon1, .boupgradeicon2, .boupgradeicon3, .boupgradeicon4, .boupgradeicon5, .boupgradeicon6");
	bobuttons.forEach(function (b) {
		b.addEventListener("click", function () {
			bobutton = b.id.slice(9, -4);
			bobutton = Number(bobutton);
			templist = boupgradelist.slice((Math.ceil(bobutton / 5) - 1) * 5, (Math.ceil(bobutton / 5) - 1) * 5 + 5);
			templist = templist.filter(function (a) {
				return a != 0;
			});
			if (bobutton > 24) {
				templist = boupgradelist.slice(25, 30);
				templist = templist.filter(function (a) {
					return a != 0;
				});
			}
			price = boupgradeprice[bobutton - 1].times(new Decimal("5").pow(new Decimal(templist.length)));
			document.getElementById("boupgradetitle").innerHTML = botitlelist[Math.ceil(bobutton / 5) - 1] + " " + botitlelist[(bobutton % 5) + 5];
			if (bobutton > 25) {
				document.getElementById("boupgradetitle").innerHTML = botitlelist[bobutton - 16];
			}
			document.getElementsByClassName("boupgradeimage")[0].src = "assets/img/boupgrade" + bobutton.toString() + ".png";
			document.getElementById("boupgradecap").innerHTML = boupgradelist[bobutton - 1].toString() + "/" + decimalToString(bocaplist[bobutton - 1]);
			document.getElementById("boupgradeprice").innerHTML = "Cost: " + decimalToString(price) + " Jumps";
			document.getElementById("boupgradedesc").innerHTML = bodescriptionlist[bobutton - 1];
		});
	});
	document.getElementById("boupgradebutton1").addEventListener("click", function () {
		templist = boupgradelist.slice((Math.ceil(bobutton / 5) - 1) * 5, (Math.ceil(bobutton / 5) - 1) * 5 + 5);
		templist = templist.filter(function (a) {
			return a != 0;
		});
		price = boupgradeprice[bobutton - 1].times(new Decimal("5").pow(new Decimal(templist.length)));
		cap = decimalToString(bocaplist[bobutton - 1]);
		if (jumps.compare(price) >= 0 && boupgradelist[bobutton - 1] < cap && activechallenge !== 8) {
			jumps = jumps.minus(price);
			boupgradelist[bobutton - 1] = boupgradelist[bobutton - 1] + 1;
		}
		document.getElementById("boupgradecap").innerHTML = boupgradelist[bobutton - 1].toString() + "/" + decimalToString(bocaplist[bobutton - 1]);
		document.getElementById("boupgradeprice").innerHTML = "Cost: " + decimalToString(price) + " Jumps";
	});
	document.getElementById("respecbutton").addEventListener("click", function () {
		bouncerespec();
	});
	document.getElementById("energyresetbutton").addEventListener("click", function () {
		if (rollpoints.compare(new Decimal("1")) >= 0 && boupgradelist[22] === 1) {
			energyreset();
		}
	});
	document.querySelectorAll(".tasks").forEach(function (b) {
		b.addEventListener("click", function () {
			taskprice = [
				new Decimal("10").times(new Decimal("1.25").pow(tasks[0])),
				new Decimal("25").times(new Decimal("1.65").pow(tasks[1])),
				new Decimal("50").times(new Decimal("1.75").pow(tasks[2])),
			];
			tasktime = [
				new Decimal("1.25").pow(tasks[0]),
				new Decimal("5").times(new Decimal("1.3").pow(tasks[1])),
				new Decimal("7.5").times(new Decimal("1.35").pow(tasks[2])),
			];
			tasktime.forEach((v, i) => {
				tasktime[i] = tasktime[i]
					.times(
						new Decimal("1").divideBy(
							new Decimal("1")
								.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
								.times(Math.abs(chargeamount / 100))
								.times(new Decimal(parseFloat(new Number(chargeamount >= 0))))
								.times(comparemath(hits, 14))
								.plus(1)
						)
					)
					.times(
						new Decimal("1").add(
							new Decimal("1")
								.times(Math.pow(0.9, electricity.times(batteries).plus(1).log10()))
								.times(Math.abs(chargeamount / 100))
								.times(new Decimal(parseFloat(new Number(chargeamount <= 0))))
								.times(comparemath(hits, 14))
						)
					);
				if (tasktime[i].compare(1) <= 0) {
					tasktime[i] = new Decimal("1");
				}
			});
			price = taskprice[Number(b.id.slice(4)) - 1];
			if (energy.compare(price) >= 0 && taskprogress[Number(b.id.slice(4)) - 1].compare(0) <= 0) {
				taskprogress[Number(b.id.slice(4)) - 1] = tasktime[Number(b.id.slice(4)) - 1].floor();
				tasktime2[Number(b.id.slice(4)) - 1] = taskprogress[Number(b.id.slice(4)) - 1];

				energy = energy.minus(price);
			}
		});
	});
	document.getElementById("disableboxifyauto").addEventListener("click", function () {
		disableautoboxify = new Decimal("1").minus(disableautoboxify);
		if (disableautoboxify.compare(new Decimal("0")) === 0) {
			document.getElementById("disableboxifyauto").style.backgroundColor = "#b4f277";
		} else {
			document.getElementById("disableboxifyauto").style.backgroundColor = "#f27777";
		}
	});
	let challengeid;
	document.querySelectorAll(".challenge").forEach((b) => {
		b.addEventListener("click", () => {
			if (activechallenge == 0) {
				challengegoal = [
					1000 * 3 ** challengelist[0],
					20 * 2 ** challengelist[1] * (1 - comparemath(hits, 25) * 0.6),
					challengelist[2] + 1,
					120 + 2 * challengelist[3],
					20,
					100 + 2 * challengelist[5],
					95 + 2 * challengelist[6],
					20,
				];
				let challengegoalcurr = ["Rotations", "Revolutions", "RollPoints", "Levels", "Levels", "Levels", "Levels", "Levels"];
				challengegoal.forEach((c, d) => {
					challengegoal[d] = challengegoal[d].toString();
					challengegoal[d] += " " + challengegoalcurr[d];
				});
				challengeid = b.id.slice(9);
				challengeid = new Number(challengeid);
				document.getElementById("challengeinfo").innerHTML = challengedesc[challengeid - 1] + "<br> Goal: " + challengegoal[challengeid - 1];
			}
		});
	});
	document.getElementById("challengestart").addEventListener("click", () => {
		if (activechallenge === 0 && challengeid !== undefined) {
			activechallenge = parseFloat(challengeid);
			challengereset();
			if (activechallenge === 8) {
				bouncerespec();
			}
			document.getElementById("challengestart").innerHTML = challengeid.toString();
			if (mutemusic === 1) {
				bgmusic = "assets/audio/challenge.mp3";
				if (carti === 1) {
					bgmusic = "assets/audio/carti.mp3";
				}
				musictrack.pause();
				musictrack = new Audio(bgmusic);
				musictrack.setAttribute(bgmusic);
				musictrack.play();
				musictrack.addEventListener(
					"ended",
					() => {
						this.currentTime = 0;
						this.play();
					},
					false
				);
			}
			document.getElementById("challengestart").innerHTML = "Exit!";
			document.body.style.backgroundColor = "rgb(167, 167, 167)";
			burnoutfunctionality = setInterval(burnout, 1000);
		} else if (activechallenge > 0) {
			challengegoal = [
				1000 * 3 ** challengelist[0],
				20 * 2 ** challengelist[1] * (1 - comparemath(hits, 25) * 0.6),
				challengelist[2] + 1,
				120 + 2 * challengelist[3],
				20,
				100 + 2 * challengelist[5],
				95 + 2 * challengelist[6],
				20,
			];
			document.body.style.backgroundColor = "rgb(212, 212, 212)";
			if (mutemusic === 1) {
				musictrack.pause();
				bgmusic = "assets/audio/real.mp3";
				if (carti === 1) {
					bgmusic = "assets/audio/carti.mp3";
				}
				musictrack = new Audio(bgmusic);
				musictrack.setAttribute("src", bgmusic);
				musictrack.play();
				musictrack.addEventListener(
					"ended",
					() => {
						this.currentTime = 0;
						this.play();
					},
					false
				);
			}
			challengegoalcurr = ["rotations", "revolutions", "rollpoints", "level", "level", "level", "level", "level"];

			if (
				eval(challengegoalcurr[activechallenge - 1] + ".compare(challengegoal[activechallenge - 1]) >= 0") &&
				challengecap[activechallenge - 1] > challengelist[activechallenge - 1]
			) {
				challengelist[activechallenge - 1] += 1;
				document.getElementById("challenge" + activechallenge.toString()).innerHTML =
					challengetitles[activechallenge - 1] + " " + challengelist[activechallenge - 1] + "/" + challengecap[activechallenge - 1];
			}
			challengegoalcurr = ["Rotations", "Revolutions", "RollPoints", "Levels", "Levels", "Levels", "Levels", "Levels"];
			challengegoal.forEach((c, d) => {
				challengegoal[d] = challengegoal[d].toString();
				challengegoal[d] += " " + challengegoalcurr[d];
			});
			if (hits.compare(20) >= 0) {
				let completetest = true;
				while (completetest) {
					challengegoalcurr = ["rotations", "revolutions", "rollpoints", "level", "level", "level", "level", "level"];
					if (
						eval(challengegoalcurr[activechallenge - 1] + ".compare(challengegoal[activechallenge - 1]) >= 0") &&
						challengecap[activechallenge - 1] > challengelist[activechallenge - 1]
					) {
						challengelist[activechallenge - 1] += 1;
						document.getElementById("challenge" + activechallenge.toString()).innerHTML =
							challengetitles[activechallenge - 1] + " " + challengelist[activechallenge - 1] + "/" + challengecap[activechallenge - 1];
					} else {
						completetest = false;
					}
					challengegoalcurr = ["Rotations", "Revolutions", "RollPoints", "Levels", "Levels", "Levels", "Levels", "Levels"];
					challengegoal.forEach((c, d) => {
						challengegoal[d] = challengegoal[d].toString();
						challengegoal[d] += " " + challengegoalcurr[d];
					});
					challengegoal = [
						1000 * 3 ** challengelist[0],
						20 * 2 ** challengelist[1] * (1 - comparemath(hits, 25) * 0.6),
						challengelist[2] + 1,
						120 + 2 * challengelist[3],
						20,
						100 + 2 * challengelist[5],
						95 + 2 * challengelist[6],
						20,
					];
				}
			}
			document.getElementById("challengeinfo").innerHTML =
				"No challenges are selected. Select one and start it to apply it's debuffs. Finishing a challenge gives rewards to help you progress. All challenges force a bounce reset (only QoL is kept) with no reward unless specified. If you are stuck in a challenge just press the button below.";
			activechallenge = 0;
			challengeid = undefined;
			document.getElementById("challengestart").innerHTML = "Start!";
			if (challengelist[0] >= 1) {
				document.getElementById("challenge2").style.display = "block";
			}
			if (challengelist[1] >= 2) {
				document.getElementById("challenge3").style.display = "block";
			}
			if (challengelist[2] >= 1) {
				document.getElementById("challenge4").style.display = "block";
			}
			if (challengelist[3] >= 10) {
				document.getElementById("challenge5").style.display = "block";
			}
			clearInterval(burnoutfunctionality);
		}
	});
	document.getElementById("transferbutton").addEventListener("click", () => {
		if (challengelist[4] > 0) {
			transferreset();
		}
	});
	document.getElementById("dropdown").addEventListener("click", () => {
		if (dropdowntoggle) {
			move(document.getElementById("menu"), 5, -100, 30);
			dropdowntoggle = false;
		} else {
			document.getElementById("menu").style.display = "flex";
			move(document.getElementById("menu"), -100, 5, 30);
			dropdowntoggle = true;
		}
	});
	let dropdowntoggle2 = false;
	document.getElementById("dropdown2").addEventListener("click", () => {
		if (dropdowntoggle2) {
			move(document.getElementById("menu2"), 5, -100, 30);
			dropdowntoggle2 = false;
		} else {
			document.getElementById("menu2").style.display = "flex";
			move(document.getElementById("menu2"), -100, 5, 30);
			dropdowntoggle2 = true;
		}
	});
	document.getElementById("moveleft").addEventListener("click", () => {
		if (sscreen > -1) {
			for (l = 0; l < ballList.length; l = l + 1) {
				pegarea.removeChild(document.getElementById("ball" + ballList[l].index.toString()));
			}
			ballList = [];
			document.getElementById("balldrop").innerHTML = "Drop Ball!";
			document.getElementById("balldrop").style.backgroundColor = "#c2c2c2";
			document.getElementById("screen" + sscreen.toString()).style.display = "none";
			sscreen = sscreen - 1;
			document.getElementById("screen" + sscreen.toString()).style.display = "inline";
			document.getElementById("screen" + sscreen.toString()).style.display = "inline";
			if (sscreen === 1) {
				if (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
					while (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
						consoletext.innerHTML = consoletext.innerHTML.substring(consoletext.innerHTML.indexOf("<br>") + 4);
					}
				}
			}
		}
	});
	document.getElementById("moveright").addEventListener("click", () => {
		if (sscreen < 3 || (sscreen < 5 && rollresets.compare(1) >= 0) || (sscreen < 6 && boupgradelist[24] === 1) || (sscreen < 7 && strikeresets > 0)) {
			for (l = 0; l < ballList.length; l = l + 1) {
				pegarea.removeChild(document.getElementById("ball" + ballList[l].index.toString()));
			}
			ballList = [];
			document.getElementById("balldrop").innerHTML = "Drop Ball!";
			document.getElementById("balldrop").style.backgroundColor = "#c2c2c2";
			document.getElementById("screen" + sscreen.toString()).style.display = "none";
			sscreen = sscreen + 1;
			document.getElementById("screen" + sscreen.toString()).style.display = "inline";
			if (sscreen === 1) {
				if (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
					while (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
						consoletext.innerHTML = consoletext.innerHTML.substring(consoletext.innerHTML.indexOf("<br>") + 4);
					}
				}
			}
		}
	});
	let focus = true;
	document.getElementById("focus").addEventListener("click", () => {
		if (focus) {
			opacity(document.getElementById("pupgradebuilding"), 0, 1, 25);
			opacity(document.getElementById("opacitytoggle"), 0, 0.55, 25);
			focus = false;
		} else {
			opacity(document.getElementById("pupgradebuilding"), 1, 0, 25);
			opacity(document.getElementById("opacitytoggle"), 0.55, 0, 25);
			focus = true;
		}
	});
	document.getElementById("highlighter").addEventListener("mousedown", () => {
		for (m = 0; m < boupgradelist.length; m = m + 1) {
			if (boupgradelist[m] === 1) {
				document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "green");
				if (m > 24) {
					document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "green3");
				}
			} else {
				document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "red");
				if (m > 24) {
					document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "red3");
				}
			}
		}
		for (m = 0; m < particleupgradelist.length; m = m + 1) {
			if (particleupgradelist[m] === 1) {
				document.getElementById("particleupgrade" + (m + 1).toString()).setAttribute("class", "green2");
			} else {
				document.getElementById("particleupgrade" + (m + 1).toString()).setAttribute("class", "red2");
			}
		}
	});
	document.getElementById("highlighter").addEventListener("mouseup", () => {
		for (m = 0; m < boupgradelist.length; m = m + 1) {
			document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "boupgradeicon" + Math.ceil((m + 1) / 5).toString());
		}
		for (m = 0; m < particleupgradelist.length; m = m + 1) {
			document.getElementById("particleupgrade" + (m + 1).toString()).setAttribute("class", "particleupgrade");
		}
	});
	document.getElementById("strikereset").addEventListener("click", () => {
		if (level.compare(hitreq) >= 0) {
			strikereset();
			document.getElementById("hitmilestone" + decimalToString(hits)).style.backgroundColor = "#2cd459";
		}
	});
	document.getElementById("annihilationreset").addEventListener("click", () => {
		if (new Decimal(ballamount2).compare(annihilationreq) >= 0) {
			annihilationreset();
		}
	});
	document.querySelectorAll(".particleupgrade").forEach((element) => {
		element.addEventListener("click", () => {
			particleid = element.id.slice(15);
			document.getElementById("paupgradetitle").innerHTML = particletitlelist[particleid - 1];
			document.getElementsByClassName("paupgradeimage")[0].src = "assets/img/paupgrade" + particleid.toString() + ".png";
			document.getElementById("paupgradecap").innerHTML =
				particleupgradelist[particleid - 1].toString() + "/" + decimalToString(particlecaplist[particleid - 1]);
			document.getElementById("paupgradeprice").innerHTML = "Cost: " + decimalToString(particlepricelist[particleid - 1]) + " Particles";
			document.getElementById("paupgradedesc").innerHTML = particledescriptionlist[particleid - 1];
		});
	});
	document.getElementById("paupgradebutton1").addEventListener("click", function () {
		price = particlepricelist[particleid - 1];
		cap = particlecaplist[particleid - 1];
		if (particles.compare(price) >= 0 && particleupgradelist[particleid - 1] < cap) {
			particles = particles.minus(price);
			particleupgradelist[particleid - 1] = particleupgradelist[particleid - 1] + 1;
		}
		document.getElementById("paupgradecap").innerHTML =
			particleupgradelist[particleid - 1].toString() + "/" + decimalToString(particlecaplist[particleid - 1]);
		document.getElementById("paupgradeprice").innerHTML = "Cost: " + decimalToString(price) + " Particles";
	});
	document.getElementById("upswitcher").addEventListener("click", () => {
		function switchlayer1() {
			upswitch = !upswitch;
			if (upswitch) {
				document.getElementById("qolbuilding").style.opacity = 0;
				document.getElementById("specialpegbuilding").style.opacity = 0;
				document.getElementById("upresetbuilding").style.display = "block";
				document.getElementById("ultrapegbuilding").style.display = "block";
			} else {
				document.getElementById("qolbuilding").style.opacity = 1;
				document.getElementById("specialpegbuilding").style.opacity = 1;
				document.getElementById("upresetbuilding").style.display = "none";
				document.getElementById("ultrapegbuilding").style.display = "none";
				document.getElementById("upanimation1").style.display = "block";
				extend(document.getElementById("upanimation1"), 0, -115, 50, 0);
				document.getElementById("upanimation2").style.display = "block";
				extend(document.getElementById("upanimation2"), -5, 100, 50, 0);
				document.getElementById("upswitcher").style.backgroundColor = "#6117c2";
				document.getElementById("upswitcher").innerHTML = "Ultra Pegs";
				document.getElementById("upswitcher").style.color = "white";
			}
		}
		if (!upswitch) {
			document.getElementById("upanimation1").style.display = "block";
			extend(document.getElementById("upanimation1"), -100, 0, 50, 0);
			document.getElementById("upanimation2").style.display = "block";
			extend(document.getElementById("upanimation2"), 100, -5, 50, 0);
			document.getElementById("upswitcher").style.backgroundColor = "gold";
			document.getElementById("upswitcher").innerHTML = "Special Pegs";
			document.getElementById("upswitcher").style.color = "black";
		}
		setTimeout(switchlayer1, 200);
	});
	document.getElementById("uparrow1").addEventListener("click", function () {
		if (upupgrade > 1) {
			document.getElementById("upupgrade" + upupgrade.toString()).style.display = "none";
			upupgrade = upupgrade - 1;
			document.getElementById("upupgrade" + upupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("uparrow2").addEventListener("click", function () {
		if (upupgrade < 6) {
			document.getElementById("upupgrade" + upupgrade.toString()).style.display = "none";
			upupgrade = upupgrade + 1;
			document.getElementById("upupgrade" + upupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("upupgradebutton1").addEventListener("click", function () {
		price = upupgradeprice[upupgrade - 1];
		cap = upcaplist[upupgrade - 1];
		if (ultrapegs.compare(price) >= 0 && upupgradelist[upupgrade - 1].compare(cap) < 0) {
			ultrapegs = ultrapegs.minus(price);
			upupgradelist[upupgrade - 1] = upupgradelist[upupgrade - 1].add(new Decimal("1"));
			upupgradeprice = [
				new Decimal("5"),
				new Decimal("150"),
				new Decimal("250"),
				new Decimal("500"),
				new Decimal("2000").times(new Decimal("1.3").pow(upupgradelist[3])),
				new Decimal("10000"),
			];
		}
		for (m = 1; m <= upupgradelist.length; m = m + 1) {
			document.getElementById("upupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(upupgradeprice[m - 1]) + " Ultra Pegs";
			document.getElementById("upupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(upupgradelist[m - 1]) + "/" + decimalToString(upcaplist[m - 1]);
		}
	});
	document.getElementById("upresetbutton").addEventListener("click", function () {
		if (specialpegs.compare(new Decimal("1e20")) >= 0) {
			condensereset();
		}
	});
	document.getElementById("ppswitcher").addEventListener("click", () => {
		function switchlayer2() {
			ppswitch = !ppswitch;
			if (ppswitch) {
				document.getElementById("boxifyreset").style.opacity = 0;
				document.getElementById("boxifyupgradebuilding").style.opacity = 0;
				document.getElementById("ppresetbuilding").style.display = "block";
				document.getElementById("packagedpointbuilding").style.display = "block";
			} else {
				document.getElementById("boxifyreset").style.opacity = 1;
				document.getElementById("boxifyupgradebuilding").style.opacity = 1;
				document.getElementById("ppresetbuilding").style.display = "none";
				document.getElementById("packagedpointbuilding").style.display = "none";
				document.getElementById("ppanimation1").style.display = "block";
				extend(document.getElementById("ppanimation1"), 0, -115, 50, 0);
				document.getElementById("ppanimation2").style.display = "block";
				extend(document.getElementById("ppanimation2"), -5, 100, 50, 0);
				document.getElementById("ppswitcher").style.backgroundColor = "#ebb373";
				document.getElementById("ppswitcher").innerHTML = "Packaged Points";
			}
		}
		if (!ppswitch) {
			document.getElementById("ppanimation1").style.display = "block";
			extend(document.getElementById("ppanimation1"), -100, 0, 50, 0);
			document.getElementById("ppanimation2").style.display = "block";
			extend(document.getElementById("ppanimation2"), 100, -5, 50, 0);
			document.getElementById("ppswitcher").style.backgroundColor = "limegreen";
			document.getElementById("ppswitcher").innerHTML = "Boxify";
		}
		setTimeout(switchlayer2, 200);
	});
	document.getElementById("pparrow1").addEventListener("click", function () {
		if (ppupgrade > 1) {
			document.getElementById("ppupgrade" + ppupgrade.toString()).style.display = "none";
			ppupgrade = ppupgrade - 1;
			document.getElementById("ppupgrade" + ppupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("pparrow2").addEventListener("click", function () {
		if (ppupgrade < 9) {
			document.getElementById("ppupgrade" + ppupgrade.toString()).style.display = "none";
			ppupgrade = ppupgrade + 1;
			document.getElementById("ppupgrade" + ppupgrade.toString()).style.display = "block";
		}
	});
	document.getElementById("ppupgradebutton1").addEventListener("click", function () {
		price = ppupgradeprice[ppupgrade - 1];
		cap = ppcaplist[ppupgrade - 1];
		if (packagepoints.compare(price) >= 0 && ppupgradelist[ppupgrade - 1].compare(cap) < 0) {
			packagepoints = packagepoints.minus(price);
			ppupgradelist[ppupgrade - 1] = ppupgradelist[ppupgrade - 1].add(new Decimal("1"));
			ppupgradeprice = [
				new Decimal("1.75").pow(ppupgradelist[0]),
				new Decimal("1.75").pow(ppupgradelist[1]),
				new Decimal("1.75").pow(ppupgradelist[2]),
				new Decimal("1.75").pow(ppupgradelist[3]),
				new Decimal("25").times(new Decimal(1.7).pow(ppupgradelist[4])),
				new Decimal("45").times(new Decimal(1.75).pow(ppupgradelist[5])),
				new Decimal("950").times(new Decimal(1.55).pow(ppupgradelist[6])),
				new Decimal("3e4").times(new Decimal(3.5).pow(ppupgradelist[7])),
				new Decimal("1e6"),
			];
		}
		for (m = 1; m <= ppupgradelist.length; m = m + 1) {
			document.getElementById("ppupgrade" + m.toString() + "price").innerHTML = "Cost: " + decimalToString(ppupgradeprice[m - 1]) + " Packaged Points";
			document.getElementById("ppupgrade" + m.toString() + "cap").innerHTML =
				decimalToString(ppupgradelist[m - 1]) + "/" + decimalToString(ppcaplist[m - 1]);
		}
	});
	document.getElementById("ppresetbutton").addEventListener("click", function () {
		if (boxpoints.compare(new Decimal("1e70")) >= 0) {
			packagereset();
		}
	});

	document.querySelectorAll(".mapbutton").forEach((e, b3) => {
		e.addEventListener("click", () => {
			let b = b3 - 1;
			if (b <= 3 || (b < 5 && rollresets.compare(1) >= 0) || (b <= 6 && boupgradelist[24] === 1) || (b <= 7 && strikeresets > 0)) {
				for (l = 0; l < ballList.length; l = l + 1) {
					pegarea.removeChild(document.getElementById("ball" + ballList[l].index.toString()));
				}
				ballList = [];
				document.getElementById("balldrop").innerHTML = "Drop Ball!";
				document.getElementById("balldrop").style.backgroundColor = "#c2c2c2";
				document.getElementById("screen" + sscreen.toString()).style.display = "none";
				sscreen = b;
				document.querySelectorAll(".mapbutton").forEach((e2, b2) => {
					e2.innerHTML = (b2 - 1).toString();
				});
				e.innerHTML = "&#9679;";
				document.getElementById("maptitle").innerHTML = "Area: " + screenname[b + 1];
				document.getElementById("screen" + sscreen.toString()).style.display = "inline";
			}
		});
	});
	//hotkeys
	document.addEventListener("keydown", function (event) {
		//window.console.log(event.code);
		//^^^ keycode testing ^^^
		if (event.code === "KeyQ") {
			save();
			if (JSON.stringify(savefile) !== "[object Object]") {
				localStorage.setItem("save", JSON.stringify(savefile));
				newentry("Game saved.");
			} else {
				alert("saving failed...");
			}
		}
		if (
			(event.code === "ArrowRight" || event.code === "KeyD") &&
			(sscreen < 3 || (sscreen < 5 && rollresets.compare(1) >= 0) || (sscreen < 6 && boupgradelist[24] === 1) || (sscreen < 7 && strikeresets > 0))
		) {
			for (l = 0; l < ballList.length; l = l + 1) {
				pegarea.removeChild(document.getElementById("ball" + ballList[l].index.toString()));
			}
			ballList = [];
			document.getElementById("balldrop").innerHTML = "Drop Ball!";
			document.getElementById("balldrop").style.backgroundColor = "#c2c2c2";
			document.getElementById("screen" + sscreen.toString()).style.display = "none";
			sscreen = sscreen + 1;
			document.querySelectorAll(".mapbutton").forEach((e2, b2) => {
				e2.innerHTML = (b2 - 1).toString();
			});
			document.getElementById("map1/" + sscreen.toString()).innerHTML = "&#9679;";
			document.getElementById("maptitle").innerHTML = "Area: " + screenname[sscreen + 1];
			document.getElementById("screen" + sscreen.toString()).style.display = "inline";
			if (sscreen === 1) {
				if (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
					while (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
						consoletext.innerHTML = consoletext.innerHTML.substring(consoletext.innerHTML.indexOf("<br>") + 4);
					}
				}
			}
		}
		if ((event.code === "ArrowLeft" || event.code === "KeyA") && sscreen > -1) {
			for (l = 0; l < ballList.length; l = l + 1) {
				pegarea.removeChild(document.getElementById("ball" + ballList[l].index.toString()));
			}
			ballList = [];
			document.getElementById("balldrop").innerHTML = "Drop Ball!";
			document.getElementById("balldrop").style.backgroundColor = "#c2c2c2";
			document.getElementById("screen" + sscreen.toString()).style.display = "none";
			sscreen = sscreen - 1;
			document.querySelectorAll(".mapbutton").forEach((e2, b2) => {
				e2.innerHTML = (b2 - 1).toString();
			});
			document.getElementById("map1/" + sscreen.toString()).innerHTML = "&#9679;";
			document.getElementById("maptitle").innerHTML = "Area: " + screenname[sscreen + 1];
			document.getElementById("screen" + sscreen.toString()).style.display = "inline";
			document.getElementById("screen" + sscreen.toString()).style.display = "inline";
			if (sscreen === 1) {
				if (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
					while (consoletext.getBoundingClientRect().height >= document.getElementById("consolemain").getBoundingClientRect().height) {
						consoletext.innerHTML = consoletext.innerHTML.substring(consoletext.innerHTML.indexOf("<br>") + 4);
					}
				}
			}
		}
		if (event.code === "KeyB" && level >= 16) {
			boxifyreset();
		}
		if (event.code === "KeyR" && level.compare(rollpointreq) >= 0) {
			rollreset();
		}
		if (event.code === "KeyV" && sscreen === 3) {
			if (revrotationallow === 1) {
				revrotationallow = -4;
				if (revimgrotation >= 350 || revimgrotation <= 10) {
					document.getElementById("revolutionline").style.backgroundColor = "green";
					document.getElementById("revbutton").innerHTML = "You Won!";
					revolutions = revolutions.plus(revgain.times(new Decimal(revstreakeffect)));
					revstreak = revstreak + 1;
					revstreakeffect = (Math.pow(1.15, revstreak) * (Math.pow(parseFloat(decimalToString2(irev)), 1.35) + 1)).toFixed(2);
					if (revstreak >= 10) {
						revstreakeffect = (Math.pow(1.15, 10) * (Math.pow(parseFloat(decimalToString2(irev)), 1.35) + 1)).toFixed(2);
					}
					document.getElementById("revpowertext").innerHTML = "Streak: " + revstreak.toString() + "<br> Boost: x" + revstreakeffect.toString();
					document.getElementById("revpowerbar2").style.height = (35 - revstreak * 3.5).toString() + "%";
				} else {
					document.getElementById("revolutionline").style.backgroundColor = "red";
					document.getElementById("revbutton").innerHTML = "You Missed...";
					revstreak = 0;
					revstreakeffect = Math.pow(1.15, revstreak);
					document.getElementById("revpowertext").innerHTML = "Streak: " + revstreak.toString() + "<br> Boost: x" + revstreakeffect.toString();
					document.getElementById("revpowerbar2").style.height = (35 - revstreak * 3.5).toString() + "%";
				}
			}
		}
		if (event.code === "KeyJ" && rollpoints.compare(new Decimal("10")) >= 0) {
			bouncereset();
		}
		if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
			for (m = 0; m < boupgradelist.length; m = m + 1) {
				for (m = 0; m < boupgradelist.length; m = m + 1) {
					if (boupgradelist[m] === 1) {
						document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "green");
						if (m > 24) {
							document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "green3");
						}
					} else {
						document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "red");
						if (m > 24) {
							document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "red3");
						}
					}
				}
			}
			for (m = 0; m < particleupgradelist.length; m = m + 1) {
				if (particleupgradelist[m] === 1) {
					document.getElementById("particleupgrade" + (m + 1).toString()).setAttribute("class", "green2");
				} else {
					document.getElementById("particleupgrade" + (m + 1).toString()).setAttribute("class", "red2");
				}
			}
		}
		if (event.code === "KeyE") {
			if (rollpoints.compare(new Decimal("1")) >= 0 && boupgradelist[22] === 1) {
				energyreset();
			}
		}
		if (event.code === "KeyT") {
			if (challengelist[4] > 0) {
				transferreset();
			}
		}
		if (event.code === "KeyH") {
			if (level.compare(hitreq) >= 0 && challengelist[7] >= 1) {
				strikereset();
				document.getElementById("hitmilestone" + decimalToString(hits)).style.backgroundColor = "#2cd459";
			}
		}
		if (event.code === "KeyP") {
			if (new Decimal(ballamount2).compare(annihilationreq) >= 0 && hits.compare(15) >= 1) {
				annihilationreset();
			}
		}
		if (event.code === "KeyU") {
			if (specialpegs.compare(new Decimal("1e20")) >= 0 && particleupgradelist[1] >= 1) {
				condensereset();
			}
		}
		if (event.code === "KeyO") {
			if (boxpoints.compare(new Decimal("1e70")) >= 0 && particleupgradelist[8] >= 1) {
				packagereset();
			}
		}
	});
	//slider :3
	document.getElementById("ballcomp").oninput = function () {
		document.getElementById("ballcompdisplay").innerHTML = "Ball Compaction Start: " + this.value.toString() + " Balls";
		ballcap = this.value;
	};
	document.getElementById("precision").oninput = function () {
		document.getElementById("precisiondisplay").innerHTML = "Digit Precision: " + this.value.toString() + " Places";
		precision = this.value;
		display();
	};
	document.getElementById("notation").oninput = function () {
		document.getElementById("notationdisplay").innerHTML = "Number Notation: " + notationlist[this.value];
		notation = this.value;
		display();
	};
	document.getElementById("transferslider").oninput = function () {
		document.getElementById("transferamount").innerHTML = "Current Setting: " + this.value.toString();
		chargeamount = this.value;
	};
	document.addEventListener("keyup", function (e) {
		if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
			for (m = 0; m < boupgradelist.length; m = m + 1) {
				document.getElementById("boupgrade" + (m + 1).toString() + "icon").setAttribute("class", "boupgradeicon" + Math.ceil((m + 1) / 5).toString());
			}
			for (m = 0; m < particleupgradelist.length; m = m + 1) {
				document.getElementById("particleupgrade" + (m + 1).toString()).setAttribute("class", "particleupgrade");
			}
		}
	});
	//disables space clicking buttons (so fucking annoying use enter)
	document.querySelectorAll("button").forEach(function (item) {
		item.addEventListener("focus", function () {
			this.blur();
		});
	});
});
