describe("ProductPageView", function() {

  var productPageView;

  beforeEach(function() {
    function ProductIndividualMock() {
      this.getTitle = function() {
        return "Test product title";
      },
      this.getMedia = function() {
        return "https://www.johnlewis.com/";
      },
      this.getMediaAlt = function() {
        return "John Lewis website";
      },
      this.getPrice = function() {
        return "100.00";
      },
      this.getProductInformation = function() {
        return "<div>Test product information</div>";
      }
      this.getSpecialOffer = function() {
        return "Deal";
      }
      this.getIncludedServices = function() {
        return "2 year guarantee";
      }
      this.getCode = function() {
        return "1234"
      }
    }
    var productIndividualMock = new ProductIndividualMock()
    productPageView = new ProductPageView(productIndividualMock);
  })

  describe("#createPriceHTML", function() {
    it("returns HTML div", function(){
      expect(productPageView.createPriceHTML()).toEqual(`<div class="product-price-details"><img class="individual-product-image" src="https://www.johnlewis.com/" alt="John Lewis website"/><div class="price-details"><span class="product-price">£100.00</span><span class="product-special-offer">Deal</span></div></div>`)
    })
  })

  describe("#createProductInformationHTML", function() {
    it("returns HTML div", function() {
      expect(productPageView.createProductInformationHTML()).toEqual(`<div class="product-information><span class="product-information-header">Product Information</span><span class="product-code">Product code: 1234</span><span class="product-information"><div>Test product information</div></span></div>`)
    })
  })
})
