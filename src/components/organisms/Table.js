import React from 'react';
import styled from 'styled-components';

import TableHeaderRow from '../molecules/TableHeaderRow';
import TableBodyRow from '../molecules/TableBodyRow';

//Použil bych context abych nedělal takový prop drilling, ale pokdu to má být reusable, tak nemůžu
function Table(props) {
  function handleSelectUser(e, rowId) {
    const checked = e.target.checked;
    props.setData(props.data.map(item => item[props.keyColumnIndex] === rowId ? [checked, ...item.splice(1)] : item));
  }

  function handleSelectAllUsers(e) {
    const checked = e.target.checked;
    props.setData(props.data.map(item => [checked, ...item.splice(1)]));
  }

  const areAllChecked = () => props.data.filter(item => item[0]).length === props.data.length;

  return (
      <StyledTable>
        <thead>
          <TableHeaderRow
            columns={props.columns}
            checked={areAllChecked}
            onChange={handleSelectAllUsers}
            withCheckboxes={props.withCheckboxes}
          />
        </thead>
        <tbody>
          {props.data.map(item => {
            const key=item[props.keyColumnIndex];
            return(
              <TableBodyRow
                key={key}
                rowId={key}
                columnsTypes={props.columns}
                columns={item}
                handleSelectUser={handleSelectUser}
                withCheckboxes={props.withCheckboxes}
              />
            );
          })}
        </tbody>
      </StyledTable>
  );
}

Table.defaultProps = {
  withCheckboxes: false
}

const StyledTable = styled.table`
  border-spacing: 0;
  border-collapse: collapse;
  font-weight: 400;

  tbody > tr:nth-child(1) > td{
    border-top: 0;
  }
`

export default Table;
