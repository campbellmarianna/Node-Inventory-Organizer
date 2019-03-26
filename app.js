const express = require('express');
const hbs = require('express-handlebars');

const app = express();

app.engine('hbs', hbs({ defaultLayout: 'main', extname: "hbs" }));
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
