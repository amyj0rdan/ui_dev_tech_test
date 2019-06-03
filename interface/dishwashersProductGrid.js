window.onload = function() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      const productGrid = new ProductGridModel()
      var productsLength = data.products.length
      for (let i = 0; i < productsLength; i++) {
        productGrid.add({productID: data.products[i].productId,
                              title: data.products[i].title,
                              imageURL: data.products[i].image,
                              price: data.products[i].price.now})
      }
      const productGridView = new ProductGridView(productGrid)
      document.getElementById("products").innerHTML = productGridView.createHTML()
    })
}