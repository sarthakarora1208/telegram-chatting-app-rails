# frozen_string_literal: true

module Queries
  class GetUser < GraphQL::Schema::Resolver
    description "Information about the Customer"

    type Types::UserType, null: true

    argument :id, Integer, "ID of the Customer", required: true

    def resolve(**args)
      User.find(args[:id])
    end
  end
end
