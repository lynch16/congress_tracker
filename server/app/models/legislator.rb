class Legislator
  include HTTParty
  attr_accessor :name, :state, :chamber

  TERM = '2013-2014'

  base_uri 'openstates.org/api/v1'

  def initialize(json)
    self.name = json["full_name"]
    self.state = State.find_state(json["state"])
    self.chamber = json["chamber"]
  end
end
