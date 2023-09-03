import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { css } from "styled-components/macro"; //eslint-disable-line
import StellwegApplication from "./StellwegApplication";

function App() {
  return (
    <div>
      <GlobalStyles />
      <StellwegApplication />
    </div>
  );
}

export default App;
