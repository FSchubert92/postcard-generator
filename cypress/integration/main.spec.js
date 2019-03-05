describe('Riyoko', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Home', () => {
    it('has the correct header', () => {
      cy.get('header > h1').contains('RIYOKO')
    })

    it('has the correct title', () => {
      cy.title().should('include', 'RIYOKO')
    })

    it('renders a single card', () => {
      cy.get('[data-cy="single-card"]')
        .should('contain', 'August 24, 2019')
        .should('contain', 'New York City')
        .should('contain', 'How was today')
        .should('contain', 'Summary of the day')
    })
  })
})
