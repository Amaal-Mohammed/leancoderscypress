import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given(/^User login to the application$/, () => {
    cy.visit('/')
    cy.get('input[id="username"]').type("Admin")
    cy.get('input[id="password"]').type("admin")
  
    cy.get('.ui-button-text').click()
    cy.wait(1000)
});

Given(/^Go to Create measurement page$/, () => {
    cy.get('ul').last().click({force:true})

    cy.contains("Neues Aufmaß").click({force:true})
});
When(/^User insert all fields and save$/, () => {
    
    cy.xpath("//input[@id='m-number']").type("am45")
    cy.xpath("//p-dropdown[@id='measurementEditType']").click()
    cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
    cy.xpath("//p-dropdown[@id='m-type']").click()
    cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
 
    cy.xpath("//input[@id='construction-site']").type("25")
    cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").type("10.01.2020")
    cy.xpath("//p-inputmask[@id='idExecutionTo']/input").type("10.10.2020")
    cy.xpath("//p-inputmask[@id='idAccountingMonth']/input").type("10.2020")

  cy.xpath("//input[@placeholder='00/000/000']").click({force:true})
  cy.xpath("//input[@placeholder='00/000/000']").type("38140013")
  cy.xpath("//p-autocomplete[@id='release-order']//input").type("order1")
  cy.wait(1000)
});

Then(/^Data is saved and save message is displayed$/, () => {
    cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()
     
    cy.contains("Aufmaß Erstellt").should('be.visible')  
})