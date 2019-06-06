describe("Product Page", function() {
  it("contains information on one dishwasher, including product price", function() {
    cy.visit("http://localhost:8080/")
    cy.get("#products").children().first().click()
    cy.get(".product-price").should("contain", "£")
  })
})
