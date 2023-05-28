# Lab 8 - Starter

1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.
   
   Answer: Within a Github action that runs whenever code is pushed to ensure that very time a new feature/change is made, it is integrated smoothly with the existing project and that it is production ready.

2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)

    No, end-to-end testing is to automate test cases that involve emulating user actions from start to finish rather than individual functions themselves (we do that in unit testing)

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    No, because we cannot use unit tests to test the message feature as the message feature might be built on a bunch of individual features, whose inter-component interactivity cannot be tested using unit tests.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    Yes, because we are testing the individual functionality of a function and testing whether it can accept more than 80 characters