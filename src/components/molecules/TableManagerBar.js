import React from 'react';
import styled from 'styled-components';

import SelectedRowCounter from '../atoms/SelectedRowCounter';
import ButtonArrayWrapper from '../atoms/ButtonArrayWrapper';
import Dropdown from '../atoms/Dropdown';

function TableManagerBar(props) {
  return (
    <StyledTableManagerBar className={props.className}>
        <SelectedRowCounter itemsName={props.itemsName} count={props.numOfChecked} />
        {props.actions.length && <Dropdown options={props.actions} />}
        <ButtonArrayWrapper>
          {props.buttons}
        </ButtonArrayWrapper>
    </StyledTableManagerBar>
  );
}

const StyledTableManagerBar = styled.div`
  display: flex;
  padding-bottom: 0.3rem;
  background-color: #fff;
`

export default TableManagerBar;
