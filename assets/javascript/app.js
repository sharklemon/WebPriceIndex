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

$("#price-check").on("click", priceUpdate)


function priceUpdate(){
//do calls to API

	database.ref().child("/Amazon").set({
	    	coffee: Acoffee,
        	swiffer: Aswiffer,
        	lotion: Alotion,
        	charger: Acharger,
      	});
	database.ref().child("/Walmart")
			coffee: Wcoffee,
        	swiffer: Wswiffer,
        	lotion: Wlotion,
        	charger: Wcharger,
      	});
  }