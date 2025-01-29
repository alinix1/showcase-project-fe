describe("Playlist Page - Loading State", () => {
  beforeEach(() => {
    // Intercept the API request for songs
    cy.intercept(
      "GET",
      "https://beats4devs-api.herokuapp.com/api/v1/songs",
      (req) => {
        req.reply({
          fixture: "songs", // Use the fixture for songs
          statusCode: 200,
          ok: true,
        });
      }
    ).as("getSongsWithLoading");

    cy.visit("http://localhost:3000");
  });

  it("Should render a loading icon and message while content is loading", () => {
    // Check that the loading text and icon are visible initially
    cy.get('[data-cy="loading-text-element"]')
      .should("be.visible")
      .contains("...loading your music");

    // Wait for a moment before sending the API response (simulate loading state)
    cy.wait(300); // You can adjust this delay as needed for your test scenario

    // Wait for the intercepted request to finish
    cy.wait("@getSongsWithLoading");

    // After loading, make sure the loading text disappears and the content is shown
    cy.get('[data-cy="loading-text-element"]').should("not.exist");
    cy.get('[data-cy="songs-container-element"]').should("exist");
  });
});
