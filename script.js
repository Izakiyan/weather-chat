var $city = $('#city');
var $cityWeather = $('#city-weather');

//var WeatherChatApp = function (){

var fetch = function (city) {
	var _url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=47fe5baf1d54cdcbbb5ecc689871294a';
	$.ajax({
  method: "GET",
  url: _url,
  dataType: "json",
  success: function(data) {
    console.log(data);
    postTemp(data,city);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
  }
}); 
};
//};

//var app = WeatherChatApp();

var postTemp = function (data,city) {
    $cityWeather.empty();
    var temp = Math.round(data.main.temp - 273);
    var cel = temp + " Celsius";
    $cityWeather.append("The Temp in "+city+" is "+cel);
    addComment(comment);
}

var addComment = function () {
  
}

// var listBook = function (data) {
//   if(totalItems){
//     var newBook = {
//     bookName: ,
//     time: ,
//     desc: ,
//     author: ,
//     image: 
//   }
//   var source = $('#book-template').html();
//   var template = Handlebars.compile(source);
//   var newHTML = template(newBook);
//   $('#info-book').append(newHTML);
// }
// };

$('.btn-primary').on('click',function(e){
  e.preventDefault();

  $city.empty();
  var city = $city.val();
  fetch(city);
});

