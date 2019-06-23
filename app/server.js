const express = require('express'); // ========import required files ( dependencies)=======
const path = require('path'); // ==========path confif mac& windows root/=========
const bodyParser = require('body-parser');// =========parsing the json data==========


var app = express(); // ==========Sets up the Express App  to parse data==================
const PORT = 3000; // ==========Set up PORT=====================

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.urlencoded({extended: true}));// ============Config middle where========
app.use(express.json()); // ==========Config middle where==========

const htmlRoutes = require("./routing/htmlRoutes");// =========import the html route ==========
const apiRoutes = require("./routing/apiRoutes") ;// =========import the api route==========

// const connection = require("./connection"); // =========import the connection routes ==========
// ========import connection routes===========
app.use(htmlRoutes);// ========passes the connection rout through the  html route to the server===========
app.use(apiRoutes);// ===========asses the connection rout through the  html route to the server=======

// ========Starts the server to begin listening===========
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});



// ===================