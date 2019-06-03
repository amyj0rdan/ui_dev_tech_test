describe("Product Grid Page", function() {
  it("dishwashers page contains 20 elements", function() {
    cy.visit("http://localhost:8080/")
    cy.contains("Dishwashers")
    cy.get("#dishwashers").children().should("have.length", 20)
  })
})
