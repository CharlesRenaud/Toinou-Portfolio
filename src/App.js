import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle"
import {Title} from "./styles"

function App() {
  return (
    <div className="App">
      <Title>Toinou Le Chevalier</Title>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
