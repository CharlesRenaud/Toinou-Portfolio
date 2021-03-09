import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
}
button {
    font-family: "Inter", sans-serif;
    font-weight:bold;
    font-size:1.1rem;
    cursor:pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
        background-color: #23d997;
        color: white;
    }
    @media only screen and (max-width:  800px) {
      font-size:80%;
    }
}
    h2{
        font-weight:lighter;
        font-size:3.5rem;
    }
    h3{
        color: white;
    }
    h4{
        font-size:1.6rem;
        font-weight: bold;
        @media only screen and (max-width:  800px) {
        font-size:1.3rem
    } 
    }
    span{
        color: #23d997;
        font-weight: bold;
    }
    a{
        font-size: 1.1rem;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height:150%;
        @media only screen and (max-width:  800px) {
        font-size:1.1rem
    }
    }
`;
export default GlobalStyle;