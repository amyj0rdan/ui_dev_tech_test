function ProductIndividualModel({title, media, mediaAlt, price, productInformation,
                                displaySpecialOffer, includedServices, code}) {
  this._title = title;
  this._media = media;
  this._mediaAlt = mediaAlt;
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

  getMediaAlt: function() {
    return this._mediaAlt
  },

  getPrice: function() {
    return this._price;
  },

  getProductInformation: function() {
    return this._productInformation;
  },

  getSpecialOffer: function() {
    return this._displaySpecialOffer;
  },

  getIncludedServices: function() {
    return this._includedServices;
  },

  getCode: function() {
    return this._code;
  }
}
