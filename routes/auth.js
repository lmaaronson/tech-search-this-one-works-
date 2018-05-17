var authController = require('../controllers/authcontroller.js');

const home = (true? "http://localhost:3000" : "/")

module.exports = function(app,passport){

app.get('/signup', authController.signup);


app.get('/signin', authController.signin);

app.post('/signup', passport.authenticate('local-signup',  { successRedirect: home,
                                                    failureRedirect: '/signup'}
                                                    ));

app.get('/dashboard',isLoggedIn, authController.dashboard);
app.get('/testuser', isLoggedIn, (req,res)=> res.json(req.user));
//app.get(`/`,isLoggedIn,)


app.get('/logout',authController.logout);


app.post('/signin', function (req, res, next) { console.log("Is logged in: ", req.user); next(); },
passport.authenticate('local-signin',  { successRedirect: '/dashboard',
                                                    failureRedirect: '/signin'}
                                                    ));


function isLoggedIn(req, res, next) {
    console.log("hey log me in ", req.user)
    if (req.isAuthenticated())
        return next();

    res.redirect('/signin');
}


}