FactoryBot.define do
  factory :user do
    name { "User 1" }
    username { "username1" }
    telegram_id { "telegram_id" }
    token { "token" }
    is_bot { true }
    created_at { Time.now }
    updated_at { Time.now }
  end
end
