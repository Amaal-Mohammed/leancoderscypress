Feature: measurement 
    
    Scenario: verify User can create measurement
    Given Go to Create measurement page 
    When User insert all fields and save
    Then Data is saved and save message is displayed



    Scenario: verify Meausurement is loaded when inserting Measure Number
    Given  Go to Create measurement page 
    When User insert fields then click reload
    Then Measurement is loaded



    Scenario: verify page is loaded and all fields are displayed
    Given Go to Create measurement page 
    Then All Fields are visible

    
    
