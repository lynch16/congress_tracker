class LegislatorSerializer < ActiveModel::Serializer
  attributes :voteId, :name, :state, :chamber, :popularity, :comments
  has_many :comments
end
