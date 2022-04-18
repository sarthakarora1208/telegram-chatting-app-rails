# frozen_string_literal: true

class ApiSchema < GraphQL::Schema
  max_depth 10

  use GraphQL::Subscriptions::ActionCableSubscriptions

  query QueryRoot
  mutation MutationRoot
  subscription SubscriptionRoot
end
