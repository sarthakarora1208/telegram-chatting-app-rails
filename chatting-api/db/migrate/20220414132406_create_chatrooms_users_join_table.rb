class CreateChatroomsUsersJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :chatrooms, :users
  end
end
