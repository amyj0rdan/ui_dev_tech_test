describe("ProductIndividualModel", function() {

  var productIndividualModel;

  beforeEach(function() {
    productIndividualModel = new ProductIndividualModel({
                                                  title: "Test product title",
                                                  media: "https://www.johnlewis.com/",
                                                  mediaAlt: "John Lewis website",
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

  describe("getMediaAlt", function() {
    it("can return product media alternative text", function() {
      expect(productIndividualModel.getMediaAlt()).toEqual("John Lewis website")
    })
  })

  describe("#getPrice", function() {
    it("can return product price", function() {
      expect(productIndividualModel.getPrice()).toEqual("100.00")
    })
  })

  describe("#getProductInformation", function() {
    it("can return product information", function() {
      expect(productIndividualModel.getProductInformation()).toEqual("<div>Test product information</div>")
    })
  })

  describe("#getSpecialOffer", function() {
    it("can return special offer", function() {
      expect(productIndividualModel.getSpecialOffer()).toEqual("<div>Deal</div>")
    })
  })

  describe("#getIncludedServices", function() {
    it("can return included services", function() {
      expect(productIndividualModel.getIncludedServices()).toEqual("2 year guarantee")
    })
  })

  describe("#getCode", function() {
    it("can return product code", function() {
      expect(productIndividualModel.getCode()).toEqual("1234")
    })
  })
})
