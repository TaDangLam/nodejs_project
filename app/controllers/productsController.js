const Product = require('./../models/product');
const { MutipleMongooseToObject } = require("../../util/mongoose");

class ProductController {
    // [GET] /products/:slug
    showBrand(req, res) {

            res.json({
                test: "name"
            })
    }
}

module.exports = new ProductController();
