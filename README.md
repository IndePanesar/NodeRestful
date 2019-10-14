# NodeRestful
A simple node.js project for building and testing node Restful api
This is a simple project that creates simple restful api in node js. There are some mock tests with Sinon and NodeUnit framework.
The api attempts to use open data from NASA about the planets and their moons. The data is initially read from static JSON files. It will then be read from MongoDB.

 Method| URI | Description 
 :---: | :---:| :---:
 **GET** | /planets | Retrieves the planets in our solar system.
 **GET** | /planet-name/:moons| Retrieves the named planet with moons.
 **GET** | /moons | Retrieves list of all planets with moons.
 **GET** | /moons:moon-name | Retrieve the parent planet of the moon and all other moons of the planet.
 **POST** | /planet/ | Update a planets details or create a new planet with the details.
 **PUT** | /planet/ | Create a new planet.
 **DELETE** | /planet | Deletes the planet and associated moons.
 **DELETE** | /moon/name | Delete the moon.
