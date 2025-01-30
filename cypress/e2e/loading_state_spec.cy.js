describe("Playlist Page - Loading State", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://beats4devs-api.herokuapp.com/api/v1/songs",
      (req) => {
        req.reply({
          fixture: "songs",
          statusCode: 200,
          ok: true,
        });
      }
    ).as("getSongsWithLoading");

    cy.visit("http://localhost:3000");
  });

  it("Should render a loading icon and message while content is loading", () => {
    cy.get('[data-cy="loading-text-element"]')
      .should("be.visible")
      .contains("...loading your music");

    cy.wait(300);

    cy.wait("@getSongsWithLoading");

    cy.get('[data-cy="loading-text-element"]').should("not.exist");
    cy.get('[data-cy="songs-container-element"]').should("exist");
  });
});
