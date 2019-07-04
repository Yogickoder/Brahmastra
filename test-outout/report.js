$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/DELL/workspace/Brahmastra/src/test/resources/vishal_Cucumber_Feature_File/Login.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: sagarcs92@gmail.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :Login validation"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 21,
  "name": "Login Feature",
  "description": "I want to use this template for my feature file for all possible Login Scenarios and validations",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "line": 25,
  "name": "Login to Amazon site",
  "description": "",
  "id": "login-feature;login-to-amazon-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User has launched the site and is on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "User clicks on \"Sign in\" button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Login page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "User enters the Email or Mobile number and click on \"Continue\" button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "User enters the password and click on \"Login\" button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully and Homepage should be launched with Hello \"username\".",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_step_definition.user_has_launched_the_site_and_is_on_home_page()"
});
formatter.result({
  "duration": 380524616,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 16
    }
  ],
  "location": "Login_step_definition.user_clicks_on_button(String)"
});
formatter.result({
  "duration": 4127410,
  "status": "passed"
});
formatter.match({
  "location": "Login_step_definition.login_page_should_be_displayed()"
});
formatter.result({
  "duration": 43854,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 53
    }
  ],
  "location": "Login_step_definition.user_enters_the_Email_or_Mobile_number_and_click_on_button(String)"
});
formatter.result({
  "duration": 121299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 39
    }
  ],
  "location": "Login_step_definition.user_enters_the_password_and_click_on_button(String)"
});
formatter.result({
  "duration": 105902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 82
    }
  ],
  "location": "Login_step_definition.user_should_be_logged_in_successfully_and_Homepage_should_be_launched_with_Hello(String)"
});
formatter.result({
  "duration": 91441,
  "status": "passed"
});
});