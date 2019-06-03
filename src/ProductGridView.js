function ProductGridView(productGrid) {
  this.productGrid = productGrid
}

ProductGridView.prototype = {
  createHTML: function() {
    var div = ""
    this.productGrid.getProducts().forEach(function(product) {
      div += `<div class="product-square" id="${product.getProductID()}"><img src="${product.getImageURL()}"><span id="product-title">${product.getTitle()}</span><span id="product-price">£${product.getPrice().toFixed(2)}</span></div>`
    })
    return div
  }
}
