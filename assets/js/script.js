
// var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=26.2034&lon=98.2300&exclude={part}&appid=d727e0c365295376fcdf1f7932a17a35"

// var cityNameApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Mcallen,tx,US&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"


// fetch(cityNameApiUrl, {
//     cache: 'reload',
// })
//     .then(function(response) {
//         console.log(response.json());
//     })

var searchArea = $(".searchArea");
var searchBtn = $('.search');

searchBtn.on("click", function (event) {
    var clickBtn = event.target;
    var city = $(clickBtn).siblings()[1].value;
  

    console.log(city)
})
   


