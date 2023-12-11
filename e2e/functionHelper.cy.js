export function login(email, password) {
  
    cy.visit('https://test.subcargo.com/#/solicitudes');
  
    cy.get('#email')
      .click()
      .type(email);
  
    cy.get('#password')
      .click()
      .type(password);
  
    cy.get(':nth-child(3) > .m-2').click();
  }