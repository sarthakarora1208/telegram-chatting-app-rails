module Types
  class UserType < GraphQL::Schema::Object
    field :id, ID, null: false
    field :name, String, null: true
    field :username, String, null: true
    field :telegram_id, String, null: true
    field :token, String, null: true
    field :is_bot, Boolean, null: true
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :chatrooms, [Types::ChatroomType], null: true
    field :chatrooms_count, Integer, null: true

    def chatrooms_count
      object.chatrooms.size
    end
  end
end
