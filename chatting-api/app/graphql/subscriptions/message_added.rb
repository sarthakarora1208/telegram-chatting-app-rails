class Subscriptions::MessageAdded < GraphQL::Schema::Subscription
  field :message, Types::MessageType, null: true

  def subscribe(**args)
    puts args
    super
  end

  def update
    super
  end
end
