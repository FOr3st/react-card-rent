# Rent form recruitment task

Thank you for joining our recruitment process. Please try to not spend more than 2h-3h solving it. We are respectinjg your time.

This repository contains [Create React App](https://create-react-app.dev/). Use it as boilerplate for your solution. We don't want to waste your time with too much setup. There is also [Jest](https://jestjs.io/) and [Cypress](https://www.cypress.io/) for tests.

## The problem

We'd like you to build card rent form:

- Get a card data from our API. `GET /card/:cardId`
- render a form where user can provide new price
- send new price back to the API and show confirmation message (`POST /card/:cardId`, API expects `rentAmount` property)

New price should be at least 10% higher then previous one.

### API endpoints

API is located under [https:/.....]() url. There are two endpoints:

- `GET /card/:cardId` returns card data (we will provide cardId by email as we use different cards for different candidates)

- `POST /card/:cardId` "rents" the card, set new card price. It's expecting JSON object with `rentAmount` property (number). If there was no errors it will return JSON with updated `card` property. If there was an error it will return JSON with `error` proeprty.

## Expectations

We are not going to pay much atention to design.

Business logic, naming, separation of concerns and tests are much more important for us. You have Cypress nad Jest in your toolbox - use them at your discretion.

Typescript please.

## Delivery

Please, make a fork, do your changes and send us know link to the repo.

If you don't have enough time to finish work, please try at least describe your next actions and solutions.

We hope to see your solution in a week. If this time frame doesn't work for you let us know - we will figure something out.

Thanks, and good luck!
