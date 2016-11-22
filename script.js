var $city = $('#city');
var $cityWeather = $('#city-weather');

var fetch = function (city) {
	var _url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&APPID=47fe5baf1d54cdcbbb5ecc689871294a';
	$.ajax({
  method: "GET",
  url: _url,
  dataType: "json",
  success: function(data) {
    console.log(data);
    postTemp(data,city);
    postComm(comment);

  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log(textStatus);
  }
}); 
};

var postTemp = function (data,city) {

  var temp = Math.round(data.main.temp - 273);
  
  var obj = {
    temp: temp,
    city: city
  };

  var source = $('#weather-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(obj);
  $('#city-weather').prepend(newHTML);
};

var postComm = function () {
  var comment = $('#userComment').text
  var obj = {
    comment: comment
  };

  var source = $('#comment-template').html();
  var template = Handlebars.compile(source);
  var newHTML = template(obj);
  $('#comment').append(newHTML);
};

$('.btn-primary').on('click',function(e){
  e.preventDefault();

  $city.empty();
  var city = $city.val();
  fetch(city);
});

$('#postCommBtn').on('click',function(e){
  e.preventDefault();

  postComm();
});