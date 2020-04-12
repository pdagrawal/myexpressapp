const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/products/new', (req, res, next) => {
    res.render('add-product', { pageTitle: 'Add Product', path: '/admin/products/new' })
});

router.post('/products', (req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products;