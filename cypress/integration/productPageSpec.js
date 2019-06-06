describe("Product Page", function() {

  beforeEach(function() {
    cy.visit("http://localhost:8080/")
    cy.get("#products").children().first().click()
  })

  it("contains dishwasher product price", function() {
    cy.get(".product-price").should("contain", "£")
  })

  it("contains dishwasher product code", function() {
    cy.get("#product-code").should("contain", "Product code: ")
  })

  it("contains product information", function() {
    cy.get(".product-information").should("be.visible")
  })

  it("returns to home page when clicking the back button", function() {
    cy.get(".back-button").click()
    cy.contains("Dishwashers")
  })
})
