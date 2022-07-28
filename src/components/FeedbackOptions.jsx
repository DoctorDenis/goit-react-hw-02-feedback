import React, { Fragment } from 'react';
import styled from 'styled-components';

export default function Buttons({ btnTitles, methods }) {
  return (
    <Fragment>
      {btnTitles.map((title, index) => {
        title = title.charAt(0).toUpperCase() + title.slice(1);
        return (
          <Button key={title} type="button" onClick={methods[index]}>
            {title}
          </Button>
        );
      })}
    </Fragment>
  );
}

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ade6da;
  box-shadow: 0px 0px 5px black;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:active {
    box-shadow: inset 0px 0px 5px black;
  }
`;
