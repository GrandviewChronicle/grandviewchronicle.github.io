var firebase = require("firebase/app");
require("firebase/database");

// Initialize Firebase
var config = {
	apiKey: "AIzaSyD0eyh7SC-idMvrTBUNbh7xuCI6yeulT18",
	authDomain: "grandview-brackets.firebaseapp.com",
	databaseURL: "https://grandview-brackets.firebaseio.com",
	projectId: "grandview-brackets",
	storageBucket: "grandview-brackets.appspot.com",
	messagingSenderId: "547379249468"
};
firebase.initializeApp(config);

document.getElementById("hero-link").onclick = function() {
	window.location.href = "march-madness.html"
}

document.getElementById("open-login").onclick = function() {
	document.getElementById("login-dropdown").style.height = "167px";
}

document.getElementById("close-login").onclick = function() {
	document.getElementById("login-dropdown").style.height = "0px";

}



class BracketViewer {
	constructor() {

	}

	createHTML() {

	}

	updateViewer() {

	}
}
