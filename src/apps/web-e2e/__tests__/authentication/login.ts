import {
  Given,
  Then,
} from 'cypress-cucumber-preprocessor/steps';

Given('I visit login page', () => {
  cy.visit('/auth/login');
});

Then(
  'I type email {string} and password {string}',
  (email, password) => {
    cy.get('input[name="email"]').type(email);

    cy.get('button[type="submit"]').click();

    cy.contains('email must be a valid email');
  },
);
