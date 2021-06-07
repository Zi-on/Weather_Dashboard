var searchArea = $("#searchArea");
var searchBtn = $('#search');
var today = moment().format('l')


searchBtn.on("click", function (event) {

  

    var addSearch = function(){
    var city = searchArea.val().trim();
    var createButton = document.createElement('button');
    var addedSearch = $("#searchItem")
    console.log(addedSearch)
    

    if (city == "" || city == addedSearch)  {
        console.log("what the fuck")
    }
    else {
    createButton.innerHTML = city;
    createButton.classList.add("addedSearch")
    createButton.setAttribute("id", "searchItem")
    document.getElementById("searchBar").appendChild(createButton);
    }
}

    var city = searchArea.val().trim();
    console.log(city)
    // var savedSearch = document.createElement('button');
    // savedSearch.innerHTML = city;
    // savedSearch.classList.add("addedSearch")

    // document.getElementById("searchBar").appendChild(savedSearch);
    

   addSearch();
    
    var cityApi = "https://api.openweathermap.org/geo/1.0/direct?q="+city+"&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"
   
    fetch(cityApi, {
    
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        console.log(data)
        localStorage.setItem("name", data[0].name)
        var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+data[0].lat+"&lon="+data[0].lon+"&exclude={part}&units=imperial&appid=d727e0c365295376fcdf1f7932a17a35"
        document.getElementById("cityName").innerHTML = data[0].name + " " + moment().format("l")

        fetch(weatherApiUrl, {

        })
    
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data)
            var currentIcon = "https://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"  
            $("#icon").attr("src", currentIcon)

            for (var i = 0; i < 5; i++) {
                $("#icon"+i).attr("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png")
            }

            document.getElementById("currentTemp").innerHTML = "Temp: "+data.current.temp+" "+"°F"
            document.getElementById("currentWind").innerHTML = "Wind: "+data.current.wind_speed+" "+"Mph"
            document.getElementById("currentHumidity").innerHTML = "Humidity: "+data.current.humidity+"%"
            document.getElementById("currentUvi").innerHTML = "UV index: "+data.current.uvi

            for (var i = 0; i < 5; i++) {
                document.getElementById("day"+i+"Temp").innerHTML = "Temp: "+data.daily[i].temp.day+" "+"°F"
                document.getElementById("day"+i+"Wind").innerHTML = "Wind: "+data.daily[i].wind_speed+" "+"Mph"
                document.getElementById("day"+i+"Humidity").innerHTML = "Humidity: "+data.daily[i].humidity+"%"  
            }

        })
    })
   
})
   

renderPage = function(){
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

    var lastSearched = localStorage.getItem("name")
    var cityApi = "https://api.openweathermap.org/geo/1.0/direct?q="+lastSearched+"&limit=5&appid=d727e0c365295376fcdf1f7932a17a35"
  
    fetch(cityApi, {
    
})
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        var weatherApiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat="+data[0].lat+"&lon="+data[0].lon+"&exclude={part}&units=imperial&appid=d727e0c365295376fcdf1f7932a17a35"
        document.getElementById("cityName").innerHTML = data[0].name + " " + today

        fetch(weatherApiUrl, {

        })
    
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var currentIcon = "https://openweathermap.org/img/wn/" + data.current.weather[0].icon + "@2x.png"

            
            $("#icon").attr("src", currentIcon)
            for (var i = 0; i < 5; i++) {
                $("#icon"+i).attr("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png")
            }

            document.getElementById("currentTemp").innerHTML = "Temp: "+data.current.temp+" "+"°F"
            document.getElementById("currentWind").innerHTML = "Wind: "+data.current.wind_speed+" "+"Mph"
            document.getElementById("currentHumidity").innerHTML = "Humidity: "+data.current.humidity+"%"
            document.getElementById("currentUvi").innerHTML = "UV index: "+data.current.uvi

            for (var i = 0; i < 5; i++) {
                document.getElementById("day"+i+"Temp").innerHTML = "Temp: "+data.daily[i].temp.day+" "+"°F"
                document.getElementById("day"+i+"Wind").innerHTML = "Wind: "+data.daily[i].wind_speed+" "+"Mph"
                document.getElementById("day"+i+"Humidity").innerHTML = "Humidity: "+data.daily[i].humidity+"%"  
            }
        })
    })
}

renderPage()