"use strict";

// jquery request
(function(){
    var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
    var apiKey = "2f46345930f000c377daab45f6fd431e"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
    $.get(url+ '&appid='+ apiKey).done(function(response){
        // console.log(response);
        updateUISucess(response);

    }).fail(function(error){
         updateUIError();
    });
    function updateUISucess(response){
        // var response = JSON.parse(responseText);
        var condition=response.weather[0].main;
        var degC= response.main.temp - 273.15;
        var degCInt=Math.floor(degC);
        var degF= degC * 1.8 + 32;
        var degFInt=Math.floor(degF);
        // var weatherBox=document.getElementById("weather");
        // weatherBox.innerHTML="<p>"+ degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>"
        var $weatherBox= $("#weather");
        $weatherBox.append("<p>"+ degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>");
    }
    function updateUIError(){
                // var weatherBox= document.getElementById("weather");
                // weatherBox.className= "hidden";
                var $weatherBox= $("#weather");
                $weatherBox.addClass("hidden")
            }
})();
