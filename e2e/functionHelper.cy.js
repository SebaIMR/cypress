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

export function crearSolicitud(){
  cy.get('[href="#/solicitud_form"]',{ timeout: 10000 })
    .click();
  cy.contains('Sin detalle de valores').click();
  //Numero de solicitud
  cy.get('.gap-x-4 > :nth-child(1) > :nth-child(1) > .flex-col > [style="border-color: rgb(255, 51, 51);"] > .w-full')
    .click()
    .type('SolicitudDeAutomatizacion');
  //Contrato
  cy.get(':nth-child(1) > :nth-child(2) > .flex-row > .flex-col > .h-6').select('Contrato normal');
  //informacion de contacto
  cy.get('.gap-x-4 > :nth-child(2) > .flex-col > .mt-1 > .flex-row > .w-full')
    .click()
    .type('+56950441482');
  //Hora de inicio
  cy.get('.react-datepicker__input-container > .w-full')
    .click();
  cy.get('.react-datepicker__time-list > :nth-child(30)').click();
  //Carga
  cy.get('.css-1xc3v61-indicatorContainer')
    .contains('SEMILLAS')
    
  //Descarga
}