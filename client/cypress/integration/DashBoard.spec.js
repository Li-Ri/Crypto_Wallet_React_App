describe("DashBoard", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("successfully loads the DashBoard", () => {
    const title = cy.get("#main-title");
    title.should("contain", "DashBoard");
  });

  it("Wallet should contain $100000.00", () => {
    const total = cy.get("#wallet-total");
    total.should("contain", "$100000.00");
  });

  it("should be able to add money to wallet", () => {
    const addBtn = cy.get("#add-money");
    addBtn.click();
    const form = cy.get("#amount").type("100");
    const submitBtn = cy.get("#wallet-form-submit");
    submitBtn.click();
    const total = cy.get("#wallet-total");
    total.should("contain", "$100100.00");
  });
});
