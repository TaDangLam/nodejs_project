const Product = require('./../models/product');
const { MutipleMongooseToObject } = require("../../util/mongoose");

class SiteController {
    // [GET] /home
    home(req, res) {
    
        Product.module.find({})
        // làm cho các obj của document trong DB thành Object bình thường mới xài handelbars bên home.hbs được
            // render(route, {bắn data từ model lấy từ DB vào trang Home})
            .then(products => res.render('home', { products: MutipleMongooseToObject(products) }))
            .catch(err => next(err));

            // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
