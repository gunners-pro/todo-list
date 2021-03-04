import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Card = styled.div`
  background-color: #3c434c;
  color: #7a7f85;
  width: 300px;
  margin: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 10px #1e232a;
  border-radius: 3px;
  word-break: keep-all;

  & > p {
    font-size: 15px;
    width: 90%;
    text-align: justify;
    margin-right: 6px;
  }

  & > span {
    width: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > span > svg {
    cursor: pointer;
  }

  & > span > svg:hover {
    color: #db5656;
  }
`;
