var mongoose = require('mongoose');

var ParentSchema = new mongoose.Schema({
    firstname: { type: String, required: [true, 'name required'], minlength: 2},
    lastname: { type: String, required: [true, 'last name required'], minlength: 2},
    pnumber: { type: String, required: [true, 'at leaset 10-12 digits required'], maxlength: 12},
    username: { type: String, required: [true, 'username required'], minlength: 5},
    email: { type: String, required: [true, 'email required'], minlength: 5},
    password: { type: String, required: [true, 'password required'], minlength: 8},
    childname: { type: String, required: [true, 'name required'], minlength: 2},
    childdob: { type: String, required: [true, 'DOB required'], minlength: 5},
    program: { type: String, required: [true, 'Program Required'], minlength: 2},

    
}, { timestamps: true });

var Parent = mongoose.model('Parent', ParentSchema);