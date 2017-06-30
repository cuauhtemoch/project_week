var users = require('../controllers/users.js');
var parents = require('../controllers/parents.js');
var path = require('path');

module.exports = function(app) {
  app.post('/name', function(req, res){
    users.create(req, res)
  })

  app.post('/newparent', function(req, res){
    console.log('in /newparent routes.js', req.body)
    parents.create(req, res)
  })

  app.post('/allparent', function(req, res){
    parents.find(req, res)
  })

  app.post('/login', function(req, res){
    parents.finduser(req,res)
  } )

  app.post('/retrieveparent', function(req, res){
    parents.findparent(req,res)
  })

  app.post('/updateparent', function(req, res){
    console.log('inside updateparent serverside', req.body)
    parents.updateparent(req,res)
  })

  app.get('*', function(req, res){
    res.sendFile(path.resolve('public/dist/index.html'));
  })
}