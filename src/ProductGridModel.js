function ProductGridModel() {
  this._products = []
}

ProductGridModel.prototype = {
  add: function({productID, title, imageURL, price}) {
    this._products.push(new ProductModel({productID: productID, title: title, imageURL: imageURL, price: price}))
  }
}
