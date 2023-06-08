import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 160%;
  }

  :root{

    --green-dark: #015F43;
    --green: #00875F;
    --green-light: #00B37E;

    --red-dark: #AA2834;
    --red: #F75A68;

    --background: #121214;
    --shape-1st: #202024;
    --shape-2nd: #29292e;
    --shape-3rd: #323238;

    --placeholder: #7c7c8a;
    --base-text: #c4c4cc;
    --titles: #e1e1e6;
    --white: #fff;

    
    font-size: 62.5%;
  }

  body{
    background: #202024;
  }

  h1, h2, h3, h4, h5, strong{
    font-weight: 700;
    line-height: 160%;
    color: var(--titles);
  }

  button{
    cursor: pointer;
    border: none;
    transition: all 200ms ease-out;
  }


.modal-overly{
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
  
  display: grid;
  place-items: center;
}

.modal-content{
  position: relative;
  width: 100%;
  max-width: 535px;
  padding: 4rem;

  background-color: var(--shape-1st);
  border-radius: 6px;
}

.close-modal{
    background: none;
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    color: var(--placeholder);
  }
  

`