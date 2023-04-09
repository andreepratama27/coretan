import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-dark: #000;
  }

  body {
    margin: 0;
    padding: 0;

    background-color: var(--primary-dark);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
