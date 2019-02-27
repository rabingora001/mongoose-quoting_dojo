var controller=require ('./controllers');

module.exports = function(app){
    app.get('/', controller.home)
    app.post('/create_quote', controller.createQuote)
    app.get('/quotes_page', controller.quotes_page)
}
