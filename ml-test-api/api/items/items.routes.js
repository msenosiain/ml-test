function main(){
    const express = require('express');
    const router = express.Router();
    const item = require('./items.controller')();

    router.get('/', item.getByQuery);

    router.get('/:id', item.getById);

    return router;
}
module.exports = main;