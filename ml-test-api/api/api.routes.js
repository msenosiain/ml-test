function main() {
    const express = require('express');
    const router = express.Router();
    const item = require('./items/items.routes')();

    /* GET api listing. */
    router.get('/', (req, res) => {
        res.send('api works over nodejs');
    });

    router.use('/items', item);

    return router;
}