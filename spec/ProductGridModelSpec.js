describe("ProductGridModel", function() {

  var productGridModel;

  beforeEach(function(){
    function ProductModelMock({productID, title, imageURL, price}) {}
    productGridModel = new ProductGridModel(ProductModelMock);
  })

  describe("#add", function() {
    it("can create a new ProductModel and add to products", function() {
      productGridModel.add({productID: 1,
                            title: "Test product model",
                            imageURL: "https://www.johnlewis.com/",
                            price: "100.00"})
      expect(productGridModel._products.length).toEqual(1)
    })
    it("can create multiple ProductModels and add to products", function() {
      productGridModel.add({productID: 1,
                            title: "Test product model",
                            imageURL: "https://www.johnlewis.com/",
                            price: "100.00"})
      productGridModel.add({productID: 2,
                            title: "Test product model 2",
                            imageURL: "https://www.johnlewis.com/",
                            price: "200.00"})
      expect(productGridModel._products.length).toEqual(2)
    })
  })

  describe("#getProducts", function() {
    it("returns empty array when no ProductModels have been created", function() {
      expect(productGridModel.getProducts()).toEqual([])
    })

    it("returns array of ProductModels when ProductModels have been created", function() {
      productGridModel.add({productID: 1,
                            title: "Test product model",
                            imageURL: "https://www.johnlewis.com/",
                            price: "100.00"})
      productGridModel.add({productID: 2,
                            title: "Test product model 2",
                            imageURL: "https://www.johnlewis.com/",
                            price: "200.00"})
      expect(productGridModel.getProducts()[0]).toBeDefined()
      expect(productGridModel.getProducts()[1]).toBeDefined()
      expect(productGridModel.getProducts()[2]).not.toBeDefined()
    })
  })
})
