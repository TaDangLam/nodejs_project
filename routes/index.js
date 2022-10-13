const newsRouter = require('./news.route');
const siteRouter = require('./site.route');
const productRouter = require('./products.route');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

    app.use('/products', productRouter);
    // app.post('/search', (req, res) => {
    //     console.log(req.body.word);
    //     res.send("");
    // })
}

module.exports = route;
