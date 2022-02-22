//Author: Samy Ramsey for Ultimate.ai
import fetch from "node-fetch";

//Helper function. Uses the Fetch API to retrieve JSON from a specific URL, then parses it.
function getJSON(url) {
  fetch(url, { 
    method: 'GET'
  })
  .then(response => response.json())
  .then(function(json) {
    //The below extracts the relevant parts of the JSON, parsing it for output, it is then logged and returned.
    var weather = json.main.temp;
    var text = '{"params":{"name":"temperature", "value":' + weather +'}}';
    //Output text is converted into a JSON object, then output to the console.
    var obj = JSON.parse(text);
    console.log(obj);
    return obj;
    });
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
  //The URL used by OpenWeatherMap's API is output to the console.
  console.log("Full API URL: " + current_weather);
  return getJSON(current_weather);
}

weatherRetriever("Berlin", "DE");
