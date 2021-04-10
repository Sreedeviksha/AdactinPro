$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/adactin/feature/Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Testing of Booking functionality in Adactin Application",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Verify the User is able to login the application",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"\u003cusername\u003e\" in Username field",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;;1"
    },
    {
      "cells": [
        "AAAA",
        "1111"
      ],
      "line": 17,
      "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;;2"
    },
    {
      "cells": [
        "BBBB",
        "2222"
      ],
      "line": 18,
      "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;;3"
    },
    {
      "cells": [
        "SreeDeviRaman",
        "Sree@123"
      ],
      "line": 19,
      "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 737300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User log into the application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 100390200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_log_into_the_application()"
});
formatter.result({
  "duration": 75600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify the User is able to login the application",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"AAAA\" in Username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"1111\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 2096077600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AAAA",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_Username_field(String)"
});
formatter.result({
  "duration": 164094600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1111",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_password_field(String)"
});
formatter.result({
  "duration": 99013300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_Login_Button()"
});
formatter.result({
  "duration": 605661600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 48700,
  "status": "passed"
});
formatter.after({
  "duration": 239700,
  "status": "passed"
});
formatter.before({
  "duration": 95200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User log into the application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 157900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_log_into_the_application()"
});
formatter.result({
  "duration": 222600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify the User is able to login the application",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"BBBB\" in Username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"2222\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 365574800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BBBB",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_Username_field(String)"
});
formatter.result({
  "duration": 100701400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2222",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_password_field(String)"
});
formatter.result({
  "duration": 75541200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_Login_Button()"
});
formatter.result({
  "duration": 425866800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 41400,
  "status": "passed"
});
formatter.after({
  "duration": 211800,
  "status": "passed"
});
formatter.before({
  "duration": 280500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User launch the adactin application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User log into the application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_launch_the_adactin_application()"
});
formatter.result({
  "duration": 364300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_log_into_the_application()"
});
formatter.result({
  "duration": 116200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the User is able to login the application",
  "description": "",
  "id": "testing-of-booking-functionality-in-adactin-application;verify-the-user-is-able-to-login-the-application;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User launches the application",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters the valid \"SreeDeviRaman\" in Username field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User enters the valid \"Sree@123\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User clicks the Login Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User verify the Homepage navigates to the Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_launches_the_application()"
});
formatter.result({
  "duration": 346141400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SreeDeviRaman",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_Username_field(String)"
});
formatter.result({
  "duration": 95149800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sree@123",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_the_valid_in_password_field(String)"
});
formatter.result({
  "duration": 85274400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_the_Login_Button()"
});
formatter.result({
  "duration": 2233656900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_verify_the_Homepage_navigates_to_the_Search_Hotel_Page()"
});
formatter.result({
  "duration": 12200,
  "status": "passed"
});
formatter.after({
  "duration": 40300,
  "status": "passed"
});
});