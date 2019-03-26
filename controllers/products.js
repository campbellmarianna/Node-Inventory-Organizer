const Product = require('../models/product');
module.exports = app => {
  // CREATE
  app.post("/products/new", (req, res) => {
      // INSTANTIATE INSTANCE OF POST MODEL
      const post = new Product(req.body);

      // SAVE INSTANCE OF POST MODEL TO DB
      post.save((err, post) => {
        // REDIRECT TO THE ROOT
        return res.redirect(`/`);
      })
    });
};
