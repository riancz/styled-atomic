import React from 'react'
import styled from 'styled-components';

function Checkbox(props) {
  return (
    <Styled>
      <input type="checkbox" {...props} />
      <Indicator></Indicator>
    </Styled>
  );
}

export default Checkbox;

const Styled = styled.label`
  font-family: arial;
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;

  & > input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  & > input:checked ~ div {
    background-color: ${props => props.theme.primary}
  }

  & > input:checked ~ div:after {
    display: block;
  }
`

const Indicator = styled.div`
  position: relative;
  height: 0.5rem;
  width: 0.5rem;
  background: #fff;
  border: 2px solid #ffffff;
  border-radius: 1px;
  
  &:before {
    content: '';
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: 2px;
    border: 1px solid ${props => props.theme.borderGray};
  }

  &:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
    left: 0.17rem;
    top: 0.008rem;
    width: 0.14rem;
    height: 0.3rem;
    border: 1px solid #ffffff;
    border-width: 0 1px 1px 0;
    transform: rotate(45deg);
  }
`