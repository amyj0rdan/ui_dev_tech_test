window.onload = function() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.johnlewis.com/v1/products/search?q=dishwasher&key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb&pageSize=20')
    .then(function(response) {
      return response.json()
    })
    .then(function(data) {
      const dishwasherGrid = new ProductGridModel()
      document.getElementById("dishwashers").innerHTML = "Changing during this request"
      var productsLength = data.products.length
      for (let i = 0; i < productsLength; i++) {
        dishwasherGrid.add({productID: data.products[i].productId,
                              title: data.products[i].title,
                              imageURL: data.products[i].image,
                              price: data.products[i].price.now})
        console.log("ProductID: " + data.products[i].productId)
        console.log("Title: " + data.products[i].title)
        console.log("Price: " + data.products[i].price.now)
        console.log("Image URL: " + data.products[i].image)
      }
      const dishwasherGridView = new ProductGridView(dishwasherGrid)
      document.getElementById("dishwashers").innerHTML = dishwasherGridView.createHTML()
    })
}
