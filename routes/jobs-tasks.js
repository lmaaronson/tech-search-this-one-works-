const axios = require("axios");
const router = require("express").Router();
var db = require("../models");



router.post("/savedJobs/tasks", function (req, res) {
  //console.log('req.body', req.body);

  let job = req.body;

  db.jobs.create({  
        title: task.title,
        description: task.description,
  })
  .then(newTask => {
    console.log(`title ${newTask.title}, with id ${newTask.id} has been created.`);
  });
});


module.exports = router;