class LegislatorSerializer < ActiveModel::Serializer
  attributes :voteId, :name, :state, :chamber
end
