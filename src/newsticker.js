document.addEventListener("DOMContentLoaded", function () {
	"use strict";
	var newsticker, newstickerelement, newstickercontainer, left, resetonce, newstickerchoices;
	newstickerelement = document.getElementById("newstickertext");
	newstickercontainer = document.getElementById("newsticker");
	left = 0;
	resetonce = 0;
	let textrunning = false;

	function newnewsticker() {
		newstickerchoices = [
			"hey im back! life is so good",
			"the next news ticker is lying",
			"the previous news ticker was lying",
			"lab explodes after unfortunate delete save incident",
			"can i borrow 5 ballpoints",
			"man eats 3 special pegs and dies in minutes",
			'43 ballpoints crush a mans house, victim says: "what just happened"',
			"amazon warehouse accidentally ships a boxpoint instead of a package",
			"man loses pc after cheating and spawning 1000 balls at once",
			"journalist killed after talking about horrible cod- HELP ME",
			"3 criminals arrested for distributing tools to modify save files",
			"skins will not be added",
			"assasination attempt on dev over mobile support",
			"import button breaks for the 29th time",
			"please send help :(",
			"scientists invent time travel by spamming the mute sfx button",
			"roblox plinko incremental will update in around 5 hours (probably)",
			"researchers figure out how to make special pegs",
			"researchers shot over new discovery",
			"oh great pelle please give me 30 fun reactions in lethal games discord server",
			"pressing alt+f 4 gives 2 dollars cashapp",
			"you should delete balls NOW!!!",
			"plinkoland bans racing after race track discovered",
			"fish",
			"incremental games banned for uh mm i forogt",
			"you should ping meowfest to update the game!",
			"meowfest found DEAD from mike and ike overdose",
			"for(;;;) {}",
			"please save me",
			"should i stop updating after strike part 1",
			"",
			"plinko incremental balls being sold in 1000 packs found at costco",
			"the woke left protests against plinko incremental",
			"the radical right protests against plinko incremental",
			"jesus you stink i dont even have a nose and i can smell you (jk love you :3)",
			"this message has a 1/1e9e15 chance to appear",
			"the green box actually sets your ballpoints to 0, dont go for it",
			"break;",
			"import 7271337691337420 for a theme",
			"reality update in 5 hours",
			'"I HAVE NOT SHOWERED SINCE 2022" -meowfest, 12/31/23',
			"ball layer that generates sperm WILL BE ADDED TOMORROW",
			":sob:",
			"waiting for the day i forget the c in sec(x)",
			"REMOVE RULE 1 REMOVE RULE 1 REMOVE RULE 1",
			"why did they remove support to the marquee tag",
			"plinko incremental anime delayed to mid 2027 amid developmental issues",
			"chris pratt confirmed to voice the ball in plinko incremental movie",
			"lore",
			"have a random number: " + Math.random().toString() + "!!!",
			"end of the world delayed another year",
			"1 jslint problem: mixed spaces and tabs",
			"walls will not be added stop complaning",
			'scientists struggle to understand physics. quote: "what the fuck"',
			"whats 9 + 10",
			"please dont squish me",
			"serial killer caught trapping victims inside boxpoints",
			"keep I is still useless",
			"cant wait for the NaN update",
			"you should try playing around in the console!!!",
			"new update: increased the update number to look like something changed",
			"p",
			"rabbits",
			"RIP MEOWFEST o7",
			"use the arrowkeys to move :3 :3 :3",
			"explore the map! its worth it",
			"im about to rolllll",
			"for april fools level requirement scales very fast",
			"green box abolished in plinkoland",
			"plinko masters ripoff smhh",
			"stop gambling",
			"HELPPPP HELLP SOMEBODY HELP ME",
			"you should shrink the window size",
			"funny how this is a newsticker but it isnt even news",
			"i can see you",
			"ask meowfest to add loops to plinko incremental",
			"i should make this empty for no reason in particular",
			"hey you forgot that ;",
			'"I HAVE NOT SHOWERED SINCE 2022" -meowfest, 12/31/23',
			"top ten bangers of all time (unless you are on mute :<)",
			"man accidentally touches the rollpoint gear and loses arm",
			"im running out of ideas",
			":3",
			"imagine if the rollpoint gear was real",
			"you spin me right round baby right round",
			"look for the plinko incremental album in stores on november 15",
			"make better gui lol",
			"free me",
			"man destroys home after losing 19 streak",
			"can effect selectoins save :pleading_face:",
			"how do you spel",
			"why do they call it newsticker when you new tick the news tick out news tick the sticker?",
			"wake up wake up wake up",
			"your save will now break",
			"you will unlock this newsticker later",
			"the gear isnt centered (cry about it)",
			"why are all the positions absolute",
			"loading newsticker... |*******        |",
			"wtf!!! sir no spinning",
			"scientists find out rollpoint gear causes the earth to spin",
			"set ball compaction to 100 (trust)",
			"<br>",
			"thats it you are going to the settimeout corner",
			"this game stinks",
			"UPDATE... IS... TOMORROW!!!",
			"YOU ARE A    KING   GG  !!!",
			"you play like a noob... localStorage.clear()",
			"you play like a god... add me",
			"who am i?? what is this place",
			"the text will properly wrap SOON",
			"this message has a 1/1 chance",
			"what if",
			"cry about it",
			"} else if (",
			"qwertyuiopasdfghjklzxcvbnm",
			"subscribe to mewofests yt channel",
			"zed",
			"The world has returned to normal?",
			"while(true) {",
			"// hi",
			"wtf || supposed to be??? why is it or??",
			"one point seven nine times ten to the power of three hundred and eight",
			"theres a variable called ballcheckphysical in the code",
			"whats your favotite line of code",
			"bouncing finally invented in plinkoland",
			"im fixed now",
			"man accidentally buys bounce upgrade 1 first",
			"angelic sob",
			"imaginary revolutions dont exist",
			"next task in 82914 years",
			"wdf??? energy is good now???",
			"59 perish after attemping to climb level 201 wall",
			"i hate this update",
			"today is friday in california",
			"babe wake up new plinko incremental update dropped",
			"did you know that this game is kinda fun",
			"i lied this game is really really boring",
			"plinko masters",
			"slightly inspired by the price is right",
			"what if instead of ballpoints we had money",
			"plinkocoin dropping in 2184 with a starting price of 1 decilion",
			"aim for the middle btw",
			"did you know you can not play this on mobile (may change soon)",
			'i have 183 trillion power in plinko incremnetal and got the 17 star ball "fish ball" and it boosts the odds of finding the one piece by 1',
			"nerfed irev effect effect by 1",
			"crazy?? i was crazy once",
			"careful sponegbob",
			"do your plinko balls light up?2? mine do",
			"be aware of the hamburglar",
			"this game is not edibile dont try to eat",
			"this game contains copious amounts of red 40",
			"this game may cause cancer in the state of california",
			"this game is sponcered by war tudther",
			"my mental state is deriorioating",
			"why do so many games have newstickers like this is getting ridculous at this point smhh",
			"hiiiiiiii :3",
			"this game is a warcrime",
			"enter code 7777777 in the import button for a secret",
			"pee is stored in the plinko balls",
			"did you know that the console in the inspect element thing actually does something",
			"the balls bounce this way because they are living beings that decide where to go",
			"slugnut",
			'type "YES" to affirm infinite green box luck',
			"#1 rng game in the market",
			"will give 3 rollpoints for money",
			"new ui still sucks",
			"ball misses orange box and hits its right ear",
			"guess the number between 1 and 100 (use the ball comp slider)",
			"man falls into plinko machine and disintegrates in the orange box",
			"a ball a day keeps the update away",
			"did you know: john plinko invented the plinko machine in 1238 after seeing his wifes wagon fall down a cliff and bounce around",
			"recent study proves that balls are sentient",
			"horse falls into plinko machine and dies a horrible death",
			"do you accept ballpoints as currency",
			"why do they call it a boxify if they box in the hot plinko",
			"town utilizes stray green box to disintegrate waste",
			"do not attempt to eat the balls",
			"public execution in 3 days",
			"did you know: there is plinko incremental lore but its lost to time sob",
			"click for 1 strike (working 2038)",
			"shoutout to me for making this game",
			"hold enter after clicking the currencies menu for a free ballpoint",
			"inflation hitting hard",
			"plinko incremental stocks go from 2.238 ballpoints to 2.239 ballpoints",
			"this newsticker will be back in 7 buisness days",
			"this newsticker has been removed",
			"the intern responsible for this newsticker has been fired for this entry",
			"first out comes news the of end the and right to left moves ticker news the how weird it isnt",
			"now hiring (join the server to suggest your own news tickers)",
			"blowing up in 3 2 1",
			"new plinko incremental plushies, including the ball, green box and the special peg!",
			"batteries sold seperately",
			"click me to wipe your save",
			"did you know: you can click the news ticker to change the news",
			"stop clicking on me",
			"builder accidentally builds roof 9vmin high instead of 9 feet, causing it to be 9% the radius of the universe tall",
			"this is literally 1984 if you really think about it",
			"1 + 1 = 2.000000001",
			"set ball comp to 100 NOW",
			"physics still broken (check again tomorrow)",
			"what if ballpoints were shooting stars in the night sky",
			"god playing plinko to determine if the world should end",
			"based on real events",
			"did you know: no you didnt",
			"radioactive pegs when",
			"press up arrow 3 times right now for a secret",
			"this entry has been deemed outdated and has been removed :(",
			"lebron james scream if you love plinko incremental *cooldown over sfx*",
			"did you know: in the code a positive y velocity actually makes the ball go down",
			"oh my plinko",
			"did you know: the import button has an 'export' id and the export button has an 'import' id",
			"did you know: hit milestone 4 actually makes progress harder in the roblox version",
			"did you know: typing 13 in import does a secret thing",
			"did you know: the popup text color when the ball gets in the box is temporary",
			"did you know: there was a planned buy 10/max button but at the time i didn't know how to",
			"did you know: there is a 100 item list of prefixes for numbers under 10^306",
			"did you know: so far 2 weeks have been spent on the physics alone and its still broken",
			"did you know: this is my first game and i wish it wasn't",
			"did you know: roblox plinko incremental has only 1 balancing test for strike part 1",
			"did you know: there was going to be an update log when loading in",
			"did you know: the loading screen is so autoplay works on google chrome",
			"did you know: the game is capped at 60fps",
			"did you know: the roll gear speed is based on the log10 of rotation gain",
			"did you know: the newsticker used to go left",
			"did you know: there are too many did you know entries im stopping now",
			"strike actually summons lightning at a random location on earth",
			"do not inhale particles (you will lose them)",
			"scientists still don't know what a ultra peg is made of",
			"amazon bankrupt due to package points running out",
			"this is the 230th entry in the newsticker",
			"tomorrow is saturday",
			"'the newsticker is the most useful feature' - newsticker, 2024",
			"gunna amazed by futuristic mcdonalds",
			"fwaeh",
			"whos dropping first: meowfest or carti",
			"weee",
			"import 888888 for 100 lucky draws",
			"check out horse plinko tycoon on roblox *not paid*",
			"atlanta flooded by balls after ball cap is set to 100",
			"plinko incremental betting starts tomorrow",
			"what if instead of plinko incremental it was freak incremental and it was freaky",
			"string",
			"free cat food this way <-----",
			"meowfest caught with thousands of bottles of particles",
			"in plinko civilization, you have the option to go for the orange box or to go for the green box, but no one goes for the green box",
			"physics are fixed as of writing this",
			"i should ask meowfest for the old newsticers",
			"quickly wanted to tell you thanks for playing!!",
			"what powers this thing",
			"parseInt(0.0000000005) //prints 5 (try it in the console)",
			"[] == false //prints true (try it in the console)",
			"document.getElementById('newsticker').style.display = 'none'",
			"check out my other projects if you want lol",
			"i lost the password to the music account",
			"new music coming soon?",
			"did you know: the game has gone through 5 different ball physics reforms",
			"new at " + new Date().getHours().toString() + " man summons king von to kill the red boxes",
			"new at " + new Date().getHours().toString() + " local javascript developer finds how to find the hour",
			"new at " + new Date().getHours().toString() + " man attempts to break into plinko board and fails",
			"new at " + new Date().getHours().toString() + " new survey says that 24.3% of balls dont like the yellow box",
			"new at " + new Date().getHours().toString() + " new survey says that 3.23% of balls prefer special pegs",
			"new at " + new Date().getHours().toString() + " new survey says that 1 in 39 balls like to clip into walls",
			"new at " + new Date().getHours().toString() + " new survey says that new ui is awesome",
			"new at " + new Date().getHours().toString() + " new survey says that the game is really cool",
			"new at " + new Date().getHours().toString() + " warehouse for batteries catches on fire",
			"new at " + new Date().getHours().toString() + " scientists say that the newsticker isnt about the news anymore",
			"new at " + new Date().getHours().toString() + " meowfest still unlikely to return",
			"new at " + new Date().getHours().toString() + " donald box favored to win in " + new Date().getFullYear().toString() + "election",
			"new at " + new Date().getHours().toString() + " themes may come to plinko incremental",
			"new at " + new Date().getHours().toString() + " this is the 270th entry",
			"new at " + new Date().getHours().toString() + " meowfest amazed by futuristic boxify building",
			"did you know: i cant stop writing these",
			"look ma im the news",
			"why am i slanted ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
		];
		newsticker = Math.ceil(Math.random() * newstickerchoices.length);
		newstickerelement.innerHTML = newstickerchoices[newsticker - 1];
	}

	function wait() {
		resetonce = 0;
		newnewsticker();
		left = (newstickerelement.offsetWidth / newstickercontainer.offsetWidth) * -100;
	}

	function marquee() {
		left = left + 0.075;
		newstickerelement.style.right = left.toString() + "%";
		if (left >= 100 || newstickerelement.offsetLeft - newstickerelement.offsetWidth >= newstickercontainer.offsetWidth) {
			newstickerelement.innerHTML = "";
			if (resetonce === 0) {
				resetonce = 1;
				setTimeout(wait, 2000);
			}
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
	setInterval(marquee, 1);
	newstickerelement.addEventListener("click", () => {
		newentry("Newsticker entry #" + newsticker.toString() + " removed.");
		newstickerelement.innerHTML = "";
		if (resetonce === 0) {
			resetonce = 1;
			setTimeout(wait, 2000);
		}
	});
});
