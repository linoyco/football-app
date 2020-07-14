import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles: any = createGlobalStyle`
  html{    
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    height: 94%;
    width: 97%;
    padding: 5px;
  }
  body{
    height: 100%;
    width: 100%;
  }
  #root {
    height: 100%;
  }
`;

const StyledAppDiv: any = styled.div`
  width: 100%;
  height: 100%;
`;

const App: React.FunctionComponent = () => (
  <StyledAppDiv>
    <GlobalStyles />
    Hello App page :)
  </StyledAppDiv>
);

export default App;
