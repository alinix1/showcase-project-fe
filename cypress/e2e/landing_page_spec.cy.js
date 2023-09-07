describe("Landing Page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://beats4devs-api.herokuapp.com/api/v1/songs", {
      statusCode: 200,
      ok: true,
      fixture: "songs",
    });
    cy.visit("http://localhost:3000");
  });
  it("Should render a header", () => {
    cy.get('[data-cy="header-element"]')
      .should("be.visible")
      .should("contain", "Beats4Devs")
      .get('[data-cy="logo"]')
      .get('[data-cy="playlist-btn"]')
      .get('[data-cy="home-btn"]');
  });
  it("Should render all the cards", () => {
    cy.get('[data-cy="songs-container-element"]')
      .find('[data-cy="card-element"]')
      .should("have.length", 3)
      .get('[data-cy="mini-album-cover-img"]')
      .eq(0)
      .get('[data-cy="heart-container-element"]')
      .eq(0)
      .get('[data-cy="album-card-element"]')
      .eq(0)
      .get('[data-cy="release-date-card-element"]')
      .eq(0)
      .get('[data-cy="artist-card-element"]')
      .eq(0)
      .get('[data-cy="song-card-song"]')
      .eq(0)
      .get('[data-cy="genre-card-element"]')
      .eq(0)
      .get('[data-cy="song-details-card-element"]')
      .eq(0)
      .get('[data-cy="mini-album-cover-img"]')
      .eq(1)
      .get('[data-cy="heart-container-element"]')
      .eq(1)
      .get('[data-cy="album-card-element"]')
      .eq(1)
      .get('[data-cy="release-date-card-element"]')
      .eq(1)
      .get('[data-cy="artist-card-element"]')
      .eq(1)
      .get('[data-cy="song-card-song"]')
      .eq(1)
      .get('[data-cy="genre-card-element"]')
      .eq(1)
      .get('[data-cy="song-details-card-element"]')
      .eq(1)
      .get('[data-cy="mini-album-cover-img"]')
      .eq(2)
      .get('[data-cy="heart-container-element"]')
      .eq(2)
      .get('[data-cy="album-card-element"]')
      .eq(2)
      .get('[data-cy="release-date-card-element"]')
      .eq(2)
      .get('[data-cy="artist-card-element"]')
      .eq(2)
      .get('[data-cy="song-card-song"]')
      .eq(2)
      .get('[data-cy="genre-card-element"]')
      .eq(2)
      .get('[data-cy="song-details-card-element"]')
      .eq(2);
  });
  it("Should be able to favorite a card", () => {
    cy.get('[data-cy="heart-container-element"]')
      .first()
      .click()
      .get('[data-cy="songs-container-element"]')
      .get('[data-cy="heart-container-element"]')
      .eq(1)
      .click()
      .get('[data-cy="songs-container-element"]')
      .get('[data-cy="heart-container-element"]')
      .last()
      .click()
      .get('[data-cy="songs-container-element"]');
  });
  it("Should be able to hover over an album cover on a card", () => {
    cy.get('[data-cy="mini-album-cover-img"]').first().trigger("mousedown");
    cy.get('[data-cy="mini-album-cover-img"]').eq(1).trigger("mousedown");
    cy.get('[data-cy="mini-album-cover-img"]').last().trigger("mousedown");
  });
  it("Should be able to click on a song title and navigate to the Spotify playlist", () => {
    cy.get('[data-cy="song-card-song"]').first().click();
  });
  it("Should show an error message if entered an incorrect URL", () => {
    cy.visit("http://localhost:3000/fdsfds")
      .get('[data-cy="error-message-element"]')
      .contains("404: Sorry, that page doesn't exist.");
  });
});
