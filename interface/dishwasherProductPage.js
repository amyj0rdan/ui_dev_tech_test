function individualProductPage() {
  const productSquares = document.getElementsByClassName('product-square')

  const renderIndividualProduct = function() {
    const productId = this.getAttribute("id");
    fetch(`https://cors-anywhere.herokuapp.com/https://api.johnlewis.com/v1/products/${productId}?key=Wu1Xqn3vNrd1p7hqkvB6hEu0G9OrsYGb`)
      .then(function(response) {
        return response.json()
      })
      .then(function(data) {
        const product = new ProductIndividualModel({title: data.title,
                                                    media: data.media.images.urls[0],
                                                    mediaAlt: data.media.images.altText,
                                                    price: data.price.now,
                                                    productInformation: data.details.productInformation,
                                                    displaySpecialOffer: data.displaySpecialOffer,
                                                    includedServices: data.additionalServices.includedServices,
                                                    code: data.code
                                                  })
        const productPageView = new ProductPageView(product)
        const backButton = `<div class="back-button"><button id="back-button" onClick="window.location.reload();"><</button></div>`
        document.getElementById("page-header").innerHTML = backButton + `<h1>${product.getTitle()}</h1>`
        console.log(productPageView.createPriceHTML())
        console.log(productPageView.createProductInformationHTML())
        console.log(productPageView.createPriceHTML() + productPageView.createProductInformationHTML())
        document.getElementById("body").innerHTML = productPageView.createPriceHTML() + productPageView.createProductInformationHTML()
      })
  }

  Array.from(productSquares).forEach(function(element) {
      element.addEventListener('click', renderIndividualProduct);
    });
}
