var Quote = require("./models");

module.exports = {
    home: function(req, res){
        console.log("this is from controllers****");
        res.render('index');
    },
    createQuote: function(req, res){
        Quote.create(req.body)
            .then((data)=>{console.log(data)||res.render('index')})
            .catch((err)=> {
                for(var key in err.errors){
                    req.flash('index', err.errors[key].message);
                }
                console.log(err);
                res.redirect('/');
            })
    },
    quotes_page: function(req, res){
        Quote.find({})
        .then((data)=>console.log(data)||res.render('quotes_page', {quotes:data}))
        .catch((err)=>console.log(err) ||res.render('quotes_page'))
    }
}