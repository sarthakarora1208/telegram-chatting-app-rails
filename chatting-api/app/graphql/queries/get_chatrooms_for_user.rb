module Queries
  class GetChatroomsForUser < GraphQL::Schema::Resolver
    description "Information about the Customer"

    type [Types::ChatroomType], null: true

    argument :user_id, ID, required: true

    def resolve(**args)
      User.find(args[:user_id]).chatrooms
    end
  end
end
