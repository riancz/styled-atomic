import styled from 'styled-components';

const TableCell = styled.td`
    width: ${props => props.minWidth ? "1%" : "initial"}
    padding: 0.6rem 1rem;
    border: ${props => props.noBorder ? "0" : `1px solid ${props.theme.tableBorderGray}`};

    &:first-of-type {
        width: 1%;
        white-space: nowrap;
        padding: 0.5rem;
    }
`

export default TableCell;
