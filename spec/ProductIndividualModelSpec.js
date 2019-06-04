describe("ProductIndividualModel", function() {

  var productIndividualModel;

  beforeEach(function() {
    productIndividualModel = new ProductIndividualModel({
                                                  title: "Test product title",
                                                  media: "https://www.johnlewis.com/",
                                                  price: "100.00",
                                                  productInformation: "<div>Test product information</div>",
                                                  displaySpecialOffer: "<div>Deal</div>",
                                                  includedServices: "2 year guarantee",
                                                  code: "1234"
                                                  })
  })

  describe("#getTitle", function() {
    it("can return product title", function() {
      expect(productIndividualModel.getTitle()).toEqual("Test product title")
    })
  })

  describe("#getMedia", function() {
    it("can return product media", function() {
      expect(productIndividualModel.getMedia()).toEqual("https://www.johnlewis.com/")
    })
  })
})
