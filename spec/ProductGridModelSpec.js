describe("ProductGridModel", function() {

  var productGridModel;

  beforeEach(function(){
    productGridModel = new ProductGridModel();
  })

  describe("#add", function() {
    it("can create a new ProductModel and add to products", function() {
      productGridModel.add({productID: 1,
                            title: "Test product model",
                            imageURL: "https://www.johnlewis.com/",
                            price: 100.00})
      expect(productGridModel._products.length).toEqual(1)
    })
  })
})
