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
    cy.get('[data-cy="header-element"]')
      .should("be.visible")
      .get('[data-cy="about-photo-element"]')
      .should("exist")
      .get('[data-cy="about-info-element"]')
      .should("exist")
      .get('[data-cy="about-info-title-element"]')
      .contains("About Us")
      .get('[data-cy="about-info-text-element"]')
      .should("exist");
  });
  it("Should be able to click on the home button and navigate to landing page", () => {
    cy.get('[data-cy="home-btn"]')
      .should("exist")
      .first()
      .click()
      .url()
      .should("eq", "http://localhost:3000/");
  });
});
