describe("ProductIndividualModel", function() {

  var productIndividualModel;

  describe("#new", function() {
    it("can create a ProductIndividualModel with all details", function() {
      expect(function() { productIndividualModel = new ProductIndividualModel({
                                                    title: "Test product title",
                                                    media: "https://www.johnlewis.com/",
                                                    price: "100.00",
                                                    productInformation: "<div>Test product information</div>",
                                                    displaySpecialOffer: "<div>Deal</div>",
                                                    includedServices: "2 year guarantee",
                                                    code: "1234"
                                                    })
      }).not.toThrowError()
    })
  })

  describe("#getTitle", function() {
    it("can return product title", function() {
      productIndividualModel = new ProductIndividualModel({
                                                    title: "Test product title",
                                                    media: "https://www.johnlewis.com/",
                                                    price: "100.00",
                                                    productInformation: "<div>Test product information</div>",
                                                    displaySpecialOffer: "<div>Deal</div>",
                                                    includedServices: "2 year guarantee",
                                                    code: "1234"
                                                    })
      expect(productIndividualModel.getTitle()).toEqual("Test product title")
    })
  })
})
