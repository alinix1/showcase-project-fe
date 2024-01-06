describe("Playlist Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://beats4devs-api.herokuapp.com/api/v1/songs", {
      fixture: "songs",
      statusCode: 200,
      ok: true,
    });
    cy.visit("http://localhost:3000");
  });
  it("Should render a loading icon and message while content is loading", () => {
    cy.get('[data-cy="loading-text-element"]')
      .should("have.attr", "src")
      .get('[data-cy="loading-text-element"]')
      .contains("...loading your music");
  });
  it("Should be able to favorite a card", () => {
    cy.wait(10000)
      .get('[data-cy="card-element"]')
      .should("exist")
      .first()
      .click()
      .wait(5000)
      .get('[data-cy="card-side-back-element"]')
      .should("exist")
      .then(($card) => {
        cy.get('[data-cy="heart-icon-element"]')
          .first()
          .click({ force: true })
          .wait(2000)
          .get('[data-cy="heart-icon-element"]')
          .should("exist")
          .should("have.attr", "alt", "delete favorite");
        cy.get('[data-cy="mini-album-cover-back-img"]')
          .first()
          .trigger("mousedown", { force: true });
        cy.get('[data-cy="mini-album-cover-back-img"]')
          .eq(1)
          .trigger("mousedown", { force: true });
        cy.get('[data-cy="mini-album-cover-back-img"]')
          .last()
          .trigger("mousedown", { force: true });
        cy.get('[data-cy="song-card-song"]').first().click({ force: true });

        cy.get('[data-cy="playlist-btn"]')
          .click()
          .get('[data-cy="heart-icon-element"]')
          .click({ force: true })
          .get('[data-cy="favorite-songs-message-element"]');
      });
  });
  it("Should be able to navigate back to the landing page", () => {
    cy.get('[data-cy="heart-container-element"]')
      .first()
      .click({ force: true });

    cy.get('[data-cy="loading-text-element"]').should("not.exist");

    cy.get('[data-cy="songs-container-element"]').should("exist");

    cy.get('[data-cy="playlist-btn"]').click({ force: true });

    cy.get('[data-cy="loading-text-element"]').should("not.exist");

    cy.get('[data-cy="home-btn"]').click();

    cy.visit("http://localhost:3000");

    cy.wait(2000);
  });
});
