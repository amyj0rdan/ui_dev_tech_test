describe("End to end test", function() {

  var productGridView;

  beforeEach(function() {
    var productGridModel = new ProductGridModel()
    productGridModel.add({productID: 1,
                          title: "Test product model",
                          imageURL: "https://www.johnlewis.com/",
                          price: "100.00"})
    productGridModel.add({productID: 2,
                          title: "Test product model 2",
                          imageURL: "https://www.johnlewis.com/",
                          price: "200.00"})
    productGridView = new ProductGridView(productGridModel)
  })

  it("can return an HTML div", function() {
    expect(productGridView.createHTML()).toEqual(`<div id="products"><div class="product-square" id="1"><img src="https://www.johnlewis.com/"><span id="product-title">Test product model</span><span id="product-price">£100.00</span></div><div class="product-square" id="2"><img src="https://www.johnlewis.com/"><span id="product-title">Test product model 2</span><span id="product-price">£200.00</span></div></div>`)
  })


})
