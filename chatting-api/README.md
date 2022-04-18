## Ruby on Rails Backend Installation Instructions

## Requirements

- [Redis](#Redis)
- [Ruby](#Ruby)
- [Rails](#Rails)

#### Redis

Make sure redis is installed and running on port 6379. Run `redis-server` to check

Alternatively, run it using a docker image

```bash
    docker pull redislabs/redismod
    docker run -p 6379:6379 redislabs/redismod
```

#### Ruby

Ruby is an interpreted object-oriented programming language often used for web development. It also offers many scripting features to process plain text and serialized files, or manage system tasks. It is simple, straightforward, and extensible.

For a complete list of ways to install Ruby, including using third-party tools
like rvm, see:

https://www.ruby-lang.org/en/downloads/

#### Rails

Rails is a web-application framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.

```bash
  gem install rails
```

## Getting Started

Run the following command to install the gems:

```bash
bundle install
```

Replace the bot token in [constants.rb](./config/initializers/constants.rb)

```
TOKEN = "5265119806:AAFJNwrsPvdG8_g_-xXtUGlTOvg5r00Biho"
TELEGRAM_ID = "5265119806"
```

Run the following command to create & migrate database:

```bash
bundle exec bin/rails db:create db:migrate
```

Seed the database to create the bot user:

```bash
rails db:seed
```

Run the app in a local server:

```bash
rails s
```

Open a new terminal to run the [bot.rb](./app/telegram/bot.rb) file:

> Note: This file will be listening for messages for all the users. (I wanted a seperated process to listen to all the messages)

```bash
ruby app/telegram/bot.rb
```

> Note: This files creates a new user and chatroom if it is not found!

testing
rails generate rspec:install
user.chatrooms << chatroom
user.save
bot_user = create(:user, is_bot: true)
bot_user.chatrooms << chatroom
bot_user.save
post "/graphql", params: { query: query(user.id, chatroom.id) }
json = JSON.parse(response.body)
data = json["data"]["createmessage"]
expect(data["text"]).to eq("text")
expect(data["isMedia"]).to eq(false)
expect(data["mediaType"]).to eq("")
expect(data["user"]["id"]).to eq(user.id)
expect(data["chatroom"]["id"]).to eq(chatroom.id)
expect(data["user"]["name"]).to eq(user.name)
expect(data["chatroom"]["name"]).to eq(chatroom.name)
expect(data["user"]["username"]).to eq(user.username)
expect(data["chatroom"]["username"]).to eq(chatroom.username)
expect(data["user"]["telegramid"]).to eq(user.telegram_id)
expect(data["chatroom"]["telegramid"]).to eq(chatroom.telegram_id) chatroom = create(:chatroom)
expect do
post "/graphql", params: {}
end

require "rails_helper"

module Mutations
module Messages
RSpec.describe CreateMessage, type: :request do
describe ".resolve" do
it "creates a new message" do
user = create(:user)
chatroom = create(:chatroom)
user.chatrooms << chatroom
user.save
bot_user = create(:user, is_bot: true)
bot_user.chatrooms << chatroom
bot_user.save
post "/graphql", params: { query: query(user.id, chatroom.id) }
json = JSON.parse(response.body)
data = json["data"]["createmessage"]
expect(data["text"]).to eq("text")
end
end

      def query(user_id, chatroom_id)
        <<~GQL
          mutation {
            createMessage(
              text: "text",
              isMedia: false,
              mediaType: "",
              userId: #{user_id},
          chatroomId: #{chatroom_id}
            ) {
              text
              isMedia
              mediaType
              userId
              chatroomId
            }
          }
        GQL
      end
    end

end
end
