import styled from 'styled-components';

const ButtonArrayWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;

  & > button {
    margin-left: 0.3rem;
  }
`;

export default ButtonArrayWrapper;
