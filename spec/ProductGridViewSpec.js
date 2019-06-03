describe("ProductGridView", function() {

  var productGridView;

  beforeEach(function() {
    function ProductGridModelMock() {
      this.getProducts = function() {
        productModelMocks = [{ getProductID: function() {
                                  return 1;
                                },
                                getTitle: function() {
                                  return "Mock product model";
                                },
                                getImageURL: function() {
                                  return "https://www.johnlewis.com/"
                                },
                                getPrice: function() {
                                  return 100;
                                }
                              }]
        return productModelMocks;
      }
    }
    var productGridModelMock = new ProductGridModelMock()
    productGridView = new ProductGridView(productGridModelMock)
  })

  describe("#createHTML", function() {
    it("returns an HTML div", function() {
      expect(productGridView.createHTML()).toEqual(`<div class="product-square" id="1"><img src="https://www.johnlewis.com/"><span id="product-title">Mock product model</span><span id="product-price">£100.00</span></div>`)
    })
  })
})
