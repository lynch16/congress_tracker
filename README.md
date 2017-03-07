# README

This is a two part application.  The server is a Ruby on Rails API that combines the OpenStates.org API with local database in order to provide up to date information on state legislation and save comments.

The client is built on Angular JS.

# INSTALLATION
Server setup:
  Dependencies:
    Ruby 2.3.x
    Bundler 1.13.6

  $ bundle install #install and load all required libraries
  $ rail s #start RoR server on port 3000

Client setup:
  $ python -m SimpleHTTPServer #start python server on port 8000

Website now available @ localhost:8000 w/ api requests to localhost:3000

# CONTRIBUTIONS

Bug reports and pull requests are welcome on GitHub at https://github.com/lynch16/legislation_tracker.git. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the Contributor Covenant code of conduct.

#LICENSE

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
