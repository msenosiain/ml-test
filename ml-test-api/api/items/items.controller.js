const _ = require('lodash');
const request = require('request-promise');

const author = {name: "Miguel", lastname: "Senosiain"};

function main() {

    function getByQuery(req, res) {
        let options = {
            uri: 'https://api.mercadolibre.com/sites/MLA/search',
            qs: {q: req.query.q ? req.query.q : ''},
            transform: _processAllItemsResponse,
            json: true
        };

        request(options).then(function (items) {
            res.json(items);
        }).catch(function (err) {
            res.send(err);
        });
    }

    function getById(req, res) {
        if (req.params.id) {

            var itemOptions = {
                uri: 'https://api.mercadolibre.com/items/' + req.params.id,
                transform: _processItemResponse,
                json: true
            };

            var descriptionOptions = {
                uri: 'https://api.mercadolibre.com/items/' + req.params.id + '/description',
                transform: _processDescriptionResponse,
                json: true
            };

            // Release the Kraken!

            Promise.all([request(itemOptions), request(descriptionOptions)]).then(function (responses) {
                let response = {author: author};
                response.item = responses[0];
                response.item.description = responses[1];
                res.json(response);
            });
        }
    }

    return {
        getByQuery: getByQuery,
        getById: getById
    };
}


/* ==== Transformers 🤖 ==== */

function _explodePrice(price, currency) {

    const abs_price = Math.abs(price); //we don't want negative prices, right?
    return {
        "currency": currency,
        "amount": Math.floor(abs_price),
        "decimals": price - Math.floor(abs_price)
    };
}

function _processAllItemsResponse(ml_response) {

    const categoryFilter = _.find(ml_response.available_filters, {'id': 'category'});
    let response = {author: author, categories: [], items: []};

    if (categoryFilter) {
        response.categories = categoryFilter.values.map(function (category) {
            return category.name;
        });
    }

    if (ml_response.results && ml_response.results.length) {
        response.items = ml_response.results.map(function (result) {

            return {
                "id": result.id,
                "title": result.title,
                "price": _explodePrice(result.price, result.currency_id),
                "picture": result.thumbnail,
                "condition": result.condition,
                "free_shipping": result.shipping.free_shipping
            };
        });
    }

    return response;
}

function _processItemResponse(ml_response) {
    return {
        id: ml_response.id,
        title: ml_response.title,
        price: _explodePrice(ml_response.price, ml_response.currency_id),
        picture: ml_response.pictures[0].secure_url,
        condition: ml_response.condition,
        free_shipping: ml_response.shipping.free_shipping,
        sold_quantity: ml_response.sold_quantity
    };
}

function _processDescriptionResponse(ml_response) {
    return ml_response.plain_text || '';
}

module.exports = main;
