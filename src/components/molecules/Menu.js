import React from 'react';

import NavLink from '../atoms/NavLink';
import styled from 'styled-components';

function Menu(props) {
  return (
    <StyledWrapper>
      <ul>
        <li><NavLink to="/" exact>Uživatelé</NavLink>
          <ul>
            <li><NavLink to="/otherPage1">Vytvořit uživatele</NavLink></li>
            <li><NavLink to="/otherPage2">Hromadný import</NavLink></li>
          </ul>
        </li>
        <li><NavLink to="/otherPage3">Licence</NavLink></li>
        <li><NavLink to="/otherPage4">Export</NavLink></li>
        <li><NavLink to="/otherPage5">Nápověda</NavLink></li>
      </ul>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  grid-area: menu;
  background-color: ${props => props.theme.darkGray};
  color: #fff;
  border-top: 1px solid ${props => props.theme.midGray};

  @media only screen and (max-width: 800px) {
    background-color: #fff;
    color: ${props => props.theme.midGray};
    border-top: 1px solid ${props => props.theme.borderGray};

    & > ul > li {
      display: flex;
      flex-grow: 1;
      height: 100%;
    }
  }

  & > ul {
    list-style: none;
    margin: 0;
    padding: 1.3rem 1rem;

    @media only screen and (max-width: 800px) {
      display: flex;
      height: 100%;
      padding: 0;
      justify-content: space-around;
      align-items: center;
    }
  }

  & > ul ul {
    list-style: none;
    padding: 0 0 0 2.2rem;

    @media only screen and (max-width: 800px) {
      display: none;
    }
  }
`

export default Menu;
