Feature: Authentication
    Scenario: I can login
        Given I visit login page
        Then I type email "user1@admin" and password "admin"