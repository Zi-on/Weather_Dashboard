var searchArea = $("#searchArea");
var searchBtn = $('#search');
var today = moment().format('l')
var city = searchArea.val().trim();


searchBtn.on("click", function (event) {

    var createButton = document.createElement('button');
    var addedSearch = $("#searchItem").innerHTML
    var city = searchArea.val().trim();
    
    var city = searchArea.val().trim();
    createButton.onclick = function (event) {
    if (city === "" || city === addedSearch)  {
        console.log("what the f");
        return;
    }
    else {
        event.target.innerHTML
        console.log(x)

    createButton.innerHTML = city;
    createButton.classList.add("addedSearch")
    createButton.setAttribute("id", "searchItem")
    document.getElementById("searchBar").appendChild(createButton);
   
    }

    
    console.log(city)
    
    
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
            var uvi = document.getElementById("currentUvi")
            $("#icon").attr("src", currentIcon)

            console.log(uvi)

            for (var i = 0; i < 5; i++) {
                $("#icon"+i).attr("src", "https://openweathermap.org/img/wn/" + data.daily[i].weather[0].icon + "@2x.png")
            }
            
            if (uvi > 8){
                document.getElementById("currentUvi").classList.add("uviVeryHigh")
            }
            else if (8 > uvi > 5){
                document.getElementById("currentUvi").classList.add("uviHigh")
                console.log("hight")
            }
            else if (6 > uvi > 2){
                document.getElementById("currentUvi").classList.add("uviModerate")
            }
            else if (uvi < 3){
                document.getElementById("currentUvi").classList.add("uviLow")
                console.log("low")
            }



            document.getElementById("currentTemp").innerHTML = "Temp: "+data.current.temp+" "+"°F"
            document.getElementById("currentWind").innerHTML = "Wind: "+data.current.wind_speed+" "+"Mph"
            document.getElementById("currentHumidity").innerHTML = "Humidity: "+data.current.humidity+"%"
            document.getElementById("currentUvi").innerHTML = "UV index: "+data.current.uvi
            console.log(data.current.uvi)
            

            // if (uvi > 8){
            //     document.getElementById("currentUvi").classList.add("uviVeryHigh")
            // }
            // else if (8 > uvi > 5){
            //     document.getElementById("currentUvi").classList.add("uviHigh")
            //     console.log("hight")
            // }
            // else if (6 > uvi > 2){
            //     document.getElementById("currentUvi").classList.add("uviModerate")
            // }
            // else if (uvi < 3){
            //     document.getElementById("currentUvi").classList.add("uviLow")
            //     console.log("low")
            // }

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
            

            if (data.current.uvi > 8){
                document.getElementById("currentUvi").classList.add("uviVeryHigh")
                console.log('high')
            }
            else if (8 > data.current.uvi > 5){
                document.getElementById("currentUvi").classList.add("uviHigh")
            }
            else if (6 > data.current.uvi > 2){
                document.getElementById("currentUvi").classList.add("uviModerate")
            }
            else if (data.current.uvi < 3){
                document.getElementById("currentUvi").classList.add("uviLow")
            }
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
