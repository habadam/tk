var kommunisme = function () {

var title = Math.random();

var surname = Math.random();

var userName = prompt ("Hva er ditt fornavn?");

if (title <= 0.2) {
title = "Comrade";
}
else if (title > 0.2 && title <= 0.4) {
title = "Chairman";
}
else if (title > 0.4 && title <= 0.6) {
title = "Eternal President";
}
else if (title > 0.6 && title <= 0.8) {
title = "Shining Red Sun";
}
else if (title > 0.8) {
title = "Revolutionary";
}

if (surname <= 0.2) {
surname = "Stalin";
}
else if (surname > 0.2 && surname <= 0.4) {
surname = "Mao";
}
else if (surname > 0.4 && surname <= 0.6) {
surname = "Castro";
}
else if (surname > 0.6 && surname <= 0.8) {
surname = "Marx";
}
else if (surname > 0.8) {
surname = "Kim";
}  
  
alert ("Your communist name is "+title+" "+userName+" "+surname+"!");
  
};
