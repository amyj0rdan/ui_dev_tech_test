describe("ProductGridView", function() {

  beforeEach(function() {
    function ProductGridModelMockOneProduct() {
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
                                  return "100.00";
                                }
                              }]
        return productModelMocks;
      }
    }
    function ProductGridModelMockTwoProducts() {
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
                                  return "100.00";
                                }
                              },
                              { getProductID: function() {
                                  return 2;
                                },
                                getTitle: function() {
                                  return "Mock product model 2";
                                },
                                getImageURL: function() {
                                  return "https://www.johnlewis.com/"
                                },
                                getPrice: function() {
                                  return "200.00";
                                }
                              }
                            ]
        return productModelMocks;
      }
    }

    var productGridModelMockOneProduct = new ProductGridModelMockOneProduct()
    productGridViewOneProduct = new ProductGridView(productGridModelMockOneProduct)

    var productGridModelMockTwoProducts = new ProductGridModelMockTwoProducts()
    productGridViewTwoProducts = new ProductGridView(productGridModelMockTwoProducts)
  })

  describe("#createHTML", function() {
    it("returns an HTML div for one product", function() {
      expect(productGridViewOneProduct.createHTML()).toEqual(`<div id="products"><div class="product-square" id="1"><img id="grid-product-image" src="https://www.johnlewis.com/"><span id="product-title">Mock product model</span><span id="product-price">£100.00</span></div></div>`)
    })
    it("returns an HTML div for two products", function() {
      expect(productGridViewTwoProducts.createHTML()).toEqual(`<div id="products"><div class="product-square" id="1"><img id="grid-product-image" src="https://www.johnlewis.com/"><span id="product-title">Mock product model</span><span id="product-price">£100.00</span></div><div class="product-square" id="2"><img id="grid-product-image" src="https://www.johnlewis.com/"><span id="product-title">Mock product model 2</span><span id="product-price">£200.00</span></div></div>`)
    })
  })
})
