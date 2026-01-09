import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }    
    
    ol, ul, li {
        list-style: none;
    }

    button,input, textarea {
        outline: none;
        border: none;
        background: transparent;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
        font-family: 'Poppins', sans-serif;
    }

    img {
      width: 100%;
      height: 100%;
        transform: translateZ(0);
          backface-visibility: hidden;
            image-rendering: crisp-edges;
    }
`;

export const Wrap = styled.div`
    min-height: 100vh;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        /* background: rgba(0, 0, 0, 0.39); */
        z-index: -1;
        transition: 0.3s all linear;
    }

    &.active {
        position: relative;

        &::after {
            background: rgba(0, 0, 0, 0.39);
            z-index: 990;
        }
    }
`;
