# Telegram Chatting Application


## Demo

[https://youtu.be/f0x1tXyJoNc](https://youtu.be/f0x1tXyJoNc)

## Architecture Diagram

![telegram-bot](https://user-images.githubusercontent.com/42542489/163867943-42b4912e-5b2c-483d-8eaf-59aa59e1d9a7.png)

### Tech Stack

- React
- Typescript
- Apollo
- GraphQL
- Ruby
- Rails
- Redis
- Telegram Bot
- SQLite3
- FactoryBot
- RSpec

## React

The frontend is built using React and Typescript. We use Apollo to interact with GraphQL

## Rails

- The backend is powered by rails, sqlite & redis.
- Redis + Actioncable for websockets
- RSpec + FactoryBot for testing
- telegram/bot gem for interacting with the bot

## Database Schema

- User
  - name: string
  - username: string
  - telegram_id: string
  - token: string
  - is_bot: boolean
- Chatroom
  - name: string
- Message
  - text: string
  - is_media: boolean
  - media_type: string
  - user_id: integer
  - chatroom_id: integer

## GraphQL, Apollo

### Mutations

![code](https://user-images.githubusercontent.com/42542489/163871793-d95acdcb-4b8e-4a09-914a-184d1c3aedd2.png)

### Queries

Getting Chatrooms For User

![code1](https://user-images.githubusercontent.com/42542489/163872188-d9b2553c-a3d7-4f01-9cd5-b457f95fe035.png)

Getting Messages for User

![code2](https://user-images.githubusercontent.com/42542489/163872496-cb903676-2f3e-4e4c-b32e-46182dde3ec1.png)

### Subscriptions

![code3](https://user-images.githubusercontent.com/42542489/163872798-e6b2ee04-6694-437a-a245-b9b0c97592b4.png)

## Telegram

The [bot.rb](./chatting-api/app/telegram/bot.rb) file does the following

- Create new user for new chat
- Create new chatroom for new chat
- Add user messages to database

## Testing

I wrote a test for the getMessagesForChatroom Query
![Screenshot 2022-04-19 at 12 50 11 AM](https://user-images.githubusercontent.com/42542489/163871967-426882ef-ca40-4326-adc1-e251251930b8.png)

## Notifications

Whenever a bot gets a new message, a notification pops up.

<img width="217" alt="Screenshot 2022-04-18 at 8 11 56 PM" src="https://user-images.githubusercontent.com/42542489/163873634-75ef240b-ff81-497b-a5cd-cc8a0ece71da.png">

## Installation

### Chatting Api

To get the rails app running locally follow the instructions at [chatting-api/README.md](../chatting-api/README.md)

### Chatting Frontend

To get the React Frontend running locally follow the instructions at [chatting-frontend/README.md](../chatting-frontend/README.md)

## Authors

- [@sarthakarora1208](https://www.github.com/sarthakarora1208)

## License

[MIT](https://choosealicense.com/licenses/mit/)
