var hillary = function () {
confirm ("Er du klar for et skrekkelig eventyr i stua?");
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
    var userAnswer2 = prompt ("Er du raskere enn en bjørn? (Svar: 'Ja, jeg er rask som sonic', eller 'Nei, jeg er treig')");
    if (userAnswer2 === 'Ja, jeg er rask som sonic') {
        userAnswer3 = prompt ("Tviler jeg på, hva er persen din på 100-meter?");
        if (userAnswer3 > 7) {
            confirm ("Bjørnen er nok dessverre raskere enn deg, den biter av hodet ditt og spiser deg til lunsj");
        }
        else {
            confirm ("Med din ummeneskelige fart klarer du med nød og neppe å løpe fra bjørnen. Du har overlevd Putin, for denne gang.");
        }
    }
    else {
        confirm ("Bjørnen tar deg igjen og eter deg opp. En ganske så trist død, men livet ditt var vel heller ikke noe å skryte av, med tanke på at du var en treig person som brukte fritiden din på å spille 'Putin i skogen'");
    }
}
else if (userAnswer === "slå av en prat") {
    confirm ("Putin krever at du overgir turskogen din til Russland, ettersom russerne okkuperte skogen for lenge siden og den dermed historisk sett har vært russisk.");
    var userAnswer2 = prompt ("Aksepterer du Putin sine krav? (Svar 'Jeg godtar', eller 'Jeg nekter'").toLowerCase();
    if (userAnswer2 === "jeg godtar") {
        confirm ("Putin tar over skogen, og du slipper fra det hele med livet i behold, dog det ser ut som du må finne deg en ny turskog.")
    } else {
        confirm ("Putin lar deg gå, men kort tid senere blir du snikmyrdet av politiske årsaker. Putin kaller det hele en tragedie og annekterer skogen din.");
    }
}
else {
    confirm ("Du blir distrahert av Putins vakre overkropp. Han tar deg til fange og putter deg i en gulag som han hevder at ikke lenger er i drift.");
   }

var userRating = prompt ("Hvor bra synes du spillet var, på en skala fra 1-10. (Husk at Russland bomber dritten ut av deg hvis du gir dårlig");
if (userRating < 9) {
    confirm ("Cyka! Det er mulig du kommer til å angre på den ratingen når hjemmet ditt er lagt i ruiner. Putin bryr seg pent lite om at du er tilknyttet CIA, han bomber deg uansett.");
}
else {
    confirm ("Jeg og Vladimir er glade for at du likte spillet. Forøvrig lurer Putin på om du vil bli med i KGB, som selvsagt ikke egentlig er lagt ned.");
}
};
