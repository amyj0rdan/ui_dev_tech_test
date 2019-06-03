describe("productModel", function() {

  var productModel;

  describe("#new", function() {
    it("can create new ProductModel with productID, title, imageURL and price", function() {
      expect(function() { productModel = new ProductModel({
                      productID: 1,
                      title: "Test product model",
                      imageURL: "https://www.johnlewis.com/",
                      price: 100.00})
                      })
                      .not.toThrowError()
    })
  })
})
