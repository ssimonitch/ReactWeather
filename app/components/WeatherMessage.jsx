const React = require('react');

const WeatherMessage = ({temp, city}) => {

  return (
    <h3 className="text-center">It is {temp} in {city}.</h3>
  )
}

module.exports = WeatherMessage;
