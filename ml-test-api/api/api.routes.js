function main() {
    const express = require('express');
    const router = express.Router();
    const items = require('./items/items.routes')();

    router.get('/', (req, res) => {
        res.send('api works over nodejs');
    });

    router.use('/items', items);

    return router;
}

module.exports = main;