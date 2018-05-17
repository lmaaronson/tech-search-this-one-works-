// The file routes/index.js contains the logic for a request against the main homepage. It loads the models module and uses it to load all the users and tasks from the database.

// var models  = require('../models');
// var express = require('express');
// var router  = express.Router();

// router.get('/', function(req, res) {
//   models.User.findAll({
//     include: [ models.Job ]
//   }).then(function(users) {
//     res.render('index', {
//       title: 'Sequelize: Express Example',
//       users: users
//     });
//   });
// });

// module.exports = router;