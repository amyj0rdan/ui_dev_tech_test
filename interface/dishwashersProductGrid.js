window.onload = function() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      const productGrid = new ProductGridModel()
      const productsLength = data.products.length
      for (let i = 0; i < productsLength; i++) {
        if (typeof data.products[i].price.now === 'string') {
          var price = data.products[i].price.now
        } else {
          var price = data.products[i].price.now.from + " - " + data.products[i].price.now.to
        }
        productGrid.add({productID: data.products[i].productId,
                          title: data.products[i].title,
                          imageURL: data.products[i].image,
                          price: price})
      }
      const productGridView = new ProductGridView(productGrid)
      document.getElementById("page-header").innerHTML = "<h1>Dishwashers</h1>"
      document.getElementById("body").innerHTML = productGridView.createHTML()
      individualProductPage()
    })
}
