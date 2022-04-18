class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :username
      t.string :telegram_id
      t.string :token
      t.boolean :is_bot

      t.timestamps
    end
  end
end
