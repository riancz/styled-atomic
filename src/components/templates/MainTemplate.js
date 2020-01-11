import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {BreakpointProvider} from 'react-socks';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../../theme';
import UsersPage from '../pages/UsersPage';
import AnotherPage from '../pages/AnotherPage';
import NavLink from '../atoms/NavLink';
import Icon from '../atoms/Icon';
import Menu from '../molecules/Menu';

function MainTemplate(props) {
  return (
    <Router>
      <BreakpointProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppWrapper>
            <LogoBar>
              <Icon className="logo-icon" iconName="detective" iconSize="5rem" />
            </LogoBar>
            <LogOff>
              <NavLink to="/otherPage" iconName="log-off">
                Odhlásit se
              </NavLink>
            </LogOff>
            <Switch>
              <Route path="/" exact component={UsersPage} />
              <Route path="/" component={AnotherPage} />
            </Switch>
            <Menu />
          </AppWrapper>
        </ThemeProvider>
      </BreakpointProvider>
    </Router>
  );
}

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 0.6rem;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
  }
`

//Pro non-reusable template věci jsme nevytvářel nové soubory:

const AppWrapper = styled.div`
  height: 100vh; /* fallback pro fill-available */
  min-height: -webkit-fill-available;
  display: grid;
  grid-template-columns: 16.4rem auto;
  grid-template-rows: 10rem auto 40px;
  grid-template-areas: 
    "logo-bar content"
    "menu content"
    "log-out content";

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: 3rem auto 3rem;
    grid-template-areas: 
      "logo-bar log-out"
      "content content"
      "menu menu";
  }
`

const LogOff = styled.div`
  display: flex;
  grid-area: log-out;
  align-items: center;
  padding: 0 1rem;
  background-color: ${props => props.theme.darkGray};
  color: #fff;

  @media only screen and (max-width: 800px) {
    padding-right: 1rem;
    
    & .navlink-text {
      display: none;
    }

    & > a {
      padding-right: 0.7rem;
    }
  }
`
const LogoBar = styled.div`
  display: flex;
  grid-area: logo-bar;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.darkGray};
  color: #fff;

  & .logo-icon {
    height: 5rem;
    width: 5rem;
  }

  @media only screen and (max-width: 800px) {
    justify-content: left;
    padding-left: 1rem;

    & .logo-icon {
      height: 2.2rem;
      width: 2.2rem;
    }
  }
`

export default MainTemplate;
