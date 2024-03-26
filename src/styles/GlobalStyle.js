import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing:border-box;
    }
    body {
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 300;
        font-style: normal;
    }
    span {
        font-weight: 700;
    }
    main, html, #root, body{
        height:100%;
        width:100%;
    }
    #root div {
        width:100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
    }
    svg {
        cursor: pointer;
    }
    button, input {
        outline: none;
        border: none;
        border-radius: 6px;
    }
    input{
        background-color:white;
        color:#9f9f9f;
    }
    button {
        font-weight: 700;
        font-size: 18px;
        line-height: 20px;
        background-color: #1877f2;
        padding: 10px 15px;
        color:white;
        cursor:pointer;
    }
    h1 {
        font-weight: 700;
        font-size: 26px;
        color: white;
    }
    a {
        cursor:pointer;
    }
`

export default GlobalStyle