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

> Note: This files create a new user and chatroom if it is not found and listens to new messages!
