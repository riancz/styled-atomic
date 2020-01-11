import React from 'react';
import styled from 'styled-components'  ;

function SelectedRowCounter(props) {
  return (
    <StyledSpan className={props.className}>Pro vybrané {props.itemsName} ({props.count})</StyledSpan>
  );
}

SelectedRowCounter.defaultProps = {
  itemsName: "zápisy v tabulce",
  count: 0
}

const StyledSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 0 0.8rem 0 0.3rem;
  font-weight: 500;
`

export default SelectedRowCounter;
