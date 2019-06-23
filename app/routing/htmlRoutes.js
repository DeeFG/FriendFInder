
// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Basic route that sends the user first to the AJAX Page
var path = require("path");
const express = require('express'); // =========establish express==========
const router = express.Router();  // ==========make a express router=========



/// export the  the api routes as a function

router.get("/app/public/home", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

    // return router;
    module.exports = router;




