import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TodoHeader = styled.header`
  height: 15%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 25px 0;
`;

export const TodoDragDrop = styled.section`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const TodoColum = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 10px;
  overflow: hidden;

  & > h3 {
    background-color: #171c22;
    color: #4e5052;
    width: 120px;
    margin-bottom: 16px;
    text-align: center;
    padding: 6px 14px 6px;
    border-radius: 3px;
    user-select: none;
    text-transform: uppercase;
  }
`;

export const ColDroppable = styled.div`
  width: 80%;
  height: 100%;
  display: inline;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Card = styled.div`
  background-color: #3c434c;
  color: #7a7f85;
  width: 300px;
  margin: 8px;
  padding: 8px;
  display: flex;
  box-shadow: 0 0 10px #1e232a;
  border-radius: 3px;
  word-break: break-all;
`;
