import React, {useState, Fragment} from 'react';
import styled from 'styled-components';
import {Breakpoint} from 'react-socks';

import PageTitle from '../molecules/PageTitle';
import Button from '../atoms/Button';
import TableManager from '../organisms/TableManager';
import TableList from '../organisms/TableList';

//Použil bych context abych nedělal takový prop drilling, ale pokdu to má být reusable, tak nemůžu
function UsersPage(props) {
  const [ columns, setColumns ] = useState([
    { text: "ID", type: 1 },
    { text: "Email", type: 3},
    { text: "Jméno", type: 1},
    { text: "Licence", type: 1}
 ]);
 
  const [ data, setData ] = useState([
    [ false, 12345, "slosar@atlasgroup.cz", "Martin Šlosar", "Licence 1, Licence 2" ],
    [ false, 24563, "trehak@atlasgroup.cz", "Tomáš Řehák", "Licence 3" ],
    [ false, 97102, "orlik@atlasgroup.cz", "Vojta Orlík", "Licence 2" ],
    [ false, 20042, "novak@atlasgroup.cz", "Petr Novák", "Licence 2, Licence 3" ]
  ]);

  const handleOnClick = e => alert("yay");

  const buttons = <Fragment>
        <Button success onClick={handleOnClick} iconName="plus">Vytvořit uživatele</Button>
      </Fragment>;

  return (
    <StyledWrapper>
      <PageTitle title="Seznam uživatelských účtů" buttons={buttons} />
      <PageContent>
        <Breakpoint customQuery="(min-width: 801px)">
          <TableManager
            withCheckboxes="true"
            columns={columns}
            setColumns={setColumns}
            data={data}
            setData={setData}
            keyColumnIndex={0}
            itemsName="uživatele"
            actions={[ "Nastavit roli", "Jiná akce" ]}
            buttons={buttons}
          />
        </Breakpoint>
        <Breakpoint customQuery="(max-width: 800px)">
          <TableList
            columns={columns}
            data={data}
            keyColumnIndex={0}
          />
        </Breakpoint>
      </PageContent>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  grid-area: content;
  overflow-y: scroll;
  background-color: ${props => props.theme.lightGray}
`

const PageContent = styled.div`
    padding: 1rem;
  }
`;

export default UsersPage;
