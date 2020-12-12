//var cityInputEl = document.querySelector("#city-name")

// var currentWeather = function(enterCity) {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + enterCity + "&appid=68f020b4f6e1a04e44f3257ce0fccc9e&cnt=5";
    
//     //make a request to the url
//     fetch(apiUrl).then(function(resp) {
//         return resp.json() })
//         .then(function(data) {
//             console.log(data);
//         })
//         .catch(function() {
//         //displayRepos(data,user);
//         });
        
//     };


//     $("btnSearch").click(currentWeather)

// var buttonClickHandler = function(event) {
//     var userInput = event.target.getAttribute("city-name")
//     console.log(userInput);
        
    // //if (userInput) {
    //     getCityName(userInput);
    //     //clear old content
    //     repoContainerEl.textContent="";
    // }
    // }

    //addEventListener("click", buttonClickHandler);

// $(document).ready(function() {

//});


$("#btnSearch").click(function(event){
   event.preventDefault() 
   var enterCity = $("#cityName").val()
   

   $.get("https://api.openweathermap.org/data/2.5/weather?q=" + enterCity + "&appid=68f020b4f6e1a04e44f3257ce0fccc9e&units=imperial")
   .then(function(data){
    
    
       $('#location').append(data.name);
       $("#weather-icon").append(iconCode);
       $('#temp').append(data.main.temp);
       $('#humidity').append(data.main.humidity);
       $('#wind-speed').append(data.wind.speed);
       console.log(data)
       var iconCode = data.weather[0].icon;
        $("#weather-icon").attr("src", "https://openweathermap.org/img/w/" + iconCode + ".png");

       

       getUvIndex(data.coord.lat, data.coord.lon);

       //call 5-day function()

       });
       

       
});

function getUvIndex(lat, lon) {
    fetch(
      "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=68f020b4f6e1a04e44f3257ce0fccc9e"
    )
      .then(function (data) {
        return data.json();
      })
      .then(function (data) {
        console.log(data);
        $('#uv-index').append(data.value);
        if (data.value <3) {
            $("#color").addClass("green");
            //add class list green
        }

        else if (data.value >8) {
          //add class list red  
        } 

        else {
            //add class list orange
        }
     });

        
    }

// function createWeatherJson(json) {
//     var newJson = "";
//     for (i = 0; i < json.list.length; i++) {
//     cityName = json.list[i].name;
//     temp = json.list[i].main.temp
//     humidity = json.list[i].main.humidity
//     wind = json.list[i].wind.speed
//     console.log(newJson);
    
//     newJson = newJson + "\"cityName\"" + ": " + "\"" + cityName + "\"" + ","
//     newJson = newJson + "\"temp\"" + ": " + temp + ","
//     newJson = newJson + "\"humidity\"" + ": " + humidity + ","
//     newJson = newJson + "\"wind\"" + ": " + wind 
//     newJson = newJson + "},"; 
//     };

//     return "[" + newJson.slice(0, newJson.length -1) + "]"
// };
        //console.log(data);
        //debugger

               
        //create a container for current weather condition
    //     var selectedCityEl = document.createElement("h2");
    //    var titleEl = document.getElementById("right-column").innerHTML = enterCity;

        //get the name, date, icon representation of conditions, temp, humidity, wind speed, UV index from API

        //display API info on page
        
    
        //append to container
        //selectedCityEl.appendChild(titleEl);
        
        
        //add color to uv index--favorable, moderate, or severe

        //create cards to hold 5-day forecast

        //make api call for forecast

        //store data
  // })



//console.log(createWeatherJson);


//};
