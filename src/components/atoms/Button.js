import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

function Button ({iconName, iconSize, ...props}) {
  return(
    <StyledButton {...props}>
      {iconName && <Icon className="button-icon" iconName={iconName} iconSize={iconSize || "0.3rem"} />}
      <span className="button-text">{props.children}</span>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  height: 1.7rem;
  padding: 0 0.7rem;
  border-radius: 0.2rem;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: inherit;

  ${props => {
      if (props.success) {
        return `
          background: ${props.theme.success};
          border: 0;
          color: #fff;
        `
      } else if (props.danger) {
        return `
          background: ${props.theme.danger};
          border: 0;
          color: #fff;
        `
      } else {
        return `
          border: 1px solid ${props.theme.borderGray};
          background: ${props.theme.tableGray};
          color: #000;
        `
      }
    }
  }

  & .button-icon {
    fill: #fff;
    vertical-align: middle;
    margin-right: 0.3rem;
  }
`;

export default Button;
