Weather Retriever App for Ultimate
----------------------------------

How it Works
----------------------------------
This app uses a location in the world that you specify through city and country and returns the current temperature using the metric system. The app uses OpenWeatherMap's free API to do so.

It involves two functions:
"weatherRetriever()": This is the main function which carries out the API fetching portion of the above purpose. Takes two parameters, city and country which OpenWeatherMap uses and then crafts a URL for the API to use to fetch the weather. My app uses Berlin, Germany as an example ("Berlin, DE"). The country code is specified by ISO3166 standard, which is internationally recognized.

"getJSON(): This is a helper function which parses prepares the output using the Fetch API, getting the required JSON and parsing it for the requisite weather information. Outputs this information as an example, as well.

How to Run
----------------------------------
Requires node.js installation on local machine. In the the terminal of your choice, type "node app.js", which serves as the main JavaScript file.

Dependencies
----------------------------------
npm package node-fetch version 3.2.0

Ancillary Information
----------------------------------
* Due to the asynchronous nature of JavaScript/Node.js and fetching JSON there may be an issue with my return value. However, you can see I am able to generate the proper output in the helper function "getJSON()". This issue can likely be fixed with callbacks/promises or timeout (timeouts obviously not being as elegant a solution). Or perhaps even using XMLHttpRequest instead of Fetch (which must be used from the npm package xhr2). I decided to spend more time on documentation and commenting so my process can be better understood (which I assume to be the purpose of this challenge!) instead of devising the perfect solution given the 2/3 hour time limit, a lot of which had to be spend setting up my environment unfortunately.

* Ideally, the API key would be obfuscated but due to the fully client-side nature of the app this would not be ideal.
