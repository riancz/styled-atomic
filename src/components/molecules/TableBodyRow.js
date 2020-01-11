import React from 'react';
import styled from 'styled-components';

import TableCell from '../atoms/TableCell';
import Checkbox from '../atoms/Checkbox';
import Formatter from '../atoms/Formatter';
import Button from '../atoms/Button';

//Mít více času, tak bych to asi zrefaktoroval a zobecnil aby se dal použít i v TableListu
function TableBodyRow(props) {
  return (
    <StyledWrapper>
      {props.columns.map((column, index) => {
        if(index === 0 && props.withCheckboxes) {
          return(
            <TableCell visible={props.withCheckboxes} key={index}>
              <Checkbox checked={props.columns[0]} onChange={e => props.handleSelectUser(e, props.rowId)} />
            </TableCell>
          )
        } else {
          return(
            <TableCell key={index}>
              <Formatter text={column} type={props.columnsTypes[index-1].type} />
              {index === props.columns.length-1 && <Button>Detail</Button>}
            </TableCell>
          )
        }
        }
      )}
    </StyledWrapper>
  );
}

TableBodyRow.defaultProps = {
  withCheckboxes: false
}

const StyledWrapper = styled.tr`
  & > td {
    position: relative;
  }

  & button {
    position: absolute;
    right: 0.2rem;
    top: 0.1rem;
  }

  &:nth-child(odd){
    background-color: ${props => props.theme.tableGray};
  }
`

export default TableBodyRow;
