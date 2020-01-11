import React from 'react';
import styled from 'styled-components';

import TableHeaderCell from '../atoms/TableHeaderCell';
import Checkbox from '../atoms/Checkbox';

function TableHeaderRow(props) {
  return (
    <StyledWrapper>
      {props.withCheckboxes && (
        <TableHeaderCell visible={props.withCheckboxes} key={0}>
          <Checkbox checked={props.checked()} onChange={props.onChange}/>
        </TableHeaderCell>
      )}
      {props.columns.map((column, index) => {
          return(
            <TableHeaderCell key={index+1}>
              {column.text}
            </TableHeaderCell>
          )
        }
      )}
    </StyledWrapper>
  );
}

TableHeaderRow.defaultProps = {
  withCheckboxes: false
}

const StyledWrapper = styled.tr`
  background-color: ${props => props.theme.darkGray};
  color: #fff;
  text-align: left;
  border: 0;
`

export default TableHeaderRow;
