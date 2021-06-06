
// var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=26.2034&lon=98.2300&exclude={part}&appid=d727e0c365295376fcdf1f7932a17a35"

// var cityNameApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Mcallen,tx,US&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"


// fetch(cityNameApiUrl, {
//     cache: 'reload',
// })
//     .then(function(response) {
//         console.log(response.json());
//     })
var today = moment().format('l')
var searchArea = $("#searchArea");
var searchBtn = $('#search');

var day1 = moment().add(1, 'days').format('ddd')
var day2 = moment().add(2, 'days').format('ddd')
var day3 = moment().add(3, 'days').format('ddd')
var day4 = moment().add(4, 'days').format('ddd')
var day5 = moment().add(5, 'days').format('ddd')


document.getElementById("day1").innerHTML = day1
document.getElementById("day2").innerHTML = day2
document.getElementById("day3").innerHTML = day3
document.getElementById("day4").innerHTML = day4
document.getElementById("day5").innerHTML = day5


searchBtn.on("click", function (event) {
    
    var city = searchArea.val().trim();
    var cityApi = "http://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"
  
    fetch(cityApi, {
    
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        console.log("Latitude: " + data[0].lat)
        console.log("Longitude: " + data[0].lon)
        localStorage.setItem("name", data[0].name)
        var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+data[0].lat+"&lon="+data[0].lon+"&exclude={part}&units=imperial&appid=d727e0c365295376fcdf1f7932a17a35"
        document.getElementById("cityName").innerHTML = data[0].name + " " + today

        fetch(weatherApiUrl, {

        })
    
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            console.log(data.current.temp)

            var currentIcon = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"


            
            $("#icon1").attr("src", currentIcon)
            $("#icon2").attr("src", "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png")
            $("#icon3").attr("src", "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png")
            $("#icon4").attr("src", "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png")
            $("#icon5").attr("src", "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png")
            $("#icon6").attr("src", "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png")
            document.getElementById("currentTemp").innerHTML = "Temp: "+data.current.temp+" "+"°F"
            document.getElementById("currentWind").innerHTML = "Wind: "+data.current.wind_speed+" "+"Mph"
            document.getElementById("currentHumidity").innerHTML = "Humidity: "+data.current.humidity+"%"
            document.getElementById("currentUvi").innerHTML = "UV index: "+data.current.uvi

            document.getElementById("day1Temp").innerHTML = "Temp: "+data.daily[0].temp.day+" "+"°F"
            document.getElementById("day1Wind").innerHTML = "Wind: "+data.daily[0].wind_speed+" "+"Mph"
            document.getElementById("day1Humidity").innerHTML = "Humidity: "+data.daily[0].humidity+"%"
            document.getElementById("day2Temp").innerHTML = "Temp: "+data.daily[1].temp.day+" "+"°F"
            document.getElementById("day2Wind").innerHTML = "Wind: "+data.daily[1].wind_speed+" "+"Mph"
            document.getElementById("day2Humidity").innerHTML = "Humidity: "+data.daily[1].humidity+"%"
            document.getElementById("day3Temp").innerHTML = "Temp: "+data.daily[2].temp.day+" "+"°F"
            document.getElementById("day3Wind").innerHTML = "Wind: "+data.daily[2].wind_speed+" "+"Mph"
            document.getElementById("day3Humidity").innerHTML = "Humidity: "+data.daily[2].humidity+"%"
            document.getElementById("day4Temp").innerHTML = "Temp: "+data.daily[3].temp.day+" "+"°F"
            document.getElementById("day4Wind").innerHTML = "Wind: "+data.daily[3].wind_speed+" "+"Mph"
            document.getElementById("day4Humidity").innerHTML = "Humidity: "+data.daily[3].humidity+"%"
            document.getElementById("day5Temp").innerHTML = "Temp: "+data.daily[4].temp.day+" "+"°F"
            document.getElementById("day5Wind").innerHTML = "Wind: "+data.daily[4].wind_speed+" "+"Mph"
            document.getElementById("day5Humidity").innerHTML = "Humidity: "+data.daily[4].humidity+"%"

            
            
        })
    })
   
})
   

renderPage = function(){
    var lastSearched = localStorage.getItem("name")
    var cityApi = "http://api.openweathermap.org/geo/1.0/direct?q="+lastSearched+"&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"
  
    fetch(cityApi, {
    
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        localStorage.setItem("name", data[0].name)
        var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+data[0].lat+"&lon="+data[0].lon+"&exclude={part}&units=imperial&appid=d727e0c365295376fcdf1f7932a17a35"
        document.getElementById("cityName").innerHTML = data[0].name + " " + today

        fetch(weatherApiUrl, {

        })
    
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var currentIcon = "http://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"


            
            $("#icon1").attr("src", currentIcon)
            $("#icon2").attr("src", "http://openweathermap.org/img/wn/" + data.daily[0].weather[0].icon + "@2x.png")
            $("#icon3").attr("src", "http://openweathermap.org/img/wn/" + data.daily[1].weather[0].icon + "@2x.png")
            $("#icon4").attr("src", "http://openweathermap.org/img/wn/" + data.daily[2].weather[0].icon + "@2x.png")
            $("#icon5").attr("src", "http://openweathermap.org/img/wn/" + data.daily[3].weather[0].icon + "@2x.png")
            $("#icon6").attr("src", "http://openweathermap.org/img/wn/" + data.daily[4].weather[0].icon + "@2x.png")
            document.getElementById("currentTemp").innerHTML = "Temp: "+data.current.temp+" "+"°F"
            document.getElementById("currentWind").innerHTML = "Wind: "+data.current.wind_speed+" "+"Mph"
            document.getElementById("currentHumidity").innerHTML = "Humidity: "+data.current.humidity+"%"
            document.getElementById("currentUvi").innerHTML = "UV index: "+data.current.uvi

            document.getElementById("day1Temp").innerHTML = "Temp: "+data.daily[0].temp.day+" "+"°F"
            document.getElementById("day1Wind").innerHTML = "Wind: "+data.daily[0].wind_speed+" "+"Mph"
            document.getElementById("day1Humidity").innerHTML = "Humidity: "+data.daily[0].humidity+"%"
            document.getElementById("day2Temp").innerHTML = "Temp: "+data.daily[1].temp.day+" "+"°F"
            document.getElementById("day2Wind").innerHTML = "Wind: "+data.daily[1].wind_speed+" "+"Mph"
            document.getElementById("day2Humidity").innerHTML = "Humidity: "+data.daily[1].humidity+"%"
            document.getElementById("day3Temp").innerHTML = "Temp: "+data.daily[2].temp.day+" "+"°F"
            document.getElementById("day3Wind").innerHTML = "Wind: "+data.daily[2].wind_speed+" "+"Mph"
            document.getElementById("day3Humidity").innerHTML = "Humidity: "+data.daily[2].humidity+"%"
            document.getElementById("day4Temp").innerHTML = "Temp: "+data.daily[3].temp.day+" "+"°F"
            document.getElementById("day4Wind").innerHTML = "Wind: "+data.daily[3].wind_speed+" "+"Mph"
            document.getElementById("day4Humidity").innerHTML = "Humidity: "+data.daily[3].humidity+"%"
            document.getElementById("day5Temp").innerHTML = "Temp: "+data.daily[4].temp.day+" "+"°F"
            document.getElementById("day5Wind").innerHTML = "Wind: "+data.daily[4].wind_speed+" "+"Mph"
            document.getElementById("day5Humidity").innerHTML = "Humidity: "+data.daily[4].humidity+"%"

            
            
        })
    })
}

renderPage()