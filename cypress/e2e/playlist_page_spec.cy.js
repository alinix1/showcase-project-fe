describe('Landing Page', () => {
    beforeEach(() => {
        cy.intercept('GET', 'https://beats4devs-api.herokuapp.com/api/v1/songs', {
            fixture: "songs"
        })
        cy.visit('http://localhost:3000')
    })

    it('should be able to add song to playlist and render song on the playlist page', () => {
        cy.get(':nth-child(1) > .heart-container > img')
           .first().click()
           .get('.songs-container > :nth-child(1)')

           .get('.playlist-button-container')
           .click()
    })

    it('should be able to delete song in playlist and render playlist page with no songs', () => {
        cy.get(':nth-child(1) > .heart-container > img')
           .first().click()
           .get('.songs-container > :nth-child(1)')

           .get('.playlist-button-container')
           .click()

           .get('.heart-container > img')
           .click()

           .get('.favorite-songs-message')
           
    })
    
    it('should be able to navigate back to the landing page', () => {
        cy.get(':nth-child(1) > .heart-container > img')
           .first().click()
           .get('.songs-container > :nth-child(1)')

           .get('.playlist-button-container')
           .click()

           .get('.home-button-container')
           .click()
    })

})