'use strict';

module.exports = function(sequelize, Sequelize) {
 
  var Job = sequelize.define('jobs', {
    id:           {autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER},
    title:        {type: Sequelize.TEXT},
    description:  {type: Sequelize.TEXT},
    post_date:    {type: Sequelize.DATE},
    company_name: {type: Sequelize.TEXT},
    // company_city: {type: Sequelize.TEXT},  //  company.location.city
    company_state:{type: Sequelize.TEXT},     // company.location.state
    keywords:     {type: Sequelize.TEXT},
    apply_url:    {type: Sequelize.TEXT},
    company_url:  {type: Sequelize.TEXT},
  },
  {timestamps: false
  }
  );

  return Job;
}
