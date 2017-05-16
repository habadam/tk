var a = 0;
var dager = []; //Defines array containig birthdays
for (i = 0; i < 23; i++) {
  var day = Math.round(Math.random()*365); //Defines random birthday
  dager[a] = day; //Pushes birthaday to array
  a++; //Increments a
};

dager.sort(); //Sorts birthdays
