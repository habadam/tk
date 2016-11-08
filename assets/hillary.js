var hillary = function () {
confirm ("Er du klar for en skrekkelig opplevelse i eget hjem?");
confirm ("Tenkte meg det, ja");
var age=prompt ("Før vi begynner må jeg bare vite en ting, hvor gammel er du?").toLowerCase();
if (age<16)
{
    confirm ("Hvorfor leker du at du skjønner politikk, lille unge?");
} else {
    confirm ("Flott, du er gammel nok!");
}

confirm ("Du våkner om natta av noen merkelige lyder. Da du går til stua for å sjekke hva det er, ser du til din store skrekk at det er Hillary Clinton som er i ferd med å spise barnet ditt!");
var userAnswer = prompt("Hva gjør du nå? (Svar 'Sloss', 'Stikke', 'Bestikke', eller noe annet)").toLowerCase();

if (userAnswer === "sloss") {
    var userAnswer2 = prompt ("Har du automatvåpen i huset? (Svar 'Ja', eller 'Nei')");
    if (userAnswer2 === "ja") {
        confirm ("Du benytter deg av din rett fra andre grunnlovstillegg, og skyter demokraten som er på eiendommen din uten tillatelse. Godt gjordt!");
    }
    else {
        confirm ("Du angriper Hillary med nevene, men det hjelper lite. Både du og barnet ditt blir spist. Nå angrer du kanskje på at du sa, 'nobody needs an assault rifle'");
    }
}
else if (userAnswer === "stikke") {
    var userAnswer2 = prompt ("Er du sikker på at du vil overlate barnet ditt til en sikker død? (Svar: 'Ja', eller 'Nei')".toLowerCase());
    if (userAnswer2 === 'ja') {
      confirm ("Barnet ditt er dødt og Hillary er president, og alt er din skyld! Fornøyd med deg selv?")
    }
    else {
        userAnswer
    }
}
else if (userAnswer === "bestikke") {
    confirm ("Med en gang du nevner bestikkelser ser Hillary interessert opp.");
    var userAnswer2 = prompt ("Er du såkalt 'really rich'? (Svar 'Ja', eller 'Nei'").toLowerCase();
    if (userAnswer2 === "ja") {
        confirm ("Hillary lar deg og barnet ditt gå. Dere kom unna denne gangen, men Hillary er fortsatt der ute.")
    } else {
        confirm ("Tips til deg: ikke prøv å bruke penger du ikke har, det funker bare for politikere. Du og ditt barn ender som døde.");
    }
}
else {
    confirm ("Du blir stående apatisk og se på at barnet blir fortært og jobben din blir flyttet til Kina (landet som fant opp global oppvarming) og det kommer 650 millioner innvandrere i uka.");
   }

var userRating = prompt ("Hvor bra synes du spillet var, på en skala fra 1-10. (Husk at Trump bomber dritten ut av deg og familien og tar oljen din, hvis du ikke gir bra rating");
if (userRating < 9) {
    confirm ("Du er nok terrorist, du! Du kommer til å angre på den ratingen når Trump kommer og såkalt 'grabs you by the pussy'!);
}
else {
    confirm ("Jeg og The Donald er glade for at du likte spillet. Trum lurer også på om du vil være med ned på grensa for å bygge mur. Mexico betaler deg, vi lover!");
}
};
