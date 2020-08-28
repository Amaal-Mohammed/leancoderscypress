// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add("login", (username, password) => { 

    cy.visit('/')
    cy.wait(5000)
    cy.get('input[id="username"]').type(username)
     cy.get('input[id="password"]').type(password)
     
      cy.get('.ui-button-text').click()
      
      cy
      .request('POST', 'http://qfm-api.staging.leancoders.de/api/v1/erp/auth/_signin/', {"username": "Admin", "password": "YWRtaW4="}).then((resp) => {
          window.localStorage.setItem('access_token', resp.body.access_token)
       
          cy.wait(5000)
  
        console.log(resp.body.access_token)
          })

 })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
