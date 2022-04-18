require File.expand_path("../../config/environment", __dir__)

require "pp"
require "telegram/bot"

# listening for user messages

Telegram::Bot::Client.run(TOKEN) do |bot|
  bot.listen do |message|
    pp message
    repository = MessageRepository.new
    chatbot = bot.api.get_me
    # chatbot will always be available after seeding
    bot_user = User.find_by(telegram_id: chatbot["result"]["id"])

    # if the user does not exists
    if !User.exists?(telegram_id: message.from.id)
      p "user does not exists"
      user = User.create(name: message.from.first_name, username: message.from.first_name, telegram_id: message.from.id, token: "", is_bot: false)
      chatroom = Chatroom.create(name: message.chat.id)
      user.chatrooms << chatroom
      user.save
      bot_user.chatrooms << chatroom
      bot_user.save
    else
      p "user exists"
      user = User.find_by(telegram_id: message.from.id)
      chatroom = Chatroom.includes(:users).where({ users: { id: user.id } })[0]
      p chatroom
    end

    # whenever a message is sent to the bot, create a new message in chatroom
    if message.text != nil
      message_result = repository.create_message_in_chatroom(text: message.text, is_media: false, user_id: user.id, chatroom_id: chatroom.id, media_type: "")
    elsif message.video != nil
      p message.video.file_id
      result = bot.api.get_file(file_id: message.video.file_id)
      file_url = "https://api.telegram.org/file/bot#{token}/#{result["result"]["file_path"]}"
      message_result = repository.create_message_in_chatroom(text: file_url, is_media: true, user_id: user.id, chatroom_id: chatroom.id, media_type: "video")
    elsif message.photo.length > 0
      p message.photo[0].file_id
      result = bot.api.get_file(file_id: message.photo[0].file_id)
      file_url = "https://api.telegram.org/file/bot#{token}/#{result["result"]["file_path"]}"
      message_result = repository.create_message_in_chatroom(text: file_url, is_media: true, user_id: user.id, chatroom_id: chatroom.id, media_type: "photo")
    elsif message.document != nil
      p message.document.file_id
      result = bot.api.get_file(file_id: message.document.file_id)
      file_url = "https://api.telegram.org/file/bot#{token}/#{result["result"]["file_path"]}"
      message_result = repository.create_message_in_chatroom(text: file_url, is_media: true, user_id: user.id, chatroom_id: chatroom.id, media_type: "document")
    end

    p message_result
    #bot_message = "I got your message!"
    #bot.api.send_message(chat_id: message.chat.id, text: )

    # get all chatrooms for bot
  end
end
