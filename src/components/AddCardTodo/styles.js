import styled from 'styled-components';

export const Container = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > textarea {
    width: 100%;
    height: 50%;
    border: none;
    border-radius: 3px;
    resize: none;
    outline: none;
    padding: 8px;
    word-break: break-all;
  }

  & > aside {
    width: 100%;
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
  }

  & > aside > .button-group button {
    border-radius: 3px;
    margin-left: 8px;
    width: 70px;
    outline: none;
    border: none;
    height: 30px;
    color: #65696d;
    background-color: white;
    cursor: pointer;
    transition: color 0.2s;
    transition: background-color 0.3s;
  }

  & > aside > .button-group button:hover {
    background-color: #00aade;
    color: white;
  }
`;
