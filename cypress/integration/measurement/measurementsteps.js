import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import Helpers from '../../util/helpers'
let cookiee;
let measurementnum;


Given(/^User is logged on$/, () => {
  cy.login("Admin", "admin")


});

Given(/^Go to Create measurement page$/, () => {
  cy.get('ul').last().click({ force: true })

});

When(/^User insert all fields and save$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").type("10.10.2020")
  cy.xpath("//p-inputmask[@id='idExecutionTo']/input").type("10.10.2020")
  cy.xpath("//p-autocomplete[@id='release-order']//input").type("order1")
  cy.xpath("//p-inputmask[@id='idAccountingMonth']/input").type("10.2020")
  cy.wait(1000)
});

Then(/^Data is saved and save message is displayed$/, () => {
  cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()
  cy.xpath("//p-menubarsub[1]/ul[1]/li[6]//span[2]").should('be.visible')

})






Given(/^Go to Create measurement page$/, () => {
  cy.get('ul').last().click({ force: true })


});
When(/^User insert fields then click reload$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })

  cy.wait(2000)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()

  cy.xpath("//p-dropdown[@id='measurementEditType']").scrollIntoView()
});

Then(/^Measurement is loaded$/, () => {
  let str = 'Measurement ' + "'" + measurementnum + "'" + ' was loaded'
  //cy.contains(str).should('be.visible')

  cy.get('#m-number').should('have.value', measurementnum.toString())



})


Then(/^Measurement is updated$/, () => {
  cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()
  // cy.contains("Measurement updated").should('be.visible')

});


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


Given(/^Go to Create measurement page$/, () => {
  cy.get('ul').last().click({ force: true })

});

When(/^user updates an existing Measure$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()

  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')

  cy.xpath("//p-confirmdialog[1]/div[1]/div[3]/button[2]/span[2]").click()
  cy.xpath("//input[@id='construction-site']").type("50")


});

Then(/^Measurement is updated$/, () => {
  cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()
  // cy.contains("Measurement updated").should('be.visible')

});


Given(/^user insert Measure Number that already existed in the application$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  let me = "8585"
  cy.xpath("//input[@id='m-number']").type(me)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.wait(2000)


});



When(/^User click on History button$/, () => {
  cy.xpath("//p-menubarsub[1]/ul[1]/li[6]//span[2]").click()
});
Then(/^History button is displayed$/, () => {
  cy.xpath("//div[@class='ui-dialog-content ui-widget-content']").should('be.visible')

});


When(/^user does not insert Quotation$/, () => {

  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })

  cy.xpath("//input[@id='m-number']").type(Helpers.generateMeasurementNumber())
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')

  cy.xpath("//input[@id='construction-site']").type("25")

});

Then(/^Quotation position button is disabled$/, () => {
  cy.xpath("//span[@xpath=1]").should('not.be.enabled')

});


When(/^user insert Quotation$/, () => {

  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })

  cy.xpath("//input[@id='m-number']").type(Helpers.generateMeasurementNumber())
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.xpath("//p-dropdown[@id='m-type']").click()

  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")


});

Then(/^Quotation position button is enabled$/, () => {
  cy.get('.add-positions > .ui-button-text').scrollIntoView()
  cy.get('.add-positions > .ui-button-text').should('exist')

});


When(/^user insert Quotation and click on Quotation position button$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })

  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.wait(1000)
  cy.xpath("//div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").scrollIntoView()
  cy.xpath("//div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").type('{enter}')

});

Then(/^Quotation position screen is displayed correctly$/, () => {
  cy.xpath("//app-quotations-select-dialog[1]/div[1]/div[3]/button[1]/span[1]").should('be.visible')
  cy.xpath("//app-quotations-select-dialog[1]/div[1]/div[3]/button[2]/span[1]").should('be.visible')
  cy.xpath("//app-quotations-select-dialog[1]/div[1]/div[3]/button[3]/span[1]").should('be.visible')
  cy.xpath("//div[@class='ui-inputswitch ui-widget ui-inputswitch-checked']//span[@class='ui-inputswitch-slider']").should('be.visible')


});

When(/^user does not insert Measurement Edit Type$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").type("10.10.2020")
  cy.xpath("//p-inputmask[@id='idExecutionTo']/input").type("10.10.2020")
  cy.xpath("//p-autocomplete[@id='release-order']//input").type("order1")
  cy.xpath("//p-inputmask[@id='idAccountingMonth']/input").type("10.2020")
  cy.wait(1000)
});




Then(/^Measurement creation is not possible$/, () => {
  cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()
  cy.xpath("//p-menubarsub[1]/ul[1]/li[6]//span[2]").should('not.be.visible')

})

When(/^user does not insert Measurement Type$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").type("10.10.2020")
  cy.xpath("//p-inputmask[@id='idExecutionTo']/input").type("10.10.2020")
  cy.xpath("//p-autocomplete[@id='release-order']//input").type("order1")
  cy.xpath("//p-inputmask[@id='idAccountingMonth']/input").type("10.2020")
  cy.wait(1000)
});

When(/^user does not insert Assigned Employee$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").type("10.10.2020")
  cy.xpath("//p-inputmask[@id='idExecutionTo']/input").type("10.10.2020")
  cy.xpath("//p-autocomplete[@id='release-order']//input").type("order1")
  cy.xpath("//p-inputmask[@id='idAccountingMonth']/input").type("10.2020")
  cy.xpath("//span[@class='ui-float-label m-info']//i[@class='pi pi-times']").click()
  cy.wait(1000)
});

When(/^user insert Quotation contains Project Execution Period in Future$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("10100100")
  cy.wait(1000)
});

When(/^user insert Quotation contains Commission Number mandatory$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("40140003")


  cy.wait(1000)
});

