Feature: measurement 
    
    Scenario: verify User can create measurement
    Given  User login to the application
    Given Go to Create measurement page 
    When User insert all fields and save
    Then Data is saved and save message is displayed