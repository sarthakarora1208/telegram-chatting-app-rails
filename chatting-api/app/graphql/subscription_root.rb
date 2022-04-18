# frozen_string_literal: true

class SubscriptionRoot < GraphQL::Schema::Object
  graphql_name "SubscriptionRoot"
  description "The query root of the ApiSchema."

  #field :user_created, subscription: Subscriptions::UserCreated
  field :message_added, subscription: Subscriptions::MessageAdded
end
