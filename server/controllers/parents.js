var mongoose = require('mongoose');
var Parent = mongoose.model('Parent');


module.exports ={
    create: function (req, res) {
        Parent.find({firstname:req.body.firstname, lastname:req.body.lastname}, function (err, data){
            if (err) { console.log(err) }
            if(data.length) {res.json (data[0]); }
            else {
                Parent.create(req.body, function (err, data){
                    if(err) { console.log(err); }
                    if(data) {res.json(data); }
                })
            }
        })
    },

    find:function(req,res){
        console.log('req body is...', req.body)
        Parent.find({_id:req.body.id})
        .then(data => {
            console.log('posted data');
            res.json(data);
        })
        .catch(err => {
            console.log('error');
            res.json(err);
        })
    },

    finduser: function(req,res){
        console.log("log in function server side", req.body)
        Parent.find({username:req.body.username})
        .then(data => {
            console.log('log in back');
            res.json(data);
        })
        .catch(err => {
            console.log('error');
            res.json(err);
        })
    },

    findparent: function(req,res){
        Parent.find({_id:req.body.parentid})
        .then(data => {
            console.log('sending parent back to client');
            res.json(data);
        })
        .catch(err => {
            console.log('error');
            res.json(err);
        })
    },

    updateparent: function(req,res){
        Parent.update({_id:req.body._id}, {firstname: req.body.firstname, lastname: req.body.lastname,
        pnumber: req.body.pnumber, email: req.body.email, username: req.body.username, password: req.body.password,
        childname: req.body.childname, childdob: req.body.childdob, program: req.body.program})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log('error');
            res.json(err);
        })
    },

    




}

