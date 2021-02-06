import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const ContentLeft = styled.aside`
  background-color: #272e36;
  height: 100%;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px 0;

  & > img {
    width: 60%;
    padding-bottom: 30px;
  }

  & > h1 {
    font-size: 32px;
    color: #65696d;
    text-align: justify;
    padding-top: 30px;
  }
`;

export const ContentMain = styled.main`
  background-color: #242a31;
  height: 100%;
  width: 60%;
`;
