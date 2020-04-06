describe('stack overflow test', () => {
  it('should navigate and attempt to login to badminton club', () => {
      cy.visit('https://apps.novabadmintonclub.com');
      // cy.visit('https://apps.novabadmintonclub.com/users/sign_in');
      cy.wait(5000)
      cy.get(':nth-child(2) > .nav-link').click({force: true});
      cy.wait(5000)
      cy.get('#user_email').type('john.doe@gmail.com');
      cy.get('#user_password').type('xx');
      cy.get('.actions > input').click();
      // assert invalid login error
      cy.get('.alert').should('contain', 'Invalid Email or password')
  })
});