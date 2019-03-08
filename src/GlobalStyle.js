import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
  }

  html, body {
    position: fixed;
    width: 100%;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    margin: 0;
  }

h1 {
  font-size: 23pt;
}


  input, textarea, button {
    font-size: 1em;
  }

  input, textarea {
    appearance: none;
    border: 4px solid #ddd;
    border-radius: none;
    background: white;
    padding-left: 4px;
  }

  button {
    background-color: #18B839;
    color: white;
    height:44px;
    width: 44px;
    border-radius: 50%;
  }
`
