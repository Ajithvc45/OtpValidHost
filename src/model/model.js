const mongoose = require('mongoose');

const DB = "mongodb+srv://ajithvc45:ajithvc45@cluster0.zaxepqu.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database Connection Successful")
   }).catch((err) => {
    console.log(err)
   })

const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    email: String,
    otp:Number
   }, {
    versionKey: false
   })

var user = mongoose.model('user', NewUserSchema);
module.exports = user;