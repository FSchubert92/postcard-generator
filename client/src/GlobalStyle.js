import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;

  }

  body {
    font-family: sans-serif;
    margin: 0;
  }
 

  html, body {
    position: fixed;
    width: 100%;
    height: 100%;
    background: #fefefe
  }

  h1, h2, h3, h4, h5, h6,
  ul, ol {
    color: rgba(0, 0, 0, 0.68);
    margin: 0;
  }

h1 {
  font-size: 25pt;
  letter-spacing: 2px;
  color: #101010;
}
h2{
  color:#0f0f0fde;
}


  input, textarea, button {
    font-size: 1em;
  }

  input, textarea {
    width: 90%;
    border: 2px solid #ddd;
    margin: 10px 0;
    padding: 10px;
  }

  button {
    width: 44px;
    height:44px;
    color: white;
    background-color: #18B839;
    border-radius: 50%;
  }
`