When(/^user insert Quotation contains Flag Order End$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='measurementEditType']").click()
  cy.xpath("//p-dropdown[@id='measurementEditType']").type('{downarrow}{enter}')
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("11222333")
  cy.wait(1000)
});

When(/^user insert Employee Name$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)

  cy.xpath("//span[@class='ui-float-label m-info']//i[@class='pi pi-times']").click()
  cy.get('.ui-autocomplete > .ng-tns-c19-4').type("R")
  cy.wait(1000)
});
//user insert Employee ID

When(/^user insert Employee ID$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)

  cy.xpath("//span[@class='ui-float-label m-info']//i[@class='pi pi-times']").click()
  cy.get('.ui-autocomplete > .ng-tns-c19-4').type("100")
  cy.wait(1000)
});

Then(/^Employee is found$/, () => {
  cy.get('.ui-autocomplete-items').children().contains("Ralf")

})

When(/^Execution From or To date formate is DD.MM.YYYY$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  cy.xpath("//p-inputmask[@id='idExecutionFrom']/input").invoke('attr', 'placeholder').should('contain', 'DD.MM.YYYY')
  cy.xpath("//p-inputmask[@id='idExecutionTo']/input").invoke('attr', 'placeholder').should('contain', 'DD.MM.YYYY')

})
When(/^User add a measurement Row$/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.wait(1000)
  cy.xpath("//div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").scrollIntoView()
  cy.xpath("//div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").type('{enter}')
  cy.xpath("//div[@row-id='0']/div[2]").click()
  cy.xpath("//app-quotations-select-dialog[1]/div[1]/div[3]/button[1]/span[1]").click()
})



When(/^User Double click on Row/, () => {

  cy.xpath("//div[@row-index='0']/div[2]").dblclick()
  // cy.xpath("//div[@row-index='0']/div[2]").click()

})


Then(/^row is duplicated/, () => {
  cy.xpath("//div[@class='ag-center-cols-container']/div[@role='row']").should('have.length', 2)
  //  cy.get('.datatable').find('tr').should('have.length', 4)

})


When(/^User Click TAB/, () => {

  cy.xpath("//div[@aria-colindex='2']").click()
  //  cy.get('body').tab().tab()
  cy.get('.ag-cell-focus').should('have.border', '')

})


When(/^Insert amount, F1/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  measurementnum = Helpers.generateMeasurementNumber()
  cy.writeFile('measurenum.txt', '' + measurementnum)
  cy.xpath("//input[@id='m-number']").type(measurementnum)
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//input[@id='construction-site']").type("25")
  cy.xpath("//input[@placeholder='00/000/000']").click({ force: true })
  cy.xpath("//input[@placeholder='00/000/000']").type("39300001")
  cy.wait(1000)
  cy.xpath("//div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").scrollIntoView()
  cy.xpath("//div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]").type('{enter}')
  cy.xpath("//div[@row-id='0']/div[2]").click()
  cy.xpath("//app-quotations-select-dialog[1]/div[1]/div[3]/button[1]/span[1]").click()
  cy.xpath("//div[@aria-colindex='3']").type('1')
  cy.xpath("//div[@aria-colindex='4']").type('2')

})


Then(/^Product is calculated correctly/, () => {
  cy.xpath("//div[@aria-colindex='7']").type('2')
})


When(/^Open and is in state "invoiced"/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  cy.xpath("//input[@id='m-number']").type("530805")
  cy.xpath("//p-dropdown[@id='m-type']").click()
  cy.xpath("//p-dropdown[@id='m-type']").type('{downarrow}{enter}')
  cy.xpath("//p-confirmdialog[1]/div[1]/div[3]/button[2]/span[2]").click()
  cy.xpath("//input[@id='construction-site']").type("25")

  cy.wait(1000)


})
Then(/^measurement can not be saved/, () => {
  cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()
  cy.xpath("//p-menubarsub[1]/ul[1]/li[6]//span[2]").should('be.not.visible')
})


When(/^Open and is in state "Open"/, () => {
  cy.xpath("//app-main-menu[1]//app-main-sub-menu[4]//app-main-sub-menu[2]//span[1]").click({ force: true })
  cy.wait(2000)
  cy.xpath("//input[@id='m-number']").type("570735")
})
Then(/^measurement can be saved/, () => {
  cy.xpath("//a[@id='menu-item-save']/span[2]").scrollIntoView().click()
  cy.xpath("//p-menubarsub[1]/ul[1]/li[6]//span[2]").should('be.visible')
})

When(/^CTRLDEL deletes current Row/, () => {
  cy.xpath("//div[@row-index='0']/div[2]").type('{ctrl}{del}')
})

Then(/^row is deleted/, () => {
  cy.xpath("//div[@class='ag-center-cols-container']/div[@role='row']").should('have.length', 0)
})



When(/^User R click on row a menue will be displayed/, () => {
  cy.xpath("//div[@row-index='0']/div[2]").rightclick()
})

Then(/^Menu is displayed/, () => {
  cy.xpath("//div[@class='ag-menu-list-body']").should('exist')
})


     //  cy.get('ul[class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset"]>li').should('have.text', "Alex. P")
     // });

/*
Template.getExpandedCategory().invoke('text').then((text1) => {
  Template.getExpandedCategoryName().should('have.text', text1)
})
Template.getFirstCategory().should('have.css', 'box-shadow', 'none')
<ul class="ui-autocomplete-items ui-autocomplete-list ui-widget-content ui-widget ui-corner-all ui-helper-reset" role="listbox" xpath="1"><!----><li role="option" class="ng-tns-c19-11 ng-star-inserted ui-autocomplete-list-item ui-corner-all" id="" style=""><!----><!---->Ralf Heyde [100]</li><!----></ul>
*/