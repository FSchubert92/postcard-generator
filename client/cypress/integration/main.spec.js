describe('Riyoko', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Landingpage', () => {
    it('Shows the correct page if not logged in', () => {
      cy.get('div').should(
        'contain',
        'Welcome! Join RIYOKO, the revolutionary travel app right away!'
      )
      cy.get('[href="/register"]')
      cy.get('[href="/login"]')
    })

    it('Shows a full register page when clicked on the button', () => {
      cy.get('[href="/register"]').click()
      cy.get('form').should('contain', 'Register')
      cy.get('form > input').should('have.length', '2')
      cy.get('form > div > input').should('have.length', '2')
      cy.get('a')
        .should('contain', 'Login!')
        .click()
      cy.get('form').should('contain', 'Login')
    })
  })

  describe('Home', () => {
    beforeEach(() => {
      cy.get('[href="/login"]').click()
      cy.get('[type="text"]').type('flo')
      cy.get('[type="password"]').type('123456')
      cy.get('button').click()
      cy.location('pathname').should('contain', 'home')
    })

    it('has the correct header', () => {
      cy.get('header > h1').contains('RIYOKO')
    })

    it('has the correct title', () => {
      cy.title().should('include', 'RIYOKO')
    })

    it('renders a single card', () => {
      cy.get('[data-cy="single-card"]')
        .should('contain', '')
        .should('contain', '')
        .should('contain', 'How was today')
    })

    describe('Card', () => {
      it('has a working pagination', () => {
        cy.get('header > h1').contains('RIYOKO')
        cy.get('[data-cy="pagination"]').children('svg')
      })

      it('has button to create new card', () => {
        cy.get('a').should('contain', '+')
      })
    })

    describe('Form', () => {
      beforeEach(() => {
        cy.get('a')
          .contains('+')
          .click()
      })

      it('has the correct path', () => {
        cy.location('pathname').should('contain', 'create')
      })

      it('has all input fields', () => {
        cy.get('form').should('have.length', '1')
        cy.get('form > div> input').should('have.length', '6')
        cy.get('form > div> textarea').should('have.length', '1')
        cy.get('form > section > button').should('have.length', '1')
        cy.get('form > section> a').should('have.length', '1')
      })

      it('has a working back button', () => {
        cy.get('form')
          .contains('X')
          .click()
          .location('pathname')
          .should('contain', '/')
      })

      it('has working input fields', () => {
        const testValue = 'Test'
        cy.get('form > div > input[name="date"]')
          .type('2019-01-11')
          .should('have.value', '2019-01-11')
        cy.get('form > div > input[name="location"]')
          .type(testValue)
          .should('have.value', testValue)
        cy.get('form > div > input[name="food"]')
          .type(testValue)
          .should('have.value', testValue)
        cy.get('form > div > input[name="taste"]')
          .type(testValue)
          .should('have.value', testValue)
        cy.get('form > div > textarea[name="summary"]')
          .type(testValue)
          .should('have.value', testValue)
      })
    })
  })
})
