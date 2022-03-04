//Author: Samy Ramsey for Ultimate.ai
import fetch from "node-fetch";
var objj;

//Helper function. Uses the Fetch API to retrieve JSON from a specific URL, then parses it.
async function getJSON(url) {
  return fetch(url, { 
    method: 'GET'
  })
  .then(data => data.json())
  .then (data => {
    var weather = data.main.temp;
    var text = '{"params":{"name":"temperature", "value":' + weather +'}}';
    var obj = JSON.parse(text);
    return obj;
    //console.log(obj);
  })
}

//Main function. Takes a city and country in the world, and returns JSON in specified format written in the the Ultimate challenge documentation.
function weatherRetriever(city, country) {
  //OpenWeatherMap was chosen, which requires a key to use that can be seen below.
  var api = "http://api.openweathermap.org/data/2.5/weather?q=";
  //The below lines use string manipulation/concatenation to provide the proper URL to the OpenweatherMap API.
  //These are combined into the variable "current_weather".
  country = "," + country + ",";
  var api_key = "&appid=" + "64b1b5bd5faf3696c0d2b0b06b3b058d";
  var unit = "&units=metric";
  var current_weather = api + city + country + api_key + unit;
  getJSON(current_weather).then(function(result) {
    console.log(result);
    console.log("Full API URL: " + current_weather);
    return result;
  });
}
weatherRetriever("Berlin", "DE");