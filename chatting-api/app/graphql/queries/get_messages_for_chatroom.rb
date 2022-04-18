# frozen_string_literal: true

module Queries
  class GetMessagesForChatroom < GraphQL::Schema::Resolver
    description "Information about the Customer"

    type [Types::MessageType], null: true

    argument :chatroom_id, Integer, "ID of the Customer", required: true

    def resolve(**args)
      Message.where(chatroom_id: args[:chatroom_id])
    end
  end
end
