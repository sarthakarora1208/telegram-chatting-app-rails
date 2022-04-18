class MessageRepository
  def create_message_in_chatroom(text:, is_media:, media_type:, user_id:, chatroom_id:)
    Message.create!(text: text, is_media: is_media, media_type: media_type, user_id: user_id, chatroom_id: chatroom_id).tap do |message|
      ApiSchema.subscriptions.trigger(:message_added, {}, { message: message })
    end
  end
end
