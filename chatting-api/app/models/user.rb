class User < ApplicationRecord
  has_and_belongs_to_many :chatrooms
  has_many :messages
end
