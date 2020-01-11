import React from 'react';
import styled from 'styled-components';

function Icon({ iconName, ...props }) {
  const svg = require(`!raw-loader!../../icons/${iconName}.svg`);

  return (
    <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg.default }} />
  );
}

const Wrapper = styled.span`
  display: inline-block;
  color: #fff;
  width: ${props => props.iconSize || '1rem'};
  height: ${props => props.iconSize || '1rem'};
  
  & > svg {
    display: block;
    overflow: visible;
    width: 100%;
    height: 100%;
    fill: #fff;
  }
`

export default Icon;
