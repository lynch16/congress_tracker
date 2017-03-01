class LegislatorSerializer < ActiveModel::Serializer
  attributes :voteId, :name, :state, :chamber, :popularity
  has_many :comments
end
