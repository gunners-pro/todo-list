import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media(max-width: 1080px){
    html {
        font-size: 90%;
    }
  }

  @media(max-width: 720px){
    html {
        font-size: 80%;
    }
  }

  #root, html, body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }
`;
