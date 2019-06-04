function individualProductPage() {
  const productSquares = document.getElementsByClassName('product-square')

  const renderIndividualProduct = function() {
    const productId = this.getAttribute("id");
    fetch(`https://cors-anywhere.herokuapp.com/https://api.johnlewis.com/v1/products/${productId}?key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        document.getElementById("page-header").innerHTML = `<h1>${data.title}</h1>`
        document.getElementById("products").innerHTML = `${data.details.productInformation}`
      })
  }

  Array.from(productSquares).forEach(function(element) {
      element.addEventListener('click', renderIndividualProduct);
    });
}
