class State
  include HTTParty
  attr_accessor :name, :districts

  base_uri 'openstates.org/api/v1'

  def self.find_districts(id)
    districts = self.get("/districts/#{id}/")
    new({name: id, districts: districts})
  end

  def self.find_all_state_names()
    response = self.get('https://openstates.org/api/v1/metadata/')
    response.each { |s| new(s) }
  end

  def initialize(json)
    self.name = json[:name]
    self.districts = json[:districts]
  end

end
