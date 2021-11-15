import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --background-color: #F9F9F9;
        --primary-color: #1EA8E7;
        --font-primary-color: #fff; 
    }
    body {
        overflow-x: hidden;
        font-family: 'Noto Sans Display', sans-serif;
        background: var(--background-color);
    }
    
`;
