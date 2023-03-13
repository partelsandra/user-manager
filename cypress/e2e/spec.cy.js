describe('AddUser component', () => {
  beforeEach(() => {
    cy.visit('/') 
  })

  it('displays an error message if username or age is empty', () => {
    cy.get('#username').type('John')
    cy.get('#age').type('')

    cy.get('form').submit()

    cy.get('.error').should('exist')
    cy.get('.error__title').should('contain', 'Invalid input')
    cy.get('.error__message').should('contain', 'Please enter a valid name or age (non-empty values)')
  })

  it('displays an error message if age is less than 1', () => {
    cy.get('#username').type('John')
    cy.get('#age').type('0')

    cy.get('form').submit()

    cy.get('.error').should('exist')
    cy.get('.error__title').should('contain', 'Invalid age')
    cy.get('.error__message').should('contain', 'Please enter a valid age (> 0)')
  })

  it('adds a user when valid input is submitted', () => {
    cy.get('#username').type('John')
    cy.get('#age').type('30')

    cy.get('form').submit()

    cy.get('.error').should('not.exist')
    cy.get('#username').should('have.value', '')
    cy.get('#age').should('have.value', '')

  })
})
