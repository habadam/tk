str = "";
newKey = (input)=>{
  let d = new Date().getDate()*(new Date().getMonth()+2);
  let date_code = Math.ceil((d%9+((d*(d%9+2)*(d*(d+d%2))))%23)*(d%13+d*(d%19) + 2)/25);
  let keycode = 0;
  for (i=0;i<input.length;i++) {
    let char_code = input.charCodeAt(i);
    keycode += (char_code % 9 + (char_code % 19) % 13 + 12)*(Math.ceil(Math.pow(char_code, 1.7)) + char_code  % 5 + 3)%(423-(i*(i%7)));
  }
  return date_code + keycode % 2500;
}
crack = (input)=>{
  console.log('working');
  str+="0";
  key = newKey(str);
  decoded = input.replace(/./gi, (match)=>{
    enc_code = 5*key - match.charCodeAt(0);
    key -= 19;
    return String.fromCharCode(enc_code);
  });
  goOn = true;
  if ((decoded.charCodeAt(0)>=32&&decoded.charCodeAt(0)<127)) {
    goOn = !confirm("Ser dette riktig ut: \""+decoded+"\"");
  }
  goOn ? setTimeout(crack, 0, input) : (console.log("Key:",str,"\nDekryptert melding:",decoded), str = "");
}
crack(prompt('Hvilken string vil du cracke?'));
