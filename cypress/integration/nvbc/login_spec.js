describe('stack overflow test', () => {
  it('should navigate and attempt to login to badminton club with invalid credentials', () => {
    cy.visit('http://localhost:3000');
    // cy.visit('https://apps.novabadmintonclub.com');
    cy.get(':nth-child(2) > .nav-link').click({force: true});
    console.log()
    cy.login('john.doe@gmail.com', 'secret')
    // assert invalid login error
    cy.get('.alert').should('contain', 'Invalid Email or password')
  })

  it('should navigate and attempt to login with valid credentials', () => {
    cy.visit('http://localhost:3000');
    // cy.visit('https://apps.novabadmintonclub.com');
    cy.get(':nth-child(2) > .nav-link').click({force: true});
    cy.login(Cypress.env().NVBC_ADMIN_LOG_NAME, 
      Cypress.env().NVBC_ADMIN_PASSWORD)
    // assert succesfull sign in 
    cy.get('.notice').should('contain', 'Signed in successfully')
    // assert logout message "Signed out successfully."
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('.notice').should('contain', 'Signed out successfully')
  })
});