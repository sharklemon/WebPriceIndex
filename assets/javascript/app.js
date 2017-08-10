var config = {
	apiKey: "AIzaSyDhOOiR8Xc9MeOPN73Qym3k2yWyH0V_elk",
	authDomain: "webpriceindex.firebaseapp.com",
	databaseURL: "https://webpriceindex.firebaseio.com",
	projectId: "webpriceindex",
	storageBucket: "webpriceindex.appspot.com",
	messagingSenderId: "48951022685"
};
firebase.initializeApp(config);
var database = firebase.database();

var Acoffee =0;
var Aswiffer=0;
var Alotion=0;
var Acharger=0;
var Adetergent=0;
var Abasket = Acoffee + Aswiffer + Alotion + Acharger + Adetergent;

var Wcoffee =0;
var Wswiffer=0;
var Wlotion=0;
var Wcharger=0;
var Wdetergent=0;
var Wbasket = Wcoffee + Wswiffer + Wlotion + Wcharger + Wdetergent;


// AJAXes; note, there seems to be an issue with how some of these retailers handle these requests, I had to install an extension on Chrome for it to work properly. No big deal I guess, but it might cause some issues long term? Dunno. -jw
$.ajax({
	url: "http://api.walmartlabs.com/v1/items/49670830?format=json&apiKey=v9whmb7spr426g5qv8sd2j4k",
	method: "GET"

}).done(function(response){

	Wcoffee = response.salePrice;
	console.log("Coffee costs: " + Wcoffee);

})

$.ajax({
	url: "http://api.walmartlabs.com/v1/items/11045958?format=json&apiKey=v9whmb7spr426g5qv8sd2j4k",
	method: "GET"

}).done(function(response){

	Wswiffer = response.salePrice;

	console.log("Swiffer costs: " + Wswiffer);
});

$.ajax({
	url: "http://api.walmartlabs.com/v1/items/10818473?format=json&apiKey=v9whmb7spr426g5qv8sd2j4k",
	method: "GET"

}).done(function(response){

	Wlotion = response.salePrice;

	console.log("Lotion costs: " + Wlotion);
});

$.ajax({
	url: "http://api.walmartlabs.com/v1/items/45820988?format=json&apiKey=v9whmb7spr426g5qv8sd2j4k",
	method: "GET"

}).done(function(response){

	Wcharger = response.salePrice;

	console.log("Charger costs: " + Wcharger);
});

$.ajax({
	url: "http://api.walmartlabs.com/v1/items/723835749?format=json&apiKey=v9whmb7spr426g5qv8sd2j4k",
	method: "GET"

}).done(function(response){

	Wdetergent = response.salePrice;

	console.log("Pods cost: " + Wdetergent);

});

$("#price-check").on("click", priceUpdate)


function priceUpdate(){
//do calls to API

	database.ref().child("/Amazon").set({
	    	coffee: Acoffee,
        	swiffer: Aswiffer,
        	lotion: Alotion,
        	charger: Acharger,
      	});
	database.ref().child("/Walmart").set({
			coffee: Wcoffee,
        	swiffer: Wswiffer,
        	lotion: Wlotion,
        	charger: Wcharger,
      	});
  }