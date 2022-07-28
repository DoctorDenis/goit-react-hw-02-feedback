import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  className,
}) {
  return (
    <div className={className}>
      <h2>Statistics</h2>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  );
}

const StyledStatistics = styled(Statistics)`
  & ul {
    list-style: none;
    text-align: left;
    text-shadow: 0px 1px 4px #9380f0;
    padding-left: 30%;
  }

  & li {
    line-height: 2em;
  }
  margin: 0 auto;
`;

export default StyledStatistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
