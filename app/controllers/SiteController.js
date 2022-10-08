// const Product = require('./../models/product');

class SiteController {
    // [GET] /home
    home(req, res) {
        
        Product.find({}, function (err, product) {
            // docs.forEach
            if(!err){
                res.json(product);
            }else{
                res.status(400).json({error: 'message'});
            }
          });

        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
