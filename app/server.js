

const express = require('express'); // ========import required files ( dependencies)=======
const path = require('path'); // ==========path confif mac& windows root/=========
var bodyParser = require('body-parser');

const app = express();// ==========Sets up the Express App  to parse data==================
const PORT = 3000;// ==========Set up PORT=====================
app.use(express.urlencoded({extended: true}));// ============Config middle where========
app.use(express.json()); // ==========Config middle where==========


const htmlRoutes = require("app/routing/htmlRoutes.js");// =========import the html route ==========
const apiRoutes = require("app/routing/apiRoutes.js");// =========import the api route==========
const connection = require("./connection"); // =========import the connection routes ==========

// ========import connection routes===========
// app.use(htmlRoutes(connection));// ========passes the connection rout through the  html route to the server===========
// app.use(apiRoutes(connection));// ===========asses the connection rout through the  html route to the server=======

// ========Starts the server to begin listening===========
app.listen(PORT, function() {console.log("App listening on PORT " + PORT);});


// ===================
// ===================