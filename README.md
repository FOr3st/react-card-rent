# Rent card form

The task is to build a card rental form:

- Get the card data from our API. `GET /card/:cardId`
- Render a form where the user can provide a new price
- Send the new price back to the API and show a confirmation message (`POST /card/:cardId`, the API expects the `rentAmount` property)

The new price should be at least 10% higher then previous one.

*NOTE* Parameter cardId is a constant and equals to "f8b5535c-5abf-4206-a9fb-57c301bb8349"

### API endpoints

The API is located under [https://awesome-dev-task-api.fly.dev/](https://awesome-dev-task-api.fly.dev/) url. There are two endpoints:

- `GET /card/:cardId` returns card data (we will provide the cardId by email as we will use different cards for different candidates)

- `POST /card/:cardId` "rents" the card, setting a new card price. It's expecting a JSON object with the `rentAmount` property (number). If there were no errors it will return a JSON with the updated `card` property. If there was an error it will return a JSON with the `error` property.
