function ProductIndividualModel({title, media, price, productInformation,
                                displaySpecialOffer, includedServices, code}) {
  this._title = title;
  this._media = media;
  this._price = price;
  this._productInformation = productInformation;
  this._displaySpecialOffer = displaySpecialOffer;
  this._includedServices = includedServices;
  this._code = code;
}

ProductIndividualModel.prototype = {
  getTitle: function() {
    return this._title;
  },

  getMedia: function() {
    return this._media;
  },

  getPrice: function() {
    return this._price;
  }
}
