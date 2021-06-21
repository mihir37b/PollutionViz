PollutionViz




This app was made using create-react-app, Chart.js as well as the OpenWeather API and the Google Geolocation API. 

The OpenWeather API takes coordinates as the input which I would not expect most users to know.

To prevent users from having to search for it, I connected the Google Geolocation API that allows a user to just type in a location. 

Within the Google Geolocation API response, are the coordinates for the location entered by the user.

Those coordinates are then directly entered in the OpenWeather API.

The goal with this project was to get more expereince deploying an app with a third party API.

I wanted to also create a quick tool for users that will allow them to type in the name of any location and check the level of pollution in that area. 

The app will then display the pollutant levels in a responsive graph so that the user can get a sense of what the pollutant concentration is like. 

Also provided is the air quality index which gives the user a more solidified answer as to how their air quality is compared to other locations. 

Beneath the graph is a table containing a description of each pollutant and the concentration as an alternative to the graph.



To get started, type in a city you are curious about and simply let the app do the rest! 

