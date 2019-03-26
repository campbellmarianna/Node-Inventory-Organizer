const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Add after body parser initialization!
app.use(expressValidator());

app.engine('hbs', hbs({ defaultLayout: 'main', extname: "hbs" }));
app.set('view engine', 'hbs')

// static files middleware
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// CONTROLLERS
require('./controllers/products.js')(app);

// Set db
require('./data/inventoryOrg-db');

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;
