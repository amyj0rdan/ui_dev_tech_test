describe("ProductModel", function() {

  var productModel;

  beforeEach(function() {
    productModel = new ProductModel({
                        productID: 1,
                        title: "Test product model",
                        imageURL: "https://www.johnlewis.com/",
                        price: 100.00})
  })

  describe("#getProductID", function() {
    it("can return productID", function() {
      expect(productModel.getProductID()).toEqual(1);
    })
  })

  describe("#getTitle", function() {
    it("can return product title", function() {
      expect(productModel.getTitle()).toEqual("Test product model");
    })
  })

  describe("#getImageURL", function() {
    it("can return image URL", function() {
      expect(productModel.getImageURL()).toEqual("https://www.johnlewis.com/")
    })
  })

  describe("#getPrice", function() {
    it("can return price", function() {
      expect(productModel.getPrice()).toEqual(100)
    })
  })
})
