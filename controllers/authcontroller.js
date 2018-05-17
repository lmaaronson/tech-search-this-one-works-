var exports = module.exports = {}
var path= require(`path`)

exports.signup = function(req,res){
    res.sendFile(path.join(__dirname, "../client/public/register.html"))

}

exports.signin = function(req,res){

    res.sendFile(path.join(__dirname, "../client/public/login.html"))

}

exports.dashboard = function(req,res){
    res.sendFile(path.join(__dirname, "../client/public/dash.html"))

}

exports.logout = function(req,res){
req.logout()
  req.session.destroy(function(err) {
  res.redirect('/signin');
  });

}