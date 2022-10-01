import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./infrastructure/theme";
import Service from "./screens/Service/Service.screen";

const Application = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;
const Body = styled.div`
  max-width: 1440px;
  margin: auto;
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.default.blue};
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Application>
        <Body>
          <Service />
        </Body>
      </Application>
    </ThemeProvider>
  );
}

export default App;
