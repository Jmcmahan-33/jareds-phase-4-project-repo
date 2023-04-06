class RemoveSessionLengthColumnFromDoctors < ActiveRecord::Migration[6.1]
  def change
    remove_column :doctors, :session_length, :integer
  end
end
