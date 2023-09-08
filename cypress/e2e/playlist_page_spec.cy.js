describe("Landing Page", () => {
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
  it("Should be able to add song to playlist and render song on the playlist page", () => {
    cy.get('[data-cy="heart-container-element"]')
      .first()
      .click()
      .get('[data-cy="songs-container-element"]')
      .get('[data-cy="playlist-btn"]')
      .click()
      .get('[data-cy="card-element"]')
      .should("have.length", 1)
      .wait(2000);
  });
  it("Should be able to delete song in playlist and render playlist page with no songs", () => {
    cy.get('[data-cy="heart-container-element"]')
      .first()
      .click()
      .get('[data-cy="songs-container-element"]')
      .get('[data-cy="playlist-btn"]')
      .click()
      .get('[data-cy="heart-container-element"]')
      .click()
      .get('[data-cy="favorite-songs-message-element"]');
  });
  it("Should be able to navigate back to the landing page", () => {
    cy.get('[data-cy="heart-container-element"]')
      .first()
      .click()
      .get('[data-cy="songs-container-element"]')
      .get('[data-cy="playlist-btn"]')
      .click()
      .get('[data-cy="home-btn"]')
      .click()
      .visit("http://localhost:3000")
      .wait(2000);
  });
});
