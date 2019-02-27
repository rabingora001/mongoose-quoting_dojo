var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesdb', (err)=>{
    console.log("hello from db************");
});

var quoteSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength: 3},
    quote:{type:String, required: true, minlength: 8}
}, {timestamps:true});

module.exports = mongoose.model("Quote", quoteSchema);