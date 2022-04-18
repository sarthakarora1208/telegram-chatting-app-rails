FactoryBot.define do
  factory :message do
    sequence(:text) { "text" }
    sequence(:is_media) { false }
    sequence(:media_type) { "" }
    sequence(:user_id) { 1 }
    sequence(:chatroom_id) { 1 }
    created_at { Time.now }
    updated_at { Time.now }
    user
    #user { association :user, message: instance, user: user }
    chatroom
    #chatroom { association :chatroom, message: instance, chatroom: chatroom }
  end
end
