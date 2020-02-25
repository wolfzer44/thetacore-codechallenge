import React from "react"
import Mail from "./components/mail/Mail"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
 
  body {
    font-family: 'Nanum Gothic';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(223,234,253);
    background: linear-gradient(180deg, rgba(223,234,253,1) 0%, rgba(243,248,255,1) 100%) no-repeat;
    height: 100vh; 
  }
`
function App() {
  return (
    <>
      <GlobalStyle />
      <Mail />
    </>
  )
}

export default App
