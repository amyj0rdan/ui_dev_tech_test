function ProductPageView(productIndividualModel) {
  this._product = productIndividualModel
}
ProductPageView.prototype = {
  createPriceHTML: function() {
    let div = `<div class="product-price-details">`
    div += `<img class="individual-product-image" src="${this._product.getMedia()}" alt="${this._product.getMediaAlt()}"/><div class="price-details"><span class="product-price">£${this._product.getPrice()}</span>`
    if (this._product.getSpecialOffer() !== "") {
      div += `<span class="product-special-offer">${this._product.getSpecialOffer()}</span></div>`
    } else {
      div += "</div>"
    }
    return div += "</div>"
  },

  createProductInformationHTML: function() {
    let div = `<div class="product-information><span class="product-information-header">Product Information</span>`
    div += `<span class="product-code">Product code: ${this._product.getCode()}</span><span class="product-information">${this._product.getProductInformation()}</span>`
    return div += "</div>"
  }
}
