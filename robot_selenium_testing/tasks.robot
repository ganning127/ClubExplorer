*** Settings ***
Documentation       Robot frontend test cases for different attributes of the 
...                 GT Club Explorer site to make sure every feature is easily 
...                 operable without issue
Library           SeleniumLibrary

*** Variables ***
${LOGIN URL}      http://localhost:3000
${BROWSER}        Chrome

*** Test Cases ***
Valid Login
    
    
    [Teardown]    Close Browser


*** Keywords ***
Sign In
    Open Browser
    New Page    http://rpachallenge.com/
    RPA.HTTP.Download
    ...    http://rpachallenge.com/assets/downloadFiles/challenge.xlsx
    ...    overwrite=True
    Click    button

Sign Up
    ${people}=    Get the list of people from the Excel file
    FOR    ${person}    IN    @{people}
        Fill and submit the form    ${person}
    END

Create 
    Open Workbook    challenge.xlsx
    ${table}=    Read Worksheet As Table    header=True
    Close Workbook
    RETURN    ${table}

Fill and submit the form
    [Arguments]    ${person}
    Fill Text    //input[@ng-reflect-name="labelFirstName"]    ${person}[First Name]
    Fill Text    //input[@ng-reflect-name="labelLastName"]    ${person}[Last Name]
    Fill Text    //input[@ng-reflect-name="labelCompanyName"]    ${person}[Company Name]
    Fill Text    //input[@ng-reflect-name="labelRole"]    ${person}[Role in Company]
    Fill Text    //input[@ng-reflect-name="labelAddress"]    ${person}[Address]
    Fill Text    //input[@ng-reflect-name="labelEmail"]    ${person}[Email]
    Fill Text    //input[@ng-reflect-name="labelPhone"]    ${person}[Phone Number]
    Click    input[type=submit]

Collect the results
    Take Screenshot    css:div.congratulations
    Close Browser
