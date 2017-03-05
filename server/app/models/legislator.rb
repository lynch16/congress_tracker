class Legislator < ApplicationRecord
  self.primary_key = 'vote_id'
  validates :name, presence: true, uniqueness:true
  has_many :comments
  include HTTParty

  TERM = '2013-2014'

  base_uri 'openstates.org/api/v1'

  def self.search_location(lat, long)
    response = self.get("/legislators/geo/?lat=#{lat}&long=#{long}")
    Legislator.find_or_create(response)
  end

  def self.search_by_state(state)
    response = self.get("/legislators/?state=#{state}")
    Legislator.find_or_create(response)
  end

  def self.find_or_create(json)
    json.collect do |l|
      legislator = Legislator.where(vote_id: l['id']).first
      if !legislator
        legislator = Legislator.create(l)
      end
      legislator
    end
  end

  def initialize(json={})
    if json["active"] == true
      super()
      self.vote_id = json["id"]
      self.name = json["full_name"]
      self.state = json["state"]
      self.district = json["district"]
      if json["chamber"] == 'upper'
        self.chamber = 'Senate'
      elsif json["chamber"] == 'lower'
        self.chamber = 'House of Representatives'
      else
        self.chamber = 'Other'
      end
    end
  end

  def upvote
    self.popularity += 1
    self.save
  end

  def downvote
    self.popularity -= 1
    self.save
  end

  def comment(comment, author)
    new_comment = Comment.create(author: author, content: comment)
    self.comments << new_comment
  end
end
