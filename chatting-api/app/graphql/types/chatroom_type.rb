module Types
  class ChatroomType < GraphQL::Schema::Object
    field :id, ID, null: false
    field :name, String, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
    field :users, [Types::UserType], null: false
    field :messages, [Types::MessageType], null: false
  end
end
