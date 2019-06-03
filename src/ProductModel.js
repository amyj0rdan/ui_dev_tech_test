function ProductModel({productID, title, imageURL, price}) {
  this._productID = productID;
  this._title = title;
  this._imageURL = imageURL;
  this._price = price;
}

ProductModel.prototype = {
  getProductID: function() {
    return this._productID;
  },

  getTitle: function() {
    return this._title;
  },

  getImageURL: function() {
    return this._imageURL;
  }
}
