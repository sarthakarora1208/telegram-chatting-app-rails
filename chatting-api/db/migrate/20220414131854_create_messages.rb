class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string :text
      t.boolean :is_media
      t.string :media_type
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :chatroom, null: false, foreign_key: true

      t.timestamps
    end
  end
end
