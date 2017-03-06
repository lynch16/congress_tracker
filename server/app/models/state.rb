class State
  include HTTParty
  attr_accessor :name, :districts, :abbreviation

  base_uri 'openstates.org/api/v1'

  def self.find_districts(id)
    state = self.find_state(id)
    state.districts = self.get("/districts/#{id}/").uniq{|d| d["name"]}
    return state
  end

  def self.find_state(id)
    state = self.get("/metadata/#{id}/")
    new(state)
  end

  def self.find_all_state_names()
    response = self.get('/metadata/')
    response.each { |s| new(s) }
  end

  def initialize(json)
    self.name = json["name"]
    self.districts = json[:districts]
    self.abbreviation = json["abbreviation"]
  end

end
