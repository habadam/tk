var kommunisme = function () {

var userName = prompt ("What is your first name?");

var titles = ["Comrade", "Chairman", "Eternal President", "Shining Red Sun", "Revolutionary"];
title = titles[Math.floor(Math.random()*5)];

var surnames = ["Stalin", "Mao", "Castro", "Marx", "Kim"];
surname = surnames[Math.floor(Math.random()*5)];
  
alert ("Your communist name is "+title+" "+userName+" "+surname+"!");
  
};
