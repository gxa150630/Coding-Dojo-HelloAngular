// Assignment: Quoting Dojo
// In this assignment, you are going to build a simple app that allows users to add quotes to a database and display them on a separate page.
// The 'add my quote' button should add the user's quote to the database, but the 'skip to quotes' button should take the user directly to the main page.  
// Use the following URLs for your project:
// GET ' / ' for the screen on top
// POST '/quotes' for the method of the form to make a new quote.
// GET '/quotes' for the screen on the right (where all the quotes are rendered).
// When you create a new quote, if there are errors in the .save() method, use flash messages to display the errors.

// Imports 
var express = require("express"); 
var app = express();
var bodyParser = require("body-parser"); 


// Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.urlencoded({useNewUrlParser: true})); 


// Port
app.listen(8000, function(){
    console.log("Listening on port: 8000");
})