DROP DATABASE IF EXISTS techjobsdb;
CREATE DATABASE techjobsdb;

USE techjobsdb;

CREATE TABLE users(
  id INT NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  lastname VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  pswd VARCHAR(255) NOT NULL,
  status BOOLEAN,
  PRIMARY KEY (id),
  createdAt DATE
);



-- id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
--         firstname: { type: Sequelize.STRING, notEmpty: true },
--         lastname: { type: Sequelize.STRING, notEmpty: true },
--         username: { type: Sequelize.TEXT },
--         about: { type: Sequelize.TEXT },
--         email: { type: Sequelize.STRING, validate: { isEmail: true } },
--         password: { type: Sequelize.STRING, allowNull: false },
--         last_login: { type: Sequelize.DATE },
--         status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }

CREATE TABLE jobs(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  post_date VARCHAR(255) NOT NULL,
  company_name VARCHAR(255) NOT NULL,
  company_state VARCHAR(255) NOT NULL,
  keywords VARCHAR(255) NOT NULL,
  apply_url TEXT,
  company_url TEXT,
  PRIMARY KEY (id)
);




--  var Job = sequelize.define('jobs', {
--     id:           {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
--     title:        {type: Sequelize.TEXT},
--     description:  {type: Sequelize.TEXT},
--     post_date:    {type: Sequelize.DATE},
--     company_name: {type: Sequelize.TEXT},
--     company_city: {type: Sequelize.TEXT},  //  company.location.city
--     company_state:{type: Sequelize.TEXT},  // company.location.state
--     keywords:     {type: Sequelize.TEXT},
--     apply_url:    {type: Sequelize.TEXT},
--     company_url:  {type: Sequelize.TEXT},
--   });

  return Job;