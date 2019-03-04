describe('Learning App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('Home', () => {
    it('has the correct title', () => {
      cy.title().should('include', 'Learning App')
    })

    it('shows the correct header text', () => {
      cy.get('[data-cy="header-title"]').should('contain', 'all')
    })
  })

  describe('Create', () => {
    beforeEach(() => {
      cy.get('nav > a')
        .contains('Create')
        .click()
    })

    it('has the right path', () => {
      cy.location('pathname').should('include', 'create')
    })

    it('has a complete form', () => {
      cy.get('form').should('have.length', 1)
      cy.get('form > input').should('have.length', 2)
      cy.get('form > textarea').should('have.length', 1)
      cy.get('form > button').should('have.length', 1)
    })

    it('shows a card preview with title', () => {
      const testValue = 'This is the title'
      cy.get('section')
        .contains(testValue)
        .should('have.length', 0)
      cy.get('form > [name="title"]').type(testValue)
      cy.get('section')
        .contains(testValue)
        .should('have.length', 1)
    })

    it('shows a card preview with content', () => {
      const testValue = 'This is the content'
      cy.get('section')
        .contains(testValue)
        .should('have.length', 0)
      cy.get('form > [name="content"]').type(testValue)
      cy.get('section')
        .contains(testValue)
        .should('have.length', 1)
    })

    it('creates tags from tag input', () => {
      const testValue = 'foo, bar, baz'
      cy.get('[data-cy="preview-container"]')
        .children()
        .should('have.length', 0)
      cy.get('form > [name="tags"]').type(testValue)
      cy.get('[data-cy="preview-container"] ul > li').should('have.length', 3)
      cy.get('[data-cy="preview-container"] ul > li')
        .first()
        .should('contain', 'foo')
    })

    it('clears all inputs after submit', () => {
      cy.get('form > [name="title"]').type('foo')
      cy.get('form > [name="content"]').type('bar')
      cy.get('form > [name="tags"]').type('baz')
      cy.get('form > button').click()

      cy.get('form > [name="title"]').should('have.value', '')
      cy.get('form > [name="content"]').should('have.value', '')
      cy.get('form > [name="tags"]').should('have.value', '')
    })
  })
})
