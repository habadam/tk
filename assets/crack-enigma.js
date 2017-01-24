var i = 50;
var crack = (input)=>{
  let key = i, charSum = 0;
  let decoded = input.replace(/./gi, (match)=>{
    let enc_code = 5*key - match.charCodeAt(0);
    key -= 19;
    charSum += enc_code;
    return String.fromCharCode(enc_code);
  });
  i++;
  (charSum/decoded.length < 100 && charSum/decoded.length > 75) ? console.log("Mulig crack:", decoded) : null;
  i<3000 ? setTimeout(crack(input), 100) : null;
}
crack(prompt('Hvilken string vil du cracke?'));
