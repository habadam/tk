var putin = function () {
	confirm("Er du klar for et ekte eventyr i norsk natur?");
	alert("Tenkte meg det, ja");
	if (prompt("Før vi begynner må jeg bare vite en ting, hvor gammel er du?").toLowerCase()<13) {
		alert("Dette spillet er ikke for småbarn som deg, men hvis du er en ekte våghals, kan du spille spillet sammen med en voksen.");
	} else {
		alert("Flott, du er gammel nok til å dra på eventyr alene.");
	}

	alert("Du går tur i skogen, da selveste Vladimir Putin plutselig kommer ridende på en bjørn mot deg");
	var userAnswer = prompt("Hva gjør du nå? (Svar 'Sloss', 'Stikke', 'Slå av en prat', eller noe annet)").toLowerCase();

	if (userAnswer === "sloss") {
		var userAnswer2 = prompt("Har du våpen? (Svar 'Ja', eller 'Nei')");
		if (userAnswer2 === "ja") {
			alert("Du slakter Putin og bjørnen hans uten at de hadde provosert deg på noen måte, dette fører til at tredje verdenskrig bryter ut og millioner av mennesker dør på grunn av deg! Nå er du vel fornøyd med deg selv, hva?");
		} else {
			alert("Du angriper Putin med en pinne som du kjøpte av en rar dame i Bergen. Dessverre er den russiske presidenten villt god med en AK-47, og han skyter deg gjentatte ganger i hodet mens han roper 'Headshot, dobro, dobro!'");
		}
	}	else if (userAnswer === "stikke") {
		var userAnswer2 = prompt("Er du raskere enn en bjørn? (Svar: 'Ja, jeg er rask som sonic', eller 'Nei, jeg er treig')");
		if (userAnswer2 === 'Ja, jeg er rask som sonic') {
			userAnswer3 = prompt("Tviler jeg på, hva er persen din på 100-meter?");
			if (userAnswer3 > 7) {
				alert("Bjørnen er nok dessverre raskere enn deg, den biter av hodet ditt og spiser deg til lunsj");
			}	else {
				alert("Med din ummeneskelige fart klarer du med nød og neppe å løpe fra bjørnen. Du har overlevd Putin, for denne gang.");
			}
		}	else {
			alert("Bjørnen tar deg igjen og eter deg opp. En ganske så trist død, men livet ditt var vel heller ikke noe å skryte av, med tanke på at du var en treig person som brukte fritiden din på å spille 'Putin i skogen'");
		}
	}	else if (userAnswer === "slå av en prat") {
		alert("Putin krever at du overgir turskogen din til Russland, ettersom russerne okkuperte skogen for lenge siden og den dermed historisk sett har vært russisk.");
		var userAnswer2 = prompt("Aksepterer du Putin sine krav? (Svar 'Jeg godtar', eller 'Jeg nekter'").toLowerCase();
		if (userAnswer2 === "jeg godtar") {
			alert("Putin tar over skogen, og du slipper fra det hele med livet i behold, dog det ser ut som du må finne deg en ny turskog.")
		} else {
			alert("Putin lar deg gå, men kort tid senere blir du snikmyrdet av politiske årsaker. Putin kaller det hele en tragedie og annekterer skogen din.");
		}
	}	else {
		alert("Du blir distrahert av Putins vakre overkropp. Han tar deg til fange og putter deg i en gulag som han hevder at ikke lenger er i drift.");
	}

	var userRating = prompt("Hvor bra synes du spillet var, på en skala fra 1-10. (Husk at Russland bomber dritten ut av deg hvis du gir dårlig");
	if (userRating < 9) {
		alert("Cyka! Det er mulig du kommer til å angre på den ratingen når hjemmet ditt er lagt i ruiner. Putin bryr seg pent lite om at du er tilknyttet CIA, han bomber deg uansett.");
	}	else {
		confirm ("Jeg og Vladimir er glade for at du likte spillet. Forøvrig lurer Putin på om du vil bli med i KGB, som selvsagt ikke egentlig er lagt ned.");
	}
};
