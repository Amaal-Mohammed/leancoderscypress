Feature: measurement 

   
    Scenario: verify User can create measurement
    Given User is logged on
    Given Go to Create measurement page 
    When User insert all fields and save
    Then Data is saved and save message is displayed



    Scenario: verify Meausurement is loaded when inserting Measure Number
    Given User is logged on
    Given  Go to Create measurement page 
    When User insert fields then click reload
    Then Measurement is loaded




    Scenario: verify page is loaded and all fields are displayed
    Given User is logged on
    Given Go to Create measurement page 
    Then All Fields are visible

    
    Scenario: verify user can update  existing Measurement number 
    Given User is logged on
    Given Go to Create measurement page 
    When user updates an existing Measure
    Then Measurement is updated
     

    Scenario: Verify History page is displayed correctly
    Given User is logged on
     Given Go to Create measurement page 
    Given user insert Measure Number that already existed in the application
    When User click on History button
    Then History button is displayed

    Scenario: Verify Quotation position button is not enabled if Qutation is not inserted
    Given User is logged on
    Given Go to Create measurement page 
    When user does not insert Quotation
    Then Quotation position button is disabled

    Scenario: Verify Quotation position button is  enabled if Qutation is inserted
    Given User is logged on
    Given Go to Create measurement page 
    When user insert Quotation
    Then Quotation position button is enabled

   Scenario: Verify Quotation position screen is displayed correctly
   Given User is logged on
    Given Go to Create measurement page 
    When user insert Quotation and click on Quotation position button
    Then Quotation position screen is displayed correctly
#
  

##
Scenario: Verify Measurement Edit Type is Mandatory (telecommunication, underground)
    Given User is logged on
    Given Go to Create measurement page 
    When user does not insert Measurement Edit Type
    Then Measurement creation is not possible

Scenario: Verify Measurement Type is Mandatory (partial)
    Given User is logged on
    Given Go to Create measurement page 
    When user does not insert Measurement Type
    Then Measurement creation is not possible
Scenario: Verify Assigned Employee is Mandatory 
    Given User is logged on
    Given Go to Create measurement page 
    When user does not insert Assigned Employee
    Then Measurement creation is not possible

Scenario: Verify Loaded Quotation contains Project Execution Period in Future 
     Given User is logged on
    Given Go to Create measurement page 
    When user insert Quotation contains Project Execution Period in Future
    Then Measurement creation is not possible


 Scenario: Verify Loaded Quotation contains Commission Number mandatory - but no commission
  Given User is logged on
    Given Go to Create measurement page 
    When user insert Quotation contains Commission Number mandatory
    Then Measurement creation is not possible

 Scenario: Verify Loaded Quotation contains Flag Order End -
    Given User is logged on
    Given Go to Create measurement page 
    When user insert Quotation contains Flag Order End
    Then Measurement creation is not possible

 Scenario: Verify Assigned Employee can be found via Employee Name 
    Given User is logged on
    Given Go to Create measurement page 
    When user insert Employee Name
    Then Employee is found

Scenario: Verify Assigned Employee can be found via Employee ID
    Given User is logged on
    Given Go to Create measurement page 
    When user insert Employee ID
    Then Employee is found

 Scenario: Verify Execution From/To date formate is DD.MM.YYYY
    Given User is logged on
    Given Go to Create measurement page 
    When Execution From or To date formate is DD.MM.YYYY

Scenario: Double Click on Measurement Position duplicates Row and appends it to the End  
Given User is logged on
Given Go to Create measurement page 
When User add a measurement Row
When  User Double click on Row
Then row is duplicated