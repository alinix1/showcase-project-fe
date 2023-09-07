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
    cy.get("header")
      .should("be.visible")
      .should("contain", "Beats4Devs")
      .get(".logo-headphones")
      .get(".playlist-button-container")
      .get(".home-button-container");
  });

  it("Should render all the cards", () => {
    cy.get(".songs-container")
      .get(":nth-child(1) > .mini-album-cover")
      .get(":nth-child(1) > .heart-container > img")
      .get(":nth-child(1) > .album-card")
      .get(":nth-child(1) > .release-date-card")
      .get(":nth-child(1) > .artist-card")
      .get(":nth-child(1) > .song-card")
      .get(":nth-child(1) > .genre-card")
      .get(":nth-child(1) > .song-details-card")

      .get(":nth-child(2) > .mini-album-cover")
      .get(":nth-child(2) > .heart-container > img")
      .get(":nth-child(2) > .album-card")
      .get(":nth-child(2) > .release-date-card")
      .get(":nth-child(2) > .artist-card")
      .get(":nth-child(2) > .song-card")
      .get(":nth-child(2) > .genre-card")
      .get(":nth-child(2) > .song-details-card")

      .get(":nth-child(3) > .mini-album-cover")
      .get(":nth-child(3) > .heart-container > img")
      .get(":nth-child(3) > .album-card")
      .get(":nth-child(3) > .release-date-card")
      .get(":nth-child(3) > .artist-card")
      .get(":nth-child(3) > .song-card")
      .get(":nth-child(3) > .genre-card")
      .get(":nth-child(3) > .song-details-card");
  });

  it("Should be able to favorite a card", () => {
    cy.get(":nth-child(1) > .heart-container > img")
      .first()
      .click()
      .get(".songs-container > :nth-child(1)")

      .get(":nth-child(2) > .heart-container > img")
      .first()
      .click()
      .get(".songs-container > :nth-child(2)")

      .get(":nth-child(3) > .heart-container > img")
      .first()
      .click()
      .get(".songs-container > :nth-child(3)");
  });

  it("Should be able to hover over an album cover on a card", () => {
    cy.get(":nth-child(1) > .mini-album-cover").trigger("mousedown");

    cy.get(":nth-child(2) > .mini-album-cover").trigger("mousedown");

    cy.get(":nth-child(3) > .mini-album-cover").trigger("mousedown");
  });

  it("Should be able to click on a song title and navigate to the Spotify playlist", () => {
    cy.get(":nth-child(1) > .song-card").first().click();
  });

  it("Should show an error message if entered an incorrect URL", () => {
    cy.visit("http://localhost:3000/fdsfds")
      .get("h3")
      .contains("404: Sorry, that page doesn't exist.");
  });
});
