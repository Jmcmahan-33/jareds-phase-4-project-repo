class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :speciality
      t.string :room_number
      t.integer :session_length
      t.integer :rate
      t.string :notes

      t.timestamps
    end
  end
end
