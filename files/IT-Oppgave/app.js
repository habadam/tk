let app = angular.module("app", []);

app.controller("newsCtrl", ['$http', function ($http) {
  let vm = this;
  vm.data = {};
  $http.get("https://newsapi.org/v1/articles?source=the-new-york-times&apiKey=08b4ef02e3ee41ef97e464c0b677b44a").success((data)=>{
    vm.data["The New York Times"] = data.articles;
  });
  $http.get("https://newsapi.org/v1/articles?source=bbc-news&apiKey=08b4ef02e3ee41ef97e464c0b677b44a").success((data)=>{
    vm.data["BBC News"] = data.articles;
  });
  $http.get("https://newsapi.org/v1/articles?source=google-news&apiKey=08b4ef02e3ee41ef97e464c0b677b44a").success((data)=>{
    vm.data["Google News"] = data.articles;
  });
}]);

app.controller("scheduleCtrl", ['$http', '$window', '$scope', function ($http, $window, $scope) {
  let vm = this;
  vm.data = [["Kinesisk", "Gym", "Fysikk"], ["Norsk", "Historie", "IT"], ["Frokost", "Samfunnsøkonomi", "Fysikk"], ["IT", "Basismøte", "Kinesisk"], ["Studietime", "Norsk", "Samfunnsøkonomi"], ["Ingen skole!"], ["Ingen skole!"]];
  vm.today = vm.data[new Date().getDay()-1];
  vm.weekdays = ["Mandag","Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag", "Søndag"]
  vm.weekday = vm.weekdays[new Date().getDay()-1];
  vm.colors = {"Ingen skole!":"rgb(76, 217, 100)", "Basismøte":"rgb(76, 217, 100)", "Frokost":"rgb(76, 217, 100)", "Studietime":"rgb(76, 217, 100)", "Samfunnsøkonomi":"#ff4535", "IT":"rgb(90, 200, 250)", "Kinesisk":"rgb(255, 149, 0)", "Historie":"rgb(255,204,0)", "Fysikk":"rgb(0,122,255)", "Norsk":"rgb(255,45,85)", "Gym":"rgb(88,86,214)"}
  vm.showFull = $window.innerWidth > 600;
  angular.element($window).bind('resize', ()=>{
    $scope.$apply(()=>{
      vm.showFull = $window.innerWidth > 600;
    });
  })
}]);
