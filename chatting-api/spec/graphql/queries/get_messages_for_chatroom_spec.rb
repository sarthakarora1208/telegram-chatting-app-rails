require "rails_helper"

module Queries
  module Messages
    RSpec.describe GetMessagesForChatroom, type: :request do
      describe ".resolve" do
        it "returns all messages for a chatroom" do
          user = create(:user)
          p user
          chatroom = create(:chatroom)
          p chatroom
          user.chatrooms << chatroom
          user.save
          bot_user = create(:user, is_bot: true)
          bot_user.chatrooms << chatroom
          bot_user.save
          message = create(:message, user: user, chatroom: chatroom)
          p message
          post "/graphql", params: { query: query(chatroom.id) }
          json = JSON.parse(response.body)
          data = json["data"]["getMessagesForChatroom"]
          expect(data.length).to eq(1)
          expect(data[0]["text"]).to eq(message.text)
        end
      end

      def query(chatroom_id)
        <<~GQL
          query {getMessagesForChatroom(chatroomId: #{chatroom_id}) {
			text
			isMedia
			mediaType
			userId
			chatroomId
		  }}
        GQL
      end
    end
  end
end
