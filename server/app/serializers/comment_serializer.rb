class CommentSerializer < ActiveModel::Serializer
  attributes :content, :author
  belongs_to :legislator
end
