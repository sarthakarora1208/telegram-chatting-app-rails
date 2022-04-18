require "telegram/bot"

module Mutations
  class CreateMessage < GraphQL::Schema::Resolver
    description "Create message"
    token = ""
    argument :text, String, required: true
    argument :is_media, Boolean, required: true
    argument :media_type, String, required: true
    argument :user_id, Integer, required: true
    argument :chatroom_id, Integer, required: true

    type Types::MessageType, null: true

    #field :message, Types::MessageType, null: true
    #field :errors, [String], null: false

    def resolve(text:, is_media:, media_type:, user_id:, chatroom_id:)
      repository = MessageRepository.new
      Telegram::Bot::Client.run(TOKEN) do |bot|
        chatroom = Chatroom.find(chatroom_id)
        p chatroom
        bot.api.send_message(chat_id: chatroom.name, text: text)
      end
      message = repository.create_message_in_chatroom(text: text, is_media: is_media, media_type: media_type, user_id: user_id, chatroom_id: chatroom_id)
      #return { message: message }
      message
    end
  end
end
