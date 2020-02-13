"use strict";

(function() {
	var url = "http://api.openweathermap.org/data/2.5/weather?q=London,England";
    var apiKey = "2f46345930f000c377daab45f6fd431e"; // Replace "APIKEY" with your own API key; otherwise, your HTTP request will not work
    fetch(url+ '&appid='+ apiKey).then(function(response){
        if (!response.ok){
            // console.log('there was a problem');
            throw Error(response.statusText);
        }
        // console.log(response);
        return response.json();
        // console.log(response.json());
    }).then(function(response){
        updateUISucess(response);

    }).catch(function(error){
        updateUIError();
    })
    // var httpRequest;
    // makeRequest();
    // // create and send xhr request
    // function makeRequest(){
    //     httpRequest= new XMLHttpRequest();
    //     httpRequest.onreadystatechange=responseMethod;
    //     httpRequest.open('GET', url + '&appid='+ apiKey);
    //     httpRequest.send();
    // }
    // //handle xhr response
    // function responseMethod(){
    //     if (httpRequest.readyState===4){
    //         if(httpRequest.status===200){
    //            updateUISucess(httpRequest.responseText);
    //         }else{
    //           updateUIError();
    //         }
    //         console.log(httpRequest.responseText);
    //     }
    // }
    //handle xhr success
    function updateUISucess(response){
        // var response = JSON.parse(responseText);
        var condition=response.weather[0].main;
        var degC= response.main.temp - 273.15;
        var degCInt=Math.floor(degC);
        var degF= degC * 1.8 + 32;
        var degFInt=Math.floor(degF);
        var weatherBox=document.getElementById("weather");
        weatherBox.innerHTML="<p>"+ degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>"
    }
    //handle XHR error

    function updateUIError(){
        var weatherBox= document.getElementById("weather");
        weatherBox.className= "hidden";
    }

})();