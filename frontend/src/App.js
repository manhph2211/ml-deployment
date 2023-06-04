import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Head from "./components/bar/head";
import Tts from "./components/main/main";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <Head />
          <Tts/>
        </StyledEngineProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;