import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Section({ title, className, children }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export const StyledSection = styled(Section)`
  text-align: center;
  background-color: #fcf4dc;
  font-size: 1.5em;
`;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
