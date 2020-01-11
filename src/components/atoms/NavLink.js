import React from 'react';
import { NavLink as ReactNavLink } from 'react-router-dom';
import styled from 'styled-components';

import Icon from './Icon';

function NavLink({iconName, ...props}) {
  return (
    <StyledNavLink {...props} activeClassName="active">
      {iconName && <Icon iconName={iconName} className="navlink-icon" iconSize="0.8rem" />}
      <span className="navlink-text">{props.children}</span>
    </StyledNavLink>
  );
}

const StyledNavLink = styled(ReactNavLink)`
  display: flex;
  width: 100%;
  padding: 0.5rem 0.4rem;
  border-radius: 0.2rem;
  box-sizing: border-box;
  font-size: 0.845rem;
  font-weight: 500;
  color: inherit;
  text-decoration: none;

  @media only screen and (max-width: 800px) {
    font-weight: 400;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 0;
  }

  &.active, &:hover {
    background-color: #FFFFFF33;

    @media only screen and (max-width: 800px) {
      background-color: transparent;
      color: ${props => props.theme.primary}
    }
  }

  & > .navlink-text {
    margin-left: 0.3rem;
  }
`

export default NavLink;
