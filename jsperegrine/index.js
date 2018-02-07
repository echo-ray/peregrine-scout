// let build_markets = require("./build_markets.js");
const ccxt = require ('ccxt');

// let exports = module.exports = {};
module.exports.buildAllCollections = function(exchange_list, write, ccxt_errors) {
    build_all_collections(exchange_list, write, ccxt_errors)
};

module.exports.testCollections = function() {
    build_all_collections(ccxt.exchanges);
};