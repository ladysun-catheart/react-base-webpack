context('Given a main page...', () => {

    beforeEach(function () {
        cy.visit('/')
    })

    it('There is a card', () => {
        cy.getTestId('card-header').should('exist')
    })

})