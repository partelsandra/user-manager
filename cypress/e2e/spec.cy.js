describe('AddUser component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

    it('should add a new user when the form is submitted', () => {
      // Enter valid input values
      cy.get('#username').type('John');
      cy.get('#age').type('25');
  
      // Submit the form
      cy.get('form').submit();
  
      // Check that the new user is displayed in the list
      cy.contains('John - 25 years old').should('exist');
    });
  
    it('should display an error message when the form is submitted with invalid input', () => {
      // Enter invalid input values
      cy.get('#username').type('test');
      cy.get('#age').type('0');
  
      // Submit the form
      cy.get('form').submit();
  
      // Check that the error message is displayed
      cy.contains('Invalid age').should('exist');
      cy.contains('Please enter a valid age (> 0)').should('exist');
    });
  });
  