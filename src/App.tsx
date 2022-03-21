import React from "react";
import { ToastContainer } from 'react-toastify';
import { createGlobalStyle } from 'styled-components'
import { ApplicationRouter } from "./ApplicationRouter";
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    color: #c4c4c4;
    background-color: black;
    font-family: Arial;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: #63b4fd;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <ToastContainer />
      <ApplicationRouter />
    </div>
  );
}

export default App;
