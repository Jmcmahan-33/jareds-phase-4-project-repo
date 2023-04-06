class CreateAppointments < ActiveRecord::Migration[6.1]
  def change
    create_table :appointments do |t|
      t.belongs_to :doctor, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.date :date_field
      t.string :reason_for_visit

      t.timestamps
    end
  end
end
