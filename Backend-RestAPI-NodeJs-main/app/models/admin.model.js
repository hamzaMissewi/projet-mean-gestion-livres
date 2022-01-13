const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    username: {
            type: String,
            unique: [true, 'The login is unique']
           
    },
    email: {
            type: String,
            unique: [true, 'The email is unique']
           
    },
    password: String,
    image: String,
    status:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Admin', AdminSchema);