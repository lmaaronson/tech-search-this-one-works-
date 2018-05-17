const axios = require("axios");
const router = require("express").Router();
var db = require("../models");

router.get("/searchJobs", (req, res) => {
  //console.log("Server side Query::::: ", req.query);
  axios
    .get(`https://authenticjobs.com/api/?api_key=7aa3eac14c96fe5c4fe58dc504d956e0&method=aj.jobs.search&keywords=${req.query.q}&format=json`)
    .then(({
      data: {
        listings
      }
    }) => {
      //console.log("response ::: ", listings);
      res.json(listings);
    })
    .catch(err => res.status(422).json(err));
});

router.post("/searchJobs/save", function (req, res) {
  //console.log('req.body', req.body);

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
        company_url: job.company_url
  })
  .then(newJob => {
    console.log(`title ${newJob.title}, with id ${newJob.id} has been created.`);
  });
});

router.get("/savedJobs", (req, res) => {
  db.jobs.findAll().then(jobs => res.json(jobs));
});

module.exports = router;