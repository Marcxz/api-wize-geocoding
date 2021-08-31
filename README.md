# api-wizego-geocoding
This is an api for Go Bootcamp that consist in get the lat lng coordinate from any direction given by the user


<br />

You should run the command 'npm install' to install the dependencies.

<br />

To run the API you should run 'npm start' and it will run in the port 3000. This Api has two endpoints that are the following:

<br />

## Hello World End Point (http://localhost:3000/helloWorld)

This endpoint just say hello world for any user to request that. This is a prove that the api works and the 

<br />

## Geoding End Point (http://localhost:3000/GeocodeAddress/:address)

This endpoint gives you the lat lng coordinates from any address that you give just like google maps. For example you can just type in the address param "wizeline, zapopan, jalisco, mexico" and you will recieve the coordinates from the wizeline headquarters at Zapopan.

<br />

## Test

The api has 3 tests that evaluates the address from different places like (la minerva, el centro, wizeline) located at Guadalajara. To run the unit tests you should trype 'npm test'
