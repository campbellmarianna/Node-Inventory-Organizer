const Product = require('../models/product');
module.exports = app => {
    app.get('/home', (req, res) => {
      res.render('home');
    })

    // INDEX
    app.get('/', (req, res) => {
    Product.find({})
        .then(products => {
            console.log(products)
            res.render("products-index", { products });
        })
        .catch(err => {
            console.log(err.message);
        });
    })

    // NEW
    app.get('/products/new', (req, res) => {
        res.render("products-new");
    })

    // CREATE
    app.post("/products/new", (req, res) => {
        // INSTANTIATE INSTANCE OF POST MODEL
        const post = new Product(req.body);

        // SAVE INSTANCE OF PRODUCT MODEL TO DB
        post.save((err, post) => {
        // REDIRECT TO THE ROOT
        return res.redirect("/");
        })
    });

    //SHOW
    app.get("/products/:id", function(req, res) {
        // LOOK UP THE PRODUCT
        Product.findById(req.params.id)
        .then((product) => {
          res.render("products-show", { product });
        })
        .catch(err => {
          console.log(err.message);
        });
    });
};
