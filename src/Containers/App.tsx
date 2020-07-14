import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import AppRoutes from './AppRoutes';

const GlobalStyles: any = createGlobalStyle`
  html{    
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    height: 94%;
    width: 97%;
    overflow: hidden;
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
    <AppRoutes />
  </StyledAppDiv>
);

export default App;
