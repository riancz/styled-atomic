import React from 'react';
import styled from 'styled-components';

import Formatter from '../atoms/Formatter';
import TableCell from '../atoms/TableCell';

//Hardcodnuté to je protože, nevím podle čeho se určuje, jaké položky budou pod čarou, jinak bych pokračoval jako u tabulky
function TableList(props) {
    const keyColumnIndex = props.keyColumnIndex + 1;

    return(
        <StyledUnorderedList>
            {props.data.map(item => {
                const key = item[keyColumnIndex];
                return(
                    <li key={key}>
                        <div>
                            <span>
                                <Formatter text={item[2]} type={props.columns[1].type} />
                            </span>
                            <span>
                                <bold>{props.columns[0].text}</bold>
                                <Formatter text={item[1]} type={props.columns[0].type} />
                            </span>
                        </div>
                        <table>
                            <tbody>
                                <tr>
                                    <TableCell noBorder minWidth>
                                        <bold>{props.columns[2].text}</bold>
                                    </TableCell>
                                    <TableCell noBorder>
                                        <Formatter text={item[3]} type={props.columns[2].type} />
                                    </TableCell>
                                </tr>
                                <tr>
                                    <TableCell noBorder minWidth>
                                        <bold>{props.columns[3].text}</bold>
                                    </TableCell>
                                    <TableCell noBorder>
                                        <Formatter text={item[4]} type={props.columns[3].type} />
                                    </TableCell>
                                </tr>
                            </tbody>
                        </table>
                    </li>
                );
            })}
        </StyledUnorderedList>
    );
}

const StyledUnorderedList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
        background-color: #fff;
        width: 100%;
        margin-bottom: 0.7rem;
        border-radius: 0.3rem;
        padding: 0.5rem;
        box-sizing: border-box;
        box-shadow: 0 0.2rem 0.7rem #00000026;
        font-size: 0.9rem;

        & bold {
            font-weight: 500;
        }

        & > div {
            display: flex;

            & bold {
                margin-right: 0.4rem;
            }

            & > span {
                padding: 0.7rem;
                display: flex;
                align-items: center;
            }

            & > span:first-of-type {
                flex-grow: 1;
                font-size: 1rem;
            }
        }

        & > table {
            border-collapse: collapse;
            width: 100%;
    
            & tr:first-of-type {
                border-bottom: 1px solid ${props => props.theme.tableGray}
            }

            & td:first-of-type {
                white-space: nowrap;
            }
        }
    }
`


export default TableList;