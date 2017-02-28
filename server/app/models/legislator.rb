class Legislator < ApplicationRecord
  self.primary_key = 'vote_id'
  validates :name, presence: true, uniqueness:true
  has_many :comments
  include HTTParty

  TERM = '2013-2014'

  base_uri 'openstates.org/api/v1'

  def self.search_location(lat, long)
    response = self.get("/legislators/geo/?lat=#{lat}&long=#{long}")
    response.collect {|l| Legislator.create(l) }.compact
  end

  def initialize(json={})
    if json["active"] == true
      super()
      self.vote_id = json["id"]
      self.name = json["full_name"]
      self.state = State.find_state(json["state"]).name
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
end
