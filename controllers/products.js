const Product = require('../models/product');
const Supply = require('../models/supply');

module.exports = app => {

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
    });

    // CREATE
    app.post("/products/new", (req, res) => {
        // INSTANTIATE INSTANCE OF POST MODEL
        const product = new Product(req.body);

        // SAVE INSTANCE OF PRODUCT MODEL TO DB
        product.save((err, product) => {
        // REDIRECT TO THE ROOT
        return res.redirect(`/products/${product._id}`);
        })
    });

    //SHOW
    app.get("/products/:id", function(req, res) {
        // LOOK UP THE POST
        Product.findById(req.params.id).populate('supplies')
        .then((product) => {
          res.render('products-show.hbs', { product })
        })
        .catch((err) => {
          console.log(err.message)
        });
    });
};
