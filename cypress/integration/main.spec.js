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
        .should('contain', '')
        .should('contain', '')
        .should('contain', 'How was today')
        .should('contain', 'Summary of the day')
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
      cy.get('form > div> input').should('have.length', '5')
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
    // it('Uploads an Image', () => {
    //   cy.fixture('images/logo.png').as('logo')
    //   cy.get('input[type=file]').then($input => {
    //     Cypress.Blob.base64StringToBlob(this.logo, 'image/png').then(blob => {
    //       // pass the blob to the fileupload jQuery plugin
    //       // used in your application's code
    //       // which initiates a programmatic upload
    //       $input.fileupload('add', { files: blob })
    //     })
    //   })
    // })
  })
})
