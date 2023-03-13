describe('AddUser component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('adds a new user and displays it in the list', () => {
    const username = 'John'
    const age = '30'

    cy.get('#username').type(username)
    cy.get('#age').type(age)

    cy.get('form').submit()

    cy.get('.error').should('not.exist')
    cy.get('#username').should('have.value', '')
    cy.get('#age').should('have.value', '')

    cy.get('.user-item').should('have.length', 1)
    cy.get('.user-item__name').should('contain', username)
    cy.get('.user-item__age').should('contain', age)
  })

  it('displays an error message when adding a user with an invalid age', () => {
    const username = 'John'
    const age = '0'

    cy.get('#username').type(username)
    cy.get('#age').type(age)

    cy.get('form').submit()

    cy.get('.error').should('exist')
    cy.get('.error__title').should('contain', 'Invalid age')
    cy.get('.error__message').should('contain', 'Please enter a valid age (> 0)')
  })

  it('displays an error message when adding a user with empty fields', () => {
    const username = ''
    const age = ''

    cy.get('#username').type(username)
    cy.get('#age').type(age)

    cy.get('form').submit()

    cy.get('.error').should('exist')
    cy.get('.error__title').should('contain', 'Invalid input')
    cy.get('.error__message').should('contain', 'Please enter a valid name or age (non-empty values)')
  })
})
