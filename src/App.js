import React from "react";
import Header from "./components/Header"
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle"
import {AppContainer} from "./styles"

function App() {
  return (
    <AppContainer>
      <Header />
      <GlobalStyle />
      <AboutUs />
    </AppContainer>
  );
}

export default App;
