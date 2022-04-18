# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

1.times do
  bot_user = User.create(name: "bot-1", username: "sarthakarora1208_bot", telegram_id: TELEGRAM_ID, token: TOKEN, is_bot: true)
  # user1 = User.create(name: "User 2", username: "username", telegram_id: "5390907200", token: "5265119806:AAFJNwrsPvdG8_g_-xXtUGlTOvg5r00Biho", is_bot: false)
  #bot_user = User.find_by(telegram_id: "5390907199")
  #chatroom = Chatroom.create(name: "5390907200")
  #user1.chatrooms << chatroom
  #user1.save
  #bot_user.chatrooms << chatroom
  #bot_user.save
end
