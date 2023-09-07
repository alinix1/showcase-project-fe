describe("About Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://beats4devs-api.herokuapp.com/api/v1/songs", {
      statusCode: 200,
      ok: true,
      fixture: "songs",
    });
    cy.visit("http://localhost:3000/about");
  });

  it("Should be able to click on the about button and navigate to about page", () => {
    cy.get("header")
      .should("exist")
      .get(".about-photo")
      .should("exist")
      .get(".about-info")
      .should("exist")
      .get(".about-info-title")
      .contains("About Us")
      .get(".about-info-text")
      .should("exist");
  });

  it("Should be able to click on the home button and navigate to landing page", () => {
    cy.get(".home-button-container").should("exist").first().click();
  });
});
