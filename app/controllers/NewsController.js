class NewsController {
    // [GET] /news
    indexNew(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    showNew(req, res) {
        res.send('New Detail');
    }
}

module.exports = new NewsController();
