import React from 'react';
import styled from 'styled-components';

import Table from './Table'
import TableManagerBar from '../molecules/TableManagerBar';

//Použil bych context abych nedělal takový prop drilling, ale pokdu to má být reusable, tak nemůžu
function TableManager(props) {
  const keyColumnIndex = props.keyColumnIndex+1;

  const numOfChecked = props.data.filter(item => item.checked).length;

  return (
    <StyledDiv>
      <TableManagerBar
        itemsName={props.itemsName}
        actions={props.actions}
        numOfChecked={numOfChecked}
        buttons={props.buttons} />
      <Table
        columns={props.columns}
        setColumns={props.setColumns}
        keyColumnIndex={keyColumnIndex}
        data={props.data}
        setData={props.setData}
        withCheckboxes={props.withCheckboxes}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  box-sizing: border-box;
  padding: 0.4rem;
  background-color: #fff;
  width: 100%;
  max-width: 56rem;
  border: 1px solid ${props => props.theme.borderGray}
`

export default TableManager;
