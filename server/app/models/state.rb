class State
  include HTTParty
  attr_accessor :name

  base_uri 'openstates.org/api/v1'

  def self.find(id)
    state = self.get("/metadata/#{id}/")
    new(state)
  end

  def self.find_all()
    response = self.get('https://openstates.org/api/v1/metadata/')
    response.each { |s| new(s) }
  end

  def initialize(json)
    self.name = json[:name]
  end

end
