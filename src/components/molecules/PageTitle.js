import React from 'react';
import styled from 'styled-components';

import Header1 from '../atoms/Header1';
import ButtonArrayWrapper from '../atoms/ButtonArrayWrapper';

function PageHeader(props) {
  return (
    <StyledWrapper>
      <Header1>{props.title}</Header1>
      <ButtonArrayWrapper>{props.buttons}</ButtonArrayWrapper>
    </StyledWrapper>
  );
}

PageHeader.defaultProps = {
  withCheckboxes: false
}

const StyledWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.7rem;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid ${props => props.theme.borderGray}

  & > ${Header1} {
    margin-left: 1rem;
  }

  @media only screen and (max-width: 800px) {
    height: 3.8rem;

    & > ${Header1} {
      font-size: 1rem;
    }
  }

  & > ${ButtonArrayWrapper} {
    display: none;
    margin-right: 1rem;
    flex-grow: 1;
    text-align: right;

    @media only screen and (max-width: 800px) {
      display: flex;

      & button {
        padding: 0 0.5rem;
      }
    }

    .button-text {
      display: none;
    }

    .button-icon {
      width: 0.7rem;
      height: 0.7rem;
      margin-right: 0 !important;
    }
  }
`

export default PageHeader;
