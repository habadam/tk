function postAjax(url, data, success) {
  var params = typeof data == 'string' ? data : Object.keys(data).map(
          function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
      ).join('&');

  var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
  xhr.open('POST', url);
  xhr.onreadystatechange = function() {
      if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
  };
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send(params);
  return xhr;
}
var nyttnick = (input)=>{
postAjax('https://www.messenger.com/messaging/save_thread_nickname/?source=thread_settings&dpr=1', {
thread_or_other_fbid:100003842477649, // has to be changed
participant_id:100003842477649, //has to be changed
nickname:input,
__user:100003040786923, // your user ID
__a:1,
/* Has to be changed: */
__dyn:'7AzkXh8OAcjxd2u6W85k2m3miWF3oyfJLFwgoqwWhE98nwgUaqG2yaBxebkwy3eF8vDKuEjKewExabwh9UcUhyWCzEkxu9xicG4EnwnoCcxG48hxGbwYxyq-7Q59orKu7E-4oW2qayo8Z1CE',
__af:'i0',
__req:'m',
__be:-1,
__pc:'PHASED:messengerdotcom_pkg',
__rev:2752858, // should maybe be changed
fb_dtsg:'AQH8BYSmoAIJ:AQEWAdfwCgjF', // has to be changed
ttstamp:2658172566689831091116573745865816987651001021196710310670 //has to be changed
}, (data)=>console.log(data))
}
var nicks = ['ass', 'hole', 'fucker', 'nast', 'rotte', 'immigrant', 'test', 'emiliooo', 'emil sundsboeee'];
torp = ()=>{
 nyttnick(nicks[Math.floor(Math.random()*nicks.length)])
}
setInterval(torp, 100);
