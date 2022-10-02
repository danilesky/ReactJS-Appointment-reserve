import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./infrastructure/theme";
import Service from "./screens/Service/Service.screen";
import ServicesContextProvider from "./services/Services/services.context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Booking from "./screens/Booking/Booking.screen";

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
      <ServicesContextProvider>
        <Application>
          <Body>
            <Router>
              <Routes>
                <Route exact path="/" element={<Service />}></Route>
                <Route path="/booking" element={<Booking />}></Route>
              </Routes>
            </Router>
          </Body>
        </Application>
      </ServicesContextProvider>
    </ThemeProvider>
  );
}

export default App;
