var fascisme = function() {
var userName = prompt ("What is your name?")

if (userName === "Stalin" || userName === "stalin" || userName === "marx" || userName === "Marx" || userName === "Lenin" || userName === "lenin") {
alert ("We do not like Communists here, fuck off!")
for (i=1;i>0;i++){
document.write (i)
}
}

var event = prompt ("About which event are you angry? (E.g. The Recession, Taxes, The Treaty of Versailles)")
var scapegoat = prompt ("Whom do You blame for the Event about which you are angry? (E.g. The Jews, The Communists, The French)")
var action = prompt ("What do you desire be done to the Persons You blame for the Event about which You are angry? (Only VERBS in the INDICATIVE PRESENT TENSE, separated by 'and')")  
var extra = prompt ("Are there any other qualifications your dictator must meet? (Only ADJECTIVES and/or PARTICIPLE VERBS separated by 'and'!)")
var dictator = Math.random()

if (dictator < 0.33) {
  dictator = alert ("Sieg Heil, Herr "+userName+". We are honoured that You have approached Us to order a "+extra+" Führer, and We shall send You one shortly. Within a few Days You will receive a Führer who will "+action+" "+scapegoat+" for causing "+event+". In the unlikely Event of his failure to do so, You will be granted a full Refund. One hundred Percent guaranteed.")
}
else if (dictator > 0.33 && dictator < 0.67) {
  dictator = alert ("Congratulations for getting your very own "+extra+" Duce, Signore "+userName+". Il Duce is the original Kind of fascist Dictator. He will "+action+" "+scapegoat+", so You don't have to! They will get what They deserve for causing "+event+"!")
  }
else {
  dictator = alert ("'¡No pasarán!' the Communists said. But the "+extra+" Generalissimo passed, and the Communists died. As we all know, "+scapegoat+" recently caused "+event+". The Generalissimo will therefore aid you in your quest to "+action+" them.")
  }
}
