import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,800;1,300;1,600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
}

body {
  background-color: ${(props) => props.theme.colors.veryLightGray};
  font-family: Nunito,sans-serif;
  width: 100%; 
    height: 100%;
}
`;

export default GlobalStyle;
