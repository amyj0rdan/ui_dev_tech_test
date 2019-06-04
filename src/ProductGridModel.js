const ProductModel = require('./ProductModel.js')

function ProductGridModel(productModel) {
  this.productModel = productModel || ProductModel
  this._products = []
}

ProductGridModel.prototype = {
  add: function({productID, title, imageURL, price}) {
    this._products.push(new this.productModel({productID: productID, title: title, imageURL: imageURL, price: price}))
  },

  getProducts: function() {
    return this._products;
  }
}
module.exports = ProductGridModel;
