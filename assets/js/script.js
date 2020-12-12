$("#btnSearch").click(function(e){
   e.preventDefault() 
   var enterCity = $("#cityName").val()

   $.get("https://api.openweathermap.org/data/2.5/weather?q=" + enterCity + "&appid=68f020b4f6e1a04e44f3257ce0fccc9e&cnt=5")
   .then(function(data){
        console.log(data);
        //debugger

        //display current weather--name, date, icon representation of conditions, temp, humidity, wind speed, UV index
        
        //create a container for current weather condition
        var selectedCityEl = document.createElement("h2");
        var titleEl = document.getElementById("right-column").innerHTML = enterCity;
        
    
        //append to container
        //selectedCityEl.appendChild(titleEl);
        
        
        //add color to uv index--favorable, moderate, or severe

        //create cards to hold 5-day forecast

        //make api call for forecast

        //store data
   })
});

