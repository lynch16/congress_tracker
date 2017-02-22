class Legislator
  include HTTParty
  attr_accessor :name, :state, :chamber

  TERM = '2013-2014'

  base_uri 'openstates.org/api/v1'

  def self.search_location(lat, long)
    response = self.get("/legislators/geo/?lat=#{lat}&long=#{long}")
    response.collect {|l| new(l) }.compact
  end

  def initialize(json)
    if json["active"] == true
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
end
