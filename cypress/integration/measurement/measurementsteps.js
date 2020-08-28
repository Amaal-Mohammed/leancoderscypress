import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Helpers from '../../util/helpers'
let cookiee;
let measurementnum;
beforeEach(() => {

  cy.login("Admin", "admin")

})



Given(/^Go to Create measurement page$/, () => {
  cy.get('ul').last().click({ force: true })

 
});
When(/^User insert all fields and save$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })

  cy.wait(2000)
  measurementnum=Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt',''+measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')

  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").type("10.10.2020")
  cy.xpath("//p-inputmask[@id='idExecutionTo']/input").type("10.10.2020")

  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("38140013")
  cy.xpath("//p-autocomplete[@id='release-order']//input").type("order1")

  cy.xpath("//p-inputmask[@id='idAccountingMonth']/input").type("10.2020")
  cy.wait(1000)
});

Then(/^Data is saved and save message is displayed$/, () => {
  cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()

  cy.contains("Measurement created").should('be.visible')
})






Given(/^Go to Create measurement page$/, () => {
  cy.get('ul').last().click({ force: true })


});
When(/^User insert fields then click reload$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })

  cy.wait(2000)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//app-new-measurement[1]/p-confirmdialog[1]/div[1]/div[3]/button[1]/span[2]").click()
cy.xpath("//p-dropdown[@id='measurementEditType']").scrollIntoView()
});

Then(/^Measurement is loaded$/, () => {
  let str= 'Measurement '+ "'"+ measurementnum +"'"+ ' was loaded'
  cy.contains(str).should('be.visible')

  cy.get('#m-number').should('have.value', measurementnum.toString())
 

  
})



Given(/^Go to Create measurement page$/, () => {
  cy.get('ul').last().click({ force: true })


});
Then(/^All Fields are visible$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })

  cy.wait(2000)
  cy.xpath("//input[@id='m-number']").should('be.visible')

  cy.xpath("//input[@id='construction-site']").should('be.visible')
  cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").should('be.visible')
  cy.xpath("//p-inputmask[@id='idExecutionTo']/input").should('be.visible')
  cy.xpath("//p-inputmask[@id='idAccountingMonth']/input").should('be.visible')


  cy.wait(5000)

});






