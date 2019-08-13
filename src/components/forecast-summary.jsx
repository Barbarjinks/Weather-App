import React from 'react';
import PropTypes from 'prop-types';

const ForecastSummary = props => (
  <h1>
    <div className="forecast-summary__date">{props.date}</div>
    <div className="forecast-summary__temperature">{props.temperature}</div>
    <div className="forecast-summary__description">{props.description}</div>
    <div className="forecast-summary__icon">{props.icon}</div>
  </h1>
);

ForecastSummary.propTypes = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ForecastSummary;