
// var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=26.2034&lon=98.2300&exclude={part}&appid=d727e0c365295376fcdf1f7932a17a35"

// var cityNameApiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=Mcallen,tx,US&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"


// fetch(cityNameApiUrl, {
//     cache: 'reload',
// })
//     .then(function(response) {
//         console.log(response.json());
//     })

var searchArea = $("#searchArea");
var searchBtn = $('#search');


searchBtn.on("click", function (event) {
    
    var city = searchArea.val().trim();
    var cityApi = "http://api.openweathermap.org/geo/1.0/direct?q="+city+",tx,US&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"
  
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
        document.getElementById("cityName").innerHTML = data[0].name

        fetch(weatherApiUrl, {

        })
    
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            console.log(data.current.temp)
            localStorage.setItem("current temp", data.current.temp)
            localStorage.setItem("current wind speed", data.current.wind_speed)
            localStorage.setItem("current humidity", data.current.humidity)
            localStorage.setItem("UV index", data.current.uvi)
            
        })
    })
   
})
   


