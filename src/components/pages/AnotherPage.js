import React from 'react';
import styled from 'styled-components';

import PageTitle from '../molecules/PageTitle';

function AnotherPage(props) {
  return (
    <StyledWrapper>
      <PageTitle title="Not specified Page" />
      <PageContent>
        Sorry, I didn't receive design for this page
      </PageContent>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  grid-area: content;
  height: 100%;
  background-color: ${props => props.theme.lightGray}
`

const PageContent = styled.div`
    padding: 1rem;
  }
`;

export default AnotherPage;
