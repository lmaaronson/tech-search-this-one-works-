var authController = require('../controllers/authcontroller.js');
const router = require("express").Router()
const home = (true ? "http://localhost:3000" : "/")
const db = require("../models")

module.exports = function (app, passport) {


    app.get('/signup', authController.signup);


    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: home,
        failureRedirect: '/signup'
    }
    ));

    app.get('/dashboard', isLoggedIn, authController.dashboard);
    app.get('/testuser', isLoggedIn, (req, res) => res.json(req.user));
    //app.get(`/`,isLoggedIn,)


    app.get('/logout', authController.logout);


    app.post('/signin', function (req, res, next) { console.log("Is logged in: ", req.user); next(); },
        passport.authenticate('local-signin', {
            successRedirect: '/dashboard',
            failureRedirect: '/signin'
        }
        ));


    app.post("/api/searchJobs/save", isLoggedIn, function (req, res) {
        let job = req.body;
        db.jobs.create({
            title: job.title,
            description: job.description,
            post_date: job.post_date,
            company_name: job.company_name,
            // company_city: job.company_city,
            company_state: job.company_state,
            keywords: job.keywords,
            apply_url: job.apply_url,
            company_url: job.company_url,
            user: req.user.id
        })
            .then(newJob => {
                console.log(`title ${newJob.title}, with id ${newJob.id} has been created.`);
            });
    });

    app.get("/api/savedJobs", (req, res) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
        db.jobs.findAll({ user: req.user.id }).then(jobs => res.json(jobs));
    });


}
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/signin');
}
