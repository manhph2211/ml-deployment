import * as React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Head from "./components/bar/head";
import Tts from "./components/main/main";
import LoginForm from "./components/login/login";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <StyledEngineProvider injectFirst>
          {/* <BrowserRouter>
            <LoginForm/>
          </BrowserRouter>, */}
          <Head />
          <Tts/>
        </StyledEngineProvider>
      </React.StrictMode>
    </div>
  );
}

export default App;