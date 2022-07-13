# Web Frontend Application

This repository contains the frontend application written in React for web project.

- Multi Tenant System

## Built with Lerna

<img src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png" width="500" height="500" />

## Steps to run

1.  Run `yarn install` to install lerna
2.  Run `yarn bootstrap` to allow `lerna` to bootstrap the project with the required dependencies
3.  Run `web` frontend application - `yarn start`
4.  Build scss and react common components - `yarn build`
5.  Run `yarn start`

App will be running on <strong>http://localhost:3000</strong>

## Tracking dependency versions

Add updates to package versions here:

- example: updated React from 16 to 18
- example: downgraded React router from v6 to v5

### TODOS

- TODO Add testing framework - `jest` and `react testing library`.
- TODO Add e2e testing with `Cypress`.
- TODO Break down project into each module and add lazy loading on the modules - IN PROGRESS
- TODO Add redux state management library
- TODO Code splitting for redux store [redux-dynamic-modules](https://redux-dynamic-modules.js.org)
- TODO Add lazy loading for components with [react-loadable](https://www.npmjs.com/package/react-loadable)
- TODO Add role based authorization on routes with react router
- TODO Generate a global object of all routes with proper paths in the web app
- TODO Setup eslint for project
