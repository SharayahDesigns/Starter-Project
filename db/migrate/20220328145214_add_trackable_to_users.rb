class AddTrackableToUsers < ActiveRecord::Migration[6.1]
  def change
     add_column :users, :sign_in_count, :integer, :default => 0
      add_column :users, :current_sign_in_at, :datetime
      add_column :users, :last_sign_in_at, :datetime
      add_column :users, :current_sign_in_ip, :string
      add_column :users, :last_sign_in_ip, :string
      add_column :users, :name, :string

      

  end
end
