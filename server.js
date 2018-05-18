const path = require("path");
const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const env = require('dotenv').load()
const apiRoutes = require("./routes/saved-jobs");  //this brings in saved.jobs routes
const PORT = process.env.PORT || 3001;
//app.use(app.router);
//routes.initialize(app);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api", apiRoutes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}







//For BodyParser
app.use ( require('cookie-parser')() )


var models = require("./models");


//load passport strategies
require('./config/passport/passport.js')(passport, models.user);

// For Passport
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.get('/', function (req, res) {
  res.send('Welcome to Passport with Sequelize');
});



//Models


//Routes
var authRoute = require('./routes/auth.js')(app, passport);


//Sync Database
models.sequelize.sync().then(function () {
  console.log('Nice! Database looks fine')

}).catch(function (err) {
  console.log(err, "Something went wrong with the Database Update!")
});


// Send every request to the React app
// Define any API routes before this runs
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});




app.listen(PORT, function () {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
