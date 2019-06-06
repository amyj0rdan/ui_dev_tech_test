function ProductPageView(productIndividualModel) {
  this._product = productIndividualModel
}
ProductPageView.prototype = {
  createPriceHTML: function() {
    let div = ""
    div += `<img src="${this._product.getMedia()}"/><span class="product-price">${this._product.getPrice()}</span>`
    if (this._product.getSpecialOffer() !== "") {
      div += `<span class="product-special-offer">${this._product.getSpecialOffer()}</span>`
    }
    return div
  }
}
