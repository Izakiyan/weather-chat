var WeatherChatApp = function (){

var $city = $('#city'); 
var temp = -100;

var fetch = function (city) {
	var _url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=47fe5baf1d54cdcbbb5ecc689871294a';
	$.ajax({
  method: "GET",
  url: _url,
  dataType: "json",
  success: function(data) {
    console.log(data);
    temp = Math.round(data.main.temp - 273);
    var cel = temp + " Celsius";
    $('#city-weather').append("The Temp in "+city+" is "+cel);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
  }
}); 
}
};

var app = WeatherChatApp();


$('.btn-primary').on('click',function(e){
  e.preventDefault();

  $city.empty();
  var city = $city.val();
  fetch(city);
});

