const mongoose = require('mongoose');

const local = "mongodb+srv://Kien3:7GpDCaBIiUKPyouQ@cluster0.0oqow.mongodb.net/Home";

const connect = async() => {
    try {
        await mongoose.connect(local);
        console.log('Connect success');
    } catch (error) {
        console.error('Connection to MongoDB failed:', error);
    }
}

module.exports = { connect };