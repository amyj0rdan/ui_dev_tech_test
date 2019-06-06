describe("Product Page", function() {

  beforeEach(function() {
    cy.visit("http://localhost:8080/")
    cy.get("#products").children().first().click()
  })

  it("contains dishwasher product price", function() {
    cy.get(".product-price").should("contain", "£")
  })

  it("contains dishwasher product code", function() {
    cy.get(".product-code").should("contain", "Product code: ")
  })

  it("contains product information", function() {
    cy.get(".product-information").should("be.visible")
  })
})
