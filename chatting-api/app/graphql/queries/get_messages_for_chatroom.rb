module Queries
  class GetMessagesForChatroom < GraphQL::Schema::Resolver
    type [Types::MessageType], null: true

    argument :chatroom_id, Integer, "ID of the Chatroom", required: true

    def resolve(**args)
      Message.where(chatroom_id: args[:chatroom_id])
    end
  end
end
