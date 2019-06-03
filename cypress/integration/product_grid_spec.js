describe("Product Grid Page", function() {
  it("visits Dishwasher page", function() {
    cy.visit("http://localhost:8080/")
    cy.contains("Dishwashers")
  })
})
