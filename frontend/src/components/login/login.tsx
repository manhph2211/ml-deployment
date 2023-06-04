import React from "react";
import { DialogAuth } from "react-mui-auth-page";
import Box from '@mui/material/Box';
import { BrowserRouter } from 'react-router-dom'

const Login = () => {
  const handleSignIn = ({ email, password }:{email:string, password:string}) => {
    console.log({ email, password });
  };
const handleSignUp = ({ email, name, password }:{ email:string, name:string, password:string }) => {
    console.log({ email, name, password });
  };
  const handleForget = ({ email }:{email:string}) => {
    console.log({ email });
  };

  return (
    <Box>
      <DialogAuth
        open={true}
        textFieldVariant="outlined"
        onClose={() => {}}
        handleSignUp={handleSignUp}
        handleForget={handleForget}
        handleSignIn={handleSignIn}
        handleSocial={{}}
      />
    </Box>
  );
};

export default Login;
