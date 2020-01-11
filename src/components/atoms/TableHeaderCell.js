import styled from 'styled-components';

const TableHeaderCell = styled.th`
	padding: 0.6rem 1.2rem;
	font-weight: 400;

	& + th {
		border-left: 1px solid ${props => props.theme.tableBorderGray};
	}

	&:first-of-type {
		width: 1%;
		white-space: nowrap;
		padding: 0.5rem;
	}
`

export default TableHeaderCell;
