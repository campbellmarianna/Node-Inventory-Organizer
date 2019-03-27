const Supply = require('../models/supply');
const Product = require('../models/product');

module.exports = function(app) {
    // NEW
    app.get('/supplies/new', (req, res) => {
        res.render("supplies-new");
    });

    // CREATE Comment
    app.post("/products/:productId/supplies", function(req, res) {
      // INSTANTIATE INSTANCE OF MODEL
      const supply = new Supply(req.body);

      // SAVE INSTANCE OF Comment MODEL TO DB
      supply
        .save()
        .then(supply => {
          return Product.findById(req.params.productId);
        })
        .then(product => {
          product.supplies.unshift(supply);
          return product.save();
        })
        .then(product => {
          res.redirect(`/`);
        })
        .catch(err => {
          console.log(err);
        });
    });
};
