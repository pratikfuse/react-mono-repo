# Web Frontend Application

This repository contains the frontend application written in React for web project.

## Built with Lerna

<img src="https://user-images.githubusercontent.com/645641/79596653-38f81200-80e1-11ea-98cd-1c6a3bb5de51.png" width="500" height="500" />

## Features

- Lerna v5
- Create React App 3 (React v18)
- Storybook v6
- Yarn Workspaces
-

## Steps to run

1.  Run `yarn install` to install core packages
2.  Run `yarn bootstrap` to allow `lerna` to bootstrap the project with the required dependencies
3.  Run `web` frontend application - `yarn start`
4.  App will be running on <strong>http://localhost:3000</strong>
5.  Run `yarn mock-server` to start the mock node server at [src/apps/server](https://github.com/pratikfuse/react-mono-repo/tree/master/src/apps/server)

## How to build

Run `yarn build` to build scss,components, and web application

## Tracking dependency versions

Add updates to package versions here:

- example: updated React from 16 to 18
- example: downgraded React router from v6 to v5

### TODOS

- TODO Add testing framework - `jest` and `react testing library`. DONE
- TODO Add e2e testing with `Cypress`. IN PROGRESS
- TODO Break down project into each module and add lazy loading on the modules - DONE
- TODO Add redux state management library - DONE
- TODO Code splitting for redux store [redux-dynamic-modules](https://redux-dynamic-modules.js.org) - PENDING
- TODO Add lazy loading for components react lazy - DONE
- TODO Add role based authorization on routes with react router - DONE
- TODO Generate a global object of all routes with proper paths in the web app - ?
- TODO Setup eslint for project - DONE
