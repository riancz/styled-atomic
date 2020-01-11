import React from 'react';
import styled from 'styled-components';

function Dropdown(props) {
  return (
    <Styled>
      <select>
        {props.options.map((option, index) => {
          return (
          <option key={index} value={option}>
            {option}
          </option>)
        })}
      </select>
      <Arrow></Arrow>
    </Styled>
  );
}

const Styled = styled.div`
  position: relative;
  display: inline-block;
  align-self: center;

  & > select {
    font-size: inherit;
    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 0.4rem 3.3rem 0.4rem 0.7rem;
    outline: 0;
    border: 1px solid ${props => props.theme.borderGray};
    border-radius: 0.2rem;
    background: #ffffff;
    color: #000000;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &::-ms-expand {
      display: none;
    }

    &:hover {
        color: #000000;
        border: 1px solid ${props => props.theme.midGray};
    }

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
  }

  & > .select select:hover ~ div,
  & > .select select:focus ~ div {
    border-color: #000000;
  }
  & > .select select:disabled ~ div {
    border-top-color: #cccccc;
  }
`

const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 0.6rem;
  width: 0px;
  height: 0px;
  border: solid ${props => props.theme.midGray};
  border-width: 0 0.1rem 0.1rem 0;
  display: inline-block;
  padding: 0.15rem;
  transform: translateY(-50%) rotate(45deg);
`

export default Dropdown;
