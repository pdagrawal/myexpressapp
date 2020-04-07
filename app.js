const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/products/new', (req, res, next) => {
    res.send('<form action="products" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/products', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/users', (req, res, next) => {
    res.send('<h1>Users</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from express</h1>');
});

app.listen(3000);