const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false,
    }
  },

  handleSearch: function(location) {
    let that = this;

    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined,
      city: undefined,
    });

    openWeatherMap.getTemp(location).then(function(obj) {
      that.setState({
        location: location,
        temp: obj.temp,
        city: obj.city,
        isLoading: false,
      });
    }, function(errorMessage) {
      that.setState({
        isLoading: false,
        errorMessage: errorMessage.message,
      });
    });
  },

  componentDidMount: function() {
    let location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  componentWillReceiveProps: function(newProps) {
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  },

  render: function () {
    const {isLoading, temp, city, errorMessage} = this.state;

    // conditionally render inside of component, must use jsx
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && city) {
        return <WeatherMessage temp={temp} city={city} />;
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        );
      }
    }

    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
});

module.exports = Weather;
