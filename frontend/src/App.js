import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Head from "./components/bar/head";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          <Head />
        </StyledEngineProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;