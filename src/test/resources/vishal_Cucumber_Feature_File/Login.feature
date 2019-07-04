#Author: sagarcs92@gmail.com
#Keywords Summary :Login validation
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#When: Some key actions
#Then: To observe outcomes or validation
#And,But: To enumerate more Given,When,Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample Feature Definition Template
@tag

Feature: Login Feature
  I want to use this template for my feature file for all possible Login Scenarios and validations

  
  Scenario: Login to Amazon site
    Given User has launched the site and is on home page
    When  User clicks on "Sign in" button
    Then  Login page should be displayed
    And   User enters the Email or Mobile number and click on "Continue" button
    And   User enters the password and click on "Login" button
    Then  User should be logged in successfully and Homepage should be launched with Hello "username".

  
