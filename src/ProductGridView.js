function ProductGridView(productGrid) {
  this.productGrid = productGrid
}

ProductGridView.prototype = {
  createHTML: function() {
    var div = `<div id="products">`
    this.productGrid.getProducts().forEach(function(product) {
      div += `<div class="product-square" id="${product.getProductID()}"><img id="grid-product-image" src="${product.getImageURL()}"><span id="product-title">${product.getTitle()}</span><span id="product-price">£${product.getPrice()}</span></div>`
    })
    return div + "</div>"
  }
}
