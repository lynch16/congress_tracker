class CreateLegislators < ActiveRecord::Migration[5.0]
  def change
    create_table :legislators do |t|
      t.string :vote_id, primary: true
      t.string :name
      t.string :state
      t.string :district
      t.string :chamber
      t.string :email
      t.integer :popularity, default: 0
      t.timestamps
    end
  end
end
