let app = angular.module('app', []);

app.config(["$sceProvider", '$controllerProvider', '$provide', '$sceDelegateProvider', function($sceProvider, $controllerProvider, $provide, $sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://static.thorin-games.tk/**',
    'https://thorin-apps.tk/**',
    'https://real-timer.tk/**',
    'http://real-timer.tk/**',
    'https://ruter.no/**'
  ]);
  $sceProvider.enabled(true);

  // Provider-based controller.
  app.controller = function( name, constructor ) {
    $controllerProvider.register( name, constructor );
    return( this );
  };
}]);

app.controller('masterCtrl', ['$http', '$chttp', '$timeout', function ($http, $chttp, $timeout) {
  let vm = this;
  vm.css = "";
  vm.jqLoaded = false;
  vm.status = "Lokaliserer…";
  vm.success = false;
  vm.errors = {
    unknown: false,
    position: false
  };
  vm.data = [];
  vm.coords = [0,0];
  vm.conv = $chttp.get('assets/converter.min.js').then((data)=>{
    eval(data);
  }).catch((data, status)=>{
    console.log(data,status);
    vm.error = true;
  });

  let geo_success = (position)=>{
    vm.errors.position = false;
    vm.conv.then(()=>{
      vm.coords = convert(position.coords.latitude, position.coords.longitude);
      vm.status = "Laster inn data…";
      console.log(vm.coords);
      $chttp.get('//real-timer.tk/cors/cors.php?url=reisapi.ruter.no%2FPlace%2FGetClosestPlacesExtension%3Fcoordinates%3Dx%3D'+Math.round(vm.coords[0])+'%2Cy%3D'+Math.round(vm.coords[1])+'%26proposals%3D12', 0).then(function (data) {
        vm.success = true;
        vm.data = data;
        for (let i = 0; i < vm.data.length; i++) {
          vm.data[i].expanded = false;
          vm.data[i].hasExpanded = false;
          vm.data[i].height = "40px";
          if (vm.data[i].PlaceType == 'Area') {
            for (var j = 0; j < vm.data[i].Stops.length; j++) {
              vm.data[i].Stops[j].expanded = false;
              vm.data[i].hasExpanded = false;
              vm.data[i].Stops[j].height = "40px";
            }
          }
        }
      }).catch(()=>{
        vm.status = "Kunne ikke laste inn data.";
      });
    });
    $timeout(()=>{
      navigator.geolocation.clearWatch(vm.wpid);
    }, 5000);
  }
  let geo_error = ()=>{
    console.log("Couldn't get position");
    vm.status = "Fikk ikke tilgang til stedstjenester";
    vm.errors.position = true;
  }
  let geo_options = {
    enableHighAccuracy: false,
    maximumAge        : 30000,
    timeout           : 2500
  }
  if ('geolocation' in navigator) {
    vm.wpid = navigator.geolocation.watchPosition(geo_success, geo_error, geo_options);
  } else {
    vm.status = "Fikk ikke tilgang til stedstjenester";
    vm.errors.position = true;
  }
  vm.toggle = (i, j)=>{
    if (typeof j === 'undefined') {
      vm.data[i].expanded = !vm.data[i].expanded;
      vm.data[i].hasExpanded = true;
    } else {
      vm.data[i].Stops[j].expanded = !vm.data[i].Stops[j].expanded;
      vm.data[i].Stops[j].hasExpanded = true;
    }
  };
  $chttp.get('assets/glyphicons.min.css').then((data)=>{
    vm.css += data;
  }, 0);
  $chttp.get('//static.thorin-games.tk/css/ubuntu.php').then((data)=>{
    vm.css += data;
  }, 0);
  vm.jq = $chttp.get('https://code.jquery.com/jquery-3.1.1.min.js');
  vm.jq.then((data)=>{
    eval(data);
    vm.jqLoaded = true;
    let eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
    let eventer = window[eventMethod];
    let messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
    eventer(messageEvent, function(e) {
      //console.log(e);
      if (typeof e.data === "string" && e.data.indexOf(",")>-1) {
        //console.log("Recieved message:",e.data);
        let id = e.data.split(',')[0];
        let height = e.data.split(',')[1]+"px";
        let matched = false;
        for (let i = 0; i < vm.data.length; i++) {
          if (vm.data[i].ID == id) {
            matched = true;
            $timeout(()=>{
              vm.data[i].height = height;
              //console.log("Match - ", vm.data[i].Name);
            }, 0);
          } else if (vm.data[i].PlaceType == "Area") {
            //console.log("No match. Checking area");
            for (var j = 0; j < vm.data[i].Stops.length; j++) {
              //console.log("Checking",vm.data[i].Stops[j].Name);
              //console.log("vm.data[i].Stops[j].ID =",vm.data[i].Stops[j].ID," and id =",id);
              if (vm.data[i].Stops[j].ID == id) {
                matched = true;
                console.log("Area stop match!");
                $timeout(()=>{
                  vm.data[i].Stops[j].height = height;
                }, 0);
              }
            }
          }
        }
        if (!matched) {
          console.warn("No match for ",e.data);
        }
      }
    }, false);
  })
}]);

app.service('$chttp', ['$http', '$q', '$timeout', function ($http, $q, $timeout) {
  let vm = this;

  vm.get = (url, timeout, options)=>{
    let deferred = $q.defer();
    let resolved = false;
    if (typeof options === 'undefined') var options = {};
    options.timeout = deferred.promise;
    let request = $http.get(url, options);
    request.success(function (data) {
      if (typeof Storage !== "undefined") {
        try {
          localStorage[url] = JSON.stringify(data);
        } catch (e) {
          console.log("Couldn't save "+url+"-data to storage even though storage exists. Error:",e);
        }
      }
      deferred.resolve(data);
      resolved = true;
    });
    request.error(function (data, status) {
      if (typeof Storage !== "undefined" && url in localStorage) {
        //console.info("The request to",url,"failed, but data existed locally");
        deferred.resolve(JSON.parse(localStorage[url]));
        resolved = true;
      } else {
        deferred.reject("ERROR");
      }
    });
    if (typeof timeout !== "undefined") {
      $timeout(function () {
        if (!resolved && typeof Storage !== "undefined" && url in localStorage) {
          deferred.resolve(JSON.parse(localStorage[url]));
          //console.info("Timeout reached for",url,"but data existed locally");
        }
      }, timeout);
    }
    return deferred.promise;
  }
}]);
