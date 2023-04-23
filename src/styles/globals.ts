import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html {
        scroll-behavior: smooth;
    }

    body {
        background-color: ${theme.colors.background};
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;