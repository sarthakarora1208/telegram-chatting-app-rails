module Types
  class MessageType < GraphQL::Schema::Object
    field :id, ID, null: false
    field :text, String, null: false
    field :is_media, Boolean, null: false
    field :media_type, String, null: false
    field :user_id, Integer, null: false
    field :chatroom_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
