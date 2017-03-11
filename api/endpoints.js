(function (){
  'use strict';

  var util = require('util');

  var domain = "";
  process.argv.forEach(function (val, index, array) {
    var arg = val.split("=");
    if (arg.length > 1) {
      if (arg[0] == "--domain") {
        domain = "." + arg[1];
        console.log("Setting domain to:", domain);
      }
    }
  });

  module.exports = {
    catalogueUrl:  util.format("http://%s", process.env.CATALOG_URL),
    tagsUrl:       util.format("http://%s/tags", process.env.CATALOG_URL),
    cartsUrl:      util.format("http://%s/carts", process.env.CART_URL),
    ordersUrl:     util.format("http://%s", process.env.ORDER_URL),
    customersUrl:  util.format("http://%s/customers", process.env.USER_URL),
    addressUrl:    util.format("http://%s/addresses", process.env.USER_URL),
    cardsUrl:      util.format("http://%s/cards", process.env.USER_URL),
    loginUrl:      util.format("http://%s/login", process.env.USER_URL),
    registerUrl:   util.format("http://%s/register", process.env.USER_URL),
    commentUrl:    util.format("http://%s", process.env.COMMENT_URL),
  };
}());
