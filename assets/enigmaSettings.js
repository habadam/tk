let d = new Date().getDate()*(new Date().getMonth()+2);
let setting = ((d%9+((d*(d%9+2)*(d*(d+d%2))))%23)*(d%13+d*(d%19) + 2))
