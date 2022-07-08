# Qryptek Frontend Application

This repository contains the frontend application written in React for Qryptek project.

- Multi Tenant System

## Built with Lerna

<img src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png" width="500" height="500" />

### Steps to run

1.  Run `yarn bootstrap` to allow `lerna` to bootstrap the project with the required dependencies
2.  Run `Qryptek` frontend application - `yarn start`
3.  Build scss and react common components - `yarn build` OR Build in watch mode `yarn dev`

![](https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png)

#### Tracking dependency versions

Add updates to package versions here:

- example: updated React from 16 to 18
- example: downgraded React router from v6 to v5

### TODO

- Add testing framework - `jest` and `react testing library`.
- Add e2e testing with `Cypress`.
- Break down project into each module and add lazy loading on the modules
- Add redux state management library
- Code splitting for redux store [redux-dynamic-modules](https://redux-dynamic-modules.js.org)
- Add lazy loading for components with [react-loadable](https://www.npmjs.com/package/react-loadable)
- Add role based authorization on routes with react router
