
$("#btnSearch").click(function(event){
   event.preventDefault() 
   var enterCity = $("#cityName").val()

   localStorage.setItem('#cityName', enterCity);
   
    //storeCityNames()
   //if (userInput) {
         //getCityName(userInput);
         //clear old content
    //repoContainerEl.textContent="";
    //$("#cityStorage").val(localStorage.getItem("#cityName"));

    //cityStorage.appendChild("#cityName")
   

   $.get("https://api.openweathermap.org/data/2.5/weather?q=" + enterCity + "&appid=68f020b4f6e1a04e44f3257ce0fccc9e&units=imperial")
   .then(function(data){
    
        $("#date").text(moment().format("LLLL"));
        

       $('#location').append(data.name);
       $("#weather-icon").append(iconCode);
       $('#temp').append(data.main.temp);
       $('#humidity').append(data.main.humidity);
       $('#wind-speed').append(data.wind.speed);
       console.log(data)
       var iconCode = data.weather[0].icon;
        $("#weather-icon").attr("src", "https://openweathermap.org/img/w/" + iconCode + ".png");

       
        
       getUvIndex(data.coord.lat, data.coord.lon);

       getForecast(data.coord.lat, data.coord.lon);

       renderCities();

       });
       

       
});

function getUvIndex(lat, lon) {
    var apiUvIndex = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=68f020b4f6e1a04e44f3257ce0fccc9e&units=imperial&cnt=5"
    fetch(apiUvIndex)
    
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);
        $('#uv-index').append(data.value);
        if (data.value <3) {
            $("#color").addClass("green");
        }

        else if (data.value >8) {
            $("#color").addClass("red");
        } 

        else {
            $("#color").addClass("orange");
        }
     });

        
    }

function getForecast(lat, lon) {
    var apiUrlFive = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=current,minutely,hourly,alerts&appid=68f020b4f6e1a04e44f3257ce0fccc9e&units=imperial";
    fetch(apiUrlFive)
    .then(function(data) {
        return data.json();
    })
    .then(function(data) {
        console.log(data);
        
        var forecastCards = document.getElementById("forecastCards")
        var header = document.createElement("h2")
        header.innerHTML = "5-Day Forecast"
        forecastCards.appendChild(header)

        for (var i = 0; i < 5; i++) {

            var cardDiv = document.createElement("div")
            
            var parDate = document.createElement("p")
            parDate.innerHTML = "Date: " + data.daily[i].dt
            cardDiv.appendChild(parDate)
            var imgIcon = document.createElement("img")
            imgIcon.src = "https://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png"
            cardDiv.appendChild(imgIcon)
            var parTemp = document.createElement("p")
            parTemp.innerHTML = "Temperature: " + data.daily[i].temp.day + " F"
            cardDiv.appendChild(parTemp)
            var parHumidity = document.createElement("p")
            parHumidity.innerHTML = "Humidity: " + data.daily[i].humidity
            cardDiv.appendChild(parHumidity)

            forecastCards.appendChild(cardDiv);
        }

    })
}


function renderCities() {

    var getCity = localStorage.getItem('cityName');
    //getCity.innerHTML = cityName
    // Empties out the html
    document.getElementById("cityName").value = "";


    // Iterates over the 'list'
//for (var i = 0; i < getCity.length; i++) {
      // Creates a new variable 'toDoItem' that will hold a "<p>" tag
      // Sets the `list` item's value as text of this <p> element
      //var listCity = $('<p>');
      //listCity.text(getCity[i]);

      // Adds 'toDoItem' to the To-Do List div
      $('#cityStorage').append(getCity);
    }

    
  
